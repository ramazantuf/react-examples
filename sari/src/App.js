//import logo from './logo.svg';
import './App.css';
import './index.css';
import { Route,Routes,Link,NavLink } from 'react-router-dom';
import Contact from './pages/Contact';
import BlogLayout from './pages/blog';
import Home from './pages/Home';
import Kategoriler from './pages/blog/Kategoriler';
import Post from './pages/blog/Post';
import Blog from './pages/blog/Blog';
import Page404 from './pages/Page404';
import Blog404 from './pages/blog/Blog404';
function App() {

   return (
    <>
    <nav>
      <NavLink to='/' className={({isActive})=>isActive && 'aktif'}>Anasayfa</NavLink>
      <NavLink to='/contact' style={({isActive})=>({
        backgroundColor: isActive ? 'red' : 'yellow'
      })}>Contact</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blog' element={<BlogLayout/>} >
        <Route index={true} element={<Blog/>}/>
        <Route path='kategoriler' element={<Kategoriler/>}/>
        <Route path='post/:id/:url' element={<Post/>}/>
        <Route path='*' element={<Blog404/>}/>
      </Route>
      <Route path='*' element={<Page404/>}/>
      
    </Routes>
    </>
  );
}

export default App;
