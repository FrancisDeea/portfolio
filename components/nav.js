import styles from './nav.module.scss'
import Link from 'next/link'

export default function Nav({onClick, lang}) {
    return (
            <nav className={styles.nav}>
                <ul className={styles.list_container} >
                    <li><Link onClick={onClick} href="/">{lang.nav["1"]}</Link></li>
                    <li><Link onClick={onClick} href="/projects">{lang.nav["2"]}</Link></li>
                    <li><Link onClick={onClick} href="/about">{lang.nav["3"]}</Link></li>
                    <li><Link onClick={onClick} href="/contact">{lang.nav["4"]}</Link></li>
                </ul>
            </nav>
    )
}