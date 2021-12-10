import React from 'react';
import './search-input.css';

export default function SearchField({
  placeholderValue,
  handleChangeFunction,
}) {
  return (
    <input
      onChange={handleChangeFunction}
      className="app__search"
      placeholder={placeholderValue}
      type="search"
    />
  );
}
