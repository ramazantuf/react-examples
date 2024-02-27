import SwitchLanguage from "./SwitchLanguage"
import SwitchTheme from "./SwitchTheme"
function Header(){
    console.log("header rendered")
    return (
        <header>HEADER
             <br/>
             <SwitchTheme/>
             <SwitchLanguage/>
        </header>
       
    )
}
export default Header