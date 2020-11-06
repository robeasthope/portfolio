import Head from 'next/head'

export const Home: React.FC = () => (
  <div className="container">
    <Head>
      <title>Rob Easthope</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>
        Index page
      </h1>
    </main>
  </div>
)

export default Home