import Logo from "../../components/Logo/Logo";
import SearchField from "../../components/SearchField/SearchField";
import UserLoginField from "../../components/UserLoginField/UserLoginField";
import "./Header.css";

function Header() {
  return (
    <div className="header-block">
      <Logo />
      <SearchField />
      <UserLoginField />
    </div>
  );
}
export default Header;
