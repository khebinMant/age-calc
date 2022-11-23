import { useEffect, useState } from "react"
import { Results } from "../components/Results"

export const Calendar = () => {

  const [birthDate, setBirthDate] = useState("")
  const [years, setYears] = useState()
  const [months, setMonths] = useState()
  const [days, setDays] = useState()

  
  const handleDateChange = (e)=>{
    setBirthDate(e.target.value)
  }

  const calcAge = () =>{
    let date =  new Date(birthDate)
    let currentDate = new Date()
    setYears(currentDate.getFullYear() - date.getFullYear())
    setMonths(currentDate.getMonth() - date.getMonth() )
    setDays(currentDate.getDate() - date.getDate())
  } 

  return (
    <>
      <h3>Ingrese su fecha de nacimiento: </h3>
      <div className="calendar-content">
          <input style={{marginRight:'20px'}} type="date" name="fecha" value={birthDate || ''} onChange={handleDateChange}/>
          <button onClick={calcAge} >Calcular</button>
      </div>
      <Results props={{years, months, days}}/>

    </>
  )
}
