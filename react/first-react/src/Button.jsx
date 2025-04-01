function Item({ name, isPacked }){
    return (
        <li className='item'>
            {name}{isPacked && '✅'}
        </li>
    );
}

const person = {
    name: "Nana Yaa Adomaa",
    theme: {
        backgroundColor: 'black',
        color: 'pink',
    }
};

function Button() {
    return (
         <div style={person.theme}>
             <h1>{person.name}'s Todos</h1>
             <img
                 className="avatar"
                 src="https://i.imgur.com/7vQD0fPs.jpg"
                 alt="an image of course!"/>
             <ul>
                 <Item name="Study Nanotechnology" isPacked={true} />
                 <Item name="Do some django programming" isPacked={false} />
                 <Item name="Go out and chill" isPacked={true} />
                 {/*<li>Study Nanotechnology</li>*/}
                 {/*<li>Do some django programming</li>*/}
                 {/*<li>Go out and chill</li>*/}
             </ul>
         </div>

    );

}

export default Button


 // return (
    //     <button>
    //         I'm a button
    //     </button>
    //
    // );