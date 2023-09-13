import { Footer, Formulario, Header, ListadoPacientes } from "../componentes"


export const AdministrarPacientes = () => {
  return (
    <>
      <div className="bg-[--color2] shadow-md  px-8 pt-6 pb-8  text-[--color5] " >
        <Header />
        <h2 className="font-bold text-3xl text-center my-5">Administrar tus pacientes</h2>
        <hr className="m-2" />
        <div className="mb-4">
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 lg:w-2/5">
          <Formulario />
        </div>
        <div className="md:w-1/2 lg:w-3/5">
          <ListadoPacientes />
        </div>
      </div>
      <Footer />
    </>
  )
}
