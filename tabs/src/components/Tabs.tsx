import {useState} from "react";
interface TabItem{
  title:string;
  content:React.ReactNode;
}
interface TabProps{
    tabs:TabItem[];
}
export const Tabs=({tabs}:TabProps)=>{
   const [activeIndex,setActiveIndex]=useState<number>(0);
   return(
    <div>
        <div style={{display:"flex",borderBottom:"1px solid #ccc"}}>
         {tabs.map((tab,index)=>(
            <button
            key={tab?.title}
            onClick={()=>setActiveIndex(index)}
            style={{
                padding:"8px 16px",
                borderBottom:activeIndex===index?"2px solid blue":"none"
            }}
            >
            {tab.title}
                </button>
         ))}
        </div>
        <div>{tabs[activeIndex].content}</div>
    </div>
   )
}