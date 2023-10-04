import "./Logo.css";
import logoImage from "../../img/logo-image.png";

function Logo() {
  return (
    <div className="logo-frame">
      <img className="logo-image" src={logoImage}></img>
      <div className="company-name-logo">HOLO</div>
    </div>
  );
}

export default Logo;
