import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Main from '@/components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Petar Maletin</title>
        <meta name="Petar Maletin" content="Portfolio website - Petar Maletin - Software engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <Main />
      </main>
    </>
  )
}
