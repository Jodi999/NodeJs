const CardLayout = ({children}) => {
    return (
        // Mengganti 'object-center' dan 'justify-center' yang tidak relevan di sini
        // Menambahkan 'mx-auto' untuk pemusatan horizontal
        <div className="relative drop-shadow-xl  max-w-xl h-64 overflow-hidden rounded-xl bg-[#3d3c3d] mx-auto mb-5"> 
            <div className="absolute flex items-center p-5 justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
                {children}
            </div>
            <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
        </div>

    )
}

export default CardLayout;