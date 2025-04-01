import React, {useState, useEffect} from "react";


function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {        
        window.addEventListener('resize', handleResize);
        console.log('Event Listener Added');

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('Event Listener removed')
        }
    }, []);

    useEffect(() => {
        document.tite = `Size: ${width} x ${height}`;
    }, [width, height])

    return (
        <>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
        </>
    );
}

export default MyComponent



// function MyComponent() {

//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState('green');


//     useEffect (() => {
//         document.title = `Count: ${count} ${color}`
//     }, [count, color]);

//     function addCount() {
//         setCount(count => count + 1);
//     }

//     function subtractCount() {
//         setCount(count => count - 1);
//     }

//     function changeColor() {
//         setColor(color => color === 'green' ? 'red' : 'green');
//     }

//     return (
//         <>
//         <p style={{color: color}}>Count: {count}</p>
//         <button onClick={addCount}>Add</button>
//         <button onClick={subtractCount}>Subtract</button>
//         <button onClick={changeColor}>Change color</button>
//         </>
//     );

// }

// export default MyComponent


// function MyComponent() {

//     const [cars, setCars] = useState([]);
//     const [carYear, setCarYear] = useState(new Date().getFullYear());
//     const [carMake, setCarMake] = useState('');
//     const [carModel, setCarModel] = useState('');


//     function handleAddCar() {

//         const newCar = {year: carYear,
//                                     make: carMake,
//                                     model: carModel};
//         setCars(cars => [...cars, newCar])

//         setCarYear(new Date().getFullYear());
//         setCarMake("");
//         setCarModel("");
//     }

//     function handleRemoveCar(index) {
//         setCars(car => car.filter((_, i) => i  !== index))
//     }

//     function handleYearChange(event) {
//         setCarYear(event.target.value);
//     }


//     function handleMakeChange(event) {
//         setCarMake(event.target.value)
//     }

//     function handleModelChange(event) {
//         setCarModel(event.target.value)
//     }

//     return(
//         <div>
//             <h2>List of Car Objects</h2>
//             <ul>
//                 {cars.map((car, index) =>
//                     <li key={index} onClick={() => handleRemoveCar(index)}>
//                         {car.year} {car.make} {car.model}
//                     </li>)}
//             </ul>
//             <input type='number' value={carYear} onChange={handleYearChange}/><br/>
//             <input type='text' value={carMake} onChange={handleMakeChange}
//                     placeholder="Enter car make"/><br/>
//             <input type='text' value={carModel} onChange={handleModelChange}
//                     placeholder="Enter car model"/><br/>
//             <button onClick={handleAddCar}>Add Car</button>
//         </div>
//     );
// }


// export default MyComponent


// function MyComponent() {

//     const [car, setCar] = useState({year: 2025, 
//                                     make:'Rolls Royce', 
//                                     model: 'Cullinan'});

//     function handleYearChange(event) {
//         setCar(car => ({...car, year: event.target.value}))
//     }

//     function handleMakeChange(event) {
//         setCar(car => ({...car, make: event.target.value}))
//     }

//     function handleModelChange(event) {
//         setCar(car => ({...car, model: event.target.value}))
//     }
    

//     return(
//         <div>
//             <p>Your Favourite Car is: {car.year} {car.make} {car.model}</p>

//             <input type="number" value={car.year} onChange={handleYearChange}/><br/>
//             <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
//             <input type="text" value={car.model} onChange={handleModelChange}/><br/>
//         </div>
//     );
// }

// export default MyComponent



// import React, {useState} from "react";

// function MyComponent () {

//     const [name, setName] = useState('Guest');
//     const [quantity, setQuantity] = useState(1);
//     const [comment, setComment] = useState('');
//     const [payment, setPayment] = useState('');
//     const [shipping, setShipping] = useState('Delivery');

//     function handleNameChange(event) {
//         setName(event.target.value)
//     }

//     function handleQuantityChange(event) {
//         setQuantity(event.target.value)
//     }

//     function handleCommentChange(event) {
//         setComment(event.target.value)
//     }

//     function handlePaymentChange(event) {
//         setPayment(event.target.value)
//     }

//     function handleShippingChange(event) {
//         setShipping(event.target.value)
//     }

//     return (
//         <div>
//             <input value={name} onChange={handleNameChange}/>
//             <p>Name: {name}</p>

//             <input value={quantity} onChange={handleQuantityChange} type="number"/>
//             <p>Quantity: {quantity}</p>

//             <textarea value={comment} onChange={handleCommentChange} placeholder="Enter your delivery instructions"/>
//             <p>Comment: {comment}</p>

//             <select value={payment} onChange={handlePaymentChange}>
//                 <option value="">Select an option</option>
//                 <option value="Visa">Visa</option>
//                 <option value="Mastercard">Mastercard</option>
//                 <option value="Giftcard">Giftcard</option>
//             </select>
//             <p>Payment: {payment}</p>

//             <label>
//                 <input type="radio" value='Pick Up'
//                         checked={shipping === "Pick Up"}
//                         onChange={handleShippingChange} />
//                 Pick Up
//             </label>
//             <label>
//             <input type="radio" value='Delivery'
//                         checked={shipping === "Delivery"}
//                         onChange={handleShippingChange} />
//                 Delivery
//             </label>
//             <p>Shipping: {shipping}</p>

//         </div>
//     );
// }

// export default MyComponent




// function MyComponent () {
//     const [name, setName] = useState('Guest');
//     const [age, setAge] = useState(0);
//     const[isEmployed, setIsEmployed] = useState(false);
//
//     const updateName = () => {
//         setName("Nana Yaa");
//     }
//
//     const incrementAge = () => {
//         setAge(age + 1);
//     }
//
//     const toggleEmployedStatus = () => {
//         setIsEmployed(!isEmployed);
//     }
//
//     return (
//         <div>
//             <p>
//                 Name: {name}
//             </p>
//             <button onClick={updateName}>
//                 Set Name
//             </button>
//             <p>
//                 Age: {age}
//             </p>
//             <button onClick={incrementAge}>
//                 Increment Age
//             </button>
//             <p>
//                 Is employed: {isEmployed ? "Yes" : "No"}
//             </p>
//             <button onClick={toggleEmployedStatus}>
//                 Toggle Status
//             </button>
//         </div>
//     );
// }
//
// export default MyComponent