
import React from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage } from './Components/About/AboutPage';
import { HomePage } from './Components/Home/HomePage';
import { PrivacyPage } from './Components/Privacy/PrivacyPage';
import { Footer } from './Components/Footer/Footer';
import { ArticleHub } from './Components/Articles/ArticleHub';
import { TermsOfService } from './Components/Privacy/Documents/TermsOfService'
import { PrivacyPolicy } from './Components/Privacy/Documents/PrivacyPolicy'

import { Helmet } from 'react-helmet';
import { Storage } from '@google-cloud/storage';

function App() {
  const storage = new Storage({
    projectId: 'techbrainapp-b36b5',
    keyFilename: 'path/to/credentials.json'
  });

  storage
    .bucket('my-bucket')
    .getFiles()
    .then((results) => {
      const files = results[0];
      console.log('Files:', files);
    })
    .catch((err) => {
      console.error('Error:', err);
    });

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#252b32" />
        <meta name="msapplication-navbutton-color" content="#252b32" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#252b32" />
      </Helmet>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact component={HomePage()} element={HomePage()} />
          <Route path='/Home' component={HomePage()} element={HomePage()} />
          <Route path='/About/AboutUs' component={AboutPage()} element={AboutPage()} />
          <Route path='/Privacy/TermsOfService' component={PrivacyPage('Terms of Service', TermsOfService)} element={PrivacyPage('Terms of Service', TermsOfService)} />
          <Route path='/Privacy/PrivacyPolicy' component={PrivacyPage('Privacy Policy', PrivacyPolicy)} element={PrivacyPage('Privacy Policy', PrivacyPolicy)} />
          <Route path='/Articles/Hub' component={ArticleHub()} element={ArticleHub()} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>

  );
}

export default App