import classNames from "classnames";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/features/entities/reviews/selectors";

export const Review = ({ id, className }) => {
  const text = useSelector((state)=>selectReviewById(state, id))?.text
  return (
    <div className={classNames(styles.container, className)}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
