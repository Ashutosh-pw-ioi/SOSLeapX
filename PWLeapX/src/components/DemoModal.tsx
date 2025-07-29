import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const youtubeVideoId = '8MUnQL3ma6Q'; 

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset'; // Re-enable scrolling
    };
  }, [isOpen, onClose]);

  // Don't render the modal if it's not open
  if (!isOpen) return null;

  return (
    <>
      {/* Modal backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-75 transition-opacity"
        onClick={onClose}
      />

      {/* Modal content wrapper */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Modal container */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="relative z-50 bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()} // Prevent click bubbling to backdrop
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Header */}
          <div className="bg-[#E68C32] text-white p-6 pb-4">
            <h2 id="modal-title" className="text-2xl font-bold">
              Explore LeapX Model
            </h2>
          </div>

          {/* Embedded YouTube Video */}
          <div className="relative pb-[56.25%] h-0 overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
              title="LeapX Demo Video"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoModal;
