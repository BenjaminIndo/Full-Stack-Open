const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  let part1=props.parts[0]
  let part2=props.parts[1]
  let part3=props.parts[2]
  return(
    <div>
      <Part part={part1.name} exercises={part1.exercises}/>
      <Part part={part2.name} exercises={part2.exercises}/>
      <Part part={part3.name} exercises={part3.exercises}/>
    </div>
  )
}
const Total = (props) => {
  let part1=props.parts[0]
  let part2=props.parts[1]
  let part3=props.parts[2]
  return(
    <p>
      Number of exercises {part1.exercises+part2.exercises+part3.exercises}
    </p>
  )
}
const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default App

