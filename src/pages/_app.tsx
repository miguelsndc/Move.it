import Head from 'next/head';
import { GlobalStyles } from '../styles/global';
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Move.it</title>
      </Head>
      <GlobalStyles />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
