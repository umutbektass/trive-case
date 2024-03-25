import styles from './styles.module.css'
function FairMarkets() {
    return (
      <div className="main-container">
        <h2 className={`text-center ${styles.title}`}>Why FairMarkets</h2>
        <div className={styles.whyfairmarkets_Container}>
        <div id={styles.lowest_Costs}>
        <img width={120} height={115} src='/images/main/wallet.png' alt='wallet'></img>
        </div>
        <div id={styles.instant_Execution}>
        <img  width={100} height={153} src='/images/main/energy.png' alt='energy'></img>
        </div>
        <div id={styles.local_Support}>
        <img  width={114} height={129} src='/images/main/call.png' alt='call'></img>
        </div>
        </div>
      </div>
    );
}

export default FairMarkets;