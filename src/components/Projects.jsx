import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaArrowUp } from 'react-icons/fa';
import bookTracker from '../assets/BookTracker.png';
import graphqlImg from '../assets/graphql.png';
import restauriante from '../assets/restauriante.png';
import SectionTitle from './SectionTitle';

function Projects() {
  const { t } = useTranslation();

  const projectsData = [
    {
      id: 0,
      image: bookTracker,
      color: "bg-violet-400",
      repoUrl: "https://github.com/marbobe/BookTracker",
      demoUrl: "https://booktracker-rtgy.onrender.com/",
      isSlow: true,
    },
    {
      id: 1,
      image: graphqlImg,
      color: "bg-pink-200",
      repoUrl: "https://github.com/marbobe/Gestion-productos-GraphQL",
      demoUrl: null, 
      isSlow: false,
    },
    {
      id: 2,
      image: restauriante,
      color: "bg-emerald-300",
      repoUrl: "https://github.com/marbobe/ai-restaurante",
      demoUrl: "https://restauriante.vercel.app/",
      isSlow: false,
    }
  ];

  const getProjectContent = (index) => {
    return {
        title: t(`projects.list.${index}.title`),
        subtitle: t(`projects.list.${index}.subtitle`),
        desc: t(`projects.list.${index}.desc`),
        tags: t(`projects.list.${index}.tags`, { returnObjects: true }),
        altText: t(`projects.list.${index}.alt_img`)
    };
  };

  return (
    <section id="projects" className="w-full py-20 bg-violet-100 border-4 border-black scroll-mt-24 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TÍTULO */}
        <SectionTitle title={t('projects.title')}/>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => {
                const content = getProjectContent(index);
                return (
                    <div key={index} className="group relative h-[450px] border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                        
                        {/* imagen */}
                        <div className={`absolute inset-0 z-0 w-full h-full ${project.color} transition-transform duration-500 group-hover:scale-105`}>
                            {project.image ? (
                                <img src={project.image} alt={content.altText} className="w-full h-full object-cover object-top transition-all duration-500"/>
                            ) : (
                                <FaFolderOpen className="text-8xl opacity-20 text-black rotate-[-10deg] group-hover:rotate-0 transition-all"/>
                            )}
                            
                        </div>

                        {/* Contenedor Blanco Deslizante */}
                        <div className="absolute bottom-0 left-0 w-full bg-white border-t-4 border-black p-4 flex flex-col gap-2 transition-all duration-300 ease-in-out">
                            
                            {/* CABECERA (Siempre visible)*/}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-black font-grotesk uppercase leading-none">
                                        {content.title}
                                    </h3>
                                    <FaArrowUp className="text-black transform rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                                 <h4 className="font-bold font-mono text-xs text-gray-600 uppercase mt-1">
                                        {content.subtitle}
                                    </h4>
                            </div>

                            {/* CUERPO OCULTO (Visible al hover): Tags, Descripción y Botones */}
                            <div className="max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-4">
                                 <div className="flex flex-wrap gap-1.5 mt-2">
                                    {content.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-mono font-bold  border-violet-800 text-violet-800 border-2 border-black px-2 py-0.5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <p className="font-mono text-sm leading-relaxed border-t-2 border-dashed border-gray-300 pt-4">
                                    {content.desc}
                                </p>
 
                                <div className="flex gap-3">
                                    <a href={project.repoUrl} target="_blank" className="flex-1 bg-black text-white font-bold font-mono text-center py-2 hover:bg-violet-600 transition-colors flex items-center justify-center gap-2">
                                        <FaGithub /> Repo
                                    </a>
                                    {project.demoUrl && (
                                        <div className="relative flex-1 group/btn"> {/* Wrapper relativo para posicionar el tooltip */}
                                            
                                            {/* El Tooltip (Solo si es isSlow (Servidor Render)) */}
                                            {project.isSlow && (
                                                <div className="absolute bottom-full right-0 mb-3 w-48 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                                                    
                                                    {/* Caja del mensaje */}
                                                    <div className="bg-yellow-300 border-2 border-black p-2 text-[10px] leading-tight font-bold font-mono text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                        {t('projects.warning_slow')}
                                                    </div>
                                                    
                                                    {/* Triangulito decorativo (Flecha abajo) */}
                                                    <div className="absolute -bottom-1.5 right-1/2 translate-x-1/2 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-300 border-b-2 border-r-2 border-black rotate-45"></div>
                                                </div>
                                            )}
                                        <a href={project.demoUrl} target="_blank" className="flex-1 bg-white text-black border-2 border-black font-bold font-mono text-center py-2 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                        </div>
                                    )}
                                </div>
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