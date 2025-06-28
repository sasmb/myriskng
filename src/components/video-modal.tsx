"use client";

import { createPortal } from "react-dom";
import { useEffect, useState, useRef } from "react";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
  | {
      channel: "youtube";
      videoId: string;
    }
  | {
      channel: "facebook";
      videoUrl: string;
    }
  | {
      channel?: "custom";
      src: string;
    }
);

export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
  const [isPictureInPicture, setIsPictureInPicture] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Handle scroll for picture-in-picture - more responsive detection
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        // Small delay to allow for intentional scrolling
        setTimeout(() => {
          if (isOpen && hasScrolled) {
            setIsPictureInPicture(true);
            document.body.style.overflow = 'auto'; // Allow scrolling in PiP mode
          }
        }, 200);
      }
    };

    // Prevent body scroll when modal is open and not in PiP mode
    const originalOverflow = document.body.style.overflow;
    if (!isPictureInPicture) {
      document.body.style.overflow = 'hidden';
    }

    document.addEventListener('keydown', handleEscape);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, onClose, hasScrolled, isPictureInPicture]);

  // Reset picture-in-picture when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsPictureInPicture(false);
      setHasScrolled(false);
    }
  }, [isOpen]);

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Handle close picture-in-picture and return to full screen
  const handleClosePip = () => {
    setIsPictureInPicture(false);
    setHasScrolled(false);
    document.body.style.overflow = 'hidden';
  };

  if (!isOpen) return null;

  let src = "";

  if (props.channel === "youtube") {
    src = `https://www.youtube.com/embed/${props.videoId}?autoplay=1&rel=0`;
  } else if (props.channel === "facebook") {
    // Extract Facebook video ID from the URL and create embed URL
    const fbUrl = encodeURIComponent(props.videoUrl);
    src = `https://www.facebook.com/plugins/video.php?href=${fbUrl}&width=560&height=315&show_text=false&appId`;
  } else {
    src = props.src;
  }

  return createPortal(
    <>
      {/* Full Screen Modal */}
      <div 
        className={`fixed inset-0 transition-all duration-300 ${
          isPictureInPicture 
            ? 'opacity-0 pointer-events-none' 
            : 'opacity-100 pointer-events-auto'
        }`}
        style={{ zIndex: 9999 }}
        onClick={handleBackdropClick}
      >
        {/* Blurred Background Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
        
        {/* Modal Content */}
        <div className="relative flex items-center justify-center min-h-screen p-4">
          <div 
            ref={modalRef}
            className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 -right-2 z-10 flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-200 backdrop-blur-sm"
              aria-label="Close video"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative aspect-video">
              <iframe 
                ref={iframeRef}
                width="100%" 
                height="100%" 
                src={src} 
                allowFullScreen
                allow="autoplay; encrypted-media"
                className="border-0"
                style={{ minHeight: '315px' }}
              />
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm animate-pulse">
              Scroll to enable picture-in-picture mode
            </div>
          </div>
        </div>
      </div>

      {/* Picture-in-Picture Modal */}
      <div 
        className={`fixed bottom-4 right-4 transition-all duration-500 ${
          isPictureInPicture 
            ? 'opacity-100 pointer-events-auto transform translate-y-0 scale-100' 
            : 'opacity-0 pointer-events-none transform translate-y-full scale-95'
        }`}
        style={{ zIndex: 10000 }}
      >
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl w-80 aspect-video border-2 border-primary/30">
          {/* PiP Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 flex items-center justify-center w-8 h-8 bg-red-500/80 hover:bg-red-500 rounded-full text-white transition-all duration-200"
            aria-label="Close video"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          {/* PiP Expand Button */}
          <button
            onClick={handleClosePip}
            className="absolute top-2 left-2 z-10 flex items-center justify-center w-8 h-8 bg-primary/80 hover:bg-primary rounded-full text-white transition-all duration-200"
            aria-label="Expand to full screen"
            title="Click to return to full screen"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" 
              />
            </svg>
          </button>

          {/* PiP Video */}
          <iframe 
            width="100%" 
            height="100%" 
            src={src} 
            allowFullScreen
            allow="autoplay; encrypted-media"
            className="border-0"
          />
          
          {/* PiP Label */}
          <div className="absolute bottom-2 left-2 text-white/80 text-xs bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
            Picture-in-Picture
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
