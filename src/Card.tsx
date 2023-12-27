import classNames from "classnames";
import "./Card.css";
import CardBackgroundChaos from "./background-chaos.jpg";
import ManaChaos from "./mana-chaos.png";
import Airborne from "./curly-wing.png";
import Invisible from "./sight-disabled.png";
import { ReactElement } from "react";

const domains = {
  chaos: "chaos",
} as const;

export type Domain = (typeof domains)[keyof typeof domains];

const cardBackgrounds = {
  chaos: CardBackgroundChaos,
};

interface CardProps {
  name: string;
  domain: Domain;
  description: ReactElement;
  avatar: string;
}

const Card = ({ name, domain, description, avatar }: CardProps) => {
  return (
    <div
      className={classNames("card", `domain-${domain}`)}
      style={{ backgroundImage: `url(${cardBackgrounds.chaos})` }}
    >
      <div className="card-gradient-top" />
      <div className="card-border" />
      <header className="header">
        <div className="name">{name}</div>
        <div className="cost">
          <div className="number">5</div>
          <div className="mana">
            <img src={ManaChaos} alt="Chaos mana" />
          </div>
        </div>
      </header>
      <div className="avatar" style={{ backgroundImage: `url(${avatar})` }}>
        <div className="card-avatar-gradient-bottom" />
        <div className="properties">
          <div className="attributes">
            <img src={Airborne} alt="Airborne" />
            <img src={Invisible} alt="Invisible" />
          </div>
          <div className="stats">10 | 5</div>
        </div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Card;
