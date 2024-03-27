import { useTranslations } from "next-intl";
import styles from './styles.module.css'
function Footer() {
    const t = useTranslations('footer');
    return (
        <footer >
            <div className='main-container'>
                <section id={styles.first_Section}>
                    <h5>{t('risk-title')}</h5>
                    <span>{t('risk-top-content')}
                    </span>
                </section>

                <span id={styles.second_Section}>{t('middle-content')}</span>
                <h5 className='mt-5'>RISK DISCLOSURE</h5>
                <span>
                {t('risk-sub-content')}.</span>
            </div>


        </footer>
    );
}

export default Footer;