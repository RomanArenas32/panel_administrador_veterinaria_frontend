import { useEffect, useState } from "react";
import { Mensaje } from "./Mensaje";
import usePacientes from "../hooks/usePacientes";

export const Formulario = () => {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [alerta, setAlerta] = useState({});
  const [id, setId] = useState(null);

  const { guardarPaciente, paciente } = usePacientes();

  useEffect(() => {
    if (paciente?.nombre) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      setId(paciente._id)
    }
  }, [paciente])


  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setAlerta({ mensaje: 'No puede haber campos vacios', error: true });
      return;
    }


    setAlerta({})
    guardarPaciente({ nombre, propietario, email, fecha, sintomas, id })
    setAlerta({ mensaje: 'Guardado con exito', error: false });
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
    setId("")
  }

  return (
    <div className="min-h-max bg-[--color3] text-white font-bold m-5 p-5 rounded-lg shadow-2xl">


      <h3 className="text-2xl my-4">Administra tus pacientes</h3>
      <hr className="mb-4" />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="mascota" className="block text-xl mb-1 text-[--color1] ">Nombre de la Mascota</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border rounded-lg p-2 w-full focus:outline-none focus:ring focus:border-blue-300 text-[--color6]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="propietario" className="block text-xl mb-1 text-[--color1]">Propietario</label>
          <input
            type="text"
            id="propietario"
            name="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            className=" text-[--color6] border rounded-lg p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-xl mb-1 text-[--color1]">Correo Propietario</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" text-[--color6] border rounded-lg p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fecha" className="block text-xl mb-1 text-[--color1]">Fecha de ingreso</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className=" text-[--color6] border rounded-lg p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sintomas" className="block text-xl mb-1  text-[--color1]">Síntomas</label>
          <textarea
            id="sintomas"
            name="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            className="text-[--color6] border rounded-lg p-2 w-full h-32 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button type="submit" className="bg-[--color2] text-white rounded-lg px-4 py-2 hover:bg-[--color6] transition duration-300 uppercase">{id ? 'editar' : 'Agregar'}</button>
        {
          alerta.mensaje && <Mensaje alerta={alerta} />
        }
      </form>

    </div>
  );
}