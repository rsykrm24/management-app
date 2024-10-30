"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/list/Navbar.jsx";
import Button from "../../components/list/Button.jsx";
import { useRouter } from "next/navigation";

export default function Page() {
  let [data, setData] = useState({});
  let [checked, setChecked] = useState(false); // Tambahkan state untuk menyimpan status checkbox
  let { id } = useParams();
  let route = useRouter();

  useEffect(() => {
    axios
      .post("/api/getlist", {
        id: id,
      })
      .then((res) => {
        setData(res.data.data[0]);
        setChecked(res.data.data[0].finish); // Set state checked sesuai data finish dari database
      });
  }, [id]);

  function deleteItem() {
    axios
      .post("/api/deletelist", {
        id: id,
      })
      .then(() => route.push("/home"));
  }

  function toggleCheck() {
  const newFinishStatus = !checked;

  axios
    .put("/api/updateCheck", {
      id: id,
      title: data.title,
      list: data.list,
      finish: newFinishStatus,
    })
    .then(() => {
      setChecked(newFinishStatus);
      setData((prevData) => ({ ...prevData, finish: newFinishStatus }));
    })
    .catch(error => console.error("Update failed:", error));
}
  return (
    <div className="h-screen">
      <Navbar id={id} />
      {/* bg white */}
      <div className="p-3 bg-white rounded-t-2xl text-black flex flex-col h-5/6 gap-3">
        <div>
          <button
            onClick={toggleCheck}
            className={`font-bold p-2 rounded ${checked ? "bg-green-500" : "bg-red-600"}`}
          >
            {checked ? "Uncheck" : "Check"} {/* Ubah teks tombol sesuai status */}
          </button>
        </div>
        {/* list */}
        <div className="flex flex-col gap-3">
          <div className="border-2 border-black rounded p-2">
            <h1 className="text-2xl">Date</h1>
            <p>{data?.created_at?.split("T")[0]}</p>
          </div>
          <div className="border-2 border-black rounded p-2">
            <h1 className="text-2xl">Title</h1>
            <p>{data.title}</p>
          </div>
          <div className="border-2 border-black rounded p-2">
            <h1 className="text-2xl">Task</h1>
            <p>{data.list}</p>
          </div>
        </div>
        <Button delete={() => deleteItem()} />
      </div>
    </div>
  );
}