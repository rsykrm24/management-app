import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link"

export default function Navbar() {
  return(
    <div className="p-3 flex gap-3 h-1/6 flex items-center">
      <Link href="/home"><ArrowBackIcon/></Link>
      <h1 className="text-2xl font-bold">Input List</h1>
    </div>
    )
}