import React from 'react'

const Main = ({ line }) => {

  return (
    <><div className="logo-container">
      <div className="logo"></div>
      <h1>TRANSPORT FOR LONDON STATUS UPDATES</h1>
    </div>
    <div className="status">
      <p>Status updates every 5 mins</p>
    </div>
    <div className="grid">
      {line.map((lin, i) => {
        return <div className="tflLine" key={i}>
          <h2 id={lin.id}>{lin.name}</h2>
          <h4 id={lin.name}>{lin.lineStatuses[0].statusSeverityDescription}</h4>
        </div>
      })}
    </div></>         
  )



}

export default Main