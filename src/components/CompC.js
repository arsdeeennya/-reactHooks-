import React, {useContext} from "react"
import AppContext from "../contexts/AppContext"


const CompC = () => {
	const {dispatchProvided} = useContext(AppContext)
	return (
		<React.Fragment>
			<button onClick={()=>dispatchProvided("add_1")}>add_1</button>
			<button onClick={()=>dispatchProvided("multiple_3")}>multiple_3</button>
			<button onClick={()=>dispatchProvided("reset")}>reset</button>
		</React.Fragment>
	)
}

export default CompC;