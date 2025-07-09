import { X } from 'lucide-react';
import { useEffect } from 'react';

const DemoModal = ({ isOpen, onClose }) => {
  const youtubeVideoId = "dQw4w9WgXcQ"; // Example ID - replace with your video ID

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Modal backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black bg-opacity-75 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Modal header */}
          <div className="bg-[#E68C32] text-white p-6 pb-4">
            <h2 className="text-2xl font-bold">Explore LeapX Model</h2>
            <p className="text-white/90 mt-2">Discover how LeapX transforms entrepreneurial dreams into reality</p>
          </div>

          {/* Video container */}
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