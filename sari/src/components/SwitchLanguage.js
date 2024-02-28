import SiteContext,{useSite} from "../context/SiteContext";
export default function SwitchLanguage(){
    const {language,dispatch} = useSite()
    const switchLanguage = () => {
        dispatch({
            type:'TOGGLE_LANGUAGE'
        })
    }
    return(
        <>
        mevcut dil {language}<br/>
        <button className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white" onClick={switchLanguage}>Dili Değiştir</button>
        </>
    )
}