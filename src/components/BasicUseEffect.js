import React, {useState, useEffect} from "react"

const BasicUseEffect = () => {
	
	const [count, setCount] = useState(0)
	const [item, setItem] = useState("")
	
	
	useEffect(() => {
		console.log("aaaaaa")
	},[count])
	
	return (
		<React.Fragment>
			<button onClick={() => setCount(prevCount=>prevCount+1)}>Click{count}</button>
			<input type="text" value={item} onChange={evt=>setItem(evt.target.value)}/>
		</React.Fragment>
	)
}

export default BasicUseEffect;