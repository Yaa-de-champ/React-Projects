import React, {useState} from "react";
import  './index.css';


function Counter() {

    const [count, setCount] = useState(0);

    function increment () {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);        
    }

    function decrement() {
        setCount(count => count - 1);
        setCount(count => count - 1)
        setCount(count => count - 1)
    }

    function reset () {
        setCount(0);
    }

    return (
        <div className='counter-container'>
            <p className='count-display'>Count: {count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter




































// import React, {useState} from "react";
// import  './index.css';


// function Counter() {

//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     }

//     const decrement = () => {
//         setCount(count - 1);
//     }

//     const reset = () => {
//         setCount(0);
//     }
     
//     return (
//         <div className='counter-container'>
//             <p className='count-display'>Count: {count}</p>
//             <button className='counter-button' onClick={decrement}>Decrement</button>
//             <button className='counter-button' onClick={reset}>Reset</button>
//             <button className='counter-button' onClick={increment}>Increment</button>
//         </div>
//     );
// }

// export default Counter