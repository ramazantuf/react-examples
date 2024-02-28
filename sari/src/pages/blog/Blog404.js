import { Link } from "react-router-dom"
export default function Blog404(){
    return (
        <div>
            Yazı bulunamadı
            <Link to='/blog'>Blog sayfasına dön</Link>
        </div>
    )
}