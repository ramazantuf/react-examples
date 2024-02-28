//import logo from './logo.svg';
import './App.css';
import './index.css';
import { useEffect,useState } from 'react';
import { PostService,UserService } from './services';
function App() {

  /**
   * servis yazılmadan önceki post işlemleri
   * const [users,setUsers] =useState(false)
  const [name,setName] = useState('ramazan')
  const [avatar,setAvatar] = useState(false)
  const addPost = data =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>{
    if(res.ok && res.status==200){
      return res.json()
    }
  })
  .then(data=>setUsers(data))
  .catch(err=>console.log(err))

  addPost({
    userId:1,
    title: 'Post Örneği',
    body: 'Post içeriği'
  })
},[]);

const submitHandle = e=>{
  e.preventDefault()
  const form={name,avatar}
  const formData = new FormData()
  formData.append('name',name)
  formData.append('avatar',avatar)
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: formData
  }).then(res => res.json()).then(data=>console.log(data)).catch(err=>console.log(err))
  }
*/
useEffect(()=>{
  PostService.getPosts().then(res=>console.log(res))
  PostService.getPostsDetail(2).then(res => console.log(res))
  PostService.newPost({
    userId: 3,
    title: 'test',
    body: 'test'
  }).then(res=>console.log(res))
  UserService.getUsers().then(res => console.log(res))
})


   return (
    <>
      App
      {/*
      servis öncesi view
      <form onSubmit={submitHandle}>
        <input type='text' name="name" value={name} onChange={e=>setName(e.target.value)}/>
        <input type="file" name='avatar' onChange={e=>setAvatar(e.target.files[0])}/>
        <button className='bg-violet-500 hover:bg-violet-600 text-white rounded-full p-2' type='submit' disabled={!name || !avatar}>Kaydet</button>
      </form>
      <h1>User List</h1>
      <ul className='p-1 m-1'>
        {users && users.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button className='bg-yellow-100 p-1 m-1' >arttır</button>
        */}
    </>
  );
}

export default App;
