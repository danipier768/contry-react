import { useState } from 'react'
import './App.scss'
import ApiComponent from './assets/components/ApiComponent/ApiComponent'
import HeadComponent from './assets/components/header/HeadComponent'
import SekeerComponent from './assets/components/sekeer/SekeerComponent'

function App() {
  const [input, SetInput] = useState('')
  const [region, setRegion] = useState()
  const [filre, setFilre] = useState('')

  const seekerInput = (value) => {
    SetInput(value)
  }
  const apiRegion = (valueRegion) =>{
    setRegion(valueRegion)
  }
  const sekkerRegion = (valueFilreg) =>{
    setFilre(valueFilreg)
  }
  return (
    <>
      <HeadComponent/>
      <SekeerComponent 
      updateInput={seekerInput}
      regFil={region}
      updateRegion={sekkerRegion}
      />
      <ApiComponent 
      valueInput={input}
      updateRegion={apiRegion}
      valReg={filre}

      />
    </>
  )
}

export default App
