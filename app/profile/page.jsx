import { getServerSession } from "next-auth"
import authOption from "../api/auth/[...nextauth]/authOption.js"
import Link from "next/link"
import Navbar from "../components/profile/Navbar.jsx"
import Profile from "../components/profile/Profile.jsx"

export default async function Page() {
  const { user } = await getServerSession(authOption)
  return(
    <div className="h-screen">
      <Navbar/>
      <div className="bg-white h-5/6 rounded-t-2xl p-3 flex flex-col justify-center">
        <Profile email={user.email} name={user.name} image={user.image}/>
        <div className="flex justify-center">
          <Link href="api/auth/signout" className="text-black border-2 border-black rounded font-bold p-2 flex">Sign out</Link>
        </div>
      </div>
    </div>
    )
}