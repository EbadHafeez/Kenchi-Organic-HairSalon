import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useEffect } from 'react'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
