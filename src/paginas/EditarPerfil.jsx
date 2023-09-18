import React, { useEffect, useState } from 'react'
import { AdminNav } from '../componentes/AdminNav'
import { Footer } from '../componentes';
import { useAuth } from '../hooks/useAuth';

export const EditarPerfil = () => {

  const [veterinario, setVeterinario] = useState({})

  const {auth , setAuth} = useAuth();
  useEffect(()=>{
    setVeterinario(auth)
  }, [auth])


  

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuth(veterinario)
    console.log("formData");
  };
  return (
    <>
      <div className="bg-[--color2] shadow-md  px-8 pt-6 pb-8  text-[--color5] " >
        <h2 className='font-bold m-4'>Configuración de cuenta</h2>
        <p className='m-2 text-sm'>Modifica tu perfil</p>
        <hr className="m-1" />
      </div>
      <AdminNav />

      <div className="max-w-md mx-auto m-5 p-10 bg-[--color5] rounded-lg shadow-2xl text-[--color6]">
        <h2 className="text-2xl font-semibold mb-4 text-center uppercase">Formulario</h2>
        <form onSubmit={handleSubmit} className='uppercase'>
          <div className="mb-4">
            <label htmlFor="nombre" className="block font-bold mb-2">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={veterinario.nombre}
              
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sitioWeb" className="block  font-bold mb-2">
              Sitio web:
            </label>
            <input
              type="text"
              id="sitioWeb"
              name="sitioWeb"
              value={veterinario.web}
             
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefono" className="block  font-bold mb-2">
              Teléfono:
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={veterinario.telefono}
              
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block  font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={veterinario.email}
              
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[--color3] hover:bg-[--color6] text-[--color4] font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-[--color6]"
            >
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  )
}
