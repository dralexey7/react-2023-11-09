export const Counter = ({ value, increment, decrement, min = 0, max = 5 }) => {
  return (
    <div>
      <button onClick={increment} disabled={value >= max}>
        +
      </button>
      <p>{value}</p>
      <button onClick={decrement} disabled={value <= min}>
        -
      </button>
    </div>
  );
};
