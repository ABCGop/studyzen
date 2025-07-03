'use client';

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer = ({ pdfUrl }: PdfViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error: Error) {
    setError(error);
    setLoading(false);
    console.error('PDF loading error:', error);
  }

  function goToPreviousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }
  
  function goToNextPage() {
    if (numPages && pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }
  
  function zoomIn() {
    setScale(scale + 0.2);
  }
  
  function zoomOut() {
    if (scale > 0.4) {
      setScale(scale - 0.2);
    }
  }
  
  // Add styles for text layer and annotation layer
  useEffect(() => {
    // Create style elements for PDF text and annotation layers
    const textLayerStyle = document.createElement('style');
    textLayerStyle.innerHTML = `
      .react-pdf__Page__textContent {
        border: 1px solid rgba(0, 0, 0, 0);
        box-sizing: border-box;
        overflow: hidden;
        opacity: 0.2;
        pointer-events: none;
        position: absolute;
        transform-origin: 0 0;
        left: 0;
        top: 0;
        z-index: 1;
      }
      
      .react-pdf__Page__textContent span {
        color: transparent;
        position: absolute;
        white-space: pre;
        cursor: text;
        transform-origin: 0% 0%;
      }

      .react-pdf__Page__annotations {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }
      
      .react-pdf__Page__annotations .annotationLayer {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
      }
    `;
    
    document.head.appendChild(textLayerStyle);
    
    // Cleanup on unmount
    return () => {
      document.head.removeChild(textLayerStyle);
    };
  }, []);
  
  return (
    <div className="pdf-viewer-container">
      {loading && (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>Error loading PDF: {error.message}</p>
          <p className="mt-2">Make sure the PDF URL is accessible and valid.</p>
        </div>
      )}
      
      <div className="controls bg-gray-100 p-3 mb-4 rounded flex flex-wrap items-center gap-2">
        <button
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <span className="mx-2">
          Page {pageNumber} of {numPages || '--'}
        </span>
        
        <button
          onClick={goToNextPage}
          disabled={numPages === null || pageNumber >= numPages}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
        
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={zoomOut}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
          >
            -
          </button>
          
          <span>{Math.round(scale * 100)}%</span>
          
          <button
            onClick={zoomIn}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
          >
            +
          </button>
        </div>
      </div>
      
      <div className="document-container border rounded p-4 overflow-auto bg-gray-50 flex justify-center">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
            </div>
          }
          error={
            <div className="text-center p-4 text-red-500">
              Failed to load PDF. Please check the URL and try again.
            </div>
          }
        >
          <Page 
            pageNumber={pageNumber} 
            scale={scale} 
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>
      
      <div className="mt-4">
        <a 
          href={pdfUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default PdfViewer; 