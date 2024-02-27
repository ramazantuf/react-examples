import SwitchTheme from "./SwitchTheme"
import SwitchLanguage from "./SwitchLanguage"

function Footer({theme,setTheme,language,setLanguage}){
    console.log("footer rendered")
    return (
        <footer>Footer
            <br/>
        <SwitchTheme theme={theme} setTheme={setTheme} />
        <SwitchLanguage language={language} setLanguage={setLanguage} />
        </footer>
    )
}
export default Footer