"use client"
import { useState, useEffect } from "react"
import Navbar from "../components/input/Navbar.jsx"
import Input from "../components/input/Input.jsx"

export default function Page() {
  let [title, setTitle] = useState("")
  let [text, setText] = useState("")
  function submit(e) {
    e.preventDefault()
    console.log({title, text})
  }
  return(
    <div className="h-screen">
      <Navbar/>
      <div className="bg-white rounded-t-2xl p-3 h-5/6 flex items-center">
        <Input text={text} title={title} changeText={e => setText(e.target.value)} changeTitle={e => setTitle(e.target.value)} submit={submit}/>
      </div>
    </div>
    )
}