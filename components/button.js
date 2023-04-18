import Link from 'next/link';
import styles from './button.module.scss'

export default function Button({ value, url }) {
    return (
        <Link className={styles.btn} href={url}>{value}</Link>
    )
}