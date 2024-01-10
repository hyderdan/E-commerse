import Fit from "./Fit";
import "./Style/productdetails.css"
import { IoIosAirplane } from "react-icons/io";
import mydata from "../context";
import { useContext } from "react";
import { useParams } from "react-router-dom";


export default function Productdetails() {
    const {data}=useContext(mydata);
    const{count}=useParams();
    const detaildata=data.filter((p)=>
    p.count===parseInt(count)
    );
    console.log(detaildata)
    console.log(data)
    return (
        <div>
            <div><Fit /></div>
            <div className="productfirstdiv">
                <h6><IoIosAirplane />WE SHIP TO INDIA </h6>
            </div>
            <div className="productseconddiv">
            {detaildata.map((D)=>(
                <img src={D.image} alt="img" />
            ))}
            </div>
        </div>
    )
}