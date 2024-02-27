import logo from './logo.svg';
import './App.css';
import './index.css';
import Button from './components/Button';
import Tab from './components/Tab';
import Test from './components/Test';
import { useState,useRef,forwardRef } from 'react';
{/**forward Ref */}
function Input(props,ref){
  return <input ref={ref} type="text" {...props}/>
}

Input = forwardRef(Input)

function App() {
  const [show, setShow] = useState(false)
  const inputRef = useRef()

  const focusInput = ()=>{
    inputRef.current.focus()
  }
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
        {/* useRef */}
        <input type="text" ref={inputRef}/>
        <Input ref={inputRef}/>
        <button onClick={focusInput}>Focusla</button>
      <Button text="Buton Örneği" variant="success"/>
    </>
  );
}

export default App;
