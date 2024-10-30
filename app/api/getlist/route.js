import { NextRequest, NextResponse } from "next/server"
import supabase from "../../libs/supabase.js"

export async function POST(req, res) {
  const user = await req.json()
  const {data} = await supabase.from("management").select().eq("id",user.id)
  return NextResponse.json({status:200,data:data,message:"Data berhasil didapatkan"},{status:200})
}