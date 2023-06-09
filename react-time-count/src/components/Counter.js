import { useEffect, useState } from "react";

const Counter = () => {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  const [setedMaxCount, setSetedMaxCount] = useState(false);
  const [maxCount, setMaxCount] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (start && count < Number(setedMaxCount)) {
      const interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [count, start, setedMaxCount]);

  useEffect(() => {
    if (reset) {
      setCount(0);
      setMaxCount(0);
      setSetedMaxCount(0);
      setStart(false);
    }

    document.getElementById("btn-start").classList.remove("btn--inactive");
    document.getElementById("btn-stop").classList.remove("btn--stop");
    document.getElementById("btn-stop").classList.add("btn--inactive");

    return () => {
      setReset(false);
    };
  }, [reset]);

  const btnStartHandler = () => {
    setStart(true);
    document.getElementById("btn-start").classList.add("btn--inactive");
    document.getElementById("btn-stop").classList.remove("btn--inactive");
    document.getElementById("btn-stop").classList.add("btn--stop");
  };

  const btnStopHandler = () => {
    setStart(false);
    document.getElementById("btn-start").classList.remove("btn--inactive");
    document.getElementById("btn-stop").classList.remove("btn--stop");
    document.getElementById("btn-stop").classList.add("btn--inactive");
  };

  const btnResetHandler = () => {
    setReset(true);
  };

  return (
    <div className="container">
      <div className="set-long-container">
        <input
          type="number"
          placeholder="How Long?"
          value={maxCount}
          onChange={(e) => {
            setMaxCount(e.target.value);
            console.log(maxCount);
          }}
        />
        <button
          className="btn btn--set"
          onClick={() => setSetedMaxCount(maxCount)}
        >
          Set
        </button>
        <button className="btn btn--reset" onClick={btnResetHandler}>
          Reset
        </button>
      </div>
      <button className="btn" onClick={btnStartHandler} id="btn-start">
        Start
      </button>
      <div className="count-container">
        <h1 className="count">{count}</h1>
      </div>
      <button
        className="btn btn--inactive"
        id="btn-stop"
        onClick={btnStopHandler}
      >
        Stop
      </button>
    </div>
  );
};

export default Counter;
