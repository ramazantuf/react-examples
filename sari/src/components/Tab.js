import { useState } from "react";
function Tab({children,activeTab}){
    const [active,setActive] = useState(activeTab)
    return ( 
        <div>
            <nav className="">
              {children.map((tab,index)=>(
              <button 
              onClick={()=>setActive(index)}
              className={active== index ? 'bg-green-300 p-1 text-white':'bg-gray-100 p-1'} 
              key={index}>{tab.props.title}</button>
              ))}  
            </nav>
            {children[active]}
        </div>
     )

}

Tab.Panel = function Panel({children, title}){
    return (
        <div>
            {children}{title}
        </div>
    )
}

export default Tab;