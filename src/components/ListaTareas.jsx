import { useReducer } from "react"
import { useForm } from "../hooks/useForm"



const initialState = [{
    id: 1,
    tarea: 'explicar',
    finalizada: false
}]


const tareaReducer = ( state = initialState, action = {} ) => {
    switch (action.type) {
        case '[ TAREAS ] Agregar Tarea':
            return [ ...state, action.payload ]
        case '[ TAREAS ] Finalizar Tarea':   
            return state.map( tarea => {
                if(tarea.id === action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                }
                return tarea
            }) 
        case '[ TAREAS ] Eliminar Tarea':
            return state.filter( tarea => tarea.id !== action.payload) 
        case '[ TAREAS ] Borrar Tareas':
            console.log('delete')
        return state = [ ]
        default:
            state;
    }

}

export const ListaTareas = () => {

//   const tarea = null
  let { tarea1, onInputChange, formState } = useForm({tarea: ''})
  console.log('tarea1', tarea1)

  const agregarTareaForm = (e) => {
    e.preventDefault();
    if(formState.tarea === '') return
    console.log(formState)
    const tarea = {
        id: new Date().getTime(),
        tarea: formState.tarea,
        finalizada: false,
    }
    const action = {
        type: '[ TAREAS ] Agregar Tarea',
        payload: tarea
    }
    dispatch(action)
    console.log('tarea2', tarea)   
    
 }

 const endTask = ({id}) => {
    
    const action = {
        type: '[ TAREAS ] Finalizar Tarea',
        payload: id
    }

    dispatch(action)
 }

 const eliminarTarea = ( { id } ) => {
    const action = {
        type: '[ TAREAS ] Eliminar Tarea',
        payload: id
    }

    dispatch(action)
 }

 const borrarTodo = () => {
    const action = {
        type: '[ TAREAS ] Borrar Tareas',
        payload: ''
    }
    console.log('borrar')
    dispatch(action)
 }
  const [stateTask, dispatch] = useReducer(tareaReducer, initialState)
  console.log(stateTask)

  return (
    <>
        <form onSubmit={agregarTareaForm}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tarea</label>
                <input 
                    value={tarea1}
                    onChange={onInputChange}
                    type="text" 
                    className="form-control"  
                    name="tarea" 
                    placeholder="Enter tarea" 
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type='button' className="btn btn-danger" onClick={borrarTodo}>Clear all</button>
        </form>
        <hr></hr>
        <ul>
            {stateTask.map( (task) => { 
            return (
                <li key={task.id} className="list-group-item d-flex justify-content-between">
                    <span>{task.tarea}</span>
                    <div>
                        <input 
                            type="checkbox"
                            value={task.finalizada}
                            onChange={() => endTask(task)}
                        />
                        <button 
                            className="btn btn-danger"
                            onClick={() => eliminarTarea(task)}
                        >❌
                        </button>
                    </div>
                </li>)
            })}
        </ul>
    </>
  )
}
