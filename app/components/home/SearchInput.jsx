export default function SearchInput(props) {
  return(
    <form className="border-2 rounded border-black flex py-1 px-2">
      <input type="text" className="w-full outline-0" value={props.inputValue} onChange={props.inputChange}/>
    </form>
    )
}