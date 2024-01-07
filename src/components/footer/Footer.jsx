import styles from "./footer.module.css";

import React from "react";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>logo</div>
      <div className={styles.text}>
        Culpa in ipsum dolor id ut nisi nisi amet ipsum laboris veniam non
        aliqua pariatur.
      </div>
    </div>
  );
}

export default Footer;
