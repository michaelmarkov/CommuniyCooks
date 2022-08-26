
import styles from "./Header.module.css";
import {Fragment} from "react";
import CommuniCooks from "../../Assets/logo-black.png"
import HeaderCartButton from "./HeaderCartButton";
const Header = (props)=>{
    return(
        <Fragment>
    <header className={styles.header}>
        <img className={styles.logo} src={CommuniCooks} alt=""/>
        <HeaderCartButton/>
    </header>
        <div className={styles['main-image']} >
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt=""/>
        </div>
        </Fragment>
    );
}
export default Header;