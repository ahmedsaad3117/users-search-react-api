import './Card.css'

const Card = (props) => {
  return (
    <div className=" card-continer__" >
     
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li className="list-group-item">{props.JobName}</li>
        <li className="list-group-item">{props.Mobile}</li>
       
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default Card;
