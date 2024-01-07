import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/16971951/pexels-photo-16971951/free-photo-of-kum-agaclar-sandalye-calilar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>04.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Eu ea cillum Lorem irure nisi ipsum nostrud occaecat elit officia.
          Sunt nulla nisi adipisicing mollit ea aliqua ea id non. Labore id
          veniam velit irure esse ut est mollit ut non dolore sunt commodo. Enim
          officia incididunt eiusmod in dolore. Ipsum aliqua mollit aliqua aute
          sunt duis est tempor magna ea officia tempor voluptate. Ipsum tempor
          do laborum proident cillum veniam sit culpa.
        </p>
        <Link className={styles.link} href="/blog/post">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
