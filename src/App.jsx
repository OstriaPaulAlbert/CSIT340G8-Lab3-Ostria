const Header = (props) => {
  return <h1>{props.course.name}</h1>
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
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units{' '}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <p>
      {props.fullName} - {props.courseCode} - {props.section}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Industry Elective',
    parts: [
      {
        name: 'Data Analytics',
        exercises: 3
      },
      {
        name: 'Project Management',
        exercises: 3
      },
      {
        name: 'Information Management 2',
        exercises: 3
      }
    ]
  }

  const fullName = 'Paul Albert L. Ostria'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App