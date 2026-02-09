import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaPaperPlane} from 'react-icons/fa';
import { useRef , useState , useEffect} from 'react';
import Notification from './Notification';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
  const { t } = useTranslation();
  const formRef = useRef(); 
  const captchaRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState(null); 

  useEffect(() => {
    if (feedback) {
        const timer = setTimeout(() => {
            setFeedback(null);
        }, 5000);
        return () => clearTimeout(timer);
    }
  }, [feedback]);

  const handleSubmit = (e) => {
    e.preventDefault();

    {/* Validación del Captcha */}
    const token = captchaRef.current.getValue();

    if(!token) {
        setFeedback('captcha');
        return;
    }

    setIsSending(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setFeedback('success');
          formRef.current.reset();
          captchaRef.current.reset();
          setIsSending(false);
      }, (error) => {
          console.log(error.text);
          setFeedback('error');
          setIsSending(false);
      });
  };

  return (
    <section id="contact" className="w-full py-20 bg-red-200 border-4 border-black scroll-mt-24 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-6xl mx-auto px-4">

         {/* TÍTULO DE LA SECCIÓN con decoración */}
        <SectionTitle title={t('contact.title')}/>
        
        {/* ESTRUCTURA GRID: 12 columnas en total */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            
            {/* --- IZQUIERDA (4 columnas): Título y Texto --- */}
            <div className="lg:col-span-4 flex flex-col gap-8 top-24">
                <div className="lg:col-span-4 flex flex-col justify-between h-full py-4 sticky top-24">
                    
                    {/* Greeting */}
                    <div className="bg-violet-600 text-white mb-16 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg] hover:rotate-0 transition-transform duration-300 cursor-default">
                        <h3 className="text-4xl font-black font-grotesk uppercase text-center leading-none">
                            {t('contact.greeting')}<br/>
                        </h3>
                    </div>

                    <div className="relative pl-8">
                        {/* Línea vertical decorativa */}
                        <div className="absolute left-0 top-0 w-1 h-full bg-black"></div>
                        <p className="font-mono font-bold text-xl leading-snug">
                            {t('contact.text')}
                        </p>
                    </div>

                    <div className=" mt-12 lg:mt-20">
                        <div className="flex gap-4 items-center mb-4">
                            <span className="font-mono text-sm uppercase font-bold bg-white px-2 border-2 border-black">{t('contact.socials')}</span>
                            <div className="h-0.5 bg-black flex-1"></div>
                        </div>
                        <div className="flex gap-4">
                            <a 
                                href="https://www.linkedin.com/in/marboubernad/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="hover:text-blue-700 transition-colors"
                            ><FaLinkedin size={36}/></a>

                            <a 
                                href="https://github.com/marbobe" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="hover:text-gray-700 transition-colors"
                            ><FaGithub size={36}/></a>
                        </div>
                    </div>

                    
                </div>
            </div>

            {/* --- DERECHA (8 columnas): La Tarjeta del Formulario --- */}
            <div className="lg:col-span-8">
                
                <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 relative">
                    
                    {/* Decoración chincheta*/}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 font-mono font-bold uppercase rotate-[-2deg] shadow-[4px_4px_0px_0px_#8b5cf6]">
                        {t('contact.message_title')}
                    </div>

                    {/*Formulario */}
                    <form id='formulario' ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="font-bold font-mono text-xs uppercase text-gray-500">{t('contact.name_label')}</label>
                                <input 
                                    id='name'
                                    type="text" 
                                    name="name"  
                                    required
                                    disabled={isSending}
                                    className="w-full bg-gray-50 border-2 border-black p-3 font-mono focus:bg-yellow-50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor='email' className="font-bold font-mono text-xs uppercase text-gray-500">{t('contact.email_label')}</label>
                                <input 
                                    id='email'
                                    type="email" 
                                    name="email" 
                                    required
                                    disabled={isSending}
                                    className="w-full bg-gray-50 border-2 border-black p-3 font-mono focus:bg-yellow-50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50"
                                />
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                             <label htmlFor='message' className="font-bold font-mono text-xs uppercase text-gray-500">{t('contact.message_label')}</label>
                             <textarea 
                                id='message'
                                rows="3" 
                                name="message" 
                                required
                                disabled={isSending}
                                className="w-full bg-gray-50 border-2 border-black p-3 font-mono focus:bg-yellow-50 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none disabled:opacity-50"
                             ></textarea>
                        </div>

                        <div className="w-full flex justify-center md:justify-end">
                            <div className="transform scale-75 sm:scale-100 transition-transform">
                                <ReCAPTCHA
                                    ref={captchaRef}
                                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                />
                            </div>

                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={isSending}
                            className={`
                                mt-2 bg-black text-white font-black font-grotesk text-xl py-4 
                                hover:bg-violet-600 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                                transition-all flex justify-center items-center gap-3 
                                active:translate-y-0 active:shadow-none
                                disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
                            `}
                        >
                            {isSending ? 'SENDING...' : t('contact.send_btn')} 
                            {!isSending && <FaPaperPlane className="text-lg"/>}
                        </button>
                    </form>
                </div>
            </div>

        </div>
      </div>

      {/* --- NOTIFICACIÓN según feedback --- */}
    <Notification status={feedback} onClose={()=> setFeedback(null)} t={t} />
    </section>
  );
}

export default Contact;