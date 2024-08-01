import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import courierOptions from './Courieroptions';

const StyledForm = styled.form`
  .select-container {
    width: 100%;
    margin-bottom: 1rem;
  }

  .react-select__control {
    border: 2px solid #3498db;
    box-shadow: none;
    border-radius: 8px;
    padding: 0.3rem;
    font-size: 1rem;
    background-color: #fff;
  }

  .react-select__control--is-focused {
    border-color: #2980b9;
    box-shadow: 0 0 0 1px #2980b9;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__dropdown-indicator {
    color: #3498db;
  }

  .react-select__menu {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 0.5rem;
    background-color: white;
  }

  .react-select__option {
    padding: 0.75rem;
    font-size: 1rem;
    color: #333;
  }

  .react-select__single-value {
    color: #333;
  }

  .react-select__option--is-selected {
    background-color: #3498db;
    color: #fff;
  }

  .react-select__option--is-focused {
    background-color: #e3f2fd;
    color: #333;
  }
`;

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
      backgroundColor: '#e3f2fd',
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
    <StyledForm onSubmit={handleSubmit}>
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
    </StyledForm>
  );
}

export default TrackingForm;