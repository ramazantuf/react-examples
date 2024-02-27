import logo from './logo.svg';
import './App.css';
import './index.css';
import { useEffect, useState } from 'react';

function App() {
  const levels = [
    {key:'beginner', value:"Başlangıç"},
    {key:'jr_developer', value:"Jr. Developer"},
    {key:'sr_developer', value:"Sr. Developer"},
  ]
  const genders = [
    {key:'1',value:'Erkek'},
    {key:'2',value:'Kadın'},
  ]
  const categoryList = [
    {key:1, value:'PHP'},
    {key:2, value:'Javascript'},
    {key:3, value:'CSS'},
    {key:4, value:'HTML'},
  ]
  const [name,setName] = useState('ramazan')
  const [description,setDescription] = useState('')
  const [gender,setGender] = useState('')
  const [categories, setCategories] = useState([1,2])
  const [rule,setRule] = useState(true)
  const [rules,setRules] = useState([
    {key:1,value:'1. Kuralı kabul ediyorum',checked:false},
    {key:2,value:'2. Kuralı kabul ediyorum',checked:false},
    {key:3,value:'3. Kuralı kabul ediyorum',checked:true},
  ])
  const [level,setLevel] = useState('jr_developer')
  const [avatar,setAvatar] = useState(false)
  const [image,setImage] = useState(false)
  useEffect(()=>{
    if(avatar){
      const fileReader = new FileReader()
    fileReader.addEventListener('load',function(){
      setImage(this.result)
    })
    fileReader.readAsDataURL(avatar)
    }
  },[avatar])
  const checkRule = (key,checked)=>{
    setRules(rules=>rules.map(rule=>{
      if(key==rule.key){
        rule.checked=checked
      }
      return rule
    }))
  }
  const submitHandle = ()=>{
    const formData = new FormData()
    formData.append('avatar',avatar)
    formData.append('name',name)
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: formData
    })
  }
  const selectedGender = genders.find(g=>g.key==gender)
  const selectedLevel = levels.find(g=>g.key==level)
  const selectedCategories = categoryList.filter(c=>categories.includes(c.key))
  const enabled = rules.every(rule=>rule.checked) && avatar
   return (
    <>
    <button onClick={()=>setName('ahmet')}>Adı Değiştir</button>
    <input type="text" defaultValue={name} onChange={e=>setName(e.target.value)}/>
    <textarea value={description} onChange={e=>setDescription(e.target.value)}/>
<select value={gender} onChange={e=>setGender(e.target.value)}>
  <option value="">Seçin</option>
  {genders.map(gender=>(
    <option value={gender.key} key={gender.key}>{gender.value}</option>
  ))}
</select>
<select value={categories} multiple={true} onChange={e=>setCategories([...e.target.selectedOptions].map(option=>+option.value))}>
  <option value="">Seçin</option>
  {categoryList.map(category=>(
    <option value={category.key} key={category.key}>{category.value}</option>
  ))}
</select>
    <br/>
    {name}
    <br/>
    {description}
    <br/>
    {JSON.stringify(selectedCategories)}
    <br/>
    <label>
      <input type="checkbox" checked={rule} onChange={e=>setRule(e.target.checked)}/>
      Kuralları kabul ediyorum.
    </label>
    <br/>
   
    <br/>
    {rules.map(rule=>(
      <label key={rule.key}>
        <input type="checkbox" checked={rule.checked} onChange={e=>checkRule(rule.key,e.target.checked)}/>
        {rule.value}
      </label>
    ))}
    <br/>
    {JSON.stringify(rules)}<hr/>
    {levels.map((l,index) => (
      <label key={index}>
        <input type='radio' value={l.key} checked={l.key==level} onChange={e=>setLevel(e.target.value)}/>
        {l.value}
      </label>
    ))}
    <br/>
    {JSON.stringify(selectedLevel)}
    <br/>
    <label>
      <input type='file' onChange={e=>setAvatar(e.target.files[0])}/>
    </label>
    <br/>
    {avatar && (
    <>
    <h3>{avatar.name}</h3>
    {image && <img src={image}/>}
    </>
    )}
    <button onClick={submitHandle} disabled={!enabled} className='bg-yellow-100'>Devam et</button>
    </>
  );
}

export default App;
