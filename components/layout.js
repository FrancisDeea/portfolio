import Header from './header';
import Footer from './footer';


export default function Layout({font, children, test}) {
    return (
        <>
            <Header font={font} t={test} />
            <main className={font.className}>{children}</main>
            <Footer font={font} />
        </>
    )
}  