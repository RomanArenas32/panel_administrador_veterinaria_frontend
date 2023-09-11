import { useEffect, useState } from 'react';
import { Mensaje } from '../componentes';
import { Link, useParams } from 'react-router-dom';
import clienteAxios from '../config/axios';


export const NuevaContraseña = () => {

    const [password, setPassword] = useState("");
    const [repetirPassword, setRepetirPassword] = useState("");
    const [alerta, setAlerta] = useState({});
    const [tokenValido, setTokenValido] = useState(false);
    const [passModificada, setPassModificada] = useState(false);

    const { token } = useParams();


    useEffect(() => {
        const comprobarToken = async () => {
            try {
                await clienteAxios(`/veterinarios/olvide-password/${token}`)
                setAlerta({
                    mensaje: "Coloca tu nueva contraseña",
                    error: false
                });
                setTokenValido(true)
            } catch (error) {
                setAlerta({
                    mensaje: "Ha ocurrido un error con el enlace",
                    error: true
                })
            }
        }
        comprobarToken();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ([password, repetirPassword].includes("")) {
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
        try {
            const { data } = await clienteAxios.post(`/veterinarios/olvide-password/${token}`, { password });
     
            setAlerta({
                mensaje: data.msg,
                error: false
            });
            setPassModificada(true)
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
                <h2 className="font-bold text-3xl text-center mb-5">Reestablece tu contraseña</h2>
                <hr className="mb-2 pb-4" />

                {
                    tokenValido &&
                    <>
                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2" htmlFor="password">
                                Nueva contraseña
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline text-[--color6]"
                                id="password"
                                type="password"
                                placeholder="Nueva contraseña"
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
                        <button
                            className="bg-[--color3] hover:bg-[--color6]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Reestablecer
                        </button>
                        {
                            passModificada && <Link to="../login"> <p className="mb-2 text-right underline font-bold text-lg">Iniciar sesion </p></Link>
                        }

                    </>
                }

                {
                    mensaje && <Mensaje alerta={alerta} />
                }
            </form>


        </>
    )
}
