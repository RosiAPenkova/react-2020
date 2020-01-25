import React, { useState, useEffect } from 'react';


const FunctionalComponent = props => {

    // Use state in a functional component
    const [count, setCount] = useState(props.count);

    //Life cycle hooks in functional component
    useEffect(() => {
        console.log("mounted");

        return () => {
            console.log("unmounted");
        }
    }, [])
    return (
        <div>
            <div>{count}</div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {props.children}
            <button onClick={() => setCount(count + props.step)} type="button" className="btn btn-outline-primary">Increment</button>
            <button onClick={() => setCount(count - props.step)} type="button" className="btn btn-outline-primary">Decrement</button>
        </div>
    )
}

export default FunctionalComponent