import styles from './styles.module.css'
function TradingPlatforms() {
    return (
        <div>
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
            <div className='container '>
            <div className='row g-2' id={styles.metatrader_Features}>
                    <div className='col'>
                    <img src='/images/main/booster.png'></img>
                    <h3>MT4/MT5 Booster</h3>
                    </div>
                    <div className='col'>
                    <img src='/images/main/private-server.png'></img>
                    <h3>VPS -Virtual Private Server</h3>
                    </div>
                    <div className='col'>
                    <img src='/images/main/central.png'></img>
                    <h3>Trading Central</h3>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default TradingPlatforms;