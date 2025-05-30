import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Realisations from './components/Realisations';
import Contact from './components/Contact'
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={bannerUrl}
        />
      </Helmet>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Realisations />
      <Contact />
      <Footer />
    </>
  );
}
