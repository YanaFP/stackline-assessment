import logo from "../assets/images/stackline_logo.svg";
import "../style/styles.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="stackline_logo" />
    </div>
  );
};

export default Header;
