import Header from './header';
import Footer from './footer';

import { useRouter } from 'next/router';

import en from '../public/locales/en/common'
import es from '../public/locales/es/common'

export default function Layout({font, children}) {
    const { locale } = useRouter();
    const lang = locale === "en" ? en : es;

    return (
        <>
            <Header font={font} lang={lang} />
            <main className={font.className}>{children}</main>
            <Footer font={font} />
        </>
    )
}  