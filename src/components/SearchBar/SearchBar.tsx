// SearchBar.tsx

import React, { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSubmit: (inputValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
