

export const Mensaje = ({ alerta }) => {
    return (
        <div className={`${alerta.error ? 'from-red-400 to-red-700' : 'from-green-400 to-green-700'} bg-gradient-to-br uppercase text-[--color5] font-bold text-center p-4 shadow-md rounded-xl mt-4`}>{alerta.mensaje}</div>
    )
}
