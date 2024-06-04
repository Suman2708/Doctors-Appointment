import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const BookingForm = () => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    specialization: '',
    location: '',
    insuranceAccepted: ''
  });
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Make API request to fetch doctors based on search parameters
      const response = await axios.get('/api/doctors', { params: searchParams });
      setSearchResults(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-14">
      <h1 className="text-3xl font-semibold mb-4">Find a Doctor</h1>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div >
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input type="text" id="name" name="name" value={searchParams.name} onChange={handleInputChange} className="w-64 border shadow-sm rounded-md py-2 px-3 focus:outline-4 focus:border-blue-700" />
        </div>
        <div>
          <label htmlFor="specialization" className="block mb-1">Specialization:</label>
          <input type="text" id="specialization" name="specialization" value={searchParams.specialization} onChange={handleInputChange} className="w-64 border shadow-sm rounded-md py-2 px-3 focus:outline-4 focus:border-blue-400" />
        </div>
        <div>
          <label htmlFor="location" className="block mb-1">Location:</label>
          <input type="text" id="location" name="location" value={searchParams.location} onChange={handleInputChange} className="w-64 border shadow-sm rounded-md py-2 px-3 focus:outline-4 focus:border-blue-400" />
        </div>
        <div>
          <label htmlFor="insuranceAccepted" className="block mb-1">Insurance Accepted:</label>
          <input type="text" id="insuranceAccepted" name="insuranceAccepted" value={searchParams.insuranceAccepted} onChange={handleInputChange} className="w-64 border shadow-sm rounded-md py-2 px-3 focus:outline-4 focus:border-blue-400" />
        </div>
        <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600">Search</button>
      </form>
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-600">Error: {error}</p>}
      {searchResults.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Search Results:</h2>
          <ul>
            {searchResults.map((doctor, index) => (
              <li key={index} className="mb-2">{doctor.name} - {doctor.specialization} - {doctor.location}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
