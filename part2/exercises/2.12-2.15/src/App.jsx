import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([])
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
  useEffect(()=>{
    //console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response=>{
        //console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  //console.log('render', persons.length, 'persons')

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
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response=>{
          console.log(response)
    })
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filt={filt} handleFiltChange={handleFiltChange}/>
      <h2>Add a new</h2>
        <PersonForm onSubmit={addPerson} nameValue={newName} nameOnChange={handlePersonChange} numberValue={newNumber} numberOnChange={handleNumberChange}/>
      <h2>Numbers</h2>
        <Persons persons={persons} filt={filt}/>
    </div>
  )
}

export default App