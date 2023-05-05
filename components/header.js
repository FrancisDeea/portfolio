import Link from 'next/link'

import { useEffect, useState, useRef } from 'react'

import Nav from './nav'
import LanguageSelector from './LanguageSelector'
import LanguageSelector2 from './LanguageSelector2'
import ThemeSelector from './ThemeSelector'

import styles from './header.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTerminal, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'


export default function Header({ font, lang }) {

    const [widthView, setWidthView] = useState(null);
    const [show, setShow] = useState(false);
    const modalRef = useRef(null);
    const overlayRef = useRef(null);

    function handleClick() {
        const modal = modalRef.current;
        const overlay = overlayRef.current;

        if (!show) {
            modal.style.visibility = "visible";
            modal.style.width = "80vw";

            overlay.style.visibility = "visible";
            overlay.style.opacity = "1"

            setShow(true)
        } else {
            modal.style.visibility = "hidden"
            modal.style.width = "0vw";

            overlay.style.opacity = "0"
            overlay.style.visibility = "hidden";
            setShow(false)
        }
    }

    useEffect(() => {
        function handleResize() {
            setWidthView(window.innerWidth);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [widthView]);


    return (
        <header className={`${styles.container} ${font.className}`}>
            {widthView > 1023 ? (
                <>
                    <Link href="/" className={styles.logo}>
                        <FontAwesomeIcon icon={faTerminal} style={{ color: "$medium-color", }} />
                        {" "}
                        {lang.logo}
                    </Link>

                    <Nav lang={lang} />

                    <div className={styles.desktop_setting_container}>
                        <LanguageSelector lang={lang} font={font} />
                        <ThemeSelector lang={lang} />
                    </div>
                </>
            ) : (
                <>
                    <Link href="/" className={styles.logo}>
                        <FontAwesomeIcon icon={faTerminal} style={{ color: "$", }} />
                        {" "}
                        {lang.logo}
                    </Link>

                    <div className={styles.modal} ref={modalRef}>
                        <div className={styles.small_container}>
                            <p>Francisco Javier <br />Bernal Cabra <br /> <span className={styles.profession}>Junior Full-Stack Developer</span></p>
                            <hr />
                            <Nav onClick={handleClick} lang={lang} />
                        </div>

                        <div className={styles.small_container}>
                            <p>Settings:</p>
                            <hr />
                            <div className={styles.setting_container}>
                                <LanguageSelector2 lang={lang} />
                                <ThemeSelector lang={lang} />
                            </div>
                        </div>

                        <button className={styles.modal_button} onClick={handleClick}>
                            <FontAwesomeIcon icon={faArrowLeftLong} style={{ color: "var(--text)", }} />
                            {" "}
                        </button>
                    </div>

                    <button className={styles.nav_button} onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars} className={styles.icon} />
                    </button>

                    <div className={styles.overlay} ref={overlayRef} onClick={handleClick}></div>

                </>
            )}
        </header>

    )
}