import { useParams } from "react-router-dom"
export default function Post(){
    const {url,id} = useParams()
    console.log(url)
    return (
        <div>
            post page{url} - {id}
        </div>
    )
}