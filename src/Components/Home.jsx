import mydata from "../context";
import { useContext } from "react";
import "./Style/Home.css"
import Fit from "./Fit";

export default function Home(){
    const { storeimg}=useContext(mydata);
    const image2= storeimg.filter((data)=>
    data.description==="container2"
    );
    return(
        <div>
            <Fit/>
        <div className="top2">
        {image2.map((data)=>(
          <img className="top2img" src={data.image} alt="img" />  
        ))}    
    <div className="top2h1" >
        <h1 className="subtop2h1">Welcome to healthy way</h1>
        <h3>We provide the tools you need to build the body 
                       you want.</h3>
                       </div>
    <button className="subtopbutton" onClick={"#"}>Learn more</button>
        </div>
        </div>
    );
}