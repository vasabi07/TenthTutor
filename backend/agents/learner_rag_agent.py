
from pydantic import BaseModel, Field
from langgraph.graph import MessagesState,StateGraph,END
from utils.retriever import make_retriever
from utils.llm import llm
from typing import List,Optional
from langchain_core.messages import HumanMessage,AIMessage
from langchain_core.documents import Document 
class Validator(BaseModel):
    validator_decision: str | None = None
    validator_remarks: str | None = None 

class State(MessagesState):
    userId: str
    user_query: str
    retrieved_docs: List[Document] = Field(default_factory=list)
    planner_prompt: str | None = None
    answer: str | None = None
    validator_output: Validator = Field(default_factory=Validator)
    topic_id: str | None = None
    loop: int = 0
    

#planner node
def planner_node(state:State)-> State:

    planner_prompt = f"""
    You are a helpful assistant that helps the user to learn from the RAG retriever.
    This is the user query: {state.user_query}
    optionally, you can also provide a topic id for the user to learn from. {state.topic_id}
"""
    state.planner_prompt = planner_prompt
    return state

#retrieval node
def retrieval_node(state:State)-> State:
  
    retriever = make_retriever(state.userId,state.topic_id)
    docs = retriever.invoke(state.user_query)
    state.retrieved_docs = docs
    return state
#answer node
def answer_node(state:State):
   
    if state.validator_output.validator_decision == "Rejected" and state.loop <=3:
        system_prompt = f"""You are a helpful learning assistant. There are remarks to your previous answer: {state.answer}
For these Documents: {"\n".join(d.page_content for d in state.retrieved_docs)}
User query: {state.user_query}
Remark: {state.validator_output.validator_remarks}
Consider the remark and create an appropriate answer"""
        answer = llm.invoke(system_prompt)
        state.answer = answer
        state.loop = state.loop + 1    
    else:
        system_prompt = f"""
        You are a helpful learning assistant. From the following retrieved documents, answer the user query.
        Documents: {"\n".join(d.page_content for d in state.retrieved_docs)}
        user query: {state.user_query}
        """
        answer = llm.invoke(system_prompt)
        state.answer = answer
    return state    

#answer node
def validator_node(state:State):
  
    system_prompt = f"""
You are a validator agent. 
Here is the initial user query: {state.user_query}
Here is the answer provided by the answering agent: {state.answer}
If you believe the answer is good, reply with "answer" else reply with "Rejected"
Do not add anything else. Reply with only either of those words.
"""
    state.validator_output.validator_decision = llm.invoke(system_prompt)
    return state

#graph
workflow = StateGraph(State)

workflow.add_node("planner",planner_node)
workflow.add_node("retrieval",retrieval_node)
workflow.add_node("answer",answer_node)
workflow.add_node("validator",validator_node)

workflow.add_edge("planner","retrieval")
workflow.add_edge("retrieval","answer")
workflow.add_edge("answer","validator")
workflow.add_conditional_edges("validator",lambda s:  "answer" if s.validator_output.validator_decision== "Rejected" and s.loop < 3 else END)

workflow.set_entry_point("planner")

rag_graph = workflow.compile()