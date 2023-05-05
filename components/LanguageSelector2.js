import styles from './LanguageSelector2.module.scss'

import { useState } from 'react';

import Link from 'next/link'

export default function LanguageSelector({ lang, font }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.container} style={isActive ? { "width": "200px", "height": "100px" } : { "transitionDelay": "100ms" }} onClick={() => setIsActive(false)}>
            <button className={`${styles.btn_lang}`} onClick={(e) => { setIsActive(true); e.stopPropagation(); }} style={isActive ? { "opacity": "0" } : { "opacity": "1", "transitionDelay": "500ms" }}>{lang["btn-lang"]}</button>
            <div className={styles.container_lang} style={isActive ? { "inset": "10px" } : null}>
                <p>{lang["select"]}</p>
                <Link className={styles.link} href="" locale="es" onClick={() => setIsActive(false)}>{lang["btn-es"]}</Link>
                <Link className={styles.link} href="" locale="en" onClick={() => setIsActive(false)}>{lang["btn-en"]}</Link>
            </div>
        </div>

    )
}