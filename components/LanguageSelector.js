import styles from './LanguageSelector.module.scss'

import { useState } from 'react';

import Link from 'next/link'

export default function LanguageSelector({ lang }) {
    const [isActive, setIsActive] = useState(false);



    return (
        <div className={styles.container} >
            {
                isActive ? (
                    <ul className={styles.list_container}>
                        <li onClick={() => setIsActive(false)} className={styles.list_item}><Link className={styles.link} href="" locale="es">{lang["btn-es"]}</Link></li>
                        <li onClick={() => setIsActive(false)} className={styles.list_item}><Link className={styles.link} href="" locale="en">{lang["btn-en"]}</Link></li>
                    </ul>
                )
                    : <span onClick={() => setIsActive(true)}>{lang["btn-lang"]}</span>

            }
        </div>
    )
}