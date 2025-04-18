"use client"
import React, { useState } from 'react'
import axios from "axios"
const Upload = () => {
    const [file,setFile] = useState<File | null>(null)
    const [text,setText] = useState("")
    const HandleUpload = async ()=>{
        if(!file) return
        const formData = new FormData();
        formData.append('file',file)
        const response = await axios.post("http://127.0.0.1:8000/uploaddoc",formData)
        try {
            setText(response.data.text)
        } catch (error) {
            console.log("text has not come from the backend")
        }
    }
    const HandleSubmit =async ()=>{
        try {
            const response = await axios.post("http://localhost:8000/rag",{"text": text})
            console.log("text has been sent")
        } catch (error) {
            
            console.log(error)
        }
    }
  return (
    <div>
        <input type="file" accept='application/pdf' onChange={(e)=> setFile(e.target.files?.[0] || null )}  />
        <button onClick={HandleUpload}>Upload PDF</button>
        <textarea name="processeddoc" value={text} readOnly></textarea>
        <button onClick={HandleSubmit}>Send</button>
    </div>
  )
}

export default Upload