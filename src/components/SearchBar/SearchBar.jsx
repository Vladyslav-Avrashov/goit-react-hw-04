import { useState } from 'react';
import toast from 'react-hot-toast';
import s from './SearchBar.module.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (input.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(input.trim());
    setInput('');
  };

  const handleChange = event => {
    setInput(event.target.value);
  };

  return (
    <header className={s['search-header']}>
      <form className={s['search-form']} onSubmit={handleSubmit}>
        <div className={s['input-wrapper']}>
          <FaMagnifyingGlass className={s['search-icon']} />
          <input
            className={s['search-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={input}
            onChange={handleChange}
          />
        </div>
        <button className={s['search-btn']} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
