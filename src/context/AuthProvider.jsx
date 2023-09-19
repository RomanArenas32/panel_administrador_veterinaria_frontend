import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  //verificar si el usuario esta autenticado con el useEffect
  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem('token')

      if (!token) {
        setCargando(false);
        return
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      try {
        const { data } = await clienteAxios.get('/veterinarios/perfil', config)

        setAuth(data)
      } catch (error) {
        console.log(error.response.data.msg)
        setAuth({})
      }
      setCargando(false)
    }
    autenticarUsuario();
  }, [])


  const cerrarSesion = () => {
    localStorage.removeItem('token')
    setAuth({});
    navigate('../login')
  }

  const actualizarPerfil = async datos => {
    const { _id } = datos;
    const token = localStorage.getItem('token')

    if (!token) {
      setCargando(false);
      return
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const url = `/veterinarios/perfil/${_id}`;
      const { data } = await clienteAxios.put(url, datos, config);
      return {
        msg: "Usuario actualizado con exito",
        error: false
      }
    } catch (error) {
      return {
        msg: error.response.data.msg,
        error: true
      }
    }

  }


  const guardarPassword = async (datos) => {
    const token = localStorage.getItem('token')

    if (!token) {
      setCargando(false);
      return
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const url = '/veterinarios/actualizar-password'
      const {data} = await clienteAxios.put(url, datos, config);
      console.log(data)
      return {
        mensaje: data.msg,
        error: false
      }
    } catch (error) {
      return {
        mensaje: error.response.msg,
        error: true
      }
      
    }
  }

  return (
    <AuthContext.Provider
      value={{
        actualizarPerfil,
        auth,
        setAuth,
        cargando,
        cerrarSesion,
        guardarPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export {
  AuthProvider
}

export default AuthContext