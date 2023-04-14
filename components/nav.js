import styles from './nav.module.scss'
import Link from 'next/link'

export default function Nav() {
    return (
            <nav>
                <ul className={styles.list_container} >
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="#">About me</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
            </nav>
    )
}