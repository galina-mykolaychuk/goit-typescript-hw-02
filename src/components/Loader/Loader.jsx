// Loader.jsx

import { MagnifyingGlass } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <MagnifyingGlass
        height="80"
        width="80"
        color="#eb1563"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
