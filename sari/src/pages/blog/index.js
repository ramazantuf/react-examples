import { Outlet } from "react-router-dom"
export default function BlogLayout(){
    return (
        <div>
            Blog Page
            <Outlet/>
        </div>
    )
}