import Link from "next/link"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Navbar(props) {
  return(
    <div className="p-2 flex gap-3 items-center h-1/6">
      <Link href="/home"><ArrowBackIcon/></Link>
      <h1 className="text-3xl font-bold">List {props.id}</h1>
    </div>
    )
}