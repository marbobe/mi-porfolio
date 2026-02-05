import { useState } from "react";
import { useTranslation } from 'react-i18next';

import { FaJava, FaNodeJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaDocker, FaBootstrap} from "react-icons/fa";
import { SiJavascript, SiMysql, SiMongodb, SiSpringboot, SiExpress, SiLaravel, SiGraphql, SiHibernate, SiMongoose, SiGithubactions, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";

function Skills(){
    const {t} = useTranslation();
    const [filter, setFilter] = useState('all');

    const skills = [
    // FRONTEND
    { name: "HTML5", category: "frontend", icon: <FaHtml5 className="text-orange-600"/> },
    { name: "CSS3", category: "frontend", icon: <FaCss3Alt className="text-blue-600"/> },
    { name: "JavaScript", category: "frontend", icon: <SiJavascript className="text-yellow-400 bg-black"/> }, 
    { name: "React", category: "frontend", icon: <FaReact className="text-cyan-400"/> },
    { name: "Tailwind", category: "frontend", icon: <SiTailwindcss className="text-cyan-500"/> },
    { name: "Bootstrap", category: "frontend", icon: <FaBootstrap className="text-purple-600"/> },
    
    // BACKEND
    { name: "Java", category: "backend", icon: <FaJava className="text-red-500"/> },
    { name: "Spring Boot", category: "backend", icon: <SiSpringboot className="text-green-500"/> },
    { name: "Node.js", category: "backend", icon: <FaNodeJs className="text-green-600"/> },
    { name: "Express", category: "backend", icon: <SiExpress className="text-black"/> },    
    { name: "Laravel", category: "backend", icon: <SiLaravel className="text-red-600"/> },
    { name: "REST API", category: "backend", icon: <TbApi className="text-gray-700"/> },
    { name: "GraphQL", category: "backend", icon: <SiGraphql className="text-pink-600"/> },

    // DATABASE (Hibernate movido aquí)
    { name: "MySQL", category: "database", icon: <SiMysql className="text-blue-700"/> },
    { name: "MongoDB", category: "database", icon: <SiMongodb className="text-green-500"/> },
    { name: "Mongoose", category: "database", icon: <SiMongoose className="text-red-800"/> },
    { name: "Hibernate", category: "database", icon: <SiHibernate className="text-amber-700"/> }, 

    // TOOLS
    { name: "Git", category: "tools", icon: <FaGitAlt className="text-orange-600"/> },
    { name: "GitHub", category: "tools", icon: <FaGithub className="text-black"/> },
    { name: "Docker", category: "tools", icon: <FaDocker className="text-blue-500"/> },
    { name: "CI/CD Actions", category: "tools", icon: <SiGithubactions className="text-blue-600"/> },
  ];

  
  const courses = [
    { 
        name: "React: Hooks, Router, Redux & More", 
        hours: "70h", 
        status: "doing", 
        link: "https://udemy.com" 
    },
    { 
        name: "Java: SpringBoot, Hibernate & More", 
        hours: "80h+", 
        status: "completed",
        link: "https://www.udemy.com/certificate/UC-a520d547-db21-42d6-aa57-78ff771af46c/"
    },
    { 
        name: "Node.js: Express, MongoDB & More", 
        hours: "40h", 
        status: "completed",
        link: "https://www.udemy.com/certificate/UC-1d7e5215-1614-4a20-91a2-d8c42461c903/" 
    },
  ];

  const filteredSkills = filter === 'all' ? skills : skills.filter(skill => skill.category === filter);
  const categories = ['all', 'frontend', 'backend', 'database', 'tools'];


  // Función auxiliar para obtener icono y color según el nombre del curso
 const getCourseStyle = (name) => {
    if (name.toLowerCase().includes('react')) return { icon: <FaReact />, color: 'text-cyan-600', hoverBg: 'group-hover:bg-cyan-200'};
    if (name.toLowerCase().includes('java')) return { icon: <FaJava />, color: 'text-orange-600', hoverBg: 'group-hover:bg-orange-200'};
    if (name.toLowerCase().includes('node')) return { icon: <FaNodeJs />, color: 'text-green-600', hoverBg: 'group-hover:bg-green-200'};
    return { icon: <FaExternalLinkAlt />, color: 'text-gray-600', hoverBg: 'group-hover:bg-gray-200'}
  };

  return (
    <section id="skills" className="w-full py-20 bg-yellow-100 border-4 border-black scroll-mt-24 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto px-4">
             
             <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-8 bg-black"></div>  {/* Cuadrado decorativo */}
                <h2 className="text-5xl md:text-6xl font-black font-grotesk uppercase text-center md:text-left">
                {t('skills.title')}
                </h2>
                <div className="flex-1 h-2 bg-black"></div> {/* Línea decorativa */}
             </div>
            

            {/* FILTROS */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`
                            px-4 py-1 font-mono font-bold uppercase text-base border-2 border-black transition-all
                            ${filter === cat 
                                ? 'bg-black text-white shadow-[4px_4px_0px_0px_#8b5cf6] translate-y-1' 
                                : 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_#8b5cf6] hover:translate-y-1 '
                            }
                        `}
                    >
                        {t(`skills.filters.${cat}`)}
                    </button>
                ))}
            </div>

            {/* GRID DE ICONOS*/}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {filteredSkills.map((skill, index) => (
                    <div 
                        key={index}
                        className="
                            flex items-center gap-3 p-2 bg-white border-2 border-black
                            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                            hover:-translate-y-1
                            hover:bg-violet-100
                            transition-all duration-200 group
                        "
                    >
                        <div className="text-2xl transition-colors">
                            {skill.icon}
                        </div>
                        <span className="font-grotesk font-bold text-sm uppercase tracking-tighter">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* SECCIÓN DE CERTIFICACIONES */}
            <div className="mt-16 pt-10 border-t-4 border-black">
                <h3 className="text-3xl font-black font-grotesk uppercase mb-8 flex items-center gap-3">
                {t('skills.certifications.title')}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, idx) => {
                        const style = getCourseStyle(course.name);
                        return (
                            <div key={idx} className="group relative bg-white border-4 border-black p-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                                {/* Cabecera de color */}
                                <div className={`p-4 border-b-4 border-black bg-white ${style.hoverBg} transition-colors duration-300 flex justify-between items-center`}>
                                    <div className={`text-3xl ${style.color}`}>{style.icon}</div>
                                    {/* Badge de estado */}
                                    <span className={`text-xs font-bold px-2 py-1 border-2 border-black bg-white uppercase`}>
                                        {course.status === 'doing' ? t('skills.certifications.status_progress') : t('skills.certifications.status_completed')}
                                    </span>
                                </div>
                                
                                {/* Cuerpo */}
                                <div className="p-4 flex flex-col h-[100px] justify-between">
                                    <h4 className="font-bold font-grotesk text-xl leading-tight">{course.name}</h4>
                                    
                                    <div className="flex justify-between items-end border-t-2 border-dashed border-gray-300 pt-3">
                                        <span className="font-mono text-sm font-bold bg-black text-white px-2">{course.hours}</span>
                                        {course.status === 'completed' && (
                                            <a href={course.link} target="_blank" className="font-bold text-sm underline decoration-2 hover:text-violet-600">
                                                {t('skills.certifications.link')} &rarr;
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    </section>
  );
}

export default Skills;