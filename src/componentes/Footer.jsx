import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

export const Footer = () => {
    return (
        <div className="bg-[--color2] shadow-md  px-8 pt-6 pb-8 mb-4 text-[--color5] flex justify-between ">
            <div>
                <p>Desarrollado por Roman Arenas</p>
                <hr className='m-1' />
                <p>Seguime en redes sociales</p>
            </div>
            <div className="flex space-x-4">
                <a
                    href="https://www.instagram.com/tu_usuario_de_instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsInstagram className="text-4xl text-[--color5] " />
                </a>
                <a
                    href="https://www.linkedin.com/in/tu_perfil_de_linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsLinkedin className="text-4xl text-[--color5" />
                </a>
                <a
                    href="https://github.com/tu_usuario_de_github"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsGithub className="text-4xl text-[--color5]" />
                </a>
            </div>

        </div>
    )
}
