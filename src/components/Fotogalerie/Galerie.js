import React, { useState } from 'react'
import './galerie.css'
import styles from './galerie.module.css'

import Nastenka from './nastenka'

function Galerie() {
   const [click, setClicked] = useState(false)
   const [foto, setFoto] = useState('')
   const cache = {}
   const cache2 = {}

   function Interier(r) {
      r.keys().forEach((key) => (cache[key] = r(key)))
   }

   Interier(
      require.context(
         '../album/interier/pokoj',
         false,
         /\.(png|jpe?g|svg|JPG)$/
      )
   )
  function Exterier(r) {
      r.keys().forEach((key) => (cache2[key] = r(key)))
   }
 
   Exterier(
      require.context(
         '../album/exterier/lowQuality',
         false,
         /\.(png|jpe?g|svg|JPG)$/
      )
   )

   
   const imagesInterier = Object.entries(cache).map((module) => module[1].default)
   const imagesExterier = Object.entries(cache2).map((module) => module[1].default)
   console.log(imagesInterier[0]);
   const clicked = (e) => {
      var target = e.target.src

      setClicked(!click)

      setFoto(target)
   }

   return (
      <div className={styles.galerie}>
         <Nastenka />
         <div className={styles.fotky}>
    
         </div>
         <div className={styles.block}>
         <h2 className={styles.nadpis}>
               Interier
            </h2>
            <div className={styles.containerImg}>
                     
                     {imagesInterier.map((image,index) => (
                        <img alt="Chata Jilovanka" src={image} onClick={clicked} key={index}/>
                     ))}
                  </div>

       
            <div>
            
               <div>
               <h2 className={styles.nadpis}>
               Exterier
            </h2>
                  <div className={styles.containerImg}>
                     
                     {imagesExterier.map((image,index) => (
                        <img alt="Chata Jilovanka" src={image} onClick={clicked} key={index}/>
                     ))}
                  </div>

               </div>
            </div>
         </div>

         <div className={click ? 'modular open' : 'modular'} onClick={clicked}>
      
            <img
               src={foto}
               className={click ? 'fullImg open ' : 'fullImg'}
               alt=""
            />
         </div>
         
      </div>
   )
}

export default Galerie
