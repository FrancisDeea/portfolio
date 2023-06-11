import Head from 'next/head'
import Image from 'next/image'

import profilePic from '/public/assets/profile-lkd-web.webp'
import styles from '@components/styles/Home.module.scss'

import Button from '../components/button'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Home() {
  const { t } = useTranslation('index')

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content="developer, javascript, react, spain" />
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
            sizes="(max-width: 850px) 50vw,
                    (max-width: 420px) 60vw,
                      100vw"
          />
        </div>
        <h1>{t('h1')}</h1>
        <p>{t('description')}</p>
        <div className={styles.btn_container}>
          <a href="/assets/Francis-Bernal-Cabra-Resume.pdf" className={styles.cv} download>{t('btn1')}</a>
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
