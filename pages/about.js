import styles from '../styles/about.module.scss'
import profilePic from '../public/assets/profile.jpg'

import Image from 'next/image'
import Head from 'next/head'

import Button from '../components/button'
import Article from '../components/article'

import { useRouter } from 'next/router'

import en from '../public/locales/en/cv'
import es from '../public/locales/es/cv'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { info } from '../utils/personal'
import { BsLinkedin, BsFillPinMapFill, BsSuitHeartFill } from "react-icons/bs";


export default function About() {
    const { t } = useTranslation('about')
    const { locale } = useRouter();
    const infos = locale === "en" ? en : es;

    return (
        <>
            <Head>
                <title>Francis Bernal Cabra | About me</title>
                <meta name="description" content="Discover all you need to know about me!" />
                <meta name="keywords" content="developer, javascript, fullstack, malaga" />
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <section className={styles.container}>
                <h2 className={styles.title}>{t('title')}</h2>
                <div className={styles.column_container}>
                    <aside className={styles.aside_container}>
                        <figure className={styles.fig}>
                            <div className={styles.img_container}>
                                <Image
                                    className={styles.img_profile}
                                    src={profilePic}
                                    alt="a profile's photo of Francis."
                                    fill
                                    priority
                                />
                            </div>
                            <figcaption>Francisco Javier Bernal Cabra <br /> Junior Full-Stack Developer</figcaption>
                        </figure>
                        <ul className={styles.list_info}>
                            <li><BsSuitHeartFill className={`${styles.icon} ${styles.heart}`} /><span>27 años</span></li>
                            <li><BsFillPinMapFill className={`${styles.icon} ${styles.location}`} /><span>Málaga, España</span></li>
                            <li><BsLinkedin className={`${styles.icon} ${styles.linked}`} /><span>LinkedIn</span></li>
                        </ul>
                        <div className={styles.btn_container}>
                            <Button url="/contact" value={t('btn')} />
                            <Button url="https://google.es" value={t('btn2')} />
                        </div>
                    </aside>
                    <div className={styles.article_container}>
                        {
                            infos.map(item => {
                                return (
                                    <Article
                                        key={item.title}
                                        title={item.title}
                                        description={item.description}
                                        items={item.items}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'about'
            ])),
        },
    }
}