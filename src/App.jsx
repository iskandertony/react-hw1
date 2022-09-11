import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/part1/Body";
import Black from "./components/Body/part2/Black";
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Body></Body>
      <Black></Black>
    </div>
  );
}

export default App;
