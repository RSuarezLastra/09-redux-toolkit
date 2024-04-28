import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const { counter } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>count is {counter}</h1>
            <div className="card">
                <button onClick={() => dispatch(increment())}
                    style={{ marginRight: '10px' }}>
                    increment
                </button>
                <button onClick={() => dispatch(decrement())}
                    style={{ marginRight: '10px' }} >
                    decrement
                </button>
                <button onClick={() => dispatch(incrementBy(2))} >
                    incrementBy 2
                </button>
            </div>
        </>
    )
}

export default App
