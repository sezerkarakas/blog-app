import Image from "next/image";
import styles from "./about.module.css";
function AboutPage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>
            We create digital ideads that are bigger, bolder, braver and better.
          </h1>
          <p className={styles.description}>
            We create digital ideads that are bigger, bolder, braver and better.
            We believe in good ideas and flexibiliy and precision. Proident
            laboris tempor aute dolor duis ea. Esse ullamco et reprehenderit
            anim ullamco irure incididunt est laboris in laborum.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/about.png"
            alt="About Image"
            fill
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
