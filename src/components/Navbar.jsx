import { useTranslation } from "react-i18next";
import { useScrollSpy } from "../hooks/useScrollSpy";

function Navbar(){
    const{ t, i18n } = useTranslation();

    const changeLanguage = (lng) => { i18n.changeLanguage(lng)};

    const navLinks = [ 
        { name: t('nav.home'), id: 'home'},
        { name: t('nav.about'), id: 'about'},
        { name: t('nav.skills'), id: 'skills' },
        { name: t('nav.projects'), id: 'projects' },
        { name: t('nav.contact'), id: 'contact' },
    ]

    const activeId = useScrollSpy(navLinks.map(link => link.id));

    return (
        <nav className="fixed top-0 left-0 w-full bg-white border-b-4 border-black z-50">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
            
            {/* 1. EL LOGO (Izquierda) */}
            <div className="flex-shrink-0">
                <span className="font-mono text-2xl font-bold tracking-tighter">
                MI_PORTFOLIO
                </span>
            </div>

            {/* 2. LOS ENLACES (Centro - Solo visibles en pantallas medianas 'md' para arriba) */}
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => {
                    const isActive = activeId === link.id && link.id !== 'home';
                    return(
                    <a
                    key={link.id} // Siempre necesaria una key única al usar map
                    href={`#${link.id}`} // Enlace ancla (ej: #projects)
                    className={`
        font-mono font-bold text-lg px-3 py-2 border-2 transition-all duration-200
        
        ${isActive 

          ? 'bg-yellow-400 text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
          
 
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

            {/* 3. CAMBIO DE IDIOMA (Derecha) */}
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

            </div>
        </div>
        </nav>
    );
}

export default Navbar;
