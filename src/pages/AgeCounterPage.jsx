import { Calendar } from "../components/Calendar"
import { Header } from "../components/Header"

export const AgeCounterPage = () => {
  return (
    <>
      <Header />
      <div className="body-content">
        <Calendar />
      </div>
    </>
  )
}
