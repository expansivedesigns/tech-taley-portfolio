//import burger from "../../src/images/hamburger_black.png"
//import logo from "../../src/images/tech-taley-port.png"

import {Phone, Email } from '@material-ui/icons';

export default function Topnav({ menuToggle, setMenuToggle }){
    return (
        //if menu is true and active
        <div className={ menuToggle ? "topnav active" : "topnav" }>
            <div className="topwrapper">

                <div className="left">
                    <a href="#Home" className="logo">taley</a>
                    <Phone className="materials_icon" /><span>347.620.2292</span>   
                    <Email className="materials_icon" /><span>techtaley@gmail.com</span>                                     
                </div> 

                <div className="right">
                   <div className="hamburger" onClick={()=>setMenuToggle(!menuToggle)}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                   </div>
                </div> 
            </div>
        </div>
    )
}