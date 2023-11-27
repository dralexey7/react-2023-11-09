import { useReducer } from "react";
import { Counter } from "../counter/component";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
        text: DEFAULT_FORM_VALUE.text,
        rating: DEFAULT_FORM_VALUE.rating,
      };
    case "setText":
      return { ...state, text: action.payload };
    case "ratingIncrement":
      return { ...state, rating: state.rating + 0.5 };
    case "ratingDecrement":
      return { ...state, rating: state.rating - 0.5 };
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  return (
    <div>
      <div>
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          type="text"
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        ></input>
      </div>
      <div>
        <label htmlFor="text">Текст</label>
        <textarea
          id="text"
          value={formValue.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        ></textarea>
      </div>
      <div>
        <label htmlFor="rating">Рейтинг</label>
        <Counter
          id="rating"
          value={formValue.rating}
          increment={() => dispatch({ type: "ratingIncrement" })}
          decrement={() => dispatch({ type: "ratingDecrement" })}
          min={1}
          max={5}
        />
      </div>
    </div>
  );
};
