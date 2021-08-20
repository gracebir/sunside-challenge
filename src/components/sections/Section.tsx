import styles from '../../styles/Section.module.css';
import Image from 'next/image';
function Section() {
    return (
        <div className={styles.sections}>
            <div className={styles.section}>
                <div className={`${styles.card} ${styles.description1}`}>
                    <h2>Transform our brand</h2>
                    <p>we are a full-service creative specializing haelping brands grow fast.
                        Engage your clients through compelling visuals that do 
                        most of the marking for you
                    </p>
                    <h4>LEARN MORE</h4>
                </div>
                <div className={styles.card}>
                    <Image
                        src="https://i.ibb.co/D79rDCW/egg.jpg"
                        height={600}
                        width={800}
                        />
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.card}>
                    <Image
                        src="https://i.ibb.co/D79rDCW/egg.jpg"
                        height={600}
                        width={800}
                        />
                </div>
                <div className={`${styles.card} ${styles.description1}`}>
                    <h2>Stand out to the right audience</h2>
                    <p>Using a collaborative formula of designers, researchers,
                        photographers, videographers, and copywriters, we'll
                        build and extend your brand in digital places.
                    </p>
                    <h4>LEARN MORE</h4>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.card}>
                    <Image
                        src="https://i.ibb.co/ssvvmSd/cherries.png"
                        height={600}
                        width={800}
                        />
                </div>
                <div className={`${styles.card}`}>
                    <Image
                        src="https://i.imgur.com/nVFptJO.png"
                        height={600}
                        width={800}
                        />
                </div>
            </div>
        </div>
    )
}

export default Section
