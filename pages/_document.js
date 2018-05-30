import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet, injectGlobal} from 'styled-components'

// How to inject global styles with Styled-components
injectGlobal`
  html {
    font-size: 10px;
    background: #ebeff2;
  }
  body {
    font-family: "menlo", serif;
    font-size: 1.3em;
    line-height: 1.6;
  }
`;


export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props}/>))
    const styleTags = sheet.getStyleElement()
    return {
      ...page,
      styleTags
    }
  }

  render() {
    return (
      <html>
        <Head>
        <title>Next.js starter clem109</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    )
  }
}

