import React, { useState } from 'react';
import axios from 'axios';
import PdfLink from './PdfLink';

const InputForm = () => {
  const [district, setDistrict] = useState('');
  const [pdfLink, setPdfLink] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/generate-pdf`, {
        params: { district }
      });
      setPdfLink(response.data.pdfUrl);
    } catch (error) {
      console.error('Error generating PDF', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          District Name:
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
          />
        </label>
        <button type="submit">Generate PDF</button>
      </form>

      {pdfLink && <PdfLink pdfLink={pdfLink} />}
    </div>
  );
};

export default InputForm;
