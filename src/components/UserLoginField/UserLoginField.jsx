import "./UserLoginField.css";
import userpic from "../../img/userpic.jpeg";

function UserLoginField() {
  return (
    <div className="login-block">
      <img className="userpic-circle" src={userpic}></img>
      <div className="username-text-field">User Name</div>
    </div>
  );
}

export default UserLoginField;
