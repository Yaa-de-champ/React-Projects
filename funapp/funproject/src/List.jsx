import React, {useState} from "react";

function List() {

    const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana']);

    function handleAddFood() {

        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFoods(foods => [...foods, newFood]);

    }

    function handleRemoveFood(index) {

        setFoods(foods.filter((_, i) => i !== index));
    }
    

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((foods, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {foods}
                </li>)}
            </ul>
            <input type='text' id='foodInput' placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );

}

export default List;


























// import PropTypes from 'prop-types';

// function List(props) {

//     const itemList = props.items;
//     const category = props.category;

//     const listItems = itemList.map(item => <li key={item.id}>
//                                                 {item.name}: &nbsp;
//                                                 <b>{item.calories}</b></li>)

//     return (
//         <>
//             <h3 className="list-category">{category}</h3>
//             <ol className="list-items">{listItems}</ol>
//         </>
//     );
// }

// List.propTypes = {
//     category: PropTypes.string,
//     items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
//                                                     name: PropTypes.string,
//                                                         calories: PropTypes.number})),
// }
// List.defaultProps = {
//     category: "Category",
//     items: [],
// }
// export default List































//
// function List() {
//
//     const fruits = [{id: 1, name: 'apple', calories: 95},
//                                             {id: 2, name: 'pineapple', calories: 45},
//                                             {id: 3, name: 'banana', calories: 105},
//                                             {id: 4, name: 'coconut', calories: 159},
//                                             {id: 5, name: 'mango', calories: 37}];
//
//     // fruits.sort((a, b) => a.name.localeCompare(b.name)); //This is alphabetical
//     // fruits.sort((a, b) => b.name.localeCompare(a.name)); //This is reverse alphabetical
//     // fruits.sort((a, b) => a.calories - b.calories); //This is numerical
//     fruits.sort((a, b) => b.calories - a.calories); //This is reverse numerical
//
//     // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);  //find low calories fruit
//     // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
//
//     // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
//     //                                                                     {highCalFruit.name}: &nbsp;
//     //                                                                     <b>{highCalFruit.calories}</b></li>)
//     const listItems = fruits.map(fruit => <li key={fruit.id}>
//                                                 {fruit.name}: &nbsp;
//                                                 <b>{fruit.calories}</b></li>)
//
//     return (<ol>{listItems}</ol>);
// }
//
// export default List


