import React from 'react'
import styles from './index.module.scss'
const Testimonials=()=>{
    return(
        <div className={styles['jew_testimonials']}>
          <img  className={styles['jew_testimonials-main-img']} src={require('../../../../../assets/images/Image___bg-removebg-preview.png')} alt='actor'/>
          <img  className={styles['jew_testimonials-bottom-img']} src={require('../../../../../assets/images/Bottom Images.png')} alt='bottom image'/>   
          <p    className={styles['jew_testimonials-title']}>Testimonials</p>
          <div className={styles['jew_testimonials-card']}>   
           <p className={styles['jew_testimonials-card-title']}>Maria Sarapavoo</p>
           <p className={styles['jew_testimonials-card-subtitle']}>Senior Designe</p>
           <p className={styles['jew_testimonials-card-desc']}>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using letters Ipsum is that it has a more-or-less normal distribution of letter.</p>
          </div>
          <div className={styles['jew_testimonials-nav']}>

            <img  className={styles['jew_testimonials-nav-left']} src={require('../../../../../assets/images/arrow-left.png')} alt='actor'/>
            <img  className={styles['jew_testimonials-nav-right']} src={require('../../../../../assets/images/arrow-right.png')} alt='actor'/>
          </div>
          <img  className={styles['jew_testimonials-plus-img']} src={require('../../../../../assets/images/plus.png')} alt='actor'/>

        </div>
    )

}
export default Testimonials