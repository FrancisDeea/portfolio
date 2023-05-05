import styles from './project.module.scss'
import Image from 'next/image'

export default function Project({ img, name, description, stack, url, show, alt }) {

    return (
        <a href={url} target="_blank">
            <article className={styles.container}>
                <div className={styles.img_container}>
                    <Image
                        priority={name === "Todo-list app"}
                        className={styles.image}
                        src={img}
                        alt={alt}
                        fill
                        sizes="(max-width: 850px) 40vw,
                            (max-width: 410px) 50vw,
                            30vw"
                    />
                </div>
                <div className={styles.content_container}>
                    <h3 className={styles.title}>{name}</h3>
                    <p className={styles.text}>{description}</p>
                    <div className={styles.stack_container}>
                        {stack.map((item, index) => <span key={index} className={styles.stack}>{item}</span>)}
                    </div>
                </div>
            </article>
        </a>
    )
}