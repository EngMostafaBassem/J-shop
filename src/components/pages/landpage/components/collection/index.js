import React from 'react'
import styles from './index.module.scss'
const Collection=({collection:{imgUrl,title,subtitle,desc,reversed,goShopping}})=>{
    return(
        <div className={styles['jew_collection']}>
           <div className={styles['jew_collection-wrapper']} style={{flexDirection:reversed?'row-reverse':'row'}}>
              <div className={styles['jew_collection-wrapper-img']} >
                 <img src={require(`../../../../../${imgUrl}`)} alt=''/>
              </div>
              <div className={styles['jew_collection-wrapper-content']}  style={{justifyContent:reversed?'flex-end':'flex-start'}}>
                <div>
                  {title&& <p  className={styles['jew_collection-wrapper-content-title']}>{title}</p>}  
                  {subtitle&& <p  className={styles['jew_collection-wrapper-content-subtitle']}>{subtitle}</p>}     
                  <p  className={styles['jew_collection-wrapper-content-desc']}>{desc}</p>
                  {goShopping&&<button className={styles['jew_collection-wrapper-content-btn']}>Go To Shop</button>} 
                </div>  
                
              </div>
           </div>
        </div>
    )

}
export default Collection