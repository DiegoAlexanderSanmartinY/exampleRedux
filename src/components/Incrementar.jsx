import React from "react"


export const Incrementar = React.memo(function Incrementar({ incPadre }) {

        console.log('me estoy redibujando')
    
      return (
        <>
            <button onClick={ () => incPadre(10) }>Incrementar</button>
        </>
      )
    }

)

// ({ incPadre }) => {

//     console.log('me estoy redibujando')

//   return (
//     <>
//         <button onClick={ () => incPadre(10) }>Incrementar</button>
//     </>
//   )
// }
