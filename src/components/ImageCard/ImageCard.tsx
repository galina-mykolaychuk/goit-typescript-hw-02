// ImageCard.tsx

import React from "react";
import styles from "./ImageCard.module.css";
import { Image } from "../../types"; // Імпортуємо тип Image з types.ts

interface ImageCardProps {
  image: Image;
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const { urls, alt_description } = image;

  return (
    <li className={styles.card} onClick={onClick}>
      <img
        src={urls.small}
        alt={alt_description || "Image"}
        className={styles.image}
      />
    </li>
  );
};

export default ImageCard;
