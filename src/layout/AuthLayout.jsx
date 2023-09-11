import { Outlet } from "react-router-dom";
export const AuthLayout = () => {
  return (
    <>
      <h2 className="font-bold text-[--color5] text-center text-2xl p-6 bg-[--color3] shadow-lg mb-2">Administrador de pacientes</h2>
      <main className="container mx-auto md:grid grid-cols-2 pt-4 shadow-xl">
        <Outlet />
      </main>
    </>
  )
}
