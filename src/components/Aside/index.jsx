import styles from "./aside.module.css";
import logo from "./logo.png";
import Image from "next/image";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image src={logo} alt="Logo do Code Connect" />
    </aside>
  );
};

export default Aside;
