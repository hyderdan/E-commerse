import Fit from "./Fit";
import { Link } from "react-router-dom";
import "./Style/Store.css" 
import { useContext } from "react";
import mydata from "../context";



function Store(){
    const {storeimg,storeimg2}=useContext(mydata);
    const image1=storeimg.filter((data)=>
    data.description==="first div"
    );

    return(
       
        <div className="container1">
             <Fit/>
             <div className="container2">
            {image1.map((data)=>(
                <img className="firstimg" src={data.image} alt="img" />
            ))}
             </div>

             <div className="container3">
                <div className="cont3sub">
                <h4 className="subh4">THIS WEEK'S TOP DEALS</h4> 
                </div>
                <div className="cont3sub2">
                    {storeimg2.map((data)=>(
                        <div className="cont3sub2mini">
                      <Link><img className="cont3img" src={data.image}  alt="img" /></Link>
                        <p className="contimgp">{data.name}</p>
                        <p className="contimgp2">{data.description}</p>
                        <button className="contimgbutton">View products</button>
                </div>                         
                    ))}
                </div>
                </div>
          
        </div>
    )
}
export  default Store;