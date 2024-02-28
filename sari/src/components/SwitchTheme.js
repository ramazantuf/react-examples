import SiteContext,{useSite} from "../context/SiteContext";

export default function SwitchTheme(){
    const {theme,dispatch} = useSite()
    const switchTheme = ()=>{
        dispatch({
            type: 'TOGGLE_THEME',
        })
    }
    return(
        <>
        mevcut tema {theme}<br/>
        <button onClick={switchTheme}>Temayı Değiştir</button>
        </>
    )
}