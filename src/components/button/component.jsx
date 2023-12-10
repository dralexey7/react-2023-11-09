import { useContext } from "react";
import { ThemeContext } from "../contexts/theme/context";
import classNames from "classnames";
import styles from "./styles.module.css";

export const Button = ({ children, onClick, className, disabled }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button onClick={onClick} className={classNames(className, {
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark'
    })} disabled={disabled}>
      {children}
    </button>
  );
};
