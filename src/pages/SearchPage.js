import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';
import ApiService from '../services/ApiService';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = ({ fromCity, toCity, departureDate }) => {
    ApiService.searchTransportation(fromCity, toCity, departureDate)
      .then((results) => setSearchResults(results))
      .catch((error) => console.error('Error searching transportation:', error));
  };

  return (
    <div>
      <h2>Search for Transportation</h2>
      <SearchForm onSubmit={handleSearch} />
      <div>
        {searchResults.map((result) => (
          <SearchResult key={result.id} transportation={result} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
