import { NextResponse } from "next/server";
import supabase from "../../libs/supabase.js";

export async function POST(req) {
  try {
    const user = await req.json(); // Mengambil data dari request body
    console.log("User data:", user); // Log untuk memastikan data user terbaca

    // Proses delete data
    const { data, error } = await supabase
      .from("management")
      .delete()
      .eq("id", user.id);

    if (error) {
      console.error("Supabase Error:", error.message); // Log error dari Supabase
      return NextResponse.json({ status: 500, message: "Gagal menghapus data", error: error.message });
    }

    return NextResponse.json({ status: 200, message: "Data berhasil dihapus" });
  } catch (error) {
    console.error("Server Error:", error); // Log jika terjadi error lain
    return NextResponse.json({ status: 500, message: "Terjadi kesalahan server", error: error.message });
  }
}