import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex space-x-2 text-sm">
      <input
        id="theme-toggle"
        type="checkbox"
        className="hidden"
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        checked={theme === 'dark'}
      />
      {
        <label
          htmlFor="theme-toggle"
          className={`swap swap-rotate ${
            theme === 'light' ? 'swap-active' : ''
          }`}
        >
          <SunIcon className="swap-on h-5 w-5" />
          <MoonIcon className="swap-off h-5 w-5" />
        </label>
      }
    </div>
  )
}
