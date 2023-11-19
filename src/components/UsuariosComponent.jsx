import { useFetch } from "../hooks/useFetch"


export const UsuariosComponent = () => {
 
  const url = "https://jsonplaceholder.typicode.com/users" 
  const { data, isLoading, errors } = useFetch(url)
  console.log(data)
  

  return (
    <>
      <h1>Lista de usuarios</h1>
      {
        isLoading 
        ? <h4>Cargando...</h4>
        : errors
          ? <p>ha ocurrido un error: { errors }</p>
          : <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">website</th>
                </tr>
              </thead>
              <tbody>
                {data.map(user => {
                  return (
                    <>
                        <tr>
                          <th scope="row">{user.id}</th>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.website}</td>
                        </tr>
                    </>
                  )
                })}
              </tbody>
            </table> 
      }  
    </>
  )
}
