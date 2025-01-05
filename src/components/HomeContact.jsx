import { useTheme } from '../providers/ThemeContext';

export const HomeContact = () => {

  const { isDarkMode } = useTheme();
  return (
    <div className="relative items-center mt-40">
      <div>
        <h1 className={`text-center font-bold text-4xl mb-10 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-white text-neutral-800'}`}>
          Contact
        </h1>
      </div>

      <div className="relative -mt-6">
        <h1 className={`text-center font-bold text-1xl mb-10 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-white text-neutral-800'}`}>
          You can send me an email ✉️
        </h1>
      </div>

      <div className="relative mt-12">
        <h1 className={`text-center text-neutral-800 font-bold text-1xl mb-10 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-white text-neutral-800'}`}>
          Email:
        </h1>
        <a
          href="mailto:isaizander09@gmail.com"
          className={`text-center block -mt-5 font-light text-1xl mb-10 hover:underline ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-white text-neutral-800'}`}
        >
          isaizander09@gmail.com
        </a>
      </div>
    </div>
  );
};

