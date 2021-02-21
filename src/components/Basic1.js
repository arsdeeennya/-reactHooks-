import React, {useState} from "react"

const Basic1 = (props) => {
	const [count, setCount] = useState(0)
	
	return (
		<React.Fragment>
			<button onClick={() => setCount(count+1)}>カウント{count}</button>
			{ props.name }
		</React.Fragment>
	)
}

export default Basic1;