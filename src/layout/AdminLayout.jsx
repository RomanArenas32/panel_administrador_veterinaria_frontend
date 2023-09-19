import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../hooks"

export const AdminLayout = () => {

  const { auth, cargando } = useAuth()
  if (cargando) return 'cargando'
  return (
    <>

      {
        auth.email ?
          (
            <main className="container mx-auto shadow-lg">
              <Outlet />
            </main>
          )
          : < Navigate to="/" />
      }
    </>
  )

}
