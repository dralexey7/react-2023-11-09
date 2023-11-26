import { useState } from "react";
import { Counter } from "../counter/component";

export const Dish = ({ name }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <p>{name}</p>
      <Counter
        value={amount}
        increment={() => {
          setAmount((current) => current + 1);
        }}
        decrement={() => {
          setAmount((current) => current - 1);
        }}
      />
    </div>
  );
};
