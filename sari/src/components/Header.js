import SwitchLanguage from "./SwitchLanguage"
import SwitchTheme from "./SwitchTheme"
function Header({theme, setTheme,language,setLanguage}){
    console.log("header rendered")
    return (
        <header>HEADER
             <br/>
             <SwitchTheme theme={theme} setTheme={setTheme} />
             <SwitchLanguage language={language} setLanguage={setLanguage} />
        </header>
       
    )
}
export default Header