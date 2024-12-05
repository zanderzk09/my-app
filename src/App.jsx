import { HomePage } from "./components/HomePage"
import { useTheme } from "./providers/ThemeContext"

export const App = () => {

  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <HomePage/>
    </div>
  )
}

