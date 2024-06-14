import { LOGO_URL } from "../utils/constant";
const Header = ()=> {
    return(
      <div className="header">
        <div className="logo">
          <img className="logo-img" alt="img" src={LOGO_URL}/>
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Career</li>
          </ul>
  
        </div>
      </div>
    )
  }

export default Header;