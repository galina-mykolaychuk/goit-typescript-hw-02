// ImageModal.tsx

import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { Image } from "../../types"; // Імпортуємо тип Image з types.ts

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image; // Використовуємо тип Image з types.ts
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  const { urls, alt_description, likes, user } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <div className={styles.content}>
        <div className={styles.description}>
          <p>Description: {alt_description || "No description available"}</p>
          <p>Author: {user.name}</p>
          <p>Likes: {likes}</p>
        </div>
        <img
          src={urls.regular}
          alt={alt_description || "Image"}
          className={styles.image}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
