import { useEffect,useState } from "react";

function Test(){

    const [postId,setPostId] = useState(1)
    const [post,setPost] = useState(false)
    useEffect(()=>{
        console.log("component render oldu")
    })

    useEffect(()=>{
        console.log('component ilk yüklendiğiğnde çalışır')
        return ()=>{
            console.log("component destroyed")
        }
    },[])

    useEffect(()=>{
        console.log('count degeri değişti = ',postId)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(data =>setPost(data))
    },[postId])
return (
    <><div>Test components</div>
    <div>
        <h1>{postId}</h1>
        {post && JSON.stringify(post)}
        <button onClick={()=>{setPostId(postId+1)}}>Arttır</button>
    </div>
    </>
)
}

export default Test