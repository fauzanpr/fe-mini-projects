import { useEffect, useState } from "react";

const Counter = () => {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
        clearInterval(interval);
    }
  }, [count]);

  return (
    <div className="container">
      <div className="set-long-container">
        <input type="number" placeholder="How Long?" />
        <button className="btn">Start</button>
      </div>
      <div className="count-container">
        <h1 className="count">{count}</h1>
      </div>
      <button className="btn btn--stop">Stop</button>
    </div>
  );
};

export default Counter;
