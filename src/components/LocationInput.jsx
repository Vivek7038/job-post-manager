import React, { useState, useEffect } from "react";
import { AUTOCOMPLETE_API_KEY, AUTOCOMPLETE_API_URL } from "../api/constants";

const LocationInput = ({ value, onChange }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchSuggestions();
    }, 800); // debouced timer to reduce api calls 

    return () => clearTimeout(debounceTimer);
  }, [query]); 

  // Api call to fetch suggestions
  const fetchSuggestions = async () => {
    if (query.length > 2) {
      try {
        const response = await fetch(
          `${AUTOCOMPLETE_API_URL}${AUTOCOMPLETE_API_KEY}=${query}&limit=5`
        );
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onChange(newQuery);
  };

  const handleSuggestionClick = (suggestion) => {
    onChange(suggestion.display_name);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        placeholder="Enter job location"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border mt-1 rounded shadow-lg w-full">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationInput;
