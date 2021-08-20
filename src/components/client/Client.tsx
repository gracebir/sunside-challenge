import styles from '../../styles/Client.module.css';
import Image from 'next/image';

function Client() {
    return (
        <div className={styles.client}>
            <h3 className={styles.title__client}>client testimonials</h3>
            <div className={styles.clients__list}>
                <div className={styles.client__item}>
                    <Image
                    src='https://i.ibb.co/pWCgfnG/client1.png'
                    height={50}
                    width={50}
                    className={styles.client__img}
                    />
                    <p className={styles.client__text}>
                        we put our trust in Sunnyside and they
                        delivered, making sure our needs were met and deadlines were 
                        alwayshit
                    </p>
                    <h5 className={styles.client__name}>Emily R.</h5>
                    <span className={styles.position}>Marking Director</span>
                </div>
                <div className={styles.client__item}>
                    <Image
                    src='https://i.ibb.co/pWCgfnG/client1.png'
                    height={50}
                    width={50}
                    className={styles.client__img}
                    />
                    <p className={styles.client__text}>
                        we put our trust in Sunnyside and they
                        delivered, making sure our needs were met and deadlines were 
                        alwayshit
                    </p>
                    <h5 className={styles.client__name}>Emily R.</h5>
                    <span className={styles.position}>Marking Director</span>
                </div>
                <div className={styles.client__item}>
                    <Image
                    src='https://i.ibb.co/pWCgfnG/client1.png'
                    height={50}
                    width={50}
                    className={styles.client__img}
                    />
                    <p className={styles.client__text}>
                        we put our trust in Sunnyside and they
                        delivered, making sure our needs were met and deadlines were 
                        alwayshit
                    </p>
                    <h5 className={styles.client__name}>Emily R.</h5>
                    <p className={styles.position}>Marking Director</p>
                </div>
            </div>
        </div>
    )
}

export default Client
