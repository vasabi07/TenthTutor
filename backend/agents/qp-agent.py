

from pydantic import BaseModel,Field
from typing import Optional

class Question(BaseModel):
    text: str
    position: str

class InputSchema(BaseModel):
    userId: str
    topicId: str
    subtopicId: Optional[str]
    difficulty: str
    noofbigquestions: int
    noofsmallquestions: int
    topicWeights: Optional[str]=Field(description="details on what the questions ratio as per each subtopic")

class OutputSchema(BaseModel):
    id:str
    userId: str
    topicId: str
    subtopicId: Optional[str]
    questions: list[Question]
#planner node
#retriever node
#question creator node-needs a output schema from prisma model
#validator node- checks with original draft from planner node and the final questions
#if everything is okay...generator node will form it the required schema and provide o/p
#if not validator node will send it back to the question creator node with some remarks and it will continue the same path as before.


    