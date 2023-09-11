import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {  Mensaje } from '../componentes/';
import clienteAxios from '../config/axios';


export const ConfirmarCuenta = () => {

  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [alerta, setAlerta] = useState({});


  const params = useParams();
  const { id } = params;


  useEffect(() => {
    const confirmarCuenta = async () => {
  
      try {
        const { data } = await clienteAxios.get(`/veterinarios/confirmar/${id}`);
        setCuentaConfirmada(true);

        setAlerta({
          mensaje: data.msg,
          error: false
        });
        return;
      } catch (error) {


        setAlerta({
          mensaje: error.response.data.msg,
          error: true
        })

      }
    }
    confirmarCuenta();
  }, []);



  return (

    
      <>
        <form className="bg-[--color2] shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 text-[--color5]">
          <h2 className="font-bold text-3xl text-center mb-5">Gracias por confirmar tu cuenta!</h2>
          <hr className="m-2" />
          <div className=" text-center mt-10">
          </div>
          <Mensaje alerta={alerta} />

          {cuentaConfirmada && <Link to="../login"> <p className="m-2 text-right underline">Inicia session</p></Link>}
        </form>
      </>

  )
}
