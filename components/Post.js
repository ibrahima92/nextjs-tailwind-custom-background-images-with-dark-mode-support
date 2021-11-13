import { useState } from 'react'

const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

export default function Post() {
  const [theme, setTheme] = useState(LIGHT_THEME)
  const switchTheme = () => {
    if (!document.documentElement.classList.contains(DARK_THEME)) {
      document.documentElement.classList.add(DARK_THEME)
      setTheme(DARK_THEME)
    } else {
      document.documentElement.classList.remove(DARK_THEME)
      setTheme(LIGHT_THEME)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 w-96 pb-4 rounded-3xl shadow-lg overflow-hidden">
      <div className="bg-nature-light dark:bg-nature-dark bg-cover object-cover bg-center h-56 w-full" />
      <div className="p-4 text-left">
        <h3 className="text-xl text-black dark:text-white font-semibold">My First Post</h3>
        <p className="mt-2 mb-10 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua...
        </p>
        <button
          onClick={switchTheme}
          className="float-right px-6 py-2.5 bg-gray-800 dark:bg-white text-gray-200 dark:text-gray-800 rounded-full capitalize">
          {theme} Mode
        </button>
      </div>
    </div>
  )
}
