const Header = (props) => <h1>{props.course}</h1>

const Content = ({parts}) => {
  console.log(parts.map(x => x.id));
  
  return(
    parts.map(x => <Part part={x} key={x.id} />)
  )
}

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({parts}) =>{ 
  const total = parts.reduce((sum,i) => i.exercises+sum,0);

  return <p>total of {total} exercises</p>
}

const Course = ({course})=>{
  return(
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
  )

}

export default Course