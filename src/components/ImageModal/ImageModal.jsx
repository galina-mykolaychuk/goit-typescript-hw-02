// ImageModal.jsx
// ImageModal.jsx

import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
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
          <p>Description: {alt_description}</p>
          <p>Author: {user.name}</p>
          <p>Likes: {likes}</p>
        </div>
        <img
          src={urls.regular}
          alt={alt_description}
          className={styles.image}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
