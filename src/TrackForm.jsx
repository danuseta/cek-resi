import React, { useState } from 'react';
import Select from 'react-select';
import courierOptions from './Courieroptions';
import './TrackingForm.css'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : '#333',
    backgroundColor: state.isSelected ? '#3498db' : state.isFocused ? '#e3f2fd' : 'white',
    '&:active': {
      backgroundColor: '#e3f2fd',
      color: '#333'
    },
    '&:hover': {
      backgroundColor: '#e3e3ff',
      color: '#333'
    }
  }),
  singleValue: (provided) => ({
    ...provided,
  }),
};

function TrackingForm({ onSubmit, loading }) {
  const [courier, setCourier] = useState(null);
  const [awb, setAwb] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courier) {
      onSubmit(courier.value, awb);
    }
  };

  return (
    <form className="tracking-form" onSubmit={handleSubmit}>
      <div className="select-container">
        <label htmlFor="courier">
          <i className="fas fa-truck"></i> Pilih Kurir:
        </label>
        <Select
          id="courier"
          options={courierOptions}
          onChange={setCourier}
          placeholder="Pilih Kurir"
          classNamePrefix="react-select"
          styles={customStyles}
        />
      </div>
      <div>
        <label htmlFor="awb">
          <i className="fas fa-barcode"></i> Nomor Resi:
        </label>
        <input
          type="text"
          id="awb"
          value={awb}
          onChange={(e) => setAwb(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-button" disabled={loading}>
        {loading ? (
          <>
            <i className="fas fa-spinner fa-spin"></i> Memuat...
          </>
        ) : (
          <>
            <i className="fas fa-search"></i> Cek Resi
          </>
        )}
      </button>
      <div className="credit-text">
    <a href="https://www.instagram.com/danuseta" target="_blank" rel="noopener noreferrer">
      @danuseta
    </a>
  </div>
    </form>
  );
}

export default TrackingForm;