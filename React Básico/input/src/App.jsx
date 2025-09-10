import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState('')

  return (
    <>
      <div className='body'>
        <h1>input</h1>
        <div className='container'>
          <input className='textInput' type="text"/>
          <div className='square'>
            <p>a</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
