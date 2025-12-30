function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    items = [];
//mapping over the items array and converting them into list items
// to implement the function inside the return, it must be wrapped in curly-braces.
    function getNoItemsMessage() {
        return items.length === 0 ? <p>No item found</p> : null;
    } //it can be beneficial to have a function over a const for a
    //result as different message may be required depending on circumstance

// Curly-braces make things dynamic
    return (<>
        <h1>List</h1>
        {getNoItemsMessage()}
        <ul className="list-group">
            {items.map(item =>
                (<li key={item}>{item}</li>))}
        </ul>
    </>)

}

// <li key={item}> - adding a key to the item allows React to keep
//track of what should be updated. Usually it will be item.id but
// just item is okay in this example

export default ListGroup;

// www.getbootstrap.com/docs/4.0/components/list-group/