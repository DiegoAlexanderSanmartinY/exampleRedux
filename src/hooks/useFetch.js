import { useState, useEffect } from "react"

export const useFetch = (url) => {
    
    const [ state, setState ] = useState({
        data: null,
        isLoading: true,
        errors: null
    })
    
    useEffect(() => {
      console.log('aqui toy')
      if(!url) return
      getFetch() 
    }, [url])
    
  
    const getFetch = async() => {
        try {
            const response = await fetch(url)
            const data = await response.json()  
            console.log(data)
            setState({
              data,
              isLoading: false,
              errors: null
            })
            // console.log(state)
        } catch (error) {
            setState({
              data: null,
              isLoading: false,
              errors: error
            })
        }
    }

  
  return {
    ...state
  }
}
