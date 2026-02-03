import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen text-black">
      <div className="fixed inset-0 z-0 opacity-10 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="fixed inset-0 z-0 opacity-10 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      <Navbar />

      <main className="flex flex-col w-full relative z-10"> 
        
        <Hero id="home"/> 
        
        <div className="px-4 flex flex-col items-center gap-10">
            {/* Nota: scroll-mt-24 ayuda a que al bajar, la navbar no tape el título */}
            <section id="about" className="scroll-mt-24 h-screen w-full flex items-center justify-center border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-4xl font-bold font-grotesk">About Me</h2>
            </section>

            <section id="skills" className="scroll-mt-24 h-screen w-full flex items-center justify-center border-4 border-black bg-yellow-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-4xl font-bold font-grotesk">Skills</h2>
            </section>

            <section id="projects" className="scroll-mt-24 h-screen w-full flex items-center justify-center border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-4xl font-bold font-grotesk">Projects</h2>
            </section>

            <section id="contact" className="scroll-mt-24 h-screen w-full flex items-center justify-center border-4 border-black bg-pink-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-4xl font-bold font-grotesk">Contact</h2>
            </section>
        </div>

      </main>
    </div>
  )
}

export default App