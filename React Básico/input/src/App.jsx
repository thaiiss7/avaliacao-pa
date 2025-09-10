import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState(document.getElementById(textInput).value)

  return (
    <>
      <div className='body'>
        <h1>input</h1>
        <div className='container'>
          <input id='textInput' type="text"/>
          <div className='square'>
            <p>`${input}`</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
