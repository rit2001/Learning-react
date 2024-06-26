import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Ritwik",
    Age:22
  }

  let newArr=[1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-amber-950 p-4 rounded-xl mb-4'>TailWind Test</h1>
      <Card  username="Ritwik" />
      <Card  username="Eagle" />
      <Card  username="Atlas" />
      
      
    </>
  )
}

export default App
