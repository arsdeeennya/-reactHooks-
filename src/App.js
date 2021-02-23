import './App.css'
import React from 'react'
// import Basic2 from "./components/Basic2"
// import BasicUseEffect from "./components/BasicUseEffect"
// import TimerContainer from "./components/TimerContainer"
import ApiFetch from "./components/ApiFetch"
import AppContext from "./contexts/AppContext"
import B from "./components/B"

function App() {
  return (
	<AppContext.Provider value={"こんちわ"}>
	    <div className="App">
	      <header className="App-header">
	        <B/>
	      </header>
	    </div>
	</AppContext.Provider>
  );
}

export default App;
