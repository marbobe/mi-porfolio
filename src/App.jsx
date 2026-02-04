import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
        
        <Hero/> 
        
        <div className="px-4 flex flex-col items-center gap-10 pb-32">

            <About />

            <Skills />

            <Projects />

            <Contact />
        </div>

      </main>

      <div className='relative z-20'> <Footer/> </div>
    </div>
  )
}

export default App