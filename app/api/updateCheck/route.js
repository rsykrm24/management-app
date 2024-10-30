import { NextResponse } from "next/server";
import supabase from "../../libs/supabase.js";

export async function PUT(req) {
  try {
    const { id, title, list, finish } = await req.json(); // Mendapatkan data dari request body

    const { data, error } = await supabase
      .from("management") // Pastikan nama tabel benar
      .update({ title, list, finish }) // Update data berdasarkan kolom yang diubah
      .eq("id", id); // Hanya update pada ID yang cocok

    if (error) {
      console.error("Supabase Error:", error.message);
      return NextResponse.json({ status: 500, message: "Gagal mengupdate data" });
    }

    return NextResponse.json({ status: 200, message: "Data berhasil diupdate", data });
  } catch (error) {
    console.error("Server Error:", error.message);
    return NextResponse.json({ status: 500, message: "Terjadi kesalahan server" });
  }
}