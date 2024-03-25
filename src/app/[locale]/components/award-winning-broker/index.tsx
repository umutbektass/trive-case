import Link from 'next/link';
import styles from './styles.module.css'
function AwardWinningBroker() {
    return (
        // id={styles.award_Winning}
        <div className='container-fluid mt-5' id={styles.award_Winning} >
            <h2 className="text-center py-5">Award Winning Broker</h2>
          
                <div className='row justify-content-md-center  align-items-center' id={styles.bg} >
                    <div className='col-md-3'>
                        <div id={styles.award}>

                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div id={styles.award}>

                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <Link className='open-account' href={''} scroll={false}>Open account</Link>
                </div>
        </div>
    );
}

export default AwardWinningBroker;