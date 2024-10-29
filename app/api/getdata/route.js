import { NextRequest, NextResponse } from "next/server"
import supabase from "../../libs/supabase.js"

export async function GET(req, res) {
  const {data} = await supabase.from("management").select()
  return NextResponse.json({status:200,data:data,message:"Data berhasil didapatkan"},{status:200})
}