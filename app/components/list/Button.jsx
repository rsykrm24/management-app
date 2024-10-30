export default function Button(props) {
  return(
    <div className="flex justify-center">
      <button className="bg-red-600 font-bold p-2 rounded text-white" onClick={props.delete}>Delete list</button>
    </div>
    )
}