// SearchBar.jsx

import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter text for search.", {
        className: "toast-error",
      });
      return;
    }
    onSubmit(inputValue);
    setInputValue(""); // Очистка поля вводу після відправки
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <FaSearch className={styles.icon} />
          <input
            type="text"
            id="searchInput"
            name="search"
            value={inputValue}
            onChange={handleChange}
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
