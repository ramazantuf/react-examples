import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";
export default function Home(){
    const {user} = useAuth()
    return (
        <>
        <Header/>
    APP
    {user && (
        <div style={{padding:10,border:'1px solid red'}}>
            Bu alan sadece giriş yapılınca görünür
        </div>
    )}
    <Footer/>
    </>
    )
}