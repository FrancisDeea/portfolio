import '../styles/globals.scss'

import { ThemeProvider } from 'next-themes'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { Montserrat } from 'next/font/google'

import Layout from '../components/layout'

import { appWithTranslation } from 'next-i18next'

const montserrat = Montserrat({ subsets: ['latin'] })

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider themes={['light', 'dark']} enableSystem={false}>
      <Layout font={montserrat}  >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
};

export default appWithTranslation(App)

