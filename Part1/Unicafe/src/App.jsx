import { useState } from 'react'

const StatisticLine  = (props) => {
  return(
    // <p>{props.text} {props.value}</p>
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = (props) => {
  if(props.all == 0){
    return <p>No feedback given</p>
  }
  return(
    <div>
      <StatisticLine  text = "good" value = {props.good}/>
      <StatisticLine  text = "neutral" value = {props.neutral}/>
      <StatisticLine  text = "bad" value = {props.bad}/>
      <StatisticLine  text = "all" value = {props.all}/>
      <StatisticLine  text = "average" value = {(props.good-props.bad)/props.all}/>
      <StatisticLine  text = "positive" value = {(props.good*100/props.all).toString() + " %"}/>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text={"good"}/>
      <Button handleClick={()=>setNeutral(neutral+1)} text={"neutral"}/>
      <Button handleClick={()=>setBad(bad+1)} text={"bad"}/>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all}/>
      
    </div>
  )
}

export default App