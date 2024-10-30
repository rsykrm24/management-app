import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link"

export default function Button() {
  return(
    <div className="fixed bottom-0 bg-white  w-full flex justify-between shadow-lg shadow-black p-3">
      <Link href="/home" className="bg-black rounded-full flex justify-center items-center aspect-square p-2"><HomeIcon/></Link>
      <Link href="/input" className="bg-black rounded-full flex justify-center items-center aspect-square p-2"><AddIcon/></Link>
      <Link href="/profile" className="bg-black rounded-full flex justify-center items-center aspect-square p-2"><PersonIcon/></Link>
    </div>
    )
}