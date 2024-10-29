export default function Input(props) {
  return(
    <form onSubmit={props.submit} className="text-black h-4/5 w-full flex flex-col justify-evenly">
      <input type="text" className={`outline-0 border-2 border-black px-2 py-1 rounded w-full`} placeholder="Title" value={props.title} onChange={props.changeTitle}/>
      <textarea className={`outline-0 border-2 border-black px-2 py-1 rounded w-full h-2/5`} placeholder="List" value={props.text} onChange={props.changeText}/>
      <button className="bg-black font-bold text-white rounded w-full py-1">Submit</button>
    </form>
    )
}