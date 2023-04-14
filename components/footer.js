import styles from './footer.module.scss'

export default function Footer({font}) {
    return (
        <footer className={`${styles.container} ${font.className}`}>
            <span>Made with love by Francis - 2023</span>
        </footer>
    )
}