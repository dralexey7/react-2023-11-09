import { Review } from "../review/components";

export const Reviews = ({ reviews }) => {
  const texts = reviews.map(({ text }) => text);
  return (
    <div>
      <p>Reviews</p>
      <ul>
        {texts.map((text) => (
          <li>
            <Review text={text} />
          </li>
        ))}
      </ul>
    </div>
  );
};
