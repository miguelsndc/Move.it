import Head from 'next/head';
import { Sidebar } from '../components/Sidebar';
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
        <main style={{ display: 'flex' }}>
          <Sidebar />
          <Component {...pageProps} />
        </main>
      </AuthProvider>
    </>
  );
}

export default MyApp;
