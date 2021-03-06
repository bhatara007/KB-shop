// import App from "next/app";
import '../styles/global.css'

import { CartContextWrapper } from '@app/context'
import { CartSliderContextWrapper } from '@app/context/cartContext'
import type { AppProps /*, AppContext */ } from 'next/app'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <CartSliderContextWrapper>
      <CartContextWrapper>
        <Component {...pageProps} />
      </CartContextWrapper>
    </CartSliderContextWrapper>
  )
}



// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
