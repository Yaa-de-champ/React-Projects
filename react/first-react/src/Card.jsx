// import "/profile.jpg";
import profilePic from "../../../funapp/funproject/src/assets/profile.jpg";
import './index.css';



function Card() {

    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" width="100" height="100"></img>
            <h2 className="card-title">Nana Yaa</h2>
            <p className="card-text">I am a biomedical engineering student. I am very passionate about computer programming</p>

        </div>
    );

}

export default Card;
