import PropTypes from 'prop-types'

function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No" }</p>
        </div>
    );
}

// ensures the right data type is assigned
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// sets default values or answers when nothing is passed
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student