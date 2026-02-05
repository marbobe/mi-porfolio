import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaArrowUp } from 'react-icons/fa';

function Projects() {
  const { t } = useTranslation();

  // Array de proyectos. 
  // NOTA: Lo ideal es que las URLs y las imágenes no estén en el JSON de traducción, 
  // sino aquí, ya que no cambian según el idioma.
  // ... imports

  const projectsData = [
    {
      id: 0,
      image: null, // Pon aquí tu import real
      color: "bg-blue-200",
      repoUrl: "https://github.com/TU_USUARIO/proyecto1",
      demoUrl: "https://tu-proyecto.com",
      status: "ready"
    },
    {
      id: 1,
      image: null,
      color: "bg-green-200",
      repoUrl: "https://github.com/TU_USUARIO/proyecto2",
      demoUrl: null, // Backend (sin demo visual)
      status: "ready"
    },
    {
      id: 2,
      image: null,
      color: "bg-gray-200",
      repoUrl: "#",
      demoUrl: "#",
      status: "comingSoon" // <--- ESTADO ESPECIAL
    }
  ];

  const getProjectContent = (index, status) => {
    if (status === 'comingSoon') {
        return {
            title: "WORK IN PROGRESS",
            desc: "Cooking the next big thing. Stay tuned.",
            tags: ["Loading..."]
        }
    }
    return {
        title: t(`projects.list.${index}.title`),
        desc: t(`projects.list.${index}.desc`),
        tags: t(`projects.list.${index}.tags`, { returnObjects: true })
    };
  };

  return (
    <section id="projects" className="w-full py-20 bg-white border-4 border-black scroll-mt-24 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TÍTULO */}
        <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-8 bg-black"></div> {/* Cuadrado decorativo */}
            <h2 className="text-5xl md:text-6xl font-black font-grotesk uppercase">
                {t('projects.title')}
            </h2>
            <div className="flex-1 h-2 bg-black"></div> {/* Línea decorativa */}
        </div>

        {/* TARJETAS */}
        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => {
                const content = getProjectContent(index, project.status);
                return (
                    // CAMBIO 1: 'group' para controlar el hover, 'relative' para posicionamiento, 
                    // 'h-[450px]' altura fija obligatoria para que funcione el efecto.
                    <div key={index} className="group relative h-[450px] border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                        
                        {/* CAMBIO 2: La Imagen ahora es 'absolute inset-0' (ocupa todo el fondo) */}
                        <div className={`absolute inset-0 w-full h-full flex items-center justify-center ${project.color} transition-transform duration-500 group-hover:scale-105`}>
                            {project.image ? (
                                <img src={project.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"/>
                            ) : (
                                <FaFolderOpen className="text-8xl opacity-20 text-black rotate-[-10deg] group-hover:rotate-0 transition-all"/>
                            )}
                            
                            {/* Overlay sutil para que el texto se lea mejor si la imagen es clara */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>

                        {/* CAMBIO 3: Contenedor Blanco Deslizante */}
                        {/* Está posicionado 'absolute bottom-0'. Crece hacia arriba al hacer hover. */}
                        <div className="absolute bottom-0 left-0 w-full bg-white border-t-4 border-black p-6 flex flex-col gap-4 transition-all duration-300 ease-in-out">
                            
                            {/* CABECERA (Siempre visible): Título y Tags */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-black font-grotesk uppercase leading-none">
                                        {content.title}
                                    </h3>
                                    {/* Icono decorativo que invita a hacer hover */}
                                    <FaArrowUp className="text-black transform rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>

                                 <div className="flex flex-wrap gap-2">
                                    {content.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-mono font-bold  border-violet-800 text-violet-800 border-2 border-black px-2 py-0.5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                            </div>

                            {/* CUERPO OCULTO (Visible al hover): Descripción y Botones */}
                            {/* Usamos max-h-0 y opacity-0 para esconderlo, y group-hover para mostrarlo */}
                            <div className="max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-4">
                                <p className="font-mono text-sm leading-relaxed border-t-2 border-dashed border-gray-300 pt-4">
                                    {content.desc}
                                </p>

                                {project.status !== 'comingSoon' && (
                                    <div className="flex gap-3">
                                        <a href={project.repoUrl} target="_blank" className="flex-1 bg-black text-white font-bold font-mono text-center py-2 hover:bg-violet-600 transition-colors flex items-center justify-center gap-2">
                                            <FaGithub /> Repo
                                        </a>
                                        {project.demoUrl && (
                                            <a href={project.demoUrl} target="_blank" className="flex-1 bg-white text-black border-2 border-black font-bold font-mono text-center py-2 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                                <FaExternalLinkAlt /> Demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
}

export default Projects;