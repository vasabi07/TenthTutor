from fastapi import FastAPI,UploadFile,File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pymupdf
import os
from utils.retriever import index_to_vector_db,make_retreiver
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

load_dotenv()

llm = ChatOpenAI(model="gpt-4o-mini")

class TextInput(BaseModel):
    text: str
    user_id: str
    subject: str

class RetrieverInput(BaseModel):
    user_id: str
    subject: str
    question: str
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
    text = request.text
    #connect the rag agent here
    result = index_to_vector_db(request)
    print(result)
    return {"message": "document has been succesfully processed "}
    
@app.post("/rag/retriever")
def retriever(request: RetrieverInput):
    retriever = make_retreiver(user_id=request.user_id,subject=request.subject)
    docs = retriever.invoke(request.question)
    system_prompt = f"""
    you are a answering assistant for students. based on the question: {request.question},
    and the retrieved documents:{docs}. formulate an answer only based on the documents provided to you.

"""
    result = llm.invoke(system_prompt)
    print(result.content)
    return result.content
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)
    


