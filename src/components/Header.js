import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Header = ()=> {

    const [loginBtn, setLoginBtn] = useState("Login")

    const {loggedInUser} = useContext(UserContext)
    return(
      <div className="flex justify-between bg-pink-200 h-20">
        <div className="w-28 ">
          <img alt="img" src={LOGO_URL}/>
        </div>
        <div className="mr-20">
          <ul className="flex p-7">
          <li><Link className="p-2 cursor-pointer font-semibold text-lg" to="/">Home</Link></li>
            <li><Link className="p-2 cursor-pointer font-semibold text-lg" to="/about">About Us</Link></li>
            <li><Link className="p-2 cursor-pointer font-semibold text-lg" to="/contact">Contact Us</Link></li>
            <li><Link className="p-2 cursor-pointer font-semibold text-lg" to="/grocery">Grocery</Link></li>
            <button className="cursor-pointer ml-4 text-white border border-blue-500 bg-slate-500 focus:outline-none font-medium px-4 py-1 rounded-md"
            onClick={()=>{
                loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
            }}
            >{loginBtn}</button>
            <li className="px-4 text-yellow-600 font-semibold text-lg cursor-pointer">{loggedInUser}</li>
          </ul>
          
  
        </div>
      </div>
    )
  }

export default Header;