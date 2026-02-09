import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { TypeAnimation } from "react-type-animation";

function Footer() {
    const { t , i18n} = useTranslation();
    const currentYear = new Date().getFullYear();

    const ingredients = t('footer.ingredients' , {returnObjects: true});
    const typingSequence = Array.isArray(ingredients)
        ? ingredients.flatMap(item => [item, 2000]) : ['love',2000];

    return (
        <footer className="w-full bg-black text-white border-t-4 border-black font-grotesk pt-10 pb-6">
      
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        

        <div className="text-center md:text-left">
            <p className="text-yellow-400 font-mono font-bold text-lg mb-2">
                {t('footer.text')}
            </p>
            <a href="#contact"
                className="text-5xl font-black tracking-tighter hover:text-violet-400 transition-colors cursor-pointer decoration-transparent">
                {t('footer.cta')}
            </a>
        </div>

        {/* DERECHA: Redes Sociales */}
        <div className="flex gap-4">
            {/* GITHUB */}
            <a 
                href="https://github.com/marbobe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black p-3 border-2 border-white hover:bg-yellow-400 hover:border-yellow-400 hover:translate-y-[-4px] transition-all shadow-[4px_4px_0px_0px_#8b5cf6]" // Sombra violeta
                aria-label="GitHub"
            >
                <FaGithub size={30} />
            </a>

            {/* LINKEDIN */}
            <a 
                href="mailto:https://www.linkedin.com/in/marboubernad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black p-3 border-2 border-white hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:translate-y-[-4px] transition-all shadow-[4px_4px_0px_0px_#8b5cf6]"
                aria-label="LinkedIn"
            >
                <FaLinkedin size={30} />
            </a>

        </div>
      </div>

      {/* COPYRIGHT / BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-gray-400">
        <p>© {currentYear} {t('generic.title')}. {t('footer.rights')}</p>
        <div className="flex items-center gap-1 mt-2 md:mt-0">
            <span>{t('footer.created')}</span>
            <span className="inline-block min-w-[75px] text-left"> 
                <TypeAnimation
                    key={i18n.language}
                    sequence={typingSequence}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    cursor={false} 
                />
            </span>
        </div>
      </div>

    </footer>
    )
}

export default Footer;