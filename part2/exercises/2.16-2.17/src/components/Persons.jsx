import Person from './Person'
const Persons = ({persons, filt, deletePerson})=>{
  return(
    <ul>
    {filt === '' ? (
      persons.map((person) => (
        <Person person={person} key={person.id} deletePerson={()=>deletePerson(person.id)}/>
      ))
    ) : persons.filter((person)=>person.name.toLowerCase().includes(filt.toLowerCase())).map((person) =>(<Person person={person} key={person.id}/>))
    }
    
  </ul>
  )

}


export default Persons