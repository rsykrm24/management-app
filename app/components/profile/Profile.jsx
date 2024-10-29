export default function Profile(props) {
  return(
    <div className="text-black flex flex-col items-center justify-evenly h-2/4">
      <img src={props.image} alt="profile" className="rounded-full"/>
      <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
      </div>
    </div>
    )
}