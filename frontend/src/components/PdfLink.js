import React from 'react';

const PdfLink = ({ pdfLink }) => {
  return (
    <a href={pdfLink} target="_blank" rel="noopener noreferrer">
      View Generated PDF
    </a>
  );
};

export default PdfLink;
