import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>BossaBox Front-End</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
