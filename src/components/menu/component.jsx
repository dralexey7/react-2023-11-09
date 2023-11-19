import { Dish } from "../dish/component";

export const Menu = ({ dishes }) => {
  const names = dishes.map(({ name }) => name);
  return (
    <div>
      <p>Menu</p>
      <ul>
        {names.map((name) => (
          <li>
            <Dish name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
