import React from 'react'
import styles from './Main.module.css'
import interier from "./MainFotka.JPG"
 import exterier from './jilovanka.jpg' 
 import   "../../App.css"
function Main() {
   return (<div className={styles.main}>

                   <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
               <ol class="carousel-indicators">
                 <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
{/*                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
 */}               </ol>
               <div class="carousel-inner">
                 <div class="carousel-item active">
                   <img class="d-block w-100" src={interier} alt="First slide"/>
                 <div className={styles.centerText}><h1 className={styles.Chatka}>Chata Jílovanka</h1></div>
                   <div class="carousel-caption d-none d-md-block">
        <h5>Restaurace</h5>
        <p>Jídelna s výčepem (včetne chlazení a naražečů na KEG sudy)</p>
      </div>
                 </div>
                 <div class="carousel-item">
                   <img class="d-block w-100" src={exterier} alt="Second slide"/>
                 </div>
                {/*  <div class="carousel-item">
                   <img class="d-block w-100" src={interier} alt="Third slide"/>
                 </div> */}
               </div>
               <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="sr-only">Previous</span>
               </a>
               <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
                 <span class="sr-only">Next</span>
               </a>
             </div>
   </div>
   )
}

export default Main
