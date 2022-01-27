import React from 'react';
import Header from './components/Header/Header';
import { GlobalStyle } from './assets/globalStyles';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';

const CarsApp = () => {
  return (
    <ThemeProvider theme = { theme }>
      <Header />
      <Form />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default CarsApp;
