import { FaCheckCircle, FaExclamationTriangle, FaRobot } from 'react-icons/fa';

function Notification({status, onClose, t}){

    if(!status) return null;

    const config = {
        success: {
        bg: 'bg-green-400',
        icon: <FaCheckCircle size={24} />,
        title: t('contact.success_title'),
        desc: t('contact.success_desc'),
        },
        error: {
        bg: 'bg-red-400',
        icon: <FaExclamationTriangle size={24} />,
        title: t('contact.error_title'),
        desc: t('contact.error_desc'),
        },
        captcha: {
        bg: 'bg-yellow-400',
        icon: <FaRobot size={24} />,
        title: t('contact.captcha_title'),
        desc: t('contact.captcha_desc'),
        }
    };

    const current = config[status];

    return(
         <div className={`
                    fixed bottom-4 mr-4 right-4 z-50 flex items-center gap-4 p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-bounce-in
                    ${current.bg}
                  `}>
                    <div className="bg-white p-2 border-2 border-black rounded-full">{current.icon}</div>
                    <div>
                        <h4 className="font-black font-grotesk uppercase text-xl">{current.title}</h4>
                        <p className="font-mono font-bold text-sm">{current.desc}</p>
                    </div>
                    {/* Botón de cerrar manual */}
                    <button onClick={() => setFeedback(null)} className="ml-4 font-black hover:scale-125 transition-transform">X</button>
                  </div>
    );
}

export default Notification