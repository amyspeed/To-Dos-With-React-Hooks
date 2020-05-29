import React, { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }

}

const Count = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={()=> dispatch( { type: 'DECREMENT' })}>-</button>
        </div>
    )
}

export default Count;