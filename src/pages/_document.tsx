import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
     <Head>
      
     <link rel="preconnect" href="https://fonts.googleapis.com" />
          
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      
          <link href="../bootstrap-icons.css" rel="stylesheet" />
          <link href="../bootstrap.min.css" rel="stylesheet" />
          <link href="../templatemo-leadership-event.css" rel="stylesheet"/>
       </Head>
      <body>
        <Main />

<NextScript>
      <Script src="../jquery.min.js"></Script>
        <Script src="../bootstrap.min.js"></Script>
        <Script src="../jquery.sticky.js"></Script>
        <Script src="../click-scroll.js"></Script>
        <Script src="../custom.js"></Script>      
        </NextScript>  
      </body>
    </Html>
  )
}
