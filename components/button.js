import Link from 'next/link';
import styles from './button.module.scss'

export default function Button({value, url}) {
    return (
        <button className={styles.btn}>
            <Link href={url}>{value}</Link>
        </button>
    )
}