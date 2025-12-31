import {useState} from "react";

// create an object with two properties: item [] and heading string
interface ListGroupProps {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: ListGroupProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (<>
        <h1>{heading}</h1>
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