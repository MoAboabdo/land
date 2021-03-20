import React,{useState} from "react"
import logo from "../images/logo.png"
 const Navbar = (props) => {
    const [nav,setNav]=useState(false);
    const chandgeBackground = ()=>{
                if(window.scrollY >= 50){
                    setNav(true)
                }else{
                    setNav(false)
                }
    };
    window.addEventListener("scroll",chandgeBackground);
    return (
        <nav className={nav ? "nav active":"nav"}>
           <a href="#"  className="logo">
             <img src={logo}/>
           </a>
           <input className="menu-btn" type="checkbox" id="menu-btn"/>
           <label className="menu-icon">
             <span className="nav-icon"></span>
           </label>
           <ul className="menu">
             <li><a herf="#" className="active">Home</a></li>
             <li><a herf="#">Features</a></li>
             <li><a herf="#">About</a></li>
             <li><a herf="#">UI ss</a></li>
             <li><a herf="#">Donwload</a></li>

           </ul>
       </nav>
    )
}



export default Navbar;



