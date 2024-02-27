import logo from './logo.svg';
import './App.css';
import './index.css';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import SiteContext from './context/SiteContext';
import Home from './components/Home';

function App() {
  const [theme,setTheme] = useState('light')
  const [language,setLanguage] = useState('tr')
  const data = {
    theme,
    setTheme,
    language,
    setLanguage
  }
   return (
    <SiteContext.Provider value={data}>
    <Home/>
    </SiteContext.Provider>
  );
}

export default App;
