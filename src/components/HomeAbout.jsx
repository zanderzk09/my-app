import { useTheme } from "../providers/ThemeContext"

export const HomeAbout = () => {

  const { isDarkMode } = useTheme();

  return (
    <div className="relative items-center flex flex-col px-4 sm:px-8 md:px-16">

      <div className="mt-40">
        <h1 className={`text-4xl text-center font-bold ${isDarkMode ? 'bg-black text-white' : 'bg-white text-neutral-800'}`}>
          About me
        </h1>
      </div>

      <div className="relative mt-5 items-center flex flex-col">
        <a 
          href="https://www.google.com/search?gs_ssp=eJzj4tFP1zc0KkzKMC40TDNg9BLLSSxWyE0sSk8syiwBMpMzMhMLEosB5noMyg&q=las+margaritas+chiapas&rlz=1C5CHFA_enMX1108MX1108&oq=Las+mAR&gs_lcrp=EgZjaHJvbWUqBwgBEC4YgAQyBggAEEUYOTIHCAEQLhiABDIKCAIQLhixAxiABDINCAMQLhiDARixAxiABDINCAQQABixAxjJAxiABDIHCAUQABiABDIKCAYQABixAxiABDIHCAcQLhiABDINCAgQLhivARjHARiABNIBCDU3NjJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-neutral-800 text-center font-bold ${isDarkMode ? 'bg-black text-white' : 'bg-white text-neutral-800'}`}
        >
          Las Margaritas, Chiapas, México 📌
        </a>

      </div>



      <div className="relative justify-center mt-10 flex flex-col md:flex-row items-center lg:items-start sm:items-center md:items-start gap-6 md:gap-8 lg:gap-10">
        <img
          src="assets/me/develop.jpg"
          className="w-1/2 h-auto sm:w-1/2 md:w-1/2 lg:w-1/2 object-cover rounded-xl"
          alt="Development"
        />
        <p className={`text-xs sm:text-sm md:text-sm lg:text-sm text-center md:text-left ${isDarkMode ? 'bg-black text-white' : 'bg-white text-neutral-800'}`}>
          I am a software developer with experience in various frontend <br/>
          and backend technologies. <br/>
          Currently, I focus on working on frontend projects using React <br/>
          and backend development with Node.js as my main technology.
        </p>
      </div>





    </div>
  )
} 
