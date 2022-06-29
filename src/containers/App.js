import React from 'react'
import { Layout } from '../assets/styles/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import GlobalStyled from '../GlobalStyles';

function App() {
  return (
    <Layout >
      <GlobalStyled/>
      <Header/>
      <Main/>
      <Footer/>
    </Layout>
  );
}

export default App;
