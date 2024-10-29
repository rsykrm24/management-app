"use client"
import Link from "next/link"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Page() {
  const route = useRouter()
  useEffect(() => {
    getSession()
    .then(res => {
      if(res.user != null) {
        route.push("/home")
      }
    })
  },[])
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-between h-2/3 w-5/6">
        <h1 className="text-3xl font-bold">Management</h1>
        <Link href="/api/auth/signin" className="border-2 border-white rounded p-2 w-1/2 text-center font-bold">Sign In</Link>
      </div>
    </div>
    )
}