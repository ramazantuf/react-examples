import { useNavigate,useLocation } from "react-router-dom"
import { useAuth } from "../../context/GirisContext"
export default function Login(){
    const {setUser,user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const loginHandle = () => {
        setUser({
            id:1,
            username:"ramazan"
        })
        navigate(location?.state?.return_url||'/',{replace:true})
    }
    
    
    return(
        <div>
            login Page
            <button className="bg-pink-500 hover:bg-pink-800 rounded-full text-white" onClick={loginHandle}>Giriş Yap</button>
        </div>
    )
}