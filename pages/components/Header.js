import * as React from "react";
import styles from "../../styles/components/Header.module.css";

export default () => {
    return (
        <div className="header">
            <div className="logo">
                <span className={styles.bold_text}>Sergey</span> A. Bazylev
            </div>
        </div>
    );
};
