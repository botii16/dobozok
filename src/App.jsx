import { useState } from 'react'
import './App.css'

export const App = () => {

  return (
    <div className='border'>
      Dobozok - App
      <BoxComponent kiindulo={2} hatterSzin='pink' />
      <BoxComponent kiindulo={4} hatterSzin='purple' />
      <BoxComponent kiindulo={6} hatterSzin='lightblue' />
    </div>
      
  )  
}


const BoxComponent = ({ kiindulo, hatterSzin }) => {
  const [getSzamlalo, setSzamlalo] = useState(kiindulo);
  return (
    <div  style={{ width: '200px', height: '200px', backgroundColor: hatterSzin, color: 'black' }} className='p-2 m-5 rounded d-flex text-center justify-content-center align-items-center' onClick={() => setSzamlalo(getSzamlalo + 1)}>
      <h1>{getSzamlalo}</h1>
    </div>
    
  )
}
export default App
