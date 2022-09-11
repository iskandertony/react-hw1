import "./App.css";
import Header from "./components/Header/Header";
import JerseyBlock from "./components/JerseyBlock/JerseyBlock";
import Black from "./components/Black/Black";
import shirt from "./assets/images/shirt.png";
function App() {

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

  const items2 = [
    {
      title: 'iska jakers City Edition',
      description: 'Puma NBA Swingman Jersey',
      price: '3000$',
      image: "https://play-lh.googleusercontent.com/Xa_qpReJ1y3Wztx6Js42vKm-3cVsrBGxIywil5X3NKcjxAHSE8c_LRJhWBAuIO9d0o4",
    },
    {
      title: 'Login parol Lakers City Edition',
      description: 'e NBA Swingman Jersey',
      price: '5000$',
      image: 'https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg'
    },
    {
      title: 'Iska Footbalball City Edition',
      description: 'Nike NBA Swingman Jersey',
      price: '200$',
      image: "https://ec.europa.eu/eurostat/documents/6921402/9104237/Shutterstock_Lisa_Kolbasa.png/f988f8b6-4138-4a91-9761-885bacab0ce2?t=1533725002000",
    },
    {
      title: 'Mans Basketball City Edition',
      description: 'Adidas NBA Swingman Jersey',
      price: '50$',
    }
  ]

  return (

    <div className="container">
      <Header />
      <JerseyBlock />
      <Black title="Bestsellers" titleColor="red" subTitle="Collection" items={items} />
      <Black title="Koby Bryant" titleColor="yellow" subTitle="Authentic edition" items={items2} />
      
    </div>
  );
}

export default App;
