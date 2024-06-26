import {useState} from 'react'

const CountComponent = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

  return (
    <div>
        <h1>Contador: {count}</h1>
        <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default CountComponent

