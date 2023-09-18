import React from 'react'
import { AdminNav } from '../componentes/AdminNav'
import { Header } from '../componentes'

export const EditarPassword = () => {
    return (
        <>
            <div className="bg-[--color2] shadow-md  px-8 pt-6 pb-8  text-[--color5] " >
                <h2 className='font-bold m-4'>Configuración de cuenta</h2>
                <p className='m-2 text-sm'>Si por alguna razon queres cambiar tu contraseña desde aca lo podes hacer</p>
                <hr className="m-1" />
            </div>
            <AdminNav />

            <h2>Cambiar la contraseña</h2>
            <p>Modifica tu <span>contraseña</span></p>
        </>
    )
}
