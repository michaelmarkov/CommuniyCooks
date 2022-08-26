import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButtton.module.css"
const HeaderCartButton=(props)=>{
    return(
        <button className={styles.button}>

            <span> Your Cart </span>
            <span className={styles.badge}>
                3
            </span>
        </button>
    );
};

export default HeaderCartButton;
