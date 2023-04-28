import Head from 'next/head'
import styles from '../styles/contact.module.scss'
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Contact() {
    const { t } = useTranslation('contact');

    return (
        <>
            <Head>
                <title>Contact Francis</title>
                <meta name="description" content="Contact to Francis, a junior fullstack developer based in Málaga, Spain" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <section className={styles.container}>
                <h2 className={styles.title}>{t('title')}</h2>
                <p className={styles.p}>{t('description')}</p>
                <div className={styles.social_container}>
                    <a href="https://www.linkedin.com/in/francis-bernal-full-stack-developer/" target="_blank"><BsLinkedin className={styles.icon} /></a>
                    <a href="mailto:francisbernal14@gmail.com"><BsFillEnvelopeFill className={styles.icon} /></a>
                    <a href="https://github.com/FrancisDeea" target='_blank'><BsGithub className={styles.icon} /></a>
                </div>
            </section>
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'contact'
        ])),
      },
    }
  }