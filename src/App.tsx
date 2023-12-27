import Card from "./Card";
import ChaosDragon from "./chaos-dragon.jpg";
import ManaChaos from "./mana-chaos.png";

import "./App.css";

const App = () => (
  <div className="app">
    <Card
      domain="chaos"
      name="Chaos Dragon"
      avatar={ChaosDragon}
      description={
        <>
          Every time your opponent consumes{" "}
          <img src={ManaChaos} className="mana" alt="Chaos mana" />, Chaos
          Dragon gains +1 health.
        </>
      }
    />
  </div>
);

export default App;
