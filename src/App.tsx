import {useReducer} from "react";

interface State {
    count: number
}

type Action = | {
    type: 'increment'
} | {
    type: 'decrement'
}
const CounterReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        default:
            throw new Error()
    }

}
export const App: React.FC = () => {
    const [state, dispatch] = useReducer(CounterReducer, {count: 0});

    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>Increase by 1</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrease by 1</button>

        </>
    )
}
