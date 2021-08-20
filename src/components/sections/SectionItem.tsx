import styles from '../../styles/SectionItem.module.css';
import Image from 'next/image'
function SectionItem() {
    return (
        <div>
            <section className={styles.section1}>
                <div className={`${styles.cart} ${styles.description1}`}>
                    <h2>Transform our brand</h2>
                    <p>we are a full-service creative specializing haelping brands grow fast.
                        Engage your clients through compelling visuals that do 
                        most of the marking for you
                    </p>
                    <h4>LEARN MORE</h4>
                    <div></div>
                </div>
                <div className={`${styles.section_item}`}>
                    <Image
                    src="https://i.ibb.co/D79rDCW/egg.jpg"
                    height={400}
                    width={500}
                    />
                </div>
            </section>
        </div>
    )
}

export default SectionItem
