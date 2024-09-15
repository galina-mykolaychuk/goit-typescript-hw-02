// App.jsx

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "iyAqr-oYAWADLgNbpwpSpXbN1gV45r5OLkupU3IU3Qk";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  // Стан для збереження поточної сторінки
  const [page, setPage] = useState(1);
  // Стан для модального вікна (зображення для перегляду)
  const [modalImage, setModalImage] = useState(null);

  // Функція для отримання зображень з API
  const fetchImagesFromApi = async (searchQuery, page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API_URL}?query=${searchQuery}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch images.");
      }
      const data = await response.json();
      if (data.results.length === 0) {
        throw new Error("No results found.");
      }
      return data.results;
    } catch (error) {
      toast.error(error.message, {
        className: "toast-error",
      }); // Відображення сповіщення про помилку
    } finally {
      setLoading(false);
    }
  };

  // Функція для отримання зображень і оновлення стану
  const fetchImages = async (searchQuery, page) => {
    const newImages = await fetchImagesFromApi(searchQuery, page);
    if (newImages) {
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages(query, page);
    }
  }, [query, page]);

  const handleSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  // Функція для завантаження наступних зображень
  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Функція для відкриття модального вікна
  const openModal = (image) => {
    setModalImage(image);
  };

  // Функція для закриття модального вікна
  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      {/* Компонент для пошуку */}
      <SearchBar onSubmit={handleSubmit} />
      {/* Компонент для відображення галереї зображень */}
      <ImageGallery images={images} onImageClick={openModal} />
      {/* Відображення індикатора завантаження */}
      {loading && <Loader />}
      {/* Кнопка "Load More"*/}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {/* Модальне вікно*/}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onRequestClose={closeModal}
          image={modalImage}
        />
      )}
    </div>
  );
};

export default App;
