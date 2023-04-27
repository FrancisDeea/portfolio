import styles from './nav.module.scss'
import Link from 'next/link'

export default function Nav({onClick}) {
    return (
            <nav>
                <ul className={styles.list_container} >
                    <li><Link onClick={onClick} href="/">Home</Link></li>
                    <li><Link onClick={onClick} href="/projects">Projects</Link></li>
                    <li><Link onClick={onClick} href="/about">About me</Link></li>
                    <li><Link onClick={onClick} href="/contact">Contact</Link></li>
                </ul>
            </nav>
    )
}