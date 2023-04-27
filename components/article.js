import styles from './article.module.scss';
import { BsFillPinMapFill, BsCalendar2Check } from "react-icons/bs";


export default function Article({ title, description, items }) {
    
    let itemsMapped;
    if (items !== null) {
        itemsMapped = items.map(item => {
            return (
                <div className={styles.item_container}>
                    {
                        item.url === null
                            ? <h3>{item.name}</h3>
                            : <a href={item.url}><h3>{item.name}</h3></a>
                    }
                    <p className={styles.description}>{item.description}</p>
                    <ul className={styles.list}>
                        <li><BsFillPinMapFill className={styles.icon} />{item.location}</li>
                        <li><BsCalendar2Check className={styles.icon} />{item.date}</li>
                    </ul>
                </div>
            )
        })
    }

    return (
        <article className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {itemsMapped}
        </article>
    )
}