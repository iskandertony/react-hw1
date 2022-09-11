import "./Header.css";
import logo from "./img/Logo.png";
import icon from "./img/Search.png";
import icon2 from "./img/Favorite.png";
import icon3 from "./img/Cart.png";

const Header = (props) => {
  const text3 = "edirovich can't";
  const text = `iska ${text3}`;
  const text2 = `mabo ${text}`;
  console.log(text);
  console.log(text2);
  console.log(text3);
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
