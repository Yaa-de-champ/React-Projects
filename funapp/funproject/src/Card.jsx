// import "/profile.jpg";
import profilePic from "../../../../../Downloads/FYP/frontend/frontend/src/assets/profile.jpg";
import './index.css';


// Card.jsx
import './index.css';

function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.image} alt={props.name} />
            <h2 className="card-title">{props.name}</h2>
            <p className="card-role">{props.role}</p>
            <p className="card-email">{props.email}</p>
            <p className="card-text">{props.bio}</p>
            <div className="card-links">
                {props.linkedin && <a href={props.linkedin}>LinkedIn</a>}
                {props.github && <a href={props.github}>GitHub</a>}
            </div>
        </div>
    );
}

export default Card;