import "../styles/NavBar.css";
import logo from "../icon/logo.svg";
import icon_menu from "../icon/icon-menu.svg";
import icon_cart from "../icon/icon-cart.svg";

export default function NavBar() {
  return (
    <div className="navBar">
      <a className="menu-icon" href="#"> 
        <img  src={icon_menu} alt="" />
      </a>
      <a href="#">
        <img className="logo" src={logo} alt="" />
      </a>
      <a className="cart-icon" href="#">
        <img src={icon_cart} alt="" />
      </a>
    </div>
  );
}
