from fastapi import FastAPI,UploadFile,File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pymupdf
import os
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


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)
    


