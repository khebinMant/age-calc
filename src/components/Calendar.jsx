import { useState } from "react"

export const Calendar = () => {

  const [currentDate, setCurrentDate] = useState()

  const handleDateChange = (e)=>{
    setCurrentDate(e.target.value)
  }

  const calcAge = () =>{

  }

  return (
    <>
      <h3>Ingrese su fecha de nacimiento: </h3>
      <div className="calendar-content">
          <input type="date" name="fecha" onChange={handleDateChange}/>
          <button>Calcular</button>
      </div>
      <p>{currentDate}</p>

    </>
  )
}
