interface MascotProps {
  className?: string
}

export function Mascot({ className }: MascotProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Sparkles around mascot */}
      <div className="absolute -top-4 -left-8 h-2 w-2 rotate-45 bg-[#f5a623]" />
      <div className="absolute -top-8 left-1/4 h-1.5 w-1.5 rotate-45 bg-[#f5a623]/70" />
      <div className="absolute top-8 -right-6 h-2 w-2 rotate-45 bg-[#f5a623]" />
      <div className="absolute -bottom-4 -left-4 h-1.5 w-1.5 rotate-45 bg-[#f5a623]/60" />
      <div className="absolute bottom-12 -right-8 h-1 w-1 rotate-45 bg-[#f5a623]/80" />
      
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        {/* Main body - rounded blob shape */}
        <ellipse cx="100" cy="115" rx="70" ry="60" fill="#f5a623" />
        
        {/* Head */}
        <circle cx="100" cy="85" r="60" fill="#f5a623" />
        
        {/* Darker orange shading on face */}
        <ellipse cx="100" cy="90" rx="48" ry="42" fill="#d4890f" />
        
        {/* Left eye socket */}
        <ellipse cx="78" cy="80" rx="18" ry="20" fill="#0a0a0a" />
        {/* Right eye socket */}
        <ellipse cx="122" cy="80" rx="18" ry="20" fill="#0a0a0a" />
        
        {/* Left eye glow - blue */}
        <ellipse cx="78" cy="80" rx="14" ry="16" fill="#1e3a5f" />
        <ellipse cx="78" cy="78" rx="10" ry="12" fill="#3b82f6" />
        <ellipse cx="78" cy="76" rx="6" ry="8" fill="#60a5fa" />
        <circle cx="82" cy="74" r="3" fill="white" opacity="0.8" />
        
        {/* Right eye glow - blue */}
        <ellipse cx="122" cy="80" rx="14" ry="16" fill="#1e3a5f" />
        <ellipse cx="122" cy="78" rx="10" ry="12" fill="#3b82f6" />
        <ellipse cx="122" cy="76" rx="6" ry="8" fill="#60a5fa" />
        <circle cx="126" cy="74" r="3" fill="white" opacity="0.8" />
        
        {/* Antenna stem */}
        <rect x="95" y="18" width="10" height="12" rx="2" fill="#d4890f" />
        
        {/* Antenna ball */}
        <circle cx="100" cy="14" r="10" fill="#f5a623" />
        <circle cx="100" cy="14" r="6" fill="#fbbf24" />
        <circle cx="103" cy="11" r="2" fill="white" opacity="0.5" />
        
        {/* Left ear */}
        <rect x="32" y="65" width="14" height="28" rx="4" fill="#f5a623" />
        {/* Right ear */}
        <rect x="154" y="65" width="14" height="28" rx="4" fill="#f5a623" />
        
        {/* Subtle smile curve */}
        <path
          d="M78 105 Q100 115 122 105"
          stroke="#0a0a0a"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />
        
        {/* Highlight on head */}
        <ellipse cx="80" cy="50" rx="25" ry="10" fill="#fbbf24" opacity="0.4" />
        
        {/* Little arms/hands */}
        <ellipse cx="45" cy="130" rx="12" ry="10" fill="#f5a623" />
        <ellipse cx="155" cy="130" rx="12" ry="10" fill="#f5a623" />
      </svg>
    </div>
  )
}
