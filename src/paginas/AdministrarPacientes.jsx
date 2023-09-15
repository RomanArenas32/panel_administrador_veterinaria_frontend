import { useState } from "react"
import { Footer, Formulario, Header, ListadoPacientes } from "../componentes"


export const AdministrarPacientes = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  
  return (
    <>
      <div className="bg-[--color2] shadow-md  px-8 pt-6 pb-8  text-[--color5] " >
        <Header />
        <hr className="m-1" />
      </div>
      <button type="button" className="bg-[--color2] text-white rounded-lg px-4 py-2 hover:bg-[--color6] transition duration-300 uppercase my-2 mx-5" onClick={()=> setMostrarFormulario(!mostrarFormulario)}>
      {
        mostrarFormulario ? "ocultar" :  "Agregar pacientes" 
      }
     </button>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 lg:w-2/5">
          {
            mostrarFormulario && <Formulario />
          }
        </div>
        <div className="md:w-1/2 lg:w-3/5">
          <ListadoPacientes />
        </div>
      </div>
      <Footer />
    </>
  )
}
