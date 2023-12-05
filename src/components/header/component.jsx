import classNames from 'classnames';
import styles from './styles.module.css'

export const Header = ({className}) => {
    return <div className={classNames(styles.root, className)}>Header</div>;
};