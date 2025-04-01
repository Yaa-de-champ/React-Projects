import  './index.css';
import Stopwatch from "./Stopwatch.jsx";


function App () {
    return (
        <>
        <Stopwatch/>
        </>
    );

}
export default App



// function App () {
//     return (
//         <>
//             {/*<Button/>*/}
//             <ProfilePicture/>
//         </>
//     );
// }
// export default App


// function App() {
//
//         const fruits = [{id: 1, name: 'apple', calories: 95},
//                                             {id: 2, name: 'pineapple', calories: 45},
//                                             {id: 3, name: 'banana', calories: 105},
//                                             {id: 4, name: 'coconut', calories: 159},
//                                             {id: 5, name: 'mango', calories: 37}];
//
//         const vegetables = [{id: 6, name: 'green pepper', calories: 110},
//                                             {id: 7, name: 'tomato', calories: 15},
//                                             {id: 8, name: 'carrot', calories: 25},
//                                             {id: 9, name: 'garden eggs', calories: 63},
//                                             {id: 10, name: 'cabbage', calories: 58}];
//
//         return (
//             <>
//                {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
//                {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
//
//             </>
//         );
//
// }
//
// export default App































// import Main from './components/Main.jsx'


// import Button from "./Button.jsx"
//
// function App() {
//     return (
//         <>
//         <Button/>
//         </>
//     );
// }
// export default App


// import Student from "./Student.jsx"
//
// function App() {
//     return (
//     <>
//         <Student name="SpongeBob" age={34} isStudent={true}/>
//         <Student name="Issabel" age={23} isStudent={false}/>
//         <Student name="Kofi" age={13} isStudent={true}/>
//         <Student name="Kwame" age={19} isStudent={false}/>
//         <Student name="Larry"/>
//     </>
//     );
// }
// export default App
//
// import "./index.css";
// import UserGreeting from "./UserGreeting.jsx"
//
// function App() {
//     return (
//         <>
//             <UserGreeting isLoggedIn={false} username="Nana Yaa"/>
//         </>
//     );
// }
//
// export default App
//



//
// import Card from './Card.jsx';
// import profilePic from "../../../../../Downloads/FYP/frontend/frontend/src/assets/profile.jpg";
// import './index.css';


// import {Fragment} from "react";
//
// function App() {
//
//     return (
//         <fragment>
//             <Card name="Nana Yaa" image={profilePic} text="Django-React Web Developer"/>
//             <Card name="Kwame Mensah" image={profilePic} text="Machine Learning Developer"/>
//             <Card name="Kojo Asante" image={profilePic} text="Lecturer"/>
//             <Card name="Akosua Adoma" image={profilePic} text="Researcher"/>
//
//         </fragment>
//     );
// }
//
// export default App


// // App.jsx
// const team = [
//     {
//         image: profilePic,
//         name: "Nana Yaa",
//         role: "ML Engineer",
//         email: "nana.yaa@example.com",
//         bio: "Built the fraud detection model using PyTorch.",
//         linkedin: "https://linkedin.com/in/nana-yaa",
//         github: "https://github.com/nana-yaa"
//     },
//     {
//         image: profilePic,
//         name: "John Doe",
//         role: "Frontend Developer",
//         email: "john.doe@example.com",
//         bio: "Designed the React.js interface for the model.",
//         linkedin: "https://linkedin.com/in/john-doe"
//     },
//     // Add advisors, teammates, etc.
// ];
//
// function App() {
//     return (
//         <section className="contact-section">
//             <h1>Meet the Team</h1>
//             <div className="card-container">
//                 {team.map((person, index) => (
//                     <Card key={index} {...person} />
//                 ))}
//             </div>
//         </section>
//     );
// }
//
// export default App