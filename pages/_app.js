import '../styles/css/style.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <link rel="icon" href='icon.ico' /> 
    <meta name="viewport"
  content="user-scalable=0, minimum-scale=1 width=device-width, initial-scale=1, height=device-height"/>
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
