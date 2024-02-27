import SwitchTheme from "./SwitchTheme"
import SwitchLanguage from "./SwitchLanguage"

function Footer(){
    console.log("footer rendered")
    return (
        <footer>Footer
            <br/>
        <SwitchTheme/>
        <SwitchLanguage/>
        </footer>
    )
}
export default Footer