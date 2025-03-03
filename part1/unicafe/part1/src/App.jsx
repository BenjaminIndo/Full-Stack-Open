import { useState } from 'react'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const addGood = () =>{
    setGood(good+1)
    setAll(all+1)
    const newGood= good+1
    console.log('Added one to Good, the value now is ', newGood)
  }
  const addNeutral = () =>{
    setNeutral(neutral+1)
    setAll(all+1)
    const newNeutral = neutral +1
    console.log('Added one neutral, the value now is ', newNeutral)
  }
  const addBad = () =>{
    setBad(bad+1)
    setAll(all+1)
    const newBad = bad+1
    console.log('Added one bad, the value now is ', newBad)
  }

  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addGood} text = "good"/>
      <Button handleClick={addNeutral} text = "neutral"/>
      <Button handleClick={addBad} text = "bad"/>
      <h1>statistics</h1>

      <p>good , {good}</p>
      <p>neutral , {neutral}</p>
      <p>bad , {bad}</p>
    </div>
  )
}

export default App