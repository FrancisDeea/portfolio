import styles from './LanguageSelector.module.scss'
import { useState } from 'react';
import Link from 'next/link'

export default function LanguageSelector() {
    const [isActive, setIsActive] = useState(false);



    return (
        <div className={styles.container} >
            {
                isActive ? (
                    <ul className={styles.list_container}>
                        <li onClick={() => setIsActive(false)} className={styles.list_item}><Link className={styles.link} href="" locale="es">Spanish</Link></li>
                        <li onClick={() => setIsActive(false)} className={styles.list_item}><Link className={styles.link} href="" locale="en">English</Link></li>
                    </ul>
                )
                    : <span onClick={() => setIsActive(true)}>Language</span>

            }
        </div>
    )
}