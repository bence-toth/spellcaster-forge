import classNames from "classnames";
import "./CardCompact.css";
import Airborne from "./curly-wing.png";
import Invisible from "./sight-disabled.png";

const domains = {
  chaos: "chaos",
  fire: "fire",
} as const;

export type Domain = (typeof domains)[keyof typeof domains];

interface CardCompactProps {
  domain: Domain;
  avatar: string;
  health?: number;
  attack?: number;
  attributes?: string[];
}

const CardCompact = ({
  domain,
  avatar,
  attributes,
  health,
  attack,
}: CardCompactProps) => {
  const isCreature = health !== undefined && attack !== undefined;

  return (
    <div className={classNames("card-compact", `domain-${domain}`)}>
      <div className="avatar" style={{ backgroundImage: `url(${avatar})` }}>
        <div className="card-compact-avatar-gradient-bottom" />
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
    </div>
  );
};

export default CardCompact;
