import React, { useState } from 'react';
import type { ISearchProps } from '../../types/interfaces';

const Search: React.FC<ISearchProps> = ({ handleSearch }) => {
  const [value, setValue] = useState('');

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    handleSearch(value);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='search'
          id='search-field'
          placeholder='search'
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className='btn'
          style={{ position: 'absolute', top: '0', right: '0' }}
          onClick={handleSubmit}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Search;
