
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Tomato', isFruit: false, id: 2 },
    { title: 'Green Pepper', isFruit: false, id: 3 },
];

const listItems = products.map(product=>
    <li key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >
        {product.title}
    </li>
);

function Items() {
    return (
        <ul>{listItems}</ul>
    );
}
export default Items