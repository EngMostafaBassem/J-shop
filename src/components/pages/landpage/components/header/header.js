import React from "react";
import styles from './index.module.scss'
import { IoPlayCircle } from "react-icons/io5";
const Header=()=>{
  return(
      <div className={styles['jew_header']}>
         <div className={styles['jew_header-sec1']}>
             <div  className={styles['jew_header-sec1-img']}>
                 <img src={require('../../../../../assets/images/gold-ring-with-shiny-diamond-stone-it.png')}  alt=""/>
              </div> 
              <p className={styles['jew_header-sec1-title']}>Jewelery tells a great story</p> 
              <div className={styles['jew_header-sec1-types']}>
                 <div  className={styles['jew_header-sec1-types-container']}>
                   <p className={styles['jew_header-sec1-types-container-head']}>Gold</p>
                   <p className={styles['jew_header-sec1-types-container-subtitle']}>Her provision acuteness had two why intention. </p>
                </div> 
                <div  className={styles['jew_header-sec1-types-container']}>
                   <p className={styles['jew_header-sec1-types-container-head']}>SILVER</p>
                   <p className={styles['jew_header-sec1-types-container-subtitle']}>Her provision acuteness had two why intention.  </p>
                </div> 
               
              </div>
         </div>
         <div className={styles['jew_header-sec2']}>
           <div  className={styles['jew_header-sec2-content']}>
             <p  className={styles['jew_header-sec2-content-title']}>Our Story</p>
             <p  className={styles['jew_header-sec2-content-subtitle']}>modern jewelry is made of gold, silver, or platinum, often with precious or semiprecious stones, it evolved from shells, animal teeth, and other items used as body decoration in prehistoric times.</p>
           </div>
           <div className={styles['jew_header-sec2-img']}>
             <img src={require('../../../../../assets/images/Rectangle_4-removebg-preview.png')}/>
             <span className={styles['btn-play']}><IoPlayCircle size={35}/> Play Video </span>
           </div>
         </div>
        <button className={styles['jew_header-explore-btn']}>Explore</button>
      </div>
  )
}
export default Header