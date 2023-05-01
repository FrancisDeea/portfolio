import styles from './ThemeSelector.module.scss';

import { useState, useEffect, useRef } from 'react'

import { useTheme } from 'next-themes'

import { BsSun, BsMoon } from 'react-icons/bs'


export default function ThemeSelector({ lang }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const toggle = useRef(null);

    function handleChange(e) {
        e.target.checked ? setTheme("dark") : setTheme("light")
    }

    useEffect(() => {
        setMounted(true)
        
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className={styles.container} >
            <BsMoon className={styles.icon} />
            <label htmlFor="toggle" className={styles.toggle_container}>
                <input id="toggle" type="checkbox" onChange={handleChange} checked={theme == "dark" ? true : false} ></input>
                <div className={styles.toggle}></div>
            </label>
        </div>
    )
}