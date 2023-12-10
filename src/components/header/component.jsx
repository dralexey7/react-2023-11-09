import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../button/component";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme/context";
import { ThemeProvider } from "../contexts/theme/component";

export const Header = ({ className }) => {
  const { selectTheme } = useContext(ThemeContext);

  return (
    <div className={classNames(styles.root, className)}>
      <ThemeProvider>
        <Button onClick={selectTheme}>Смена темы</Button>
        <Button>Заказ</Button>
      </ThemeProvider>
    </div>
  );
};
