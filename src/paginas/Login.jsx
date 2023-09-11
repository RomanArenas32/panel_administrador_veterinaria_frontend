import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../hooks'
import { Mensaje } from "../componentes";
import clienteAxios from "../config/axios";

export const Login = () => {

  const { auth } = useAuth();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlerta({ mensaje: 'No puede haber campos vacios', error: true });
      return;
    }
    try {
      const {data} = await clienteAxios.post(`/veterinarios/login`, { email, password });
      localStorage.setItem('token', data.token);
      navigate("/admin")
    } catch (error) {
      console.log(error)
      setAlerta({ mensaje: error.response.data.msg, error: true })
    }
  }

  const { mensaje } = alerta;


  const irAlRegistro = () => {
    navigate('../registrar')
  }

  return (
    <>

      <form className="bg-[--color2] shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 text-[--color5]">
        <h2 className="font-bold text-3xl text-center mb-5">Inicia sesion para administrar tus pacientes</h2>
        <hr className="m-2" />
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-[--color6]"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline text-[--color6]"
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="../olvide-password"><p className="underline text-right">Olvidaste tu contraseña?</p></Link>

        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-auto gap-9">
            <button
              className="bg-[--color3] hover:bg-[--color6]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Inicia sesión
            </button>
            <button
              className="bg-[--color3] hover:bg-[--color6]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={irAlRegistro}
            >
              Registrate
            </button>
          </div>

        </div>
        {
          mensaje && <Mensaje alerta={alerta} />
        }
      </form>



    </>
  )
}
