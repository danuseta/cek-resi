import React from 'react';

function TrackingResult({ result }) {
    return (
        <div className="result">
            <h2><i className="fas fa-info-circle"></i> Hasil Pelacakan:</h2>
            <p><i className="fas fa-check-circle"></i> <span>Status: </span> <span className="status">{result.data.summary.status}</span></p>
            <p><i className="fas fa-truck"></i> <span>Kurir: </span> <span className="courier">{result.data.summary.courier}</span></p>
            <p><i className="fas fa-barcode"></i> <span>Nomor Resi: </span> <span className="awb">{result.data.summary.awb}</span></p>


            <h3 className="detail-heading"><i className="fas fa-list"></i> Detail Pengiriman:</h3>
            <ul className="history-list">
                {result.data.history.map((item, index) => (
                    <li key={index} className="history-item">
                        <div className="history-date"><i className="far fa-calendar-alt"></i> {item.date}</div>
                        <div className="history-status"><i className="fas fa-info-circle"></i> {item.desc}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrackingResult;