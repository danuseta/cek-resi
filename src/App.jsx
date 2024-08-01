import React, { useState } from 'react';
import TrackingForm from './TrackForm';
import TrackingResult from './TrackingResult';
import { trackPackage } from './api';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (courier, awb) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await trackPackage(courier, awb);
      setResult(data);
    } catch (err) {
      setError('Terjadi kesalahan saat mengambil data. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="gradient"></div>
      <div className="container">
        <h1><i className="fas fa-shipping-fast"></i> Cek Resi Pengiriman</h1>
        <TrackingForm onSubmit={handleSubmit} loading={loading} />
        {error && <p className="error"><i className="fas fa-exclamation-circle"></i> {error}</p>}
        {result && <TrackingResult result={result} />}
      </div>

    </>
  );
}

export default App;