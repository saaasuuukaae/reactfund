import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(5)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        let v = count - 1
        setCount(v)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Inc</button>
            <button onClick={decrement}>Dec</button>
        </div>

    );
};

export default Counter;