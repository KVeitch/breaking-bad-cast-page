import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const handleChange = (query) => {
    setText(query);
    getQuery(query);
  };

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='formControl'
          placeholder='Search characters'
          onChange={(e) => handleChange(e.target.value)}
          autoFocus
        ></input>
      </form>
    </section>
  );
};

export default Search;
