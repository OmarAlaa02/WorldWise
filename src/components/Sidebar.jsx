import styles from './Sidebar.module.css';
import Logo from './Logo';
import AppNav from './AppNav';
function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <p> List of cities </p>

            <footer className={styles.footer}><p className={styles.copyright}>@copyright {new Date().getFullYear()}</p></footer>
        </div>
    )
}

export default Sidebar
