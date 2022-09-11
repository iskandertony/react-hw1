import "./JerseyBlock.css";
import SmallText from "./../../assets/images/Smalltext.png";
import Nike from "./../../assets/images/Group.png";
import Pict from "./../../assets/images/Pict.png";

const JerseyBlock = (props) => {
  return (
    <div className="body">
      <div className="title-names">
        <div className="names">
          <img src={SmallText} alt="img"></img>
        </div>
      </div>
      <div className="border-start">
        <div className="border-dop"></div>
      </div>
      <div className="nba">
        <div className="nba-dop">Jersey</div>
        <div>
          <img src={Nike} alt="img"></img>
        </div>
        <div className="nba-dop">NBA</div>
      </div>
      <div className="border-end">
        <div className="border-dop"></div>
      </div>
      <div className="text-team">
        <div className="text-team-dop">
          whichever <span className="text-team-dop-color">nba</span>{" "}
          <span className="text-team-dop-color2">team</span> your support, get
          your jersey here today.
        </div>
      </div>
      <div className="border-team">
        <div className="border-dop-team"></div>
      </div>
      <div className="pict">
        <img src={Pict} alt="img"></img>
      </div>
    </div>
  );
};

export default JerseyBlock;
