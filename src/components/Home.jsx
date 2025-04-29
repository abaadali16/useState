import React, { useState } from 'react'
import './Home.css';

const Home = () => {
  const [count, setCount] = useState(0)
  const [showNum, setShowNum] = useState(true);
  const toggle = () => {
    setShowNum(!showNum)
  }

  // condition ? do this:else (d)

  return (
    <div>

      <button onClick={() => setCount(count + 1)} className='add'>+</button>
      {/* && as if only */}
      {showNum && <p className='count'>{count}</p>}
      <button disabled={count < 1} onClick={() => setCount(count - 1)} className='sub'>-</button><br />
      {/*  ? as if else  */}
      <button onClick={toggle} className='toggle'>{!showNum ? "Show" : "Hide"}</button>
    </div>
  )
}

export default Home;