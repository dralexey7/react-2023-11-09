import { useState } from "react";

export const Counter = ({ min, max, defaultNumber}) => {
  const [number, setNumber] = useState(Number(defaultNumber));
  return (
    <div>
      <button
        onClick={() =>
          setNumber((current) => (current < Number(max) ? current + 1 : current))
        }
      >
        +
      </button>
      <p>{number}</p>
      <button
        onClick={() =>
          setNumber((current) => (current > Number(min) ? current - 1 : current))
        }
      >
        -
      </button>
    </div>
  );
};
