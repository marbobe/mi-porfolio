import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar(){
    const{ t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng) => { i18n.changeLanguage(lng)};

    const navLinks = [ 
        { name: t('nav.home'), id: 'home'},
        { name: t('nav.about'), id: 'about'},
        { name: t('nav.skills'), id: 'skills' },
        { name: t('nav.projects'), id: 'projects' },
        { name: t('nav.contact'), id: 'contact' },
    ]

    const activeId = useScrollSpy(navLinks.map(link => link.id));

    //función para cerrar menú de hamburguesa + desplazamiento hasta arriba del inicio
    const handleLinkClick = (e, id) => { 
        setIsOpen(false);

        if (id === 'home') {
            e.preventDefault(); 
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    return (
        <nav className="fixed top-0 left-0 w-full bg-white border-b-4 border-black z-50">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
            
            {/* EL LOGO */}
            <div className="flex-shrink-0">
                <span className="font-mono text-2xl font-bold tracking-tighter">
                {t('generic.title')}
                </span>
            </div>

            {/* MENU DESKTOP */}
            <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => {
                    const isActive = activeId === link.id && link.id !== 'home';
                    return(
                    <a
                    key={link.id} 
                    href={`#${link.id}`} 
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`
                        font-mono font-bold text-lg px-3 py-2 border-2 transition-all duration-200
                        ${isActive ? 'bg-yellow-400 text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                        : 'text-black border-transparent hover:bg-yellow-400 hover:text-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                        }
                    `}
                    >
                    {link.name}
                    </a>
                );
            })}
                </div>
            </div>

            {/* CAMBIO DE IDIOMA */}
            <div className="flex gap-2">
                <button 
                    onClick={() => changeLanguage('es')}
                    className={`font-bold ${i18n.language === 'es' ? 'underline decoration-4 decoration-violet-600' : ''}`}
                >
                    ES
                </button>
                <span>/</span>
                <button 
                    onClick={() => changeLanguage('en')}
                    className={`font-bold ${i18n.language === 'en' ? 'underline decoration-4 decoration-violet-600' : ''}`}
                >
                    EN
                </button>
            </div>

            {/* BOTÓN HAMBURGUESA*/}
            <div className="lg:hidden">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl focus:outline-none border-2 border-transparent p-1 hover:border-black transition-all"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            </div>
        </div>

        {/* MENÚ DESPLEGABLE MÓVIL */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t-4 border-black absolute w-full left-0 top-20 shadow-[0px_10px_0px_0px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col">
                        {navLinks.map((link) => {
                             const isActive = activeId === link.id && link.id !== 'home';
                             return (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={(e) => handleLinkClick(e, link.id)}
                                    className={`
                                        font-mono font-bold text-xl uppercase py-6 text-center border-b-2 border-black
                                        hover:bg-yellow-400 hover:tracking-widest transition-all duration-300
                                        ${isActive ? 'bg-yellow-200' : 'bg-white'}
                                    `}>
                                    {link.name}
                                </a>
                            )
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
