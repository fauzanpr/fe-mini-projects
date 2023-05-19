const Counter = () => {
  return (
    <div className="container">
      <div className="set-long-container">
        <input type="number" placeholder="How Long?" />
        <button className="btn">Start Count</button>
      </div>
      <div className="count-container">
        <h1 className="count">1</h1>
      </div>
      <button className="btn btn--stop">Stop</button>
    </div>
  );
};

export default Counter;
