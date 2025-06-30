import React, { useState } from 'react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      name: "CCNA: Enterprise Networking, Security, and Automation",
      year: 2025,
      file: "",
      type: ""
    },
    {
      name: "EF SET English: C2 Proficient",
      year: 2024,
      file: "${process.env.PUBLIC_URL}/Certifications/EFSET_C2_Cert.pdf",
      type: "pdf"
    },
    {
      name: "EF SET English: C1 Advanced",
      year: 2024,
      file: "${process.env.PUBLIC_URL}/Certifications/EFSET_C1_Cert.pdf",
      type: "pdf"
    },
    {
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      year: 2024,
      file: "${process.env.PUBLIC_URL}/Certifications/SRWE_cert_pasia.pdf",
      type: "pdf"
    },
    {
      name: "BOSH1: Safety Officer 1",
      year: 2024,
      file: "${process.env.PUBLIC_URL}/Certifications/BOSHSO1_Cert_Pasia.png",
      type: "image"
    },
    {
      name: "Partner: PCAP - Programming Essentials in Python",
      year: 2022,
      file: "${process.env.PUBLIC_URL}/Certifications/PCAP_cert_PASIA.pdf",
      type: "pdf"
    }
  ];

  const openModal = (cert) => {
    //validation to check if file exists
    if (!cert.file || cert.file === "") {
      alert("Certificate file not available yet.");
      return;
    }
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  // Modal styles 
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
    padding: '1rem'
  };

  const modalContentStyle = {
    background: 'linear-gradient(135deg, rgba(10, 20, 30, 0.95) 0%, rgba(20, 30, 40, 0.95) 100%)',
    border: '1px solid rgba(0, 255, 136, 0.3)',
    borderRadius: '0',
    maxWidth: '90vw',
    maxHeight: '90vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 30px rgba(0, 255, 136, 0.2), inset 0 0 30px rgba(0, 255, 136, 0.05)'
  };

  const modalHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    borderBottom: '1px solid rgba(0, 255, 136, 0.2)',
    background: 'linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.05), transparent)'
  };

  const modalTitleStyle = {
    fontFamily: 'Orbitron, monospace',
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'var(--primary-cyan)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: 0
  };

  const closeButtonStyle = {
    background: 'transparent',
    border: '1px solid rgba(0, 255, 136, 0.3)',
    color: 'var(--primary-cyan)',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    width: '2.5rem',
    height: '2.5rem',
    cursor: 'pointer',
    fontFamily: 'Orbitron, monospace',
    transition: 'all 0.3s ease'
  };

  const modalBodyStyle = {
    padding: '1.5rem',
    maxHeight: 'calc(90vh - 100px)',
    overflow: 'auto'
  };

  const certButtonStyle = {
    background: 'transparent',
    border: 'none',
    color: 'var(--secondary-cyan)',
    cursor: 'pointer',
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: 'inherit',
    fontWeight: '600',
    padding: 0,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    position: 'relative'
  };

  return (
    <>
      <section id="certifications" className="container content-section" aria-label="Certifications">
        <h2>Certifications</h2>
        <ul>
          {certifications.map((cert, idx) => (
            <li key={idx}>
              <button
                onClick={() => openModal(cert)}
                style={certButtonStyle}
                title={`View ${cert.name} certificate`}
                disabled={!cert.file || cert.file === ""}
                onMouseEnter={(e) => {
                  if (!e.target.disabled) {
                    e.target.style.color = 'var(--primary-cyan)';
                    e.target.style.textShadow = '0 0 10px rgba(0, 255, 136, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.target.disabled) {
                    e.target.style.color = 'var(--secondary-cyan)';
                    e.target.style.textShadow = 'none';
                  }
                }}
              >
                {cert.name}
              </button>
              {' '}- {cert.year}
              {(!cert.file || cert.file === "") && (
                <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9em' }}>
                  {' '}(Coming Soon)
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {selectedCert && (
        <div
          style={modalOverlayStyle}
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div style={modalContentStyle}>
            {/* Modal Header */}
            <div style={modalHeaderStyle}>
              <h3 style={modalTitleStyle}>
                {selectedCert.name} ({selectedCert.year})
              </h3>
              <button
                onClick={closeModal}
                style={closeButtonStyle}
                aria-label="Close modal"
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 255, 136, 0.1)';
                  e.target.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.boxShadow = 'none';
                }}
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div style={modalBodyStyle}>
              {/* Debug info */}
              <div style={{ color: 'var(--primary-cyan)', marginBottom: '10px', fontSize: '0.9em' }}>
                Debug: Trying to load: {selectedCert.file}
              </div>
              
              {selectedCert.type === 'pdf' ? (
                <iframe
                  src={selectedCert.file}
                  style={{
                    width: '100%',
                    height: '70vh',
                    border: '1px solid rgba(0, 255, 136, 0.2)',
                    borderRadius: '0'
                  }}
                  title={`${selectedCert.name} Certificate`}
                  onLoad={() => {
                    console.log('PDF loaded successfully:', selectedCert.file);
                  }}
                  onError={(e) => {
                    console.error('Error loading PDF:', selectedCert.file);
                    alert(`Failed to load PDF: ${selectedCert.file}`);
                  }}
                />
              ) : (
                <img
                  src={selectedCert.file || selectedCert.src}
                  alt={`${selectedCert.name} Certificate`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                    border: '1px solid rgba(0, 255, 136, 0.2)'
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', selectedCert.file);
                  }}
                  onError={(e) => {
                    console.error('Error loading image:', selectedCert.file);
                    e.target.alt = 'Certificate could not be loaded';
                    alert(`Failed to load image: ${selectedCert.file}`);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;