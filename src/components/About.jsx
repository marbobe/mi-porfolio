import { useTranslation } from "react-i18next";
import profilePic from '../assets/perfil.jpg';
import { FaFileDownload } from "react-icons/fa";

function About(){
    const { t , i18n } = useTranslation();

    const cvUrl = i18n.language.startsWith('es') ? '/cv_es.pdf' : 'cv_en.pdf';
    const skills = [
        t('about.tags.tag1'), 
        t('about.tags.tag2'), 
        t('about.tags.tag3'),
        t('about.tags.tag4')
    ];

    return(
        <section id="about" className="w-full py-20 bg-white border-4 border-black scroll-mt-24 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TÍTULO DE LA SECCIÓN con decoración */}
        <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-8 bg-black"></div>  {/* Cuadrado decorativo */}
            <h2 className="text-5xl md:text-6xl font-black font-grotesk uppercase">
                {t('about.title')}
            </h2>
            <div className="flex-1 h-2 bg-black"></div> {/* Línea decorativa */}
        </div>

        {/* CONTENIDO: GRID DE 2 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            
            {/* COLUMNA 1: LA FOTO*/}
            <div className="relative group">
                <div className="absolute top-4 left-4 w-full h-full bg-black z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                
                {/* Tarjeta Principal */}
                <div className="relative z-10 border-4 border-black bg-white p-2">
                    
                    {/* FOTO*/}
                    <div className="aspect-square bg-gray-200 overflow-hidden border-2 border-black transition-all duration-500">
                        <img src={profilePic}/>
                        <div className="absolute bottom-4 right-4 bg-white border-2 border-black px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            {/*Bocadillo*/}
                            <span className="font-black font-grotesk text-xl uppercase">{t('about.greeting')}</span>
                            <div className="absolute bottom-[-10px] right-4 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-black border-r-[10px] border-r-transparent"></div>
                        </div>                           
                    </div>
                </div>
            </div>

            {/* COLUMNA 2: EL TEXTO */}
            <div className="font-grotesk flex flex-col gap-8">
                
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-justify hyphens-auto">
                    {t('about.p1')}
                </p>

                <p className="text-lg text-gray-600 font-mono border-l-4 border-yellow-400 pl-4">
                    {t('about.p2')}
                </p>

                {/* SOFT SKILLS */}
               <div className="flex flex-wrap gap-4 mt-8">
                    {skills.map((tag, index) => (
                        <span key={index} className="font-mono text-sm font-bold text-gray-500 hover:text-black transition-colors cursor-default">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Botón */}
                <div className="flex flex-col sm:flex-row gap-4">
    
                            <a 
                                href={cvUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="
                                    group flex items-center justify-center gap-3
                                    bg-violet-600 text-white font-bold font-mono text-lg px-8 py-4
                                    border-2 border-black 
                                    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                                    hover:translate-y-1 hover:shadow-none hover:bg-violet-700
                                    transition-all duration-200
                                "
                            >
                                <FaFileDownload className="text-2xl group-hover:scale-110 transition-transform"/>
                                {t('about.button') || "DOWNLOAD CV"}
                            </a>
                            
                </div>

            </div>

        </div>
      </div>
    </section>
    );
}

export default About;