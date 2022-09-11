import "./Black.css";
import shirt from "./../../assets/images/shirt.png";
import line from "./../../assets/images/Line.png";
import Nike from "./../../assets/images/Group.png";
import BlackItem from './BlackItem';

const Black = (props) => {

  const items = [
    {
      title: 'LeBron James Lakers City Edition',
      description: 'Nike NBA Swingman Jersey',
      price: '290$',
      image: shirt
    },
    {
      title: 'Jordan Lakers City Edition',
      description: 'Nike NBA Swingman Jersey',
      price: '500$',
      image: 'https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg'
    },
    {
      title: 'Iska Basketball City Edition',
      description: 'Nike NBA Swingman Jersey',
      price: '200$',
      image: shirt
    },
    {
      title: 'Mans Basketball City Edition',
      description: 'Adidas NBA Swingman Jersey',
      price: '50$',
      image: shirt
    }
  ]

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
        {items.map(item => (
          <BlackItem
            key={item.title}
            picture={item.image}
            name={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
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
