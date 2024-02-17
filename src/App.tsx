import { useState } from 'react'
import LiabilitiesVsPlan from './pages/LiabilitiesVsPlan'

import './App.css'


function App () {
  const [ count, setCount ] = useState( 0 )

  return (
    <>
      <LiabilitiesVsPlan />
    </>
  )
}

export default App
