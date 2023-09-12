import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)

  return (
    <div className="ball">
      <h1 className="count" onClick={() => { alert("get Lost") }}>{count}</h1>
      <button className='increment-button' onClick={() => { setCount(0) }}>Increment</button>
    </div>
  )
}


export default App;