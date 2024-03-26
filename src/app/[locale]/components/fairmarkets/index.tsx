import styles from './styles.module.css'
function FairMarkets() {
    return (
      <div className="main-container">
        <h2 className={`text-center ${styles.title}`}>Why FairMarkets</h2>
        <div className={styles.whyfairmarkets_Container}>
        <div className='p-4 rounded' id={styles.lowest_Costs}>
          <section className='d-flex justify-content-between'>
        <h4>Lowest costs</h4>
        <img width={120} height={115} src='/images/main/wallet.png' alt='wallet'></img>

        </section>
        <p>Our transparent and low commisions minimize costs to maximize returns</p>
        </div>
        <div className='p-4 rounded' id={styles.instant_Execution}>
          <section className='d-flex justify-content-between'>
          <h4>Instant Execution</h4>
          <img  width={100} height={153} src='/images/main/energy.png' alt='energy'></img>
          </section>
       <p>High Number of Execution in 0.02 seconds</p>
        </div>
        <div className='p-4 rounded' id={styles.local_Support}>
          <section  className='d-flex justify-content-between'>
          <h4>Local Support</h4>  
           <img  width={114} height={129} src='/images/main/call.png' alt='call'></img>
          </section>
          <p>24/5 expert customer support, available in 6 languages</p>
     
        </div>
        </div>
      </div>
    );
}

export default FairMarkets;