import { useState } from 'react'
const Person = ({person})=>{
  return <li>{person.name}  {person.number}</li>
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
  const[filt, setNewFilt]=useState('')
  const handleFiltChange=(event)=>{
    //console.log(event.target.change)
    setNewFilt(event.target.value)
  }
  const handlePersonChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if(persons.some(p=>p.name===personObject.name)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
        Filter shown with: <input value={filt} onChange={handleFiltChange}/>

      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handlePersonChange}
          />
        </div>
        <div>
          number:<input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {filt === '' ? (
            persons.map((person, i) => (
              <Person person={person} key={person.name} />
            ))
          ) : persons.filter((person)=>person.name.toLowerCase().includes(filt.toLowerCase())).map((person, i) =>(<Person person={person} key={person.name}/>))
          }
          
        </ul>
    </div>
  )
}

export default App