const Filter = ({filt, handleFiltChange})=>{
    return(
      <div>
        Filter shown with: <input value={filt} onChange={handleFiltChange}/>
      </div>
    )
  }
export default Filter