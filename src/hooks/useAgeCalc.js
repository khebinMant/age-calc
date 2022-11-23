import { useEffect, useState } from "react"

import React from 'react'

export const useAgeCalc = () => {
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
    return{
        birthDate,
        years,
        months,
        days,
        handleDateChange,
        calcAge
    }
}

