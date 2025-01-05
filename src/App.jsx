import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeContext';
import { HomePage } from './components/HomePage';
import { useTheme } from './providers/ThemeContext';
import { Portfolio } from './portfolio/Portfolio';

export const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <Router>
      <div className={`${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>


  );
};


