import { useContext } from "react";
import SiteContext,{Context} from "../context/SiteContext";
export default function SwitchLanguage(){
    const {language,setLanguage} = useContext(Context)
    return(
        <>
        mevcut dil {language}<br/>
        <button className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white" onClick={()=>setLanguage(language=='tr'?'en':'tr')}>Dili Değiştir</button>
        </>
    )
}