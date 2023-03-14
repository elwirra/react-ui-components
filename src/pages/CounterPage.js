import useCounter from '../hooks/use-counter';
import Button from '../components/Button';

function CounterPage( { initialCount }) {
    const { count, handleClick } = useCounter(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button primary onClick={handleClick}>
                Increment
            </Button>
        </div>
    );
}

export default CounterPage;