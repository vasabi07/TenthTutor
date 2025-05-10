"""
create a function that gets the text through /rag endpoint.
use userId, subject as tags 
use embeddings...create chunks and save it in the vector database 

"""
import os

os.makedirs("db/chroma", exist_ok=True)
from pydantic import BaseModel
from langchain_openai import ChatOpenAI
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain.schema import Document
from dotenv import load_dotenv
load_dotenv()
llm = ChatOpenAI(model="gpt-4o")
text_splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(chunk_size=1000,chunk_overlap=200)
embeddings = OpenAIEmbeddings()
vector_db = Chroma(
    embedding_function=embeddings,
    persist_directory="db/chroma",
    collection_name="user_docs"
)

class TextInput(BaseModel):
    text: str
    user_id: str
    subject: str

def index_to_vector_db(request: TextInput):
    try:
        # doc = Document(page_content=request.text,metadata={"user_id": request.user_id, "subject": request.subject})
        raw_chunks = text_splitter.split_text(request.text)
        print(raw_chunks)
        docs = [
            Document(
                page_content=chunk,
                metadata={
                    "user_id": request.user_id,
                    "subject": request.subject,
                },
            )
            for chunk in raw_chunks
        ]
        vector_db.add_documents(documents=docs)
        print("after storing in db")
        return {"message": "Document has been succesfully stored!"}
    except Exception as e:
        return {
            "message": "Error in saving document in vector store",
            "error": str(e),
        }

def make_retreiver(user_id:str,subject:str):
    combined = {
        "$and": [
            {"user_id": user_id},
            {"subject": subject},
        ]
    }
    return vector_db.as_retriever(search_type="mmr",search_kwargs= {"k": 3, "filter":combined })





