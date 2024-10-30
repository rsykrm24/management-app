"use client"
import { useState, useEffect } from "react"
import Navbar from "../components/home/Navbar.jsx"
import SearchInput from "../components/home/SearchInput.jsx"
import List from "../components/home/List.jsx"
import Button from "../components/home/Button.jsx"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function Page() {
  let [input, setInput] = useState("")
  let [user, setUser] = useState("")
  let [data, setData] = useState("")
  const route = useRouter()
  useEffect(() => {
    getSession()
    .then(res => {
      if(res.user == null) {
        route.push("/login")
      }
      setUser(res.user)
      axios.post("/api/getdata",{
        email:res.user.email
      })
      .then(res => setData(res.data.data))
    })
  },[])
  return(
    <div className="h-screen">
      <Navbar user={user.name}/>
      <div className="bg-white rounded-t-2xl p-3 text-black h-10/12">
        <SearchInput inputValue={input} inputChange={e => setInput(e.target.value)}/>
        <div className="mt-4 flex flex-col gap-3">
          {
            (data.length == 0) ? <div></div> : data.reverse().map((data,i) => <List key={i} title={data.title} text={data.list} tanggal={data?.created_at.split("T")[0]} link={`/list/${data.id}`} bg={(data.finish == "true") ? "bg-gray-400" : "bg-red-600"}/>)
          }
        </div>
      </div>
      <Button/>
    </div>
    )
}