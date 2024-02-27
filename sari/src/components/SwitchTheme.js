import { useContext } from "react";
import SiteContext from "../context/SiteContext";

export default function SwitchTheme(){
    const {theme,setTheme} = useContext(SiteContext)
    return(
        <>
        mevcut tema {theme}<br/>
        <button onClick={()=>setTheme(theme=='light'?'dark':'light')}>Temayı Değiştir</button>
        </>
    )
}