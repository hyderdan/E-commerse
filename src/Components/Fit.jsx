import "./Style/Fit.css"
import{Link} from "react-router-dom"
import {useNavigate} from  "react-router-dom"


function Fit(){
   

const nav=useNavigate();
function  button1(){
    nav("/store")
}

    return(
        <div className="container">
            
                <div className="top">
                    <div className="heading"><h2>Healthy way</h2></div>
                    <div className="searchvutton">
                    <input type="text" className="search" placeholder="search product,brand,workout" name="" id="" />
                    <button className="searchbutton">Search</button>
                    </div>
                    <div className="firstnav">
                        <ul>
                            <li className="Storehover1"><Link to={'/workout'} >Home</Link></li>
                            <li className="Storehover"><Link to={'/'} >Store</Link>
                                {/* <div className="navsub">
                                    <ul>
                                        <li><button onClick={button1} className="button1"> Open Store</button></li>
                                        <li>Shop by brands</li>
                                        <li>Shop by Category</li>
                                        <li>Shop by goals</li>
                                        <li>Clearence sale</li>
                                        <li>Latest products</li>
                                    </ul>
                                </div> */}
                            </li>
                        <li className="Storehover2"><Link to={'/'} >Workouts</Link></li>
                        <li className="Storehover3"><Link to={'/'} >Diet plan</Link></li>
                        </ul>
                    </div>
                 

                
                </div>
                
           
           
        </div>    
        )

}
export default Fit