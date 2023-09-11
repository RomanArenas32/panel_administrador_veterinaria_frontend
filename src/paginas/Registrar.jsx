import { useState } from "react";
import { Link } from 'react-router-dom';
import { Mensaje } from "../componentes/Mensaje";
import clienteAxios from '../config/axios';


export const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});


  const handleSubmit = async(e) => {
    e.preventDefault();

    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({ mensaje: 'No puede haber campos vacios', error: true });
      return;
    }
    if (password !== repetirPassword) {
      setAlerta({ mensaje: 'Las contraseñas no son iguales', error: true });
      return
    }
    if (password.length < 6) {
      setAlerta({ mensaje: 'La contraseña debe tener al menos 6 caracteres', error: true });
      return
    }
    setAlerta({})

    try {
    
      const respuesta = await clienteAxios.post(`/veterinarios`, {nombre, email, password} );
      setAlerta({mensaje: 'Usuario creado con exito, revisa tu email', error: false})
    } catch (error) {
      setAlerta({mensaje: error.response.data.msg, error: true})
    }
  }

const {mensaje} = alerta;

  return (
    <>

      <form className="bg-[--color2] shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 text-[--color5] " onSubmit={handleSubmit}>
        <h2 className="font-bold text-3xl text-center mb-5">Registrate para comenzar a administrar tus pacientes</h2>
        <hr className="m-2" />
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="email">
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-[--color6]"
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
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
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Repeti la contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-[--color6]"
            id="password"
            type="password"
            placeholder="Repite la contraseña"
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)}
          />
        </div>
        <Link to="../login"> <p className="mb-2 text-right underline">Ya tenes una cuenta? </p></Link>


        <button
          className="bg-[--color3] hover:bg-[--color6]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Registrate
        </button>
        {
          mensaje ? <Mensaje alerta={alerta} /> : ""
        }
        
      </form>


    </>
  )
}
