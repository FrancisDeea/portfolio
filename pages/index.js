import Head from 'next/head'
import Image from 'next/image'

import profilePic from '/public/assets/profile.jpg'
import styles from '@components/styles/Home.module.css'

import Button from '../components/button'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Home() {
  const { t } = useTranslation('index')

  return (
    <>
      <Head>
        <title>Francis Bernal Cabra | Full-Stack Developer</title>
        <meta name="description" content="Hello, I am Francis, a JavaScript Full-Stack Developer based in Málaga, Spain. Check out my site!" />
        <meta name="keywords" content="developer, javascript, react, spain" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section id={styles.section_container}>
        <div className={styles.img_container}>
          <Image
            className={styles.img_profile}
            src={profilePic}
            alt="a profile's photo of Francis."
            fill
            priority
            sizes="(max-width: 850px) 40vw,
                    (max-width: 410px) 60vw,
                      30vw"
          />
        </div>
        <h1>{t('h1')}</h1>
        <p>{t('description')}</p>
        <div className={styles.btn_container}>
          <Button url="https://google.es" value={t('btn1')} />
          <Button url="/contact" value={t('btn2')} />
        </div>
      </section>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'index'
      ])),
    },
  }
}
