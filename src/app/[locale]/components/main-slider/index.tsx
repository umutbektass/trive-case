import styles from './style.module.css'
function MainSlider() {
    return (
        <div className={`main-slider d-flex align-items-center justify-content-center column-gap-5 ${styles.mainContent}`}>
 
 <div>
 <img className="img-fluid"  src="/images/main/left-gold.png" alt="gold"></img>
 </div>
  <div className={`${styles.contentContainer} d-flex flex-column justify-content-center align-items-center`}>
  <h1 className="text-center">Unleash the power of trading GOLD CFDs Today</h1>
  <h2 className="text-center">Spreads starting from 0.1</h2>
  </div>
  <div className="position-relative">
  <img className={styles.topSmallGold} width={36} height={39} src="/images/main/Mask-Group-21.png" alt="gold"></img>
  <img className="img-fluid" width={344} height={449} src="/images/main/right-gold.png" alt="gold"></img>
  </div>
 
 </div>
    );
}

export default MainSlider;