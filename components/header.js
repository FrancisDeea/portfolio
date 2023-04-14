import Nav from './nav'
import styles from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTerminal, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState, useRef } from 'react'

export default function Header({font}) {
    const [widthView, setWidthView] = useState(null);
    const [show, setShow] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        function handleResize() {
            setWidthView(window.innerWidth);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [widthView]);

    useEffect(() => {
        if (show) {
            modalRef.current.style.width = "60vw"
        }

        return () => modalRef.current.style.width = "0vw"
    }, [show])

    return (
        <header className={`${styles.container} ${font.className}`}>
            {widthView > 850 ? (
                <>
                    <span className={styles.logo}>
                        <FontAwesomeIcon icon={faTerminal} style={{color: "$medium-color",}} />
                        {" "}
                        Hello. I'm Francis.
                    </span>
                    <Nav key="desktop" />
                </>
            ) : (
                <>
                    <span className={styles.logo}>
                        <FontAwesomeIcon icon={faTerminal} style={{color: "$",}} />
                        {" "}
                        Hello. I'm Francis.
                    </span>
                    <div key="modal" className={styles.modal} ref={modalRef}>
                        <Nav key="mobile" />
                        <button className={styles.modal_button} onClick={() => {setShow(!show)}}>
                            <FontAwesomeIcon icon={faArrowLeftLong} style={{color: "#ffffff",}} />
                            {" "}
                            Go back
                        </button>
                    </div>
                    <button className={styles.nav_button} onClick={() => setShow(!show)}>
                        <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} />
                    </button>
                </>
            )}
        </header>

    )
}