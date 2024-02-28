import SwitchLanguage from "./SwitchLanguage"
import SwitchTheme from "./SwitchTheme"
import { useAuth } from "../context/AuthContext"
function Header(){
    const {user,dispatch} = useAuth()
    console.log("header rendered")
    const login = ()=>{
        dispatch({
            type:'LOGIN',
            payload: {
                name:"ramazan",
                id:1
            }
            
        })
    }

    const logout = ()=>{
        dispatch({
            type: 'LOGOUT'
        })
    }
    return (
        <header>HEADER
             <br/>
             {user && <button onClick={logout} className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Çıkış yap</button>||<button className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white" onClick={login}>Giriş Yap</button>}
             <hr/>
             <SwitchTheme/>
             <SwitchLanguage/>
        </header>
       
    )
}
export default Header