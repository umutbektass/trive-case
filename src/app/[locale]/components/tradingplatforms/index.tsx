import Link from 'next/link';
import styles from './styles.module.css'
function TradingPlatforms() {
    return (
        <div className="main-container">
            <h2 className="text-center">Trading Platforms & Tools</h2>
            <div className='container'>
                <div className='row'>
                    <div className={`${styles.background} col-md-6`} id={styles.metatrader_4}>
                        <img width={471} height={581} src='/images/main/mt4-phone.png' id={styles.mt4_phone}></img>
                    </div>
                    <div className={`${styles.background} col-md-6`} id={styles.metatrader_5}>
                        <img src='/images/main/mt5-phone.png' id={styles.mt5_phone}></img>
                    </div>
                </div>
            </div>
            <div className="container overflow-hidden">
                <div className="row gx-4" id={styles.metatrader_Features} >
                    <div className="col">
                        <section className="p-4 border bg-light">
                            <div className='d-flex justify-content-end'>
                                <img className='mb-5' src='/images/main/booster.png' id={styles.booster}></img>
                            </div>
                          
                                <h4 >MT4/MT5 Booster</h4>
                                <p>Boost your platform with add-ons designed to enhance your trading experience!</p>
                           

                        </section>
                    </div>
                    <div className="col">
                        <section className={` p-4`}>

                            <div className='d-flex justify-content-end'>
                                <img className='mb-5' src='/images/main/private-server.png' id={styles.private_Server}></img>
                            </div>
                            <h4>VPS -Virtual Private Server</h4>
                            <p>Secure & private platform to access your trades remotely; no downtime</p>
                            </section>
                    </div>
                    <div className="col">
                        <section className="p-4 border bg-light">
                            <div className='d-flex justify-content-end'>
                                <img className='mb-5' src='/images/main/central.png' id={styles.central}></img>
                            </div>
                            <h4>Trading Central</h4>
                            <p>Unmatched research and analysis services for FairMarkets’ traders</p>
                            </section>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <Link href={''} scroll={false} id={styles.oppen_Account}></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TradingPlatforms;