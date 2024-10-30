import Link from "next/link"

export default function List(props) {
  return (
    <Link href={props.link} className={`flex items-center gap-3 border-2 border-black rounded p-3 ${props.bg}`}>
      <div>
        <p>{props.tanggal}</p>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </Link>
    )
}