from fastapi import FastAPI,UploadFile,File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pymupdf
import os
from utils.retriever import index_to_vector_db
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from agents.learner_rag_agent import rag_graph
load_dotenv()

llm = ChatOpenAI(model="gpt-4o-mini")

class TextInput(BaseModel):
    text: str
    user_id: str
    subject: str

class RetrieverInput(BaseModel):
    user_id: str
    question: str
    topic_id: str | None = None 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/uploaddoc")
async def upload_doc(file: UploadFile = File(...)):
    contents = await file.read()
    with open("temp.pdf","wb") as f:
        f.write(contents)
    
    doc = pymupdf.open("temp.pdf")
    text = "\n".join([page.get_text() for page in doc])
    if os.path.exists("temp.pdf"):
        os.remove("temp.pdf")
    print(text)
    return {"text": text}

@app.post("/rag")
def rag_setup(request: TextInput):
    result = index_to_vector_db(request)
    print(result)
    return {"message": "document has been succesfully processed "}



@app.post("/rag/retriever")
def retriever(request: RetrieverInput):
    result_state = rag_graph.invoke({
        "userId": request.user_id,
        "user_query": request.question,
        "topic_id": request.topic_id,
    })
    return {
        "answer": result_state.answer,
        "decision": result_state.validator_output.validator_decision,
        "remarks": result_state.validator_output.validator_remarks,
    }  
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)
    


