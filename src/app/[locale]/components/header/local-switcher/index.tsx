import styles from '../styles.module.css'
function LocaleSwitcher() {
    return (
        <div>
            <select className={`form-select ${styles.languages_Select}`}>
                <option value={"TR"} selected>TR</option>
                <option value={"EN"}>EN</option>
            </select>
        </div>
    );
}

export default LocaleSwitcher;