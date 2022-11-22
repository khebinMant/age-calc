import { Calendar } from "../components/Calendar"
import { Header } from "../components/Header"
import { Results } from "../components/Results"

export const AgeCounterPage = () => {
  return (
    <>
      <Header />
      <div className="body-content">
        <Calendar />
        <Results />
      </div>
    </>
  )
}
