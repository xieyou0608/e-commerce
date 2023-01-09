import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartProvider from '../context/cart-context';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>電商網站</title>
      </Head>
      <CartProvider>
        <div className="w-full min-h-screen flex flex-col justify-between">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </CartProvider>
    </>
  );
}

export default CustomApp;
