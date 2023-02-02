
import React, { useEffect, useState } from 'react';
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

import { getdatabase, getstorage } from './Firebase/config';
import { list, ref } from 'firebase/storage';
import { child } from 'firebase/database';
import { getDownloadURL } from 'firebase/storage';
import { getBlob } from 'firebase/storage';
import axios from 'axios';

function App() {

  const [firebaseDataArticleData, setFirebaseArticleData] = useState(null)
  const storage = getstorage()

  useEffect(() => {
    const asyncEffect = async () => {
      const getFirebaseArticleData = async () => {
        let result = await ref(storage, 'TechBrainArticleData/Images/AttemtionMechanism.png')
        console.log(getDownloadURL(result))
        axios.get(
          await getDownloadURL(result),

          {
            headers: {
              'Content-Type': 'TechBrainArticleData/Infojson',
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Headers": "*"
            },
      
          })
          .then(response => {
            console.log('valed response', response)
          })
          .catch(error => {
            console.log('valed', error)
          })
          
      }

      const storageBucketData = await getFirebaseArticleData()
      setFirebaseArticleData(storageBucketData)
      console.log('ckpt5', storageBucketData)
      

    }
    asyncEffect()
  })

  return (
    <>
      <Helmet>
        <title>TechBrain: Learn AI</title>
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