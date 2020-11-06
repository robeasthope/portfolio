import '../styles/globals.css'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps): React.Node {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default App
