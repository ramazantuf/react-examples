import logo from './logo.svg';
import './App.css';
import './index.css';
import Button from './components/Button';
import Tab from './components/Tab';

function App() {
  return (
    <>
      <h1>Ramazan T</h1>
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
