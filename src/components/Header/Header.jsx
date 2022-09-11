import "./Header.css";
import logo from "./../../assets/images/Logo.png";
import icon from "./../../assets/images/Search.png";
import icon2 from "./../../assets/images/Favorite.png";
import icon3 from "./../../assets/images/Cart.png";

const Header = (props) => {
  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-text">
          <div className="nav-title">
            <div className="nav-title-dop">Man</div>
            <div className="nav-title-dop">Woman</div>
            <div className="nav-title-dop">Jersey</div>
            <div className="nav-title-dop">Teams</div>
            <div className="nav-title-dop">App</div>
          </div>
        </div>
        <div className="icon">
          <div className="icon-dop">
            <img src={icon} alt="logo" />
          </div>
          <div className="icon-dop">
            <img src={icon2} alt="logo" />
          </div>
          <div className="icon-dop-3">
            <img src={icon3} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
