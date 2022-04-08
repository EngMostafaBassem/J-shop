import React from 'react'
import styles from './index.module.scss'
const Companies=()=>{
    return(
        <div className={styles['jew_companies']}>
            <p  className={styles['jew_companies-label']}>Trusted by leading companies</p>
            <div className={styles['jew_companies-brands']}>
             <img   src={require('../../../../../assets/images/brand1.png')}  alt="brand1" />
             <img   src={require('../../../../../assets/images/brand2.png')}  alt="brand1" />
             <img   src={require('../../../../../assets/images/brand3.png')}  alt="brand1" />
             <img   src={require('../../../../../assets/images/brand4.png')}  alt="brand1" />
             <img   src={require('../../../../../assets/images/brand5.png')}  alt="brand1" />
            </div>
         
        </div>
    )

}
export default Companies