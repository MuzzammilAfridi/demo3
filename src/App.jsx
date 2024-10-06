import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './Components/Nabvar'
import Hero from './Components/Hero'
import Features from './Components/features'
import Form from './Components/Form'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      // <Nabvar/>
      // <Hero/>
      // <Features/>
      // <Form/>


      <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/form" element={<Form />} />
</Routes>
    
  )
}

export default App
