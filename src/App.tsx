import Card from "./Card";
import CardCompact from "./CardCompact";
import ChaosDragon from "./chaos-dragon.jpg";
import ChaosTower from "./chaos-tower.jpg";
import FireTower from "./fire-tower.jpg";
import ManaChaos from "./mana-chaos.png";
import ManaFire from "./mana-fire.png";

import "./App.css";

const App = () => (
  <div className="app">
    <Card
      domain="fire"
      name="Fire Tower"
      avatar={FireTower}
      description={
        <>
          Every turn 3 <img src={ManaFire} className="mana" alt="Fire mana" />{" "}
          are generated.
        </>
      }
      cost={0}
    />
    <CardCompact domain="fire" avatar={FireTower} />
    {/* <Card
      domain="chaos"
      name="Chaos Tower"
      avatar={ChaosTower}
      description={
        <>
          Every turn 3 <img src={ManaChaos} className="mana" alt="Chaos mana" />{" "}
          are generated.
        </>
      }
      cost={0}
    />
    <CardCompact domain="chaos" avatar={ChaosTower} /> */}
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
      health={5}
      attack={5}
      attributes={["airborne", "invisible"]}
      cost={5}
    />
    <CardCompact
      domain="chaos"
      avatar={ChaosDragon}
      health={5}
      attack={5}
      attributes={["airborne", "invisible"]}
    />
  </div>
);

export default App;
