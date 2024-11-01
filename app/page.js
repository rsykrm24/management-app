"use client"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Home() {
  const route = useRouter()
  useEffect(() => {
    getSession()
    .then(res => {
      if(res.user != null) {
        route.push("/home")
      }
      else {
        route.push("/login")
      }
    })
  },[])
  return(
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold">Management</h1>
    </div>
    )
}