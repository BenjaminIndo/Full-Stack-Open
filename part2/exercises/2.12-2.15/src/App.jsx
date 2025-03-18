import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
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
    personService
      .getAll()
      .then(initialPersons=>{
        setPersons(initialPersons)
      })
  }, [])
  //console.log('render', persons.length, 'persons')

  const deletePerson = (id) =>{
    const person = persons.find(p=>p.id===id)
    if(window.confirm(`Delete ${person.name} ?`)){
    personService
      .elim(id=id)
      .then(setPersons(persons.filter(p=>p!==person))
      )
    //console.log(`the person with the id: ${id} need to be deleted`)
    }
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
      personService
        .create(personObject)
        .then(returnedPerson=>{
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
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
        <Persons persons={persons} filt={filt} deletePerson={deletePerson}/>
    </div>
  )
}

export default App