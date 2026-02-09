function SectionTitle({title}){
    return(
        <div className="flex items-center justify-center md:justify-start gap-4 mb-12 md:mb-16">
            <div className="hidden md:block w-8 h-8 bg-black flex-shrink-0"></div>  {/* Cuadrado decorativo */}
            <h2 className="text-5xl md:text-6xl lg:text-6xl font-black font-grotesk uppercase text-center md:text-left">
                {title}
            </h2>
            <div className="hidden md:block flex-1 h-2 bg-black"></div> {/* Línea decorativa */}

        </div>
    )
}

export default SectionTitle;