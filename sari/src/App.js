import logo from './logo.svg';
import './App.css';
import './index.css';
import SiteProvider from './context/SiteContext';
import AuthProvider from './context/AuthContext';
import Home from './components/Home';

function App() {
  
   return (
    <SiteProvider>
      <AuthProvider>
      <Home/>
      </AuthProvider>
    
    </SiteProvider>
  );
}

export default App;
