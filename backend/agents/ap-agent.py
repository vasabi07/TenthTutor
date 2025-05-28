"""
an answerpaper will be submitted. reaches the planner node...we collect qp from
the qpid in submitted ap. then get questions list and equate them with each answer using the position
send it the answer correction node
we run a loop in answercorrection node..and pass each question and answer. we need to get the retrived docs for each question as well.
ask it to evaluate and fill required fields for each question.
we append it to a list and then finally add it to answers list with all the 
mark       Float?
  llmRemark  String?
  strengths  String?
  weaknesses String? details for each question 
then pass to the generator node which calculates total writes overall ap remark 
then send it to db 
with another httpx req going to backend where we can form a Answerpaper with questions and answers with mark remark details as pdf in nextjs api route.

"""
from pydantic import BaseModel,Field
from typing import Optional
from langgraph.graph import MessagesState,StateGraph,END
from utils.retriever import make_retreiver
from utils.llm import llm
from typing import List
from langchain_core.messages import HumanMessage,AIMessage
from typing import TypedDict

class Answer(BaseModel):
    id:str
    text: str 
    position: int 
    questionId: str
    question: Optional[str]
    mark: Optional[float] 
    llmRemark: Optional[str] 
    strengths: Optional[str] 
    weaknesses: Optional[str] 
    answerpaperId: str 

class State(MessagesState):
    id: str
    answers: List[Answer]
    userId: str
    topicId: str
    subtopicId: Optional[str] = None
    questionpaperId: str
    finalscore: Optional[float]
    retreived_docs: Optional[str]
    overall_feedback: Optional[str]
    questions: Optional[List[str]]

def planner_node(state:State):
    """
    get the questions through a db call using the qpId from state
    and get the all the questions from the qpId.
    we match the question and answer with the questionId in each question with the answer
    create a draft.
    put the questions in state["questions"]

    """
def retriever_node(state:State):
    """
    retrieve all the docs pointing to the topic and optionally subtopic
    put them in retrieved docs in state["retrieved_docs"]
    """
    
def grading_node(state:State):
    """
    we populate a List[Answer] with questions to their answers and then attach the docs with it
    ask the llm to grade each question with its answer by looking at the docs and fill the optional fields 
    for each Answer class and return in the same List[Answer] object
    also give a general feedback and overall score
    put these fields in state
    """
def generator_node(state:State):
    """
    update the updated Answerpaper using a db call. 
    Also send a httpx to the nextjs api endpoint to create a finished pdf.
    send the final score, feedback back to the user in chat
    """

workflow = StateGraph(State)

workflow.add_node("planner_node",planner_node)
workflow.add_node("retriever_node",retriever_node)
workflow.add_node("grading_node",grading_node)
workflow.add_node("generator_node",generator_node)
workflow.add_edge("planner_node","retriever_node")
workflow.add_edge("retriever_node","grading_node")
workflow.add_edge("grading_node","generator_node")
workflow.add_edge("generator_node",END)
workflow.set_entry_point("planner_node")

graph = workflow.compile()
    

