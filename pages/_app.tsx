import '../styles/globals.css'

import type { AppProps } from 'next/app'

const App:React.FC =({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default App
