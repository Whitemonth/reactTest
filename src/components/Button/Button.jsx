import "./button.css";

function Button(props) {
  return (
    <div>
      <button>{props.caption}</button>
    </div>
  );
}

export default Button;
