import styles from './footer.module.scss'

import { BsFillHeartFill, BsFillCupHotFill } from "react-icons/bs";

export default function Footer({ font }) {
    return (
        <footer className={`${styles.container} ${font.className}`}>
            <span>Created with <BsFillHeartFill className={styles.icon} /> by <strong>Francis Bernal</strong> </span>
        </footer>
    )
}