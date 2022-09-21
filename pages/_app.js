import '../styles/globals.css'
import 'flickity/css/flickity.css'
import { ContextProvider } from '../contexts/ContextProvider'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ContextProvider>
        <Component {...pageProps} />   
      </ContextProvider>
    </SessionProvider>
  )
}

export default MyApp
