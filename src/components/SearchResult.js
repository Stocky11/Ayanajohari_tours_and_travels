import React from 'react';

const SearchResult = ({ transportation }) => {
  return (
    <div className="search-result">
      <h3>{transportation.mode}</h3>
      <p>From: {transportation.fromCity}</p>
      <p>To: {transportation.toCity}</p>
      <p>Departure: {transportation.departureDate}</p>
      <p>Arrival: {transportation.arrivalDate}</p>
      <p>Fare: {transportation.fare}</p>
    </div>
  );
};

export default SearchResult;
