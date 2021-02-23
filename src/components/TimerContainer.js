import React, {useState} from "react"
import Timer from "./Timer"


const TimerContainer = () => {
	
	const [display, setDisplay] = useState(true)

	return (
		<React.Fragment>
			<button onClick={()=>setDisplay(!display)}>切り替える</button>
			{display && <Timer/>}
		</React.Fragment>
	)
}

export default TimerContainer;