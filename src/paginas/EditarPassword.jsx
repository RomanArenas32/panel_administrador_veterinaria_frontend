import React, { useEffect, useState } from 'react'
import { AdminNav } from '../componentes/AdminNav'
import { Footer, Mensaje } from '../componentes'
import { useAuth } from '../hooks'


export const EditarPassword = () => {

    const [password, setPassword] = useState({
        psw_actual: "",
        psw_nuevo: ""
    })
    const [repetirPassword, setRepetirPassword] = useState({})
    const [alerta, setAlerta] = useState({})


    const { guardarPassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(password).some(campo => campo === "")) {
            setAlerta({
                mensaje: "Todos los campos son obligatorios",
                error: true
            });
            return
        }
        if (password.psw_nuevo !== repetirPassword) {
            setAlerta({
                mensaje: "Las contraseñas no cohinciden",
                error: true
            });
            return
        }
        if (password.psw_nuevo.length < 6) {
            setAlerta({
                mensaje: "La contraseña no puede tener menos de 5 caracteres",
                error: true
            });
            return
        }
        const respuesta = await guardarPassword(password);
        console.log(respuesta)
        setAlerta(respuesta)
    };


    const { mensaje } = alerta;

    return (
        <>
            <div className="bg-[--color2] shadow-md  px-8 pt-6 pb-8  text-[--color5] " >
                <h2 className='font-bold m-4'>Configuración de cuenta</h2>
                <p className='m-2 text-sm'>Si por alguna razon queres cambiar tu contraseña desde aca lo podes hacer</p>
                <hr className="m-1" />
            </div>
            <AdminNav />


            <p className='text-center font-semibold uppercase text-xl color-[--color6] shadow-sm'>Modifica tu <span>contraseña</span></p>

            <div className="max-w-md mx-auto m-5 p-10 bg-[--color5] rounded-lg shadow-2xl">

                <form onSubmit={handleSubmit} className='uppercase'>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block font-bold mb-2">
                            contraseña ACTUAL
                        </label>
                        <input
                            type="password"
                            name="psw_actual"
                            placeholder='Escribe tu contraseña actual'
                            onChange={e => setPassword({
                                ...password,
                                [e.target.name]: e.target.value
                            })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sitioWeb" className="block  font-bold mb-2">
                            nueva contraseña
                        </label>
                        <input
                            type="password"
                            name="psw_nuevo"
                            placeholder='Escribe la nueva contraseña'
                            onChange={e => setPassword({
                                ...password,
                                [e.target.name]: e.target.value
                            })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sitioWeb" className="block  font-bold mb-2">
                            repite la nueva contraseña
                        </label>
                        <input
                            type="password"
                            placeholder='Vuelve a escribir la contraseña'
                            onChange={e => setRepetirPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>


                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[--color3] hover:bg-[--color6] text-[--color4] font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-[--color6]"
                        >
                            Cambiar
                        </button>
                    </div>
                </form>
                {
                    mensaje && <Mensaje alerta={alerta} />
                }
            </div>
            <Footer />
        </>
    )
}
