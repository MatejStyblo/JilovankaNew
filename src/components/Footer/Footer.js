import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './footer.module.css'
import Mapa from "./Mapa.js"
function Footer() {
   return (

      <div className={styles.mainFooter} >
           <div className={styles.mapa}>
            <Mapa />
         </div>
         <div className="container" >
            <div className="row">
                       
               <div className="col ">
                  <h4 className={styles.header} id="kontakt">Kontakty</h4>

                  <ul className="list-unstyled">
                  <li className={styles.content}>  <a className={styles.mailto} href="tel:775112341">Telefon: (+420)775 112 341</a></li>
               <li className={styles.content}>  <a className={styles.mailto} href="mailto:info@penzionjilovanka.cz">info@penzionjilovanka.cz</a></li>
        
                  </ul>
               </div>
           
               <div className="col">
           
                  <h4 className={styles.header}>Adresa</h4>
                  <ul className="list-unstyled">
               <li className={styles.content}>  Chata JÍLOVANKA</li>
               <li className={styles.content}>  Zdobnice 5</li>
               <li className={styles.content}>  516 01 Rychnov nad Kněžnou</li>
                  </ul>
               </div>
               <div className="col">
           
                  <h4 className={styles.header}>Majitel a provozovatel</h4>
                  <ul className="list-unstyled">
               <li className={styles.content}>  Ondřej Stýblo</li>
               <li className={styles.content}>  IČ: 10855408</li>
                  </ul>
               </div>
            </div>
            <div className="row">
               <p className={styles.foot}>
                  Copyright &copy;{new Date().getFullYear()} Matěj Stýblo{' '}
               </p>
            </div>
         </div>
      </div>
   )
}

export default Footer
