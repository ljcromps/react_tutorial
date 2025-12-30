//PascalCasing for React function components
function Message() {
    // this is JSX
    const name = 'Lauren'
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
    //curly braces let you change information dynamically
    //conditional statement depending on if a name is supplied
}

export default Message;