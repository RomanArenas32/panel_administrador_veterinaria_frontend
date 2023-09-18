import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const Header = () => {

  const { cerrarSesion, auth } = useAuth();
  const { nombre } = auth;


  return (
    <header className="shadow-2xl ">
      <div className="container m-auto text-center font-bold bg-[--color6] text-[--color5] text-2xl p-4">
        <h1>Bienvenido {nombre}.</h1>
        <p>Comienza a administrar tus pacientes</p>
      </div>
      <div className="flex justify-between p-5 flex-col md:flex-row sm:items-center gap-2">
        <nav className="bg-[--color2] text-[--color4] font-bold text-xl flex gap-5 p-5  uppercase">
          <Link to="/admin">Pacientes</Link>
          <Link to="/admin/perfil">Perfil</Link>

        </nav>
        <button
          className="bg-[--color3] hover:bg-[--color6]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase max-w-xs"
          type="button"
          onClick={cerrarSesion}
        >
          Cerrar sesion
        </button>
      </div>

    </header>
  )
}
