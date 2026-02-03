function App() {
  return (
    // Contenedor principal: altura mínima de la pantalla (min-h-screen) y fondo gris claro
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      {/* TARJETA DE PRUEBA */}
      <div className="
        bg-white 
        p-8 
        border-4 border-black 
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
      ">
        <h1 className="text-4xl font-bold mb-4 font-mono">
          ¡Hola Mundo!
        </h1>
        <p className="text-lg mb-4">
          Este es mi primer componente estilo Neo-Brutalism.
        </p>
        <button className="
          bg-violet-600 text-white font-bold py-2 px-4 
          border-2 border-black 
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
          hover:translate-y-1 hover:shadow-none transition-all
        ">
          Click me
        </button>
      </div>

    </div>
  )
}

export default App