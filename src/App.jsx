import { useState } from 'react'

import './App.css'
import Container from './Components/Container/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container/>
    </>
  )
}

export default App
