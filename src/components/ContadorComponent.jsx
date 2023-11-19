import { useCounter } from "../hooks/useCounter"


export const ContadorComponent = () => {

    const { counter, dec, inc, reset } = useCounter()

  return (
    <>
        <h1>Contador: { counter }</h1>
        <button className="btn btn-primary" onClick={ () => inc(1)}>+1</button>
        <button className="btn btn-danger" onClick={ () => reset()}>Reset</button>
        <button className="btn btn-primary" onClick={ () => dec(1)}>-1</button>
    </>
  )
}
