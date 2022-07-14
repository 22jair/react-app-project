import { useState } from "react"


export const useProduct = (defaultValue: number = 0) => {
  
  const [counter, setCounter] = useState(defaultValue)

  const increaseBy = (value:number) => {
    setCounter( prev => Math.max(prev + value, 0) )
  }

  return { counter, increaseBy }
}