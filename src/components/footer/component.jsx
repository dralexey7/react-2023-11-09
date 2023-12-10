import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../button/component";
import { ThemeProvider } from "../contexts/theme/component";

export const Footer = ({ className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <ThemeProvider>
        <Button>Контакты</Button>
      </ThemeProvider>
    </div>
  );
};
