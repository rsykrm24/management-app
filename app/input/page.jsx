"use client"
import { useState, useEffect } from "react"
import Navbar from "../components/input/Navbar.jsx"
import Input from "../components/input/Input.jsx"
import axios from "axios"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Page() {
  let [title, setTitle] = useState("")
  let [text, setText] = useState("")
  let [user, setUser] = useState("")
  let route = useRouter()
  let [borderTitle, setBorderTitle] = useState("border-black")
  let [borderText, setBorderText] = useState("border-black")
  useEffect(() => {
    getSession()
    .then(res => setUser(res.user))
  },[])
  function submit(e) {
    e.preventDefault()
    setBorderText("border-black")
    setBorderTitle("border-black")
    if(text == "") {
      setBorderText("border-red-600")
    }
    if(title == "") {
      setBorderTitle("border-red-600")
    }
    else if(text != "" && title != ""){
      axios.post("/api/postdata",{
        title:title, 
        list:text, 
        email:user.email,
        finish:false
      })
      .then(res => route.push("/home"))
    }
  }
  return(
    <div className="h-screen">
      <Navbar/>
      <div className="bg-white rounded-t-2xl p-3 h-5/6 flex items-center">
        <Input text={text} title={title} changeText={e => setText(e.target.value)} changeTitle={e => setTitle(e.target.value)} submit={submit} borderTitle={borderTitle} borderText={borderText}/>
      </div>
    </div>
    )
}