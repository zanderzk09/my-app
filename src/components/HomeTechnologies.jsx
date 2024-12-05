import { useTheme } from '../providers/ThemeContext';


export const HomeTechnologies = () => {


  const { isDarkMode } = useTheme();


  return (
    <div className="relaive flex mt-20 flex-col items-center">
      <h1 className={`text-center font-bold text-4xl mb-10 ${isDarkMode ? 'bg-black text-white'  : 'bg-white text-neutral-800'}`}>
        Technologies
      </h1>
      <h1 className={`text-center -mt-6 font-bold text-1xl mb-10 ${isDarkMode ? 'bg-black text-white'  : 'bg-white text-neutral-800'} `}>
        What I currently work with 👨‍💻
      </h1>

      <div className="grid grid-cols-4 lg:grid-cols-7  gap-10 place-items-center">
        <div className={`w-20 h-20 rounded-full shadow-md flex items-center justify-center ${isDarkMode ? 'bg-neutral-950'  : 'bg-white'}`}>
          <img
            src="assets/skillsImages/react.png"
            className="w-14 h-14 object-cover"
            alt="React"
          />
        </div>

        <div className={`w-20 h-20 rounded-full shadow-md flex items-center justify-center ${isDarkMode ? 'bg-neutral-950'  : 'bg-white'}`}>
          <img
            src="assets/skillsImages/typescript.png"
            className="w-12 h-12 object-cover"
            alt="TypeScript"
          />
        </div>

        <div className={`w-20 h-20 rounded-full shadow-md flex items-center justify-center ${isDarkMode ? 'bg-neutral-950'  : 'bg-white'}`}>
          <img
            src="assets/skillsImages/tailwind.png"
            className="w-10 h-6 object-cover"
            alt="Tailwind"
          />
        </div>

        <div className={`w-20 h-20 rounded-full shadow-md flex items-center justify-center ${isDarkMode ? 'bg-neutral-950'  : 'bg-white'}`}>
          <img
            src="assets/skillsImages/nodeJS.png"
            className="w-11 h-12 object-cover"
            alt="Node.js"
          />
        </div>

        <div className={`w-20 h-20 rounded-full shadow-md flex items-center justify-center ${isDarkMode ? 'bg-neutral-950'  : 'bg-white'}`}>
          <img
            src="assets/skillsImages/js.png"
            className="w-12 h-12 object-cover"
            alt="JavaScript"
          />
        </div>

        <div className={`w-20 h-20 rounded-full shadow-md flex items-center justify-center ${isDarkMode ? 'bg-neutral-950'  : 'bg-white'}`}>
          <img
            src="assets/skillsImages/jest.png"
            className="w-12 h-12 object-cover"
            alt="Jest"
          />
        </div>

        <div className={`w-20 h-20 rounded-full shadow-md flex items-center justify-center ${isDarkMode ? 'bg-neutral-950'  : 'bg-white'}`}>
          <img
            src="assets/skillsImages/git.png"
            className="w-11 h-12 object-cover"
            alt="Git"
          />
        </div>
      </div>
    </div>
  );
};





