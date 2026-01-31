import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

const ComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0); 
  const containerRef = useRef<HTMLDivElement>(null);

  // --- FIXED IMAGES (Forest vs. Drought) ---
  // Lush Green Forest (Amazon style)
  const imgBefore = "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80"; 
  // Dry Cracked Earth / Dead Trees
  const imgAfter = "https://media.gettyimages.com/id/526664500/video/cracked-earth-near-dry-lake-in-dry-season.jpg?s=640x640&k=20&c=2x5gnEZstGH52Ye-OkeBvALluQnYfHAYCILMfG2LDa4="; 

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isResizing || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isResizing || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mt-6 select-none">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#15803D]/10 p-2 rounded-lg">
            <ArrowLeftRight className="text-[#15803D] w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg">Impact of Deforestation</h3>
            <p className="text-xs text-slate-500">Drag slider to see the change (Healthy vs Damaged)</p>
          </div>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full h-[350px] rounded-2xl overflow-hidden cursor-col-resize group bg-slate-200"
        onMouseDown={() => setIsResizing(true)}
        onMouseUp={() => setIsResizing(false)}
        onMouseLeave={() => setIsResizing(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsResizing(true)}
        onTouchEnd={() => setIsResizing(false)}
        onTouchMove={handleTouchMove}
      >
        {/* RIGHT IMAGE (After/Dry) - Background Layer */}
        <img 
          src={imgAfter} 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Deforested" 
        />
        <div className="absolute top-4 right-4 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md z-10">
          2024 (Damaged)
        </div>

        {/* LEFT IMAGE (Before/Green) - Clipped Layer */}
        <div 
          className="absolute inset-0 overflow-hidden border-r-4 border-white shadow-2xl" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={imgBefore} 
            className="absolute top-0 left-0 h-full object-cover max-w-none" 
            style={{ width: containerWidth > 0 ? `${containerWidth}px` : '100vw' }} 
            alt="Forest" 
          />
          <div className="absolute top-4 left-4 bg-[#15803D]/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
            2010 (Healthy)
          </div>
        </div>

        {/* SLIDER HANDLE */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-transparent flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center transform -translate-x-1/2 cursor-col-resize">
            <ArrowLeftRight size={18} className="text-slate-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;