import { useState, ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';
import s from './SearchBar.module.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [input, setInput] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(input.trim());
    setInput('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
