"""
greets user and asks how may i help you today?
takes user input like "how was my performance in my last three science tests? how should i improve"
planner node takes this input...strip and find the "topic" from query and no of tests...
write a draft explaning the steps like query the topic_id...then find {3} qps by joining qp_id topic_id and created_at time (desc)
pass it to the sql-agent which should write queries on its own because the question can be anything. execute it and get 3 APs(in this example)
send this to a advice_generation node which creates a response with these details...and send it back to the user. 

"""

from pydantic import BaseModel,Field
from typing import Optional
from langgraph.graph import MessagesState,StateGraph,END
from utils.retriever import make_retreiver
from utils.llm import llm
from typing import List
from langchain_core.messages import HumanMessage,AIMessage
from typing import TypedDict

class Plan(TypedDict):
    intent: str          
    reformulated: str    
    topic: str | None
    n_tests: int | None

class State(MessagesState):
    userId: str
    question:str
    raw_question: str
    topic: Optional[str]
    sql_query_result: Optional[str]
    intent: str | None = None
    n_tests: int | None = None



def planner_node(state: State) -> State:
    prompt = f"""
You are a planning agent.  
Input question: {state.raw_question}

Return a JSON with:
- intent: "needs_sql" if DB lookup is required, else "chat_only"
- reformulated: a clearer version of the question (for the SQL agent)
- topic (if you can detect one, else null)
- n_tests (how many recent tests to fetch, else null)
"""
    plan: Plan = llm.with_structured_output(Plan).invoke(prompt)  # type: ignore
    state.intent = plan["intent"]
    state.topic = plan["topic"]
    state.n_tests = plan["n_tests"]
    state.raw_question = plan["reformulated"]
    return state
def sql_node(state:State):
    #call the sql agent here and provide userId, question.
    #get the output and save it in state["sql_query_result"]
    #save this to the messages as well for future question's context
    return state
def answering_node(state:State):
    #this node will be a conditional edge node where planner can send to sql agent only if needed
    #in followup questions we usually wont need sql queries to be done. 
    #will have all the previous context through messages and still can offer good advice
    #save this to the messages as well for future question's context
    response = llm.invoke(state["messages"])
    return state

def advisor_node(state: State) -> State:
    advice_prompt = f"""
You are a mentor. 
Question: {state.raw_question}

Data rows (JSON): {state.sql_result}

Topic: {state.topic or "general"}

Give the student:
• A concise performance summary  
• Two strengths and two weaknesses  
• Two concrete action steps to improve  
• End with: "How else can I help?"
"""
    answer = llm.invoke(advice_prompt).content
    state.messages = [AIMessage(content=answer)]
    return state

workflow = StateGraph(State)
workflow.add_node("planner_node",planner_node)
workflow.add_node("sql_node",sql_node)
workflow.add_node("answer_node",answering_node)
workflow.add_node("advisor_node",advisor_node)

workflow.add_conditional_edges("planner_node",lambda s:  "sql_node" if s.intent== "needs_sql" else "advisor")
workflow.add_edge("sql_node","advisor_node")
workflow.add_edge("advisor_node",END)
workflow.add_edge("answer_node",END)
workflow.set_entry_point("planner_node")

graph = workflow.compile()
