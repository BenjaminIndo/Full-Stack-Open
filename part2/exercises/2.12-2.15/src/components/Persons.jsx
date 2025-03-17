import Person from './Person'
const Persons = ({persons, filt})=>{
  return(
    <ul>
    {filt === '' ? (
      persons.map((person, i) => (
        <Person person={person} key={person.name} />
      ))
    ) : persons.filter((person)=>person.name.toLowerCase().includes(filt.toLowerCase())).map((person, i) =>(<Person person={person} key={person.name}/>))
    }
    
  </ul>
  )

}
export default Persons