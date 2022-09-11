import "./Black.css";
import shirt from "./img/shirt.png";
import line from "./img/Line.png";
import Nike from "./img/Group.png";

const Black = (props) => {
  return (
    <div className="body-black">
      <div className="title-names-black">
        <div className="title-names-black-dop">Jerseys bestsellers</div>
      </div>
      <div className="border-start-black">
        <div className="border-dop-black"></div>
      </div>
      <div className="bestSellers-black">
        <div className="bestSellers-black-dop">bestsellers</div>
      </div>
      <div className="border-start-black">
        <div className="border-dop-black"></div>
      </div>
      <div className="collection-black">
        <div className="collection-black-dop">Collection</div>
      </div>
      <div className="border-end-black">
        <div className="border-dop-black"></div>
      </div>
      <div className="text-names-black">
        <div className="text-names-black-dop">
          The jerseys of the best nba players of the regular seasons.
        </div>
      </div>
      <div className="img-black">
        <div className="img-black-dop">
          <img src={shirt} alt="img"></img>
          <div className="text-black-Lebron">
            LeBron James Lakers City Edition
          </div>
          <div className="text-black-Nike">Nike NBA Swingman Jersey</div>
          <div className="text-black-money">$290</div>
        </div>
        <div className="img-black-dop">
          <img src={shirt} alt="img" className="img-margin-black"></img>
          <div className="text-black-Lebron">
            LeBron James Lakers City Edition
          </div>
          <div className="text-black-Nike">Nike NBA Swingman Jersey</div>
          <div className="text-black-money">$290</div>
        </div>
        <div className="img-black-dop">
          <img src={shirt} alt="img"></img>
          <div className="text-black-Lebron">
            LeBron James Lakers City Edition
          </div>
          <div className="text-black-Nike">Nike NBA Swingman Jersey</div>
          <div className="text-black-money">$290</div>
        </div>
      </div>
      <div className="text-black-end">
        <div className="text-black-end-dop">
          <div className="text-black-end-dop1">View all</div>
          <img src={line} alt="img"></img>
        </div>

        <div>
          <img src={Nike} alt="img"></img>
        </div>
      </div>
    </div>
  );
};
export default Black;
