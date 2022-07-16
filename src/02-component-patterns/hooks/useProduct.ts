import { useEffect, useState } from "react"
import { InitialValues, onChangeArgs, Product } from "../interfaces/interface";

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value=0, initialValues }:useProductsArgs) => {
  
  const [counter, setCounter] = useState<number>( initialValues?.count || value)

  useEffect(() => {
    setCounter(initialValues?.count || value)
  }, [value, initialValues])

  const increaseBy = (value:number) => {
    let newValue = Math.max(counter + value, 0)
    if(initialValues?.maxCount){
      newValue = Math.min(newValue, initialValues.maxCount)     
    }
    setCounter(newValue)
    onChange && onChange({ count:newValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  return { 
    counter,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset
  }
}