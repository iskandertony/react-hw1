import "./Black.css";
import line from "./../../assets/images/Line.png";
import Nike from "./../../assets/images/Group.png";
import BlackItem from './BlackItem';

const Black = ({ title, titleColor, subTitle, items }) => {




  return (
    <div className="body-black">
      <div className="title-names-black">
        <div className={`title-names-black-dop`}>Jerseys bestsellers</div>
      </div>
      <div className="border-start-black">
        <div className="border-dop-black"></div>
      </div>
      <div className="bestSellers-black">
        <div className={`bestSellers-black-dop ${titleColor}`}>{title}</div>
      </div>
      <div className="border-start-black">
        <div className="border-dop-black"></div>
      </div>
      <div className="collection-black">
        <div className="collection-black-dop">{subTitle}</div>
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
        {items.map(item => (
          <BlackItem
            key={item.title}
            picture={item.image}
            name={item.title}
            description={item.description}
            price={item.price}
          />
        ))
        }

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
