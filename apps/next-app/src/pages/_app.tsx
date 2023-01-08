import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>電商網站</title>
      </Head>
      <div className="w-full min-h-screen flex flex-col justify-between">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default CustomApp;
