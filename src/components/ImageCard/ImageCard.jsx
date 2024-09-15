// ImageCard.jsx

import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  const { urls, alt_description } = image;

  return (
    <li className={styles.card} onClick={onClick}>
      <img src={urls.small} alt={alt_description} className={styles.image} />
    </li>
  );
};

export default ImageCard;
