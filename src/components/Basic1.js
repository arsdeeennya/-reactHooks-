import React from "react"

const Basic1 = (props) => {
	const clickHandler = () =>{
		console.log("クリックしたよ");
	}
	
	return (
		<React.Fragment>
			<button onClick={clickHandler}>ボタン</button>
			{ props.name }
		</React.Fragment>
	)
}

export default Basic1;