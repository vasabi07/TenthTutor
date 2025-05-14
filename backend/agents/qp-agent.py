

from pydantic import BaseModel,Field
from typing import Optional
from langgraph.graph import MessagesState,StateGraph,END
from utils.retriever import make_retreiver
from utils.llm import llm
from typing import List
from langchain_core.messages import HumanMessage,AIMessage
class Question(BaseModel):
    text: str
    position: str

class OutputSchema(BaseModel):
    id:str
    userId: str
    topicId: str
    subtopicId: Optional[str]
    questions: list[Question]


class State(MessagesState):
    questions: list[Question]
    userId: str
    topicId: str
    subtopicId: Optional[str] = None
    difficulty: str = "medium"
    noofbigquestions: int
    noofsmallquestions: int
    topicWeights: Optional[str]= None
    planner_draft: Optional[str] = None
    retreived_docs: Optional[str]
    validator_remark: Optional[str]

def planner_node(state: State)-> State:
    draft = f"""
    create a question paper with {state.topicId} and optionally {state.subtopicId}.
    there must be {state.noofbigquestions} big questions and {state.noofsmallquestions} small questions.
    the difficulty should be {state.difficulty}
"""
    state.planner_draft = draft
    return state

def retriever_node(state: State)-> State:
#get retreived docs and strip out the just the strings and put them into field
    return

def question_creator(state: State) -> State:
    if state.validator_remark:
        system_prompt = f"""
You are a question revising agent.
The previous questions you generated were flagged by a validator.

Validator's feedback: {state.validator_remark}

Here is the original plan:
{state.planner_draft}

Here are the previous questions:
{[q.dict() for q in state.questions]}

Now revise the questions based on the feedback. 
Generate {state.noofbigquestions + state.noofsmallquestions} questions. 
Each must have `text` and `position`.
"""
    else:
        system_prompt = f"""
You are a question creating agent.
Based on the following plan:
{state.planner_draft}

And the retrieved documents:
{state.retreived_docs}

Generate {state.noofbigquestions + state.noofsmallquestions} questions.
Each must have a `text` and a `position`.
"""

    llm_with_structure = llm.with_structured_output(List[Question])
    state.questions = llm_with_structure.invoke(system_prompt)
    state.messages = [AIMessage(content="Generated questions successfully.")]
    return state


def validator_node(state: State) -> State:
    system_prompt = f"""
You are a validator agent. 
Here is the initial plan:\n{state[""]}\n
And here is the list of questions:\n{[q.dict() for q in state.questions]}

Check if everything is aligned with the plan. If yes, reply with "Accepted".
If not, reply only with your feedback in the format: "remark: your remark goes here".
Do not add anything else.
"""

    response = llm.invoke(system_prompt).content.strip()

    if response.lower().startswith("accepted"):
        state.validator_remark = None
        state.messages = [AIMessage(content="Validator approved the question paper.")]
    else:
        state.validator_remark = response
        state.messages = [AIMessage(content=response)]

    return state

def generator_node(state: State)-> State:
    #make a db call and save the QP
    #take the returned value from postgres and send it back to fe via fastapi response for fe to display on chat window
    #future_scope: creates a pdf sends it to a new nextjs api endpoint. so that we can save it in a QPs page.
    return


workflow = StateGraph(State)
workflow.add_node("planner",planner_node)
workflow.add_node("retriever",retriever_node)
workflow.add_node("question_creator",question_creator)
workflow.add_node("validator",validator_node)
workflow.add_node("generator",generator_node)

workflow.add_edge("planner","retriever")
workflow.add_edge("retriever","question_creator")
workflow.add_edge("question_creator","validator")
workflow.add_conditional_edges("validator", lambda state: "generator" if state.validator_remark is None else "question_creator" )
workflow.add_edge("generator",END)
workflow.set_entry_point("planner")

graph = workflow.compile()


#planner node
#retriever node
#question creator node-needs a output schema from prisma model
#validator node- checks with original draft from planner node and the final questions
#if everything is okay...generator node will form it the required schema and provide o/p
#if not validator node will send it back to the question creator node with some remarks and it will continue the same path as before.


    