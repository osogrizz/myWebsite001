/* eslint-disable no-undef */
import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode')

  useEffect(() => {
    if (!darkMode) {
      document.querySelector('body').classList.add('light-theme')
    } else {
      document.querySelector('body').classList.remove('light-theme')
    }
  }, [darkMode])
  return [darkMode, setDarkMode]
}

export default useDarkMode