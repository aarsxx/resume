export const handleToggleClick = () => {
    const element = document.documentElement
    element.classList.toggle('dark')

    document.querySelector('ninja-keys')?.classList.toggle('dark')

    const isDark = element.classList.contains('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
}

document.addEventListener('DOMContentLoaded', () => {
    const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            if(localStorage.getItem('theme') === 'dark') {
                return 'dark'
            } else {
                return 'light'
            }
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        }
        return 'light'
    })()

    if (theme === 'light') {
        document.documentElement.classList.remove('dark')
        document.querySelector('ninja-keys')?.classList.remove('dark')
    } else {
        document.documentElement.classList.add('dark')
        document.querySelector('ninja-keys')?.classList.add('dark')
    }

    window.localStorage.setItem('theme', theme)

    document.getElementById('themeToggle')?.addEventListener('click', handleToggleClick)
})
