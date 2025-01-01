import  { useState, useEffect } from 'react';

const PDFViewer = ({ url }) => {
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
  };

  // Prevent right-click context menu
  const preventRightClick = (e) => {
    e.preventDefault();
    return false;
  };

  // Prevent keyboard shortcuts
  const preventShortcuts = (e) => {
    if (
      (e.ctrlKey && (e.keyCode === 83 || e.keyCode === 80)) || 
      (e.ctrlKey && e.shiftKey && e.keyCode === 73) || 
      e.keyCode === 123 // F12
    ) {
      e.preventDefault();
      return false;
    }
  };

  useEffect(() => {
    document.addEventListener('contextmenu', preventRightClick);
    document.addEventListener('keydown', preventShortcuts);

    return () => {
      document.removeEventListener('contextmenu', preventRightClick);
      document.removeEventListener('keydown', preventShortcuts);
    };
  }, []);

  if (isError) {
    return (
      <div className="max-w-2xl mx-auto my-4  bg-red-50 border border-red-200 px-8 py-24 rounded-lg">
        <div className="flex items-center gap-2">
          <svg 
            className="w-5 h-5 text-red-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h3 className="text-lg font-semibold text-red-800">Error Loading PDF</h3>
        </div>
        <p className="mt-2 text-red-700">
          Failed to load PDF. Please ensure the URL is correct and the PDF is accessible.
        </p>
      </div>
    );
  }

  return (
    <div 
      className="w-full max-w-6xl mx-auto select-none"
      onContextMenu={preventRightClick}
    >
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div 
          className="relative w-full" 
          style={{ paddingTop: '141.4%' }}
          onDragStart={preventRightClick}
        >
          <iframe
            src={`${url}#toolbar=0&view=FitH`}
            className="absolute top-0 left-0 w-full h-full"
            onError={handleError}
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;