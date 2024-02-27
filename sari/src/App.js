import logo from './logo.svg';
import './App.css';
import './index.css';
import Button from './components/Button';
import Tab from './components/Tab';
import Test from './components/Test';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false)
  return (
    <>
      <h1>Ramazan T</h1>
      <>
      <button onClick={()=>setShow(show=>!show)}>{show ? 'Gizle':'Göster'}</button>
        {show && <Test/>}
      </>
      <div style={{padding:20}}>
        
        <Tab activeTab={1}>
          <Tab.Panel title="Profil">1. Tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2. Tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. Tab</Tab.Panel>
        </Tab>
        </div>
      <Button text="Buton Örneği" variant="success"/>
    </>
  );
}

export default App;
