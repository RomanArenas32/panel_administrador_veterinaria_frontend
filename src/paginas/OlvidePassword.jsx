import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import { Mensaje } from '../componentes/Mensaje';
import clienteAxios from '../config/axios';

export const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});
  const navigate = useNavigate();

  const volver = (e) => {
    e.preventDefault();
    navigate(-1, {
      replace: true
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email == "" || email.length < 6) {
      setAlerta({
        mensaje: "El email es obligatorio",
        error: true
      })
      return
    };
    try {
      const {data} = await clienteAxios.post('/veterinarios/olvide-password', {email})
      setAlerta({
        mensaje: data.msg,
        error: false
      })
    } catch (error) {
      setAlerta({
        mensaje: error.response.data.msg,
        error: true
      })
    }
  }

  const { mensaje } = alerta;
  
  return (
    <>
      <form className="bg-[--color2] shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 text-[--color5]" >
        <h2 className="font-bold text-3xl text-center mb-5">Recupera tu contraseña</h2>
        <p>Coloca tu email y te enviaremos los pasos a seguir</p>
        <hr className="m-2 pb-4" />
        <div className="mb-1">
          <label className="block  text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-[--color6] my-4"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-between mb-10 px-3">
          <Link to="../login"><p className="underline text-right">Inicia sesion</p></Link>
          <Link to="../registrar"><p className="underline text-right">Registrate</p></Link>
        </div>
        <div className=" flex flex-row justify-between">

          <button
            className="bg-[--color3] hover:bg-[--color6]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Recuperar
          </button>
          <button
            className="bg-[--color3] hover:bg-[--color6]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={volver}
          >
            volver
          </button>
        </div>
        {
          (mensaje) && <Mensaje alerta={alerta} />
        }

      </form>


    </>
  )
}
