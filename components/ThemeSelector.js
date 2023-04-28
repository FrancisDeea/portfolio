import styles from './ThemeSelector.module.scss';

import { useState, useEffect } from 'react'

import { useTheme } from 'next-themes'

import { BsSun, BsMoon } from 'react-icons/bs'


export default function ThemeSelector({ lang }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    function handleClick() {
        if (theme == "dark") {
            setTheme("light")
        } else if (theme == "light") {
            setTheme("dark")
        }
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className={styles.container} onClick={handleClick}>
            {
                theme == 'dark'
                    ? <><BsMoon className={styles.icon} /> {lang["btn-dark-mode"]}</>
                    : <><BsSun className={styles.icon} /> {lang["btn-light-mode"]}</>
            }
        </div>
    )
}