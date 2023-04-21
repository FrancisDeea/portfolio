import styles from './footer.module.scss'
import { BsFillHeartFill, BsFillCupHotFill } from "react-icons/bs";

export default function Footer({font}) {
    return (
        <footer className={`${styles.container} ${font.className}`}>
            <span>Created by <strong>Francis Bernal</strong> with <BsFillHeartFill className={styles.icon} /></span>
        </footer>
    )
}