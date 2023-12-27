import classNames from "classnames";
import "./Card.css";
import CardBackgroundChaos from "./background-chaos.jpg";
import CardBackgroundFire from "./background-fire.jpg";
import ManaChaos from "./mana-chaos.png";
import ManaFire from "./mana-fire.png";
import Airborne from "./curly-wing.png";
import Invisible from "./sight-disabled.png";
import { ReactElement } from "react";

const domains = {
  chaos: "chaos",
  fire: "fire",
} as const;

export type Domain = (typeof domains)[keyof typeof domains];

const cardBackgrounds = {
  chaos: CardBackgroundChaos,
  fire: CardBackgroundFire,
};

interface CardProps {
  name: string;
  domain: Domain;
  description: ReactElement;
  avatar: string;
  health?: number;
  attack?: number;
  attributes?: string[];
  cost: number;
}

const Card = ({
  name,
  domain,
  description,
  avatar,
  health,
  attack,
  attributes,
  cost,
}: CardProps) => {
  const isCreature = health !== undefined && attack !== undefined;

  return (
    <div
      className={classNames("card", `domain-${domain}`)}
      style={{
        backgroundImage:
          domain === "chaos"
            ? `url(${cardBackgrounds.chaos})`
            : domain === "fire"
            ? `url(${cardBackgrounds.fire})`
            : "",
      }}
    >
      <div className="card-gradient-top" />
      <div className="card-border" />
      <header className="header">
        <div className="name">{name}</div>
        <div className="cost">
          {cost !== 0 && (
            <>
              <div className="number">5</div>
              <div className="mana">
                {domain === "chaos" && <img src={ManaChaos} alt="Chaos mana" />}
                {domain === "fire" && <img src={ManaFire} alt="Fire mana" />}
              </div>
            </>
          )}
        </div>
      </header>
      <div className="avatar" style={{ backgroundImage: `url(${avatar})` }}>
        <div className="card-avatar-gradient-bottom" />
        <div className="properties">
          <div className="attributes">
            {attributes?.includes("airborne") && (
              <img src={Airborne} alt="Airborne" />
            )}
            {attributes?.includes("invisible") && (
              <img src={Invisible} alt="Invisible" />
            )}
          </div>
          <div className="stats">
            {isCreature ? `${attack} / ${health}` : ""}
          </div>
        </div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Card;
