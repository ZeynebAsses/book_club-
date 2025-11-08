import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar">
      <input
        placeholder="Rechercher un livre"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
