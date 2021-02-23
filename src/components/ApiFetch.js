import React, {useState, useEffect} from "react"
import axios from "axios"

const ApiFetch = () => {
	
	const [posts, setPosts] = useState([])
	const [id, setId] = useState(1)
	const [clicked, setClicked] = useState(false)
	
	const handerClicked = () => setClicked(!clicked)
	
	useEffect(() =>{
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then(res =>{
			setPosts(res.data)
		})
		// fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
		// .then(res => res.json())
		// .then(data => {
		// 	setPosts(data)
		// })
	},[clicked])
	
	return (
		<React.Fragment>
			<input type="text" value={id} onChange={evt=>setId(evt.target.value)}/>
			<button type="button" onClick={handerClicked}>Get Post</button>
			{posts.title}
		</React.Fragment>
	)
}

export default ApiFetch;