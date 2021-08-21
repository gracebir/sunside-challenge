import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Image
            src="https://svgur.com/i/Zvd.svg"
            height={30}
            width={150}
            className={styles.image__color}
            />
           <ul className={styles.list__group}>
               <li className={styles.list__item}><a href="#">About</a></li>
               <li className={styles.list__item}><a href="#">Services</a></li>
               <li className={styles.list__item}><a href="#">Projects</a></li>
           </ul>
            <ul className={styles.list__group}>
                <li className={styles.list__item}><a href="#"><FacebookIcon/></a></li>
                <li className={styles.list__item}><a href="#"><InstagramIcon/></a></li>
                <li className={styles.list__item}><a href="#"><TwitterIcon/></a></li>
                <li className={styles.list__item}><a href="#"><PinterestIcon/></a></li>
            </ul>
        </footer>
    )
}

export default Footer
