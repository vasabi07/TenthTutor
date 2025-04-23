"use client"
import React, { useState } from 'react'
import axios from "axios"

const Upload = () => {
  const [file, setFile] = useState<File | null>(null)
  const [text, setText] = useState("")

  const HandleUpload = async () => {
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await axios.post("http://127.0.0.1:8000/uploaddoc", formData)
      setText(response.data.text)
    } catch (error) {
      console.log("text has not come from the backend")
    }
  }

  const HandleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/rag", { text })
      console.log("text has been sent")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6 mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">📄 PDF Upload & RAG Trigger</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />

      <button
        onClick={HandleUpload}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Upload PDF
      </button>

      <textarea
  name="processeddoc"
  value={text}
  readOnly
  rows={10}
  className="w-full p-3 border rounded-md text-sm text-gray-700 resize-none overflow-auto max-h-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Extracted text will appear here..."
/>

      <button
        onClick={HandleSubmit}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Send to Agent
      </button>
    </div>
  )
}

export default Upload
