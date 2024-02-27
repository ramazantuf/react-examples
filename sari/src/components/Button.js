function Button(props){
    console.log(props);
    return (
        
        <button className="p-4 h-10 flex items-center bg-gray-100 rounded">{props.text}</button>
    )

}

export default Button;