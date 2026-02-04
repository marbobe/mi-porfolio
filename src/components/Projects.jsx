import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

// Imágenes Placeholder (Más adelante importarás tus capturas reales)
// import project1 from '../assets/project1.jpg';

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

        {/* ESTILO 1: ESTRUCTURA VERTICAL CLÁSICA */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projectsData.map((project, index) => {
        const content = getProjectContent(index, project.status);
        return (
            <div key={index} className="flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                {/* Imagen */}
                <div className={`h-56 w-full border-b-4 border-black flex items-center justify-center overflow-hidden ${project.color}`}>
                    {project.image ? (
                        <img src={project.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"/>
                    ) : (
                        <FaFolderOpen className="text-6xl opacity-20 text-black"/>
                    )}
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-1">
                    {/* Título en caja negra */}
                    <h3 className="bg-black text-white text-xl font-black font-grotesk uppercase p-2 -mt-10 mb-4 w-fit rotate-[-2deg]">
                        {content.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                        {content.tags.map((tag, i) => (
                            <span key={i} className="text-xs font-mono font-bold border-2 border-black px-2 py-0.5 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="font-mono text-sm mb-6 leading-relaxed">
                        {content.desc}
                    </p>

                    {/* Botones (Solo si no es coming soon) */}
                    {project.status !== 'comingSoon' && (
                        <div className="flex gap-3 mt-auto pt-4 border-t-2 border-dashed border-gray-300">
                            <a href={project.repoUrl} target="_blank" className="hover:text-violet-600 transition-colors"><FaGithub size={24}/></a>
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" className="hover:text-violet-600 transition-colors"><FaExternalLinkAlt size={22}/></a>
                            )}
                        </div>
                    )}
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