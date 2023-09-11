import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../hooks"

export const AdminLayout = () => {

  const { auth, cargando } = useAuth()
  console.log(auth)
    if(cargando) return 'cargando'
    return (
       <>
      
          {
            auth ? <Outlet /> : < Navigate to="/" />
          }
      </>
    )
     
}
