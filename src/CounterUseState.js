import React, { useState, useRef } from 'react'

const CounterUseState = () => {
    const [count, setCount] = useState(0)
    const renderCount = useRef(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const handleClick = () => {
        renderCount.current += 1;
    }
    return (
        <div>
            {console.log("component rendered")}
            <h1>{count}</h1>
            <button onClick={decreaseCount}>-</button>
            <button onClick={increaseCount}>+</button>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default CounterUseState;
