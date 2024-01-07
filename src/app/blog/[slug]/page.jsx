import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/16971951/pexels-photo-16971951/free-photo-of-kum-agaclar-sandalye-calilar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/16971951/pexels-photo-16971951/free-photo-of-kum-agaclar-sandalye-calilar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Author</div>
            <div className={styles.detailValue}>Terry Jefferson</div>
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>07.01.2024</div>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
