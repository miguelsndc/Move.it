import Head from 'next/head'
import lightTheme from '../styles/themes/light'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Move.it</title>
      </Head>
      <AuthProvider>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
