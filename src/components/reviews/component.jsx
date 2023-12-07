import classNames from "classnames";
import { Review } from "../review/components";
import styles from "./styles.module.css";

export const Reviews = ({ reviews, className }) => {
  
  return (
    <div className={classNames(className)}>
      <p className={styles.header}>Reviews</p>
      <div className={classNames(styles.reviewsList)}>
        {reviews.map((reviewId) => (
          <Review id={reviewId} />
        ))}
      </div>
    </div>
  );
};
