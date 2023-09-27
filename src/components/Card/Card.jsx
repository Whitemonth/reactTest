import Button from "../Button/Button";
import "./card.css";

function Card(props) {
  return (
    <div className="card-content">
      <div>{props.title}</div>
      <Button caption={props.caption} title={props}></Button>
    </div>
  );
}

export default Card;
