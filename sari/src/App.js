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
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import AuthLayout from './pages/auth/AuthLayout';
import Login from './pages/auth/Login';
import HomeLayout from './pages/HomeLayout';
function App() {

   return (
    <>
    <Routes>
      <Route path='/' element={<HomeLayout/>} >
        <Route index={true} element={<Home/>}/>
        <Route path='contact' element={<Contact/>} />
        <Route path='blog' element={<BlogLayout/>} >
          <Route index={true} element={<Blog/>}/>
          <Route path='kategoriler' element={<Kategoriler/>}/>
          <Route path='post/:id/:url' element={<Post/>}/>
          <Route path='*' element={<Blog404/>}/>
        </Route>
      </Route>
      <Route path='/auth' element={<AuthLayout/>}>
        <Route path='login' element={<Login/>}/>
      </Route>
      <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path='*' element={<Page404/>}/>
      
    </Routes>
    </>
  );
}

export default App;
