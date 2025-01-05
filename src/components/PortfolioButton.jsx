import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../providers/ThemeContext';
import { useNavigate } from 'react-router-dom';

export const PortfolioButton = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleOpenPortfolio = () => {
    navigate('/portfolio');
  };

  return (
    <div className="relative mt-24 flex flex-col items-center sm:items-end lg:items-end sm:absolute sm:right-40 md:relative">
      <button
        onClick={handleOpenPortfolio}
        className={`px-6 py-2 text-sm font-light rounded-md shadow border transition-all ${
          isDarkMode ? 'bg-slate-950 text-white hover:bg-slate-900 border-green-400' : 'bg-white text-neutral-800 hover:bg-gray-100'
        }`}
      >
        My Portfolio <FontAwesomeIcon icon={faBriefcase} className="ml-2" />
      </button>

      <div className="mt-12 sm:mt-0"></div>
    </div>
  );
};






