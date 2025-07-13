import React, { useState } from 'react';
import './App.css';

function App() {
  const [SGPA4, setSgpa] = useState({ SGPA1: '', SGPA2: '', SGPA3: '' });
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSgpa({
      ...SGPA4,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (SGPA4.SGPA1 && SGPA4.SGPA2 && SGPA4.SGPA3) {
      const payload = { SGPA4: [SGPA4.SGPA1, SGPA4.SGPA2, SGPA4.SGPA3] };
      console.log('Payload being sent:', payload);
      fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ SGPA4: [SGPA4.SGPA1, SGPA4.SGPA2, SGPA4.SGPA3] }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Prediction data:', data);
          setPrediction(data);
          setError(null);
        })
        .catch((error) => {
          console.error('Error:', error); 
          setError('An error occurred while fetching the prediction.');});
    } else {
      setError('Please enter SGPA for all three semesters.');
    }
  };

  return (
    <div className="app-container">
      <h1>SGPA and CGPA Prediction</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>SGPA Semester 1:</label>
            <input
              type="number"
              name="SGPA1"
              value={SGPA4.SGPA1}
              onChange={handleChange}
              required
              min="0"
              max="10"
              step="0.01"
            />
          </div>
          <div className="form-group">
            <label>SGPA Semester 2:</label>
            <input
              type="number"
              name="SGPA2"
              value={SGPA4.SGPA2}
              onChange={handleChange}
              required
              min="0"
              max="10"
              step="0.01"
            />
          </div>
          <div className="form-group">
            <label>SGPA Semester 3:</label>
            <input
              type="number"
              name="SGPA3"
              value={SGPA4.SGPA3}
              onChange={handleChange}
              required
              min="0"
              max="10"
              step="0.01"
            />
          </div>
          <button type="submit" className="submit-button">Predict SGPA</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>

      {prediction && (
        <div className="prediction-container">
          <div className="prediction-result">
            <h2>Predicted SGPA for 4th Semester: {prediction.predicted_sgpa}</h2>
            <h2>Calculated CGPA: {prediction.cgpa}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
