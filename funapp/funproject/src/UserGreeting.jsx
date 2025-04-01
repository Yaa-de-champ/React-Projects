import "./index.css";
import PropTypes from 'prop-types';

function UserGreeting(props) {

        // if(props.isLoggedIn) {
        //     return <h2>Welcome {props.username}</h2>
        // }
        // else {
        //     return <h2>Please log in to continue!</h2>
        // }

    // or

    const welcomemessage = <h2 className="welcome-message">
        Welcome {props.username}
        </h2>
    const loginprompt = <h2 className="login-message">
        Please log in to continue
    </h2>

    return(props.isLoggedIn ? welcomemessage : loginprompt);

     // or

    // return(props.isLoggedIn ?   <h2 className="welcome-message">Welcome {props.username}</h2> :
    //                             <h2 className="login-message">Please log in to continue</h2>);

}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest',
}

export default UserGreeting
