import { useState } from 'react'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const all = props.all
  const average = (good-bad)/all
  const positive = (good/all)*100
  return(
    <div>
    <h1>statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {all}</p>
    <p>average {average}</p>
    <p>positive {positive}%</p>
    </div>
  )
}

const App = () => {
  const addGood = () =>{
    setGood(good+1)
    setAll(all+1)
  }
  const addNeutral = () =>{
    setNeutral(neutral+1)
    setAll(all+1)

  }
  const addBad = () =>{
    setBad(bad+1)
    setAll(all+1)
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
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>


    </div>
  )
}

export default App