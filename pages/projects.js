import Head from 'next/head'
import { useRouter } from 'next/router'

import { useState } from 'react'

import styles from '../styles/projects.module.scss'

import Project from '../components/project'

import { projects } from '../utils/data'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Projects() {
    const [filter, setFilter] = useState("all");
    const { locale } = useRouter();
    const { t } = useTranslation('projects')

    let data;

    if (filter === "all") {
        data = [...projects];
    }

    if (filter === "front") {
        data = projects.filter(project => project.type === "front");
    }

    if (filter === "back") {
        data = projects.filter(project => project.type === "back");
    }


    return (
        <>
            <Head>
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
                <meta name="keywords" content="developer, javascript, react, projects" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <section className={styles.container}>
                <h2>{t('title')}</h2>
                <div className={styles.filter_container}>
                    <button className={styles.filter_btn} onClick={() => setFilter("all")}>{t('All')}</button>
                    <button className={styles.filter_btn} onClick={() => setFilter("front")}>Front-end</button>
                    <button className={styles.filter_btn} onClick={() => setFilter("back")}>Back-end</button>
                </div>
                <div className={styles.projects_container}>
                    {data.map(project => {
                        return (
                            <Project
                                key={project.id}
                                img={project.img}
                                name={project.name}
                                description={locale === "en" ? project.description : project.description2}
                                stack={project.stack}
                                url={project.url}
                                show={project.type === filter}
                                alt={project.alt}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'projects'
            ])),
        },
    }
}