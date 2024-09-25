import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Commissioner } from 'next/font/google';
import { Header } from './home/components/Header';

const comissioner = Commissioner({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={comissioner.className}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  );
}
