export default function SwitchTheme({theme,setTheme}){
    return(
        <>
        mevcut tema {theme}<br/>
        <button onClick={()=>setTheme(theme=='light'?'dark':'light')}>Temayı Değiştir</button>
        </>
    )
}