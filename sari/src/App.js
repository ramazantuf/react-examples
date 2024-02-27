import logo from './logo.svg';
import './App.css';
import './index.css';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [theme,setTheme] = useState('light')
  const [language,setLanguage] = useState('tr')
   return (
    <>
    <Header theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/>
    APP
    <Footer theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/>
    </>
  );
}

export default App;
