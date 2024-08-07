/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Form({ movieSearch }) {
  const [formData, setFormData] = useState({
    searchterm: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    movieSearch(formData.searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='searchterm'
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
}
