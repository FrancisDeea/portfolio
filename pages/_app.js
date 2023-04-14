import '../styles/globals.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { Montserrat } from 'next/font/google'
import Layout from '../components/layout'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
      <Layout font={montserrat} >
        <Component {...pageProps} />
      </Layout>
  )
}
