import './App.css'
import React, {useReducer} from 'react'
// import Basic2 from "./components/Basic2"
// import BasicUseEffect from "./components/BasicUseEffect"
// import TimerContainer from "./components/TimerContainer"
// import ApiFetch from "./components/ApiFetch"
import AppContext from "./contexts/AppContext"
// import B from "./components/B"
import CompB from "./components/CompB"
import BasicReducer from "./components/BasicReducer"

const initialState = 0
const reducer = (currentState, action) => {
	switch(action) {
		case "add_1":
			return currentState + 1
		case "multiple_3":
			return currentState * 3
		case "reset":
			return initialState
		default:
			return currentState
	}
}

function App() {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch}}>
			<div className="App">
				<header className="App-header">
					Count{count}
					<CompB/>
				</header>
			</div>
		</AppContext.Provider>
	);
}

export default App;
