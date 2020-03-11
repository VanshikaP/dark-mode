import useLocalStorage from './useLocalStorage'

export const toggleDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false)
    
    document.getElementsByTagName('body').classList.toggle('dark mode');
    setDarkMode(!darkMode);

    return darkMode;
}