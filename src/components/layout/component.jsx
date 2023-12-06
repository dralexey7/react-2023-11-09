import { ThemeProvider } from "../contexts/theme/component";
import { Footer } from "../footer/component";
import { Header } from "../header/component";
import styles from './styles.module.css'

export const Layout = ({ children }) => {
  return (
    <ThemeProvider>
    <div className={styles.root}>
      <Header />
      {children}
      <Footer />
    </div>
    </ThemeProvider>
  );
};
