import Link from "next/link";
import styles from './styles.module.css'
import LocaleSwitcher from "./local-switcher";
function Header() {
    return (
        <header  id={styles.header}>
            <nav id={styles.navbar}>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <Link href={''}><img src="/images/navbar/logo.png"></img></Link>
                       <LocaleSwitcher/>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default Header;