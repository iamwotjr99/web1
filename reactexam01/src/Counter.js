import React, {useState} from "react";
import OddEven from "./OddEven";

const Counter = (props) => {
    const [count, setCount] = useState(props.initialValue);

    const onIncrease = () => {
        setCount(count + 1);
    };
    const onDecrease = () => {
        setCount(count - 1);
        if(count <= -2) {
            setCount(0);
        }
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEven count = {count} />
        </div>
    )
}

export default Counter;