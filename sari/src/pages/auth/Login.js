import { useNavigate,useLocation } from "react-router-dom"
import { useAuth } from "../../context/GirisContext"
import {useFormik} from 'formik';
export default function Login(){
    const {setUser} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const loginHandle = () => {
        setUser({
            id:1,
            username:"ramazan"
        })
        navigate(location?.state?.return_url||'/',{replace:true})
    }
    const {handleSubmit,handleChange,values} = useFormik({
        initialValues: {
            username:'',
            password: ''
        },
        onSubmit: values => {
            setUser(values)
            navigate(location?.state?.return_url||'/',{replace:true})
        }
    })
    
    return(
        <div>
            login Page
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="block text-sm font-medium text-slate-700">Kullanıcı Adı</label>
                    <input id="username" type="text" value={values.username} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/><br/>
      <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
                    <input id="password" type="password" value={values.password} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/><br/>
                
                <button type="submit" className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">Giriş yap</button>
            </form>
        </div>
    )
}