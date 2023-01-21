
import React from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage } from './Components/About/AboutPage';
import { HomePage } from './Components/Home/HomePage';
import { PrivacyPage } from './Components/Privacy/PrivacyPage';
import { Footer } from './Components/Footer/Footer';


import {TermsOfService} from './Components/Privacy/Documents/TermsOfService'
import {PrivacyPolicy} from './Components/Privacy/Documents/PrivacyPolicy'

console.log(TermsOfService)
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact component={HomePage()} element={HomePage()} />
        <Route path='/Home' component={HomePage()} element={HomePage()} />
        <Route path='/About/AboutUs' component={AboutPage()}element={AboutPage()} />
        <Route path='/Privacy/TermsOfService' component={PrivacyPage('Terms of Service', TermsOfService)} element={PrivacyPage('Terms of Service', TermsOfService)} />
        <Route path='/Privacy/PrivacyPolicy' component={PrivacyPage('Privacy Policy', PrivacyPolicy)} element={PrivacyPage('Privacy Policy', PrivacyPolicy)} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App