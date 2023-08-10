import React from 'react'
import { styles } from '../styles'
const Footer = () => {
  return (
    <div className={styles.paddingX + styles.paddingY + styles.sectionFlex + "pb-11"}>

        <div className={styles.heroSubText + "text-red-400 flex justify-center"}> Copyright @2023  </div>

        <div className={styles.heroSubText + "text-red-400 flex justify-center mb-[40px]"}> Designed By  Tanveer Ahmed</div>  


    </div>
  )
}

export default Footer