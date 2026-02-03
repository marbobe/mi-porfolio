import { useTranslation } from 'react-i18next'; // 1. Importamos el hook

function App() {
  // 2. Usamos el hook. 
  // 't' es la función para traducir. 
  // 'i18n' es el objeto que nos permite cambiar el idioma.
  const { t, i18n } = useTranslation();

  // Función para cambiar de idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6">
      
      {/* Botones para cambiar idioma (Solo para probar) */}
      <div className="flex gap-4">
        <button 
          onClick={() => changeLanguage('es')}
          className="bg-white border-2 border-black px-4 py-2 font-bold hover:bg-yellow-300"
        >
          ES
        </button>
        <button 
          onClick={() => changeLanguage('en')}
          className="bg-white border-2 border-black px-4 py-2 font-bold hover:bg-yellow-300"
        >
          EN
        </button>
      </div>

      {/* TARJETA NEO-BRUTALISTA */}
      <div className="
        bg-white 
        p-8 
        border-4 border-black 
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
      ">
        {/* 3. Aquí usamos t('key') en lugar del texto */}
        <h1 className="text-4xl font-bold mb-4 font-mono">
          {t('welcome_title')} 
        </h1>
        
        <p className="text-lg mb-4">
          {t('welcome_text')}
        </p>

        <button className="
          bg-violet-600 text-white font-bold py-2 px-4 
          border-2 border-black 
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
          hover:translate-y-1 hover:shadow-none transition-all
        ">
          {t('button_click')}
        </button>
      </div>

    </div>
  )
}

export default App