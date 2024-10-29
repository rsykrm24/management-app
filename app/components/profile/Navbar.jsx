import Link from "next/link"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Navbar() {
  return (
    <div className="flex items-center gap-3 p-3 h-1/6">
      <Link href="/home"><ArrowBackIcon/></Link>
      <h1 className="text-2xl font-bold">Profile</h1>
    </div>
    )
}