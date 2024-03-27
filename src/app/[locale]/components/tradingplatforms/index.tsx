import { useTranslations } from "next-intl";

import Link from 'next/link';
import styles from './styles.module.css'
function TradingPlatforms() {
    const t = useTranslations('trading-platforms');

    return (
        <div className="main-container">
            <h2 className="text-center" id={styles.title}>{t('h2')}</h2>
            <div className='container'>
                <div className='row g-5'>
                    <div className={`${styles.background} col-md-6 `} >
                        <div className='p-4 relative' id={styles.metatrader_4}>
                        <h4 className='mb-4 mt-2'>{t('mt-4')}</h4>
                        <p>{t('mt-4-content')}</p>
                        <img className='d-none d-sm-block' width={471} height={581} src='/images/main/mt4-phone.png' id={styles.mt4_phone}></img>
                      
                        <h5 className={styles.mt4_BottomContent}>MT4</h5>
                      
                        </div>
                    </div>
                    <div className={`${styles.background} col-md-6  `} >
                    <div className='p-4 d-flex flex-column' id={styles.metatrader_5}>
                    <h4 className='mb-4 mt-2'>{t('mt-5')}</h4>
                        <p>{t('mt-5-content')} </p>
                        <img className=' align-self-end  d-none d-sm-block' src='/images/main/mt5-phone.png' id={styles.mt5_phone}></img>
                        <h5   className={styles.mt5_BottomContent}>MT5</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden">
                <div className="row g-4" id={styles.metatrader_Features} >
                    <div className=" col-md-6 col-lg-4">
                        
                        <section className="p-4 border bg-light">
                            <div className='d-flex justify-content-end'>
                                <img className=' mb-5' src='/images/main/booster.png' id={styles.booster}></img>
                            </div>
                          
                                <h4 >{t('booster.title')}</h4>
                                <p>{t('booster.content')}</p>
                           

                        </section>
                    </div>
                    <div className=" col-md-6  col-lg-4">
                        <section className={` p-4`}>

                            <div className='d-flex justify-content-end'>
                                <img className='mb-5' src='/images/main/private-server.png' id={styles.private_Server}></img>
                            </div>
                            <h4>{t('vps.title')}</h4>
                            <p>{t('booster.content')}</p>
                            </section>
                    </div>
                    <div className=" col-md-6  col-lg-4">
                        <section className="p-4 border bg-light">
                            <div className='d-flex justify-content-end'>
                                <img className='mb-5' src='/images/main/central.png' id={styles.central}></img>
                            </div>
                            <h4>{t('central.title')}</h4>
                            <p>{t('central.content')}</p>
                            </section>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <Link className='open-account ' href={''} scroll={false} id={styles.oppen_Account}>{t('btn')}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TradingPlatforms;