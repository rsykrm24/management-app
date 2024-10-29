export default function Navbar(props) {
  return(
    <div className="p-3">
      <h1 className="text-2xl font-bold truncate">Hello, {props.user}</h1>
    </div>
    )
}