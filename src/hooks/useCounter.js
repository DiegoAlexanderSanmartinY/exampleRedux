import { useState } from "react"


export const useCounter = (initialValue = 0) => {
    
    const [counter, setCounter] = useState( initialValue )

    const inc = ( valor = 1 ) => {
        setCounter( counter + valor )
    }
    const dec = ( valor = 1, negativo = true) => {
        if( !negativo && counter - valor < 0 ) {
            setCounter( 0 )
            return
        } 
        setCounter( counter - valor )
    }

    const reset = () => {
        setCounter( initialValue )
    }



  return {
    counter,
    inc,
    dec,
    reset
  }
}

