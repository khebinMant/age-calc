import { Results } from "../components/Results"
import { useAgeCalc } from "../hooks/useAgeCalc"

export const Calendar = () => {

  const { birthDate, years , months , days , handleDateChange , calcAge} = useAgeCalc()


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
