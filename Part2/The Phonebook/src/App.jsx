import { useState } from 'react'

const Filter = ({filterNumbers}) => {
  return <div>filter shown with<input onChange={filterNumbers}/></div>
}
const PersonForm = ({addNumber,changenewName,changenewNumber}) => {
  return(
    <form onSubmit={addNumber}>
      <div>name: <input onChange={changenewName}/></div>
      <div>number: <input onChange={changenewNumber}/></div>
      <div><button type="submit">add</button></div>
    </form>
  )
}
const Persons  = ({Listofpersons}) => {
  return (Listofpersons.map(x => <PersonInfo person={x}  key={x.name}/>))
}
const PersonInfo  = ({person}) => {
  return <p>{person.name} {person.number}</p>
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  let PersonsToShow = persons.filter(x=> x.name.toLowerCase().includes(filter.toLowerCase()));

  console.log(persons);
  console.log(persons.some((x)=> x.name === 'ArtoHellas',false));

  const addNumber = (event) =>{
    event.preventDefault();
    if (persons.some((x)=> x.name === newName,false)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat({name : newName, number:newNumber}))
    }
  }

  const changenewName=(event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }
  const changenewNumber=(event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }
  const filterNumbers=(event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filterNumbers={filterNumbers}/>
      <h3>add a new</h3>
        <PersonForm addNumber={addNumber} changenewName={changenewName} changenewNumber={changenewNumber}/>
      <h3>Numbers</h3>
        <Persons Listofpersons={PersonsToShow}/>
    </div>
  )
}

export default App