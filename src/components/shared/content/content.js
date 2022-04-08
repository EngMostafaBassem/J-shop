import React from 'react'
import Cpyright from '../../pages/landpage/components/cpyright'
import Footer from '../../pages/landpage/components/footer'
import Nav from '../../pages/landpage/components/nav'
import styles from './index.module.scss'
const Content=({children})=>{
    return(
        <>
         <div className={styles.container}>
            <Nav/>
             {children}
            <Footer/>
         </div>
         <Cpyright/>
        </>
    )

}
export default Content