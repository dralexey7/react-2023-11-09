import classNames from "classnames";
import { Review } from "../review/components";
import styles from "./styles.module.css";

export const Reviews = ({ reviews, className }) => {
  const texts = reviews.map(({ text }) => text);
  return (
    <div className={classNames(className)}>
      <p className={styles.header}>Reviews</p>
      <div className={classNames(styles.reviewsList)}>
        {texts.map((text) => (
          <Review text={text} />
        ))}
      </div>
    </div>
  );
};
