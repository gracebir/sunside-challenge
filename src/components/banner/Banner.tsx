import NavBar from "../NavBar"
import styles from '../../styles/Banner.module.css';
import Image from 'next/image';

function Banner() {
    return (
        <div className={styles.banner}>
          <NavBar/>  
          <div>
            <h1 className={styles.accroche}>we are creatives</h1>
          </div>
          <div className={styles.arrow__container}>
            <Image
            src="https://i.ibb.co/MSv2H70/arrow.png"
            width={25}
            height={90}
            />
          </div>
        </div>
    )
}

export default Banner
