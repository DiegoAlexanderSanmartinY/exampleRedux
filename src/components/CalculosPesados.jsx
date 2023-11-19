import { useMemo } from "react";
import { useState } from "react";






export const CalculosPesados = () => {

    const getCalculo = (listaNumeros) => useMemo( () => {
        console.log('calculando');
        return listaNumeros.reduce( (a,b) => a*b, 1)
    }, [listaNumeros])


    const addNumber = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])
    }

    const [listaNumeros, setListaNumeros] = useState([1,2,3,4,5,8,9,10,11,12,13])
    const [show, setShow] = useState(true)

  return (
    <>
        <h2>Calculo: </h2>
        <p>{getCalculo(listaNumeros)}</p>
        <button className="btn btn-primary" onClick={() => setShow(!show) }>{ show ? 'Show' : 'Hide' }</button>
        <button className="btn btn-primary" onClick={() => addNumber()}>Add Number</button>
    </>
  )
}
