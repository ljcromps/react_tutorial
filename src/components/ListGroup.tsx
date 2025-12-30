function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

//mapping over the items array and converting them into list items
// to implement the function inside the return, it must be wrapped in curly-braces.
// Curly-braces make things dynamic
    return (<>
        <h1>List</h1>
        <ul className="list-group">
            {items.map(item =>
                (<li>{item}</li>))}
        </ul>
    </>)

}

export default ListGroup;

// www.getbootstrap.com/docs/4.0/components/list-group/