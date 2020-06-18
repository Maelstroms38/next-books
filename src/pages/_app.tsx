import 'bootstrap/dist/css/bootstrap.css';
import { AppProps, AppContext } from 'next/app'
import React from "react"
import Head from "next/head"
import { ThemeProvider, createGlobalStyle } from "styled-components"

export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: "#001F3F",
}

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
    color: ${props => props.theme.niceBlack}; 
  }
`
const AppComponent = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
        <Head>
          <title>GraphQL Job Board</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
  );
};

AppComponent.getInitialProps = async (appContext: AppContext) => {
    // const client = buildClient(appContext.ctx);
    // const { data } = await client.get('/api/users/currentuser');
    console.log(appContext);
    let pageProps = {};
    // if (appContext.Component.getInitialProps) {
    //   pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    // }
  
    return { pageProps }; // ...data
  };

export default AppComponent;