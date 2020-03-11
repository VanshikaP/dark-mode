import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)

  useEffect(() => {   
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkMode])

    const toggleDarkMode = () => {
        // document.body.classList.toggle('dark-mode');
        setDarkMode(!darkMode);
    }
    
    return [darkMode, toggleDarkMode];
}