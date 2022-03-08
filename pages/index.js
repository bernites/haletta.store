import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Haletta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to HALETTA!" />
         <p className="description">
          coming soon
        </p>
   
      </main>

      <Footer />
    </div>
  )
}
