import { Counter } from "../counter/component";

export const Dish = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
      <Counter min={0} max={5} defaultNumber={0}/>
    </div>
  );
};
