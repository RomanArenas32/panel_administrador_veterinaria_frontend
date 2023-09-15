import usePacientes from "../hooks/usePacientes";


export const Paciente = ({ paciente }) => {



    const { nombre, email, fecha, propietario, sintomas, _id } = paciente;


    const {setEdicion, eliminarPaciente} = usePacientes();

    //Funcion para formatear la fecha
    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha);
        return new Intl.DateTimeFormat('es-MX', { dateStyle: 'long' }).format(nuevaFecha);
    }

    return (
        <div className="border text-[--color6] bg-[--color5] shadow-2xl my-6 rounded-lg p-5">
            <p className="uppercase font-bold">Nombre del paciente: <span className="font-semibold">{nombre}</span> </p>
            <p className="uppercase font-bold">Propietario: <span className="font-semibold">{propietario}</span> </p>
            <p className="uppercase font-bold">contacto: <span className="font-semibold lowercase">{email}</span> </p>
            <p className="uppercase font-bold">fecha de ingreso: <span className="font-semibold">{formatearFecha(fecha)}</span> </p>
            <p className="uppercase font-bold">sintomas: <span className="font-semibold">{sintomas}</span> </p>
            <div className="flex justify-between mt-2">
                <button
                    className="bg-[--color3] hover:bg-[--color6]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-[--color4] uppercase"
                    type="submit"
                    onClick={()=> setEdicion(paciente)}
                >
                    editar
                </button>
                <button
                    className="bg-red-600 hover:bg-red-80  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-[--color4] uppercase"
                    type="submit"
                    onClick={()=> eliminarPaciente(_id)}
                >
                    eliminar
                </button>
            </div>
        </div>
    )
}
