import { useForm } from "../hooks/useForm";
import { useRef, useEffect } from "react";


export const FormularioComponent = () => {

    const focusRef = useRef()
    console.log(focusRef)

    const initialForm = {
        userName: '',
        email: '',
        password: '',
    }
    
    const { userName, email, password } = useForm

    const { onInputChange, formState } = useForm( initialForm )
   

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }

    useEffect(() => {
      focusRef.current.focus()
    }, [])
    

  return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input ref={focusRef}
                type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Email" 
                value={email} onChange={onInputChange}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">Username</label>
                <input type="userName" className="form-control" name="userName" aria-describedby="udernameHelp" placeholder="userName" 
                value={userName} onChange={onInputChange}/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" placeholder="password" 
                value={password} onChange={onInputChange}/>
            </div>
            
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
