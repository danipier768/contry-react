import { useState } from 'react'
import './App.scss'
import ApiComponent from './assets/components/ApiComponent/ApiComponent'
import HeadComponent from './assets/components/header/HeadComponent'
import SekeerComponent from './assets/components/sekeer/SekeerComponent'

function App() {
  const [input, SetInput] = useState('')

  const seekerInput = (value) => {
    SetInput(value)
  }
  return (
    <>
      <HeadComponent/>
      <SekeerComponent updateInput={seekerInput}/>
      <ApiComponent valueInput={input}/>
    </>
  )
}

export default App
