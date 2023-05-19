import { useEffect, useState } from "react";

const Counter = () => {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);

  const inactive = false;

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [count, start]);

  const btnStartHandler = () => {
    setStart(true);
    document.getElementById('btn-start').classList.add('btn--inactive');
  };

  return (
    <div className="container">
      <div className="set-long-container">
        <input type="number" placeholder="How Long?" />
        <button className="btn" onClick={ btnStartHandler } id="btn-start" >Start</button>
      </div>
      <div className="count-container">
        <h1 className="count">{count}</h1>
      </div>
      <button className="btn btn--stop">Stop</button>
    </div>
  );
};

export default Counter;
