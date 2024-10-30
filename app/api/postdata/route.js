import { NextRequest, NextResponse } from "next/server"
import supabase from "../../libs/supabase.js"

export async function POST(req, res) {
  let dataList = await req.json()
  const insertData = await supabase.from("management").insert({
    list:dataList.list,
    finish:dataList.finish,
    title:dataList.title, 
    email:dataList.email
  })
  return NextResponse.json({status:200,message:"Data berhasil dikirim"},{status:200})
}