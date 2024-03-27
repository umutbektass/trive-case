import { useTranslations } from "next-intl";

import Link from 'next/link';
import styles from './styles.module.css'
function AwardWinningBroker() {
    const t = useTranslations('trading-platforms');

    return (
        // id={styles.award_Winning}
        <div className='container-fluid mt-5' id={styles.award_Winning} >
            <h2 className="text-center pt-xl-3 py-4 ">Award Winning Broker</h2>
          
                <div className='row justify-content-center  align-items-center' id={styles.bg} >
                    <div className='col-5 col-sm-4 col-md-3 col-xl-3 p-lg-1 p-xl-4 '>
                     
                        <img className=' img-fluid' src='/images/main/award.png'></img>

                     
                        {/* <div id={styles.award}>

                        </div> */}
                    </div>
                    <div className='col-5 col-sm-4 col-md-3 col-xl-3 p-lg-1 p-xl-4 '>
                    <img className='img-fluid' src='/images/main/award.png'></img>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <Link className='primary-btn mb-5' href={''} scroll={false}>{t('btn')}</Link>
                </div>
        </div>
    );
}

export default AwardWinningBroker;