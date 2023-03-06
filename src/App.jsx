import React from 'react'
import { useState } from 'react'
import "./App.css"

const App = () => {

  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const Tip = () => {
    return (
      value < 50
        ? value * 0.1
        : value >= 50 && value < 200
          ? value * 0.15
          : value >= 200
            ? value * 0.2
            : null
    )
  }

  return (
    <div className='container' >

      <div className="wrapper">
        <h1>give the right tips with our calculator</h1>
      </div>

      <div className="box">

        <h2>Tip Calculator</h2>

        <div className="value">
          VALUE:  <input onChange={handleChange} type="num" />

        </div>

        <div className="tip">
          TIP:
          <div className="res">
            {Tip()}

          </div>
        </div>

        <div className="total">
          total :

          <div className="res">
            {Tip() + Number(value)}

          </div>

        </div>

      </div>



    </div>
  )
}

export default App