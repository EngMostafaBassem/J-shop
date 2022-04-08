import React from 'react'
import styles from './index.module.scss'
const CTA=()=>{
    return(
        <div className={styles['jew_cta']}>
            <p className={styles['jew_cta-title']}>Join J-Shop’s Family</p>
             <form  className={styles['jew_cta-form']}>
                <div   className={styles['jew_cta-form-group']}>
                   <input   className={styles['jew_cta-form-group-input']}type='email' name='email' placeholder='Enter your email'  required/>
                   <button  className={styles['jew_cta-form-group-btn']}> Join Family</button>
                </div>
             </form>

        </div>
    )

}
export default CTA