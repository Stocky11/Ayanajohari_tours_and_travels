import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ fromCity, toCity, departureDate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="From City" value={fromCity} onChange={(e) => setFromCity(e.target.value)} />
      <input type="text" placeholder="To City" value={toCity} onChange={(e) => setToCity(e.target.value)} />
      <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
