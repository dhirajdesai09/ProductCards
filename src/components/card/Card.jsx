import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.dish.image} alt="" />
      <h1>{props.dish.name}</h1>
      <p>
        {props.dish.description}
      </p>
      <div className="card-info">
        <p>{props.dish.time}</p>
        <p>{props.dish.servings}</p>
        <p>{props.dish.difficulty}</p>
      </div>
      <div className="card-ingredients">
        <p>Yougurt</p>
        <p>Olive Oil</p>
        <p>+8 Ingredients</p>
      </div>
      <button>Start Cooking</button>
    </div>
  );
};

export default Card;
