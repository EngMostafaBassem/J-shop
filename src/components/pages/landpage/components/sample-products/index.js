import React from 'react'
import styles from './index.module.scss'
const SampleProduct=({product:{imgUrl,title,subtitle,price},isReversed})=>{
    return(
        <div className={styles['jew_prod']}>
            <div className={styles['jew_prod-container']} style={{flexDirection:isReversed?'row-reverse':'row'}}>
               <div  className={styles['jew_prod-container-img']}  style={{  justifyContent:isReversed?'flex-start':'center'}}>
                   <img src={require(`../../../../../${imgUrl}`)} alt=""/>
               </div>
               <div  className={styles['jew_prod-container-content']}  style={{ justifyContent:isReversed?'center':'flex-start'}}>
                <div>
                    <p className={styles['jew_prod-container-content-title']}>{title}</p>
                    <p className={styles['jew_prod-container-content-subtitle']}>{subtitle}</p>
                   <div  className={styles['jew_prod-container-content-sizes']}>
                       <p className={styles['jew_prod-container-content-sizes-label']}>Size</p>
                       <div className={styles['jew_prod-container-content-sizes-container']}>
                          <span className={styles['jew_prod-container-content-sizes-container-item']}>S</span>
                          <span  className={styles['jew_prod-container-content-sizes-container-item']}>M</span>
                          <span  className={styles['jew_prod-container-content-sizes-container-item']}>L</span>
                       </div>     
                   </div>
                   <div  className={styles['jew_prod-container-content-chart']}>
                       <button className={styles['jew_prod-container-content-chart-btn']}>ADD TO CHART</button>
                       <p className={styles['jew_prod-container-content-chart-price']}>{price}</p>
                   </div>
                </div>
              
               </div>

            </div>
         
        </div>
    )

}
export default SampleProduct