import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [visibility, setVisibility] = useState(true)

  return (
    <>
      <div className='body'>
          <button onClick={() => {setVisibility(visibility == true ? false : true)}}>
          Alterar visibilidade
        </button>
        <div className='container'>
          { visibility &&
          <div>
            <p className="none">imagine um texto aqui!</p>
          </div>
        }
        </div>
      </div>
    </>
  )
}

export default App
