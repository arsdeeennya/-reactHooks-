import React, {useContext} from "react"
import AppContext from "../contexts/AppContext"


const C = () => {
	const value =useContext(AppContext)
	
	return (
		<React.Fragment>
			<h3>C</h3>
			{value}
		</React.Fragment>
	)
}

export default C;