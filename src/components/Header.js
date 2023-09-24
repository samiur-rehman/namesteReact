import { useState } from "react";
import { LOGO_URL } from "./utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonTxt, setButtonTxt] = useState("Login");
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img className="logoImg" alt="logo" src={LOGO_URL} />
      </div>
      <div className="navContainer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact US </Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="loginBtn"
              onClick={() => {
                buttonTxt === "Login"
                  ? setButtonTxt("Logout")
                  : setButtonTxt("Login");

                console.log(buttonTxt);
              }}
            >
              {buttonTxt}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
