import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Main from './components/Main'


const App = () => {
  const [line, setLine] = useState([])
  

  const getData = async() => {
    const { data } = await axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
    setLine(data)
  }

  useEffect(() => { 
    getData() 
    const update = setInterval(()=>{
      getData()
    }, 300000)
    return () => clearInterval(update)
  },[])

  

  return (
    <>
      <Main line={line} />
    </>
  )
}

export default App
