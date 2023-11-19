
import { useCallback, useState } from 'react'
import { Incrementar } from './Incrementar'

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)

    const incPadre = useCallback(
      (val) => {
        setCounter( (contador) => contador + val )
    }, []
    )

  return (
    <>
        <h1>Contador: { counter }</h1>
        <Incrementar incPadre={ incPadre }/>
    </>
  )
}
