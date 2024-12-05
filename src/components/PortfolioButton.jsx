import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from '../providers/ThemeContext';

export const PortfolioButton = () => {

  const { isDarkMode } = useTheme();


  return (
    <div className="relative flex flex-col items-center sm:items-end">
      <button className={`px-6 py-2 mt-24 text-sm font-light rounded-md shadow transition-all sm:absolute sm:right-40 ${isDarkMode ? 'bg-neutral-900 text-white hover:bg-neutral-800' : 'bg-white text-neutral-800 hover:bg-gray-100'}`}>
        My Portfolio <FontAwesomeIcon icon={ faBriefcase } className="ml-2" />
      </button>

      <div className="mt-12 sm:mt-0">
      </div>
    </div>
  );
};




