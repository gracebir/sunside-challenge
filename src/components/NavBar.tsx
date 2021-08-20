import styles from '../styles/Nav.module.css';
import Image from 'next/image';

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <Image
                src="https://svgur.com/i/Zvd.svg"
                width={120}
                height={24}
                className={styles.logo}
                />
            </div>
            <ul className={styles.navbar__item}>
                <li className={styles.navbar__list}>About</li>
                <li className={styles.navbar__list}>Services</li>
                <li className={styles.navbar__list}>Project</li>
                <li className={`${styles.navbar__list} ${styles.active}`}>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar
