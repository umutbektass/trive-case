import Link from 'next/link';
import styles from './styles.module.css'
function TradingPlatforms() {
    return (
        <div className="main-container">
            <h2 className="text-center" id={styles.title}>Trading Platforms & Tools</h2>
            <div className='container'>
                <div className='row gx-5'>
                    <div className={`${styles.background} col-md-6 `} >
                        <div className='p-4 relative' id={styles.metatrader_4}>
                        <h4 className='mb-4 mt-2'>MetaTrader4</h4>
                        <p>MetaTrader 4 is a sophisticticated trading application that provides you with a variety of tools and features to assist you in 
                            conducting analysis and customizing your trading experience. </p>
                        <img width={471} height={581} src='/images/main/mt4-phone.png' id={styles.mt4_phone}></img>
                      
                        <h5 className={styles.mt4_BottomContent}>MT4</h5>
                      
                        </div>
                    </div>
                    <div className={`${styles.background} col-md-6  `} >
                    <div className='p-4 d-flex flex-column' id={styles.metatrader_5}>
                    <h4 className='mb-4 mt-2'>MetaTrader5</h4>
                        <p>MT5 &#39;s smooth user interface can be fully shaped to your taste so you can trade &amp; analyze the way you want. </p>
                        <img className='align-self-end' src='/images/main/mt5-phone.png' id={styles.mt5_phone}></img>
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
                                <img className='mb-5' src='/images/main/booster.png' id={styles.booster}></img>
                            </div>
                          
                                <h4 >MT4/MT5 Booster</h4>
                                <p>Boost your platform with add-ons designed to enhance your trading experience!</p>
                           

                        </section>
                    </div>
                    <div className=" col-md-6  col-lg-4">
                        <section className={` p-4`}>

                            <div className='d-flex justify-content-end'>
                                <img className='mb-5' src='/images/main/private-server.png' id={styles.private_Server}></img>
                            </div>
                            <h4>VPS -Virtual Private Server</h4>
                            <p>Secure & private platform to access your trades remotely; no downtime</p>
                            </section>
                    </div>
                    <div className=" col-md-6  col-lg-4">
                        <section className="p-4 border bg-light">
                            <div className='d-flex justify-content-end'>
                                <img className='mb-5' src='/images/main/central.png' id={styles.central}></img>
                            </div>
                            <h4>Trading Central</h4>
                            <p>Unmatched research and analysis services for FairMarkets &#39; traders</p>
                            </section>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <Link className='open-account' href={''} scroll={false} id={styles.oppen_Account}>Open account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TradingPlatforms;