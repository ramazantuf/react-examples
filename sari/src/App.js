import logo from './logo.svg';
import './App.css';
import './index.css';
import SiteProvider from './context/SiteContext';
import Home from './components/Home';

function App() {
  
   return (
    <SiteProvider>
    <Home/>
    </SiteProvider>
  );
}

export default App;
