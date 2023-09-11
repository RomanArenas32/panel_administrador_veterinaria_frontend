import { Link } from "react-router-dom"

export const Header = () => {
  return (
<header className="shadow-xl  min-h-screen">
    <div className="container m-auto text-center font-bold bg-[--color6] text-[--color5] text-2xl p-4">
        <h1>Usted posee todos los permisos de edicion.</h1>
        <p>Uselos con responsabilidad</p>
    </div>
<nav>
<Link to="/admin">Pacientes</Link>
<Link to="/perfil">Perfil</Link>

</nav>
</header>
  )
}
