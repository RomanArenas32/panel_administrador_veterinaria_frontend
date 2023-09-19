import { createContext, useEffect, useState } from "react"
import clienteAxios from "../config/axios"
import { useAuth } from "../hooks";

const PacientesContext = createContext()


const PacientesProvider = ({ children }) => {

    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState("")

    const {auth} = useAuth();

    useEffect(() => {
        const cargarPacientes = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    return
                }

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }


                const { data } = await clienteAxios.get('/pacientes', config);
                setPacientes(data)
            } catch (error) {
                console.log(error)
            }
        }
        cargarPacientes();
    }, [auth])


    const guardarPaciente = async (paciente) => {
        console.log(paciente)

        const token = localStorage.getItem('token')
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        if (paciente.id) {
            try {
                const { data } = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config);
                const pacienteActualizado = pacientes.map( newState => newState._id == data._id ? data : newState);
                setPacientes(pacienteActualizado)

            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                await clienteAxios.post('/pacientes', paciente, config);
            } catch (error) {
                console.log(error)
            }
        }
    }


    const setEdicion = (paciente) => {
        setPaciente(paciente)

    }

    const eliminarPaciente = async(id)=>{

        const token = localStorage.getItem('token')
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        const confirmar = confirm('Deseas eliminar este paciente?')

        if(confirmar){
            try {
                const {data} = await clienteAxios.delete(`/pacientes/${id}`, config);
                const pacientesActualizados = pacientes.filter(pacientesState => pacientesState._id !== id);
                setPacientes(pacientesActualizados)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <PacientesContext.Provider
            value={{
                setEdicion,
                pacientes,
                paciente,
                guardarPaciente,
                eliminarPaciente
            }}
        >
            {children}
        </PacientesContext.Provider>
    )

}
export {
    PacientesProvider
}
export default PacientesContext;