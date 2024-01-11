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
                <div className="bluediv"></div>
            {detaildata.map((D)=>(
                <div>
                <img src={D.image} alt="img" />
                <h1>{D.name}</h1>
                <p>{D.productdetails[0]} <br />{D.productdetails[1]}
                <br />{D.productdetails[2]}<br />{D.productdetails[3]}
                <br />{D.productdetails[4]}<br />{D.productdetails[5]}
                </p>
                </div>
            ))}
            </div>
        </div>
    )
}