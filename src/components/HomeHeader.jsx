import { useTheme } from '../providers/ThemeContext';


export const HomeHeader = () => {

  const { isDarkMode } = useTheme();

  return (
    <div className="relative flex flex-col-reverse items-center lg:flex-row lg:items-center lg:gap-6 lg:mt-40 lg:ml-40">
      
      <div className="text-center lg:text-left">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl text-neutral-800 font-bold mt-6 animate__animated animate__backInLeft ${isDarkMode ? 'bg-black text-white' : 'bg-white text-neutral-800'}`}>
          Full Stack <br />
          Developer
        </h1>
        <h1 className={`text-sm sm:text-sm lg:text-sm font-normal text-neutral-800 mt-6 animate__animated animate__backInLeft ${isDarkMode ? 'bg-black text-white' : 'bg-white text-neutral-800'}`}>
          Hello! I am Alexander Arrazate, a software developer. I currently work with <br />
          the React and Node.js stack, leveraging modern technologies to deliver <br />
          high-quality software solutions.
        </h1>
      </div>

      <div className="mt-20 lg:mt-0 lg:ml-20 flex items-center">
        <img
          src="assets/me/meCut.jpg"
          alt="Alexander Arrazate"
          className="w-80 h-80 object-cover rounded-full"
        />
      </div>

    </div>
  );
};



