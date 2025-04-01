function Button () {

    const handleClick = (e) => e.target.textContent = 'OUCH!🤕';

    return (
        <button onClick={(e) => handleClick(e)}>
            Click me 😎
        </button>
    );
}

export default Button


// function Button () {
//
//     let count = 0;
//
//     const handleClick = (name) => {
//         if (count < 3) {
//             count ++;
//             console.log(`${name} you clicked me at ${count} time/s`)
//         }
//         else {
//             console.log(`${name} stop clicking me!`)
//         }
//     }
//     return (
//         <button onClick={() => handleClick('Nana')}>
//             Click me 😎
//         </button>
//     );
// }
//
// export default Button
//








// function Button () {
//
//     const handleClick = () => console.log('OUCH!!');
//
//     const handleClick2 = (name) => console.log(`${name} stop clicking me`);
//
//
//     return (
//         <button onClick={() => handleClick2('Nana')}>
//             Click me 😎
//         </button>
//     );
// }
//
// export default Button
//
//




// function Button() {
//
//     const styles ={
//         backgroundColor: "hsl(200, 100%, 50%)",
//         color: "white",
//         padding: "10px 20px",
//         borderRadius: "5px",
//         border: "none",
//         cursor: "pointer",
//     }
//
//    return (
//        <button style={styles}>
//            Click me
//        </button>
//    );
// }
//
// export default Button