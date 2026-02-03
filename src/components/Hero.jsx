import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const { t, i18n } = useTranslation(); 

  const roles = t('hero.roles', { returnObjects: true });
  const typingSequence = Array.isArray(roles) 
    ? roles.flatMap(role => [role, 1500]).concat(' ')
    : ['Developer', 1000]; 

  return (
    <section 
      id="home" 
      className="relative mt-20 min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center bg-white text-black overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="absolute inset-0 z-0 opacity-10 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center gap-6">
        
        <div className="inline-block bg-yellow-300 border-2 border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
             <span className="font-bold font-mono text-sm tracking-widest uppercase">
                {t('hero.greeting')}
             </span>
        </div>

        <h1 className="font-grotesk font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-none">
          {t('hero.name')}
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-2 text-xl sm:text-2xl font-mono font-medium mt-2">
            <span className="bg-black text-white px-2 py-1">
          
                <TypeAnimation
                    key={i18n.language} 
                    sequence={typingSequence}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    cursor={true}
                />
            </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <a 
            href="#projects"
            className="
              bg-violet-600 text-white font-grotesk font-bold text-xl py-4 px-10 
              border-2 border-black 
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
              hover:translate-y-1 hover:shadow-none 
              hover:bg-violet-700
              transition-all duration-200 
            "
          >
            {t('hero.button_projects')}
          </a>

          <a 
            href="#contact"
            className="
              bg-white text-black font-grotesk font-bold text-xl py-4 px-10 
              border-2 border-black 
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
              hover:translate-y-1 hover:shadow-none 
              hover:bg-gray-100
              transition-all duration-200 
            "
          >
            {t('hero.button_contact')}
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;