import styles from '../../styles/Product.module.css';
import Image from 'next/image'

function Product() {
    return (
        <div className={styles.product}>
            <div className={styles.product__item}>
                <Image
                src='https://i.imgur.com/SgkAaZc.jpg'
                width={350}
                height={400}
                />
            </div>
            <div className={styles.product__item}>
                <Image
                src='https://i.imgur.com/AQIss42.jpg'
                width={350}
                height={400}
                />
            </div>
            <div className={styles.product__item}>
                <Image
                src='https://i.imgur.com/6dQ5CwL.jpg'
                width={350}
                height={400}
                />
            </div>
            <div className={styles.product__item}>
                <Image
                src='https://i.imgur.com/DkXP0Wg.jpg'
                width={350}
                height={400}
                />
            </div>
        </div>
    )
}

export default Product
