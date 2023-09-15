
import usePacientes from "../hooks/usePacientes";
import { Paciente } from "./";

export const ListadoPacientes = () => {
  const { pacientes } = usePacientes();


  const totalPacientes = pacientes.pacientes;


  return (
    <>
      {totalPacientes.length < 1 ? (
        <div className="font-bold text-center m-5 text-[--color6]">
          <h2 className="text-3xl mb-1">Aun no hay pacientes</h2>
          <p>Si tiene problemas en la visualización de los datos recargue la página</p>
        </div>
      ) : (
        <div className="m-5">
          {totalPacientes.map((paciente) => (
            <Paciente key={paciente._id} paciente={paciente} />
          ))}
        </div>
      )}
    </>
  );
};
