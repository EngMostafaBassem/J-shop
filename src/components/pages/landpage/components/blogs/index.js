import React from 'react'
import styles from './index.module.scss'
const Blogs=()=>{
    return(
        <div className={styles['jew_blogs']}>
           <p className={styles['jew_blogs-title']}>Our Blogs</p>
           <div className={styles['jew_blogs-wrapper']}>
             <div  className={styles['jew_blogs-wrapper-box']}>
                <img  className={styles['jew_blogs-wrapper-box-img']} src={require('../../../../../assets/images/blog1.png')} alt='blog1'/>
                <p    className={styles['jew_blogs-wrapper-box-title']}> For Beauty</p>
                <p    className={styles['jew_blogs-wrapper-box-desc']}>Offending belonging promotion provision an be oh consulted ourselves it.</p>
             </div>
             <div  className={styles['jew_blogs-wrapper-box']}>
                <img  className={styles['jew_blogs-wrapper-box-img']}src={require('../../../../../assets/images/blog2.png')} alt='blog2'/>
                <p    className={styles['jew_blogs-wrapper-box-title']}> Product Quality</p>
                <p    className={styles['jew_blogs-wrapper-box-desc']}>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day necessary.</p>
             </div>

             <div  className={styles['jew_blogs-wrapper-box']}>
                <img  className={styles['jew_blogs-wrapper-box-img']}src={require('../../../../../assets/images/blog3.png')} alt='blog3'/>
                <p    className={styles['jew_blogs-wrapper-box-title']}> For Comfort</p>
                <p    className={styles['jew_blogs-wrapper-box-desc']}>Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment</p>
             </div>
           </div>
        </div>
    )

}
export default Blogs