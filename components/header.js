import Link from 'next/link'

import { useEffect, useState, useRef } from 'react'

import Nav from './nav'
import LanguageSelector from './LanguageSelector'
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
        if (modalRef.current.style.width !== '0vw') {
            modalRef.current.style.width = "0vw";
            setShow(false);
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

    useEffect(() => {
        const overlay = overlayRef.current;
        const modal = modalRef.current;

        if (show) {
            modal.style.width = "70vw";
        }

        return () => {
            modal.style.width = "0vw";
        }
    }, [show])

    return (
        <header className={`${styles.container} ${font.className}`}>
            {widthView > 850 ? (
                <>
                    <Link href="/" className={styles.logo}>
                        <FontAwesomeIcon icon={faTerminal} style={{ color: "$medium-color", }} />
                        {" "}
                        {lang.logo}
                    </Link>
                    <Nav lang={lang} />
                    <div className={styles.selector_container}>
                        <LanguageSelector lang={lang} />
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
                        <Nav onClick={handleClick} lang={lang} />
                        <div className={styles.selector_container}>
                            <LanguageSelector lang={lang} />
                            <ThemeSelector lang={lang} />
                        </div>
                        <button className={styles.modal_button} onClick={() => { setShow(!show) }}>
                            <FontAwesomeIcon icon={faArrowLeftLong} style={{ color: "var(--text)", }} />
                            {" "}
                            {lang["btn-modal"]}
                        </button>
                    </div>
                    <div className={styles.overlay} ref={overlayRef} onClick={handleClick}></div>
                    <button className={styles.nav_button} onClick={() => setShow(!show)}>
                        <FontAwesomeIcon icon={faBars} className={styles.icon} />
                    </button>
                </>
            )}
        </header>

    )
}