import { Outlet,NavLink } from "react-router-dom";
export default function HomeLayout(){
    return(
        <>
        <nav>
      <NavLink to='/' className={({isActive})=>isActive && 'aktif'}>Anasayfa</NavLink>
      <NavLink to='/contact' style={({isActive})=>({
        backgroundColor: isActive ? 'red' : 'yellow'
      })}>Contact</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
    </nav>
    <Outlet/>
        </>
    )
}