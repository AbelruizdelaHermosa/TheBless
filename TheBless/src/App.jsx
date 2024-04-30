import { useState } from 'react'
import bannerThebless from '../public/CartelTHEBLESS.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>THEBLESS</h1>
        <a href="https://instagram.com/bythebless" target="_blank" >
          <img src={bannerThebless} alt="logo" width="80%" height="50%"/>
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click THEBLESS logos to learn more
      </p>
    </>
  )
}

export default App
