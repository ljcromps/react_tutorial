import {useState} from "react";

function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // Hook - a function helps us tap into built-in features in React.
    // We tell React it could have data/state that changes over time

//mapping over the items array and converting them into list items
// to implement the function inside the return, it must be wrapped in curly-braces.
// Curly-braces make things dynamic
    // logical conditions can help avoid the use of null
    return (<>
        <h1>List</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
            {items.map((item: string, index: number) =>
                (<li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                     key={item}
                     onClick={() => {
                         setSelectedIndex(index);
                     }}
                    >
                        {item}
                    </li>
                ))}
        </ul>
    </>)

}

// <li key={item}> - adding a key to the item allows React to keep
//track of what should be updated. Usually it will be item.id but
// just item is okay in this example

export default ListGroup;

// www.getbootstrap.com/docs/4.0/components/list-group/