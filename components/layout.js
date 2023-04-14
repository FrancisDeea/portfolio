import Header from './header';
import Footer from './footer';


export default function Layout({font, children}) {
    return (
        <>
            <Header font={font} />
            <main className={font.className}>{children}</main>
            <Footer font={font} />
        </>
    )
}  