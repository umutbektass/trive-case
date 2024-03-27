import { useTranslations } from "next-intl";

import styles from './styles.module.css'
function FairMarkets() {
  const t = useTranslations('fairMarkets');

    return (
      <div className="main-container">
        <h2 className={`text-center ${styles.title}`}>{t('h2')}</h2>
        <div className={styles.whyfairmarkets_Container}>
        <div className='p-4 rounded' id={styles.lowest_Costs}>
          <section className='d-flex justify-content-between'>
        <h4>{t('lowest-costs-title')}</h4>
        <img width={120} height={115} src='/images/main/wallet.png' alt='wallet'></img>

        </section>
        <p>{t('lowest-costs-content')}</p>
        </div>
        <div className='p-4 rounded' id={styles.instant_Execution}>
          <section className='d-flex justify-content-between'>
          <h4>{t('instant-execution-title')}</h4>
          <img  width={100} height={153} src='/images/main/energy.png' alt='energy'></img>
          </section>
       <p>{t('instant-execution-content')}</p>
        </div>
        <div className='p-4 rounded' id={styles.local_Support}>
          <section  className='d-flex justify-content-between'>
          <h4>{t('local-support-title')}</h4>  
           <img  width={114} height={129} src='/images/main/call.png' alt='call'></img>
          </section>
          <p>{t('local-support-content')}</p>
     
        </div>
        </div>
      </div>
    );
}

export default FairMarkets;