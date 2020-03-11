import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)
    
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        setDarkMode(!darkMode);
    }
    
    return [darkMode, toggleDarkMode];
}