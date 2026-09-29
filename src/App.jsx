const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units{' '}
      {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </p>
  )
}

const App = () => {
  const course = 'Industry Elective'
  const part1 = {
    name: 'Data Analytics',
    exercises: 3
  }
  const part2 = {
    name: 'Project Management',
    exercises: 3
  }
  const part3 = {
    name: 'Information Management 2',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App