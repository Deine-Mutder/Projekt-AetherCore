interface TruckMascotProps {
  className?: string
}

export function TruckMascot({ className }: TruckMascotProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Body */}
      <ellipse cx="100" cy="120" rx="65" ry="55" fill="#f5a623" />
      
      {/* Head */}
      <circle cx="100" cy="80" r="55" fill="#f5a623" />
      
      {/* Inner face area */}
      <ellipse cx="100" cy="85" rx="45" ry="40" fill="#d4890f" />
      
      {/* Eyes - outer */}
      <ellipse cx="80" cy="75" rx="16" ry="18" fill="#0a0a0a" />
      <ellipse cx="120" cy="75" rx="16" ry="18" fill="#0a0a0a" />
      
      {/* Eyes - glow */}
      <ellipse cx="80" cy="75" rx="12" ry="14" fill="#3b82f6" />
      <ellipse cx="120" cy="75" rx="12" ry="14" fill="#3b82f6" />
      
      {/* Eyes - inner glow */}
      <ellipse cx="80" cy="73" rx="8" ry="10" fill="#60a5fa" />
      <ellipse cx="120" cy="73" rx="8" ry="10" fill="#60a5fa" />
      
      {/* Eye highlights */}
      <circle cx="84" cy="70" r="4" fill="white" />
      <circle cx="124" cy="70" r="4" fill="white" />
      
      {/* Antenna base */}
      <rect x="95" y="20" width="10" height="15" rx="2" fill="#d4890f" />
      
      {/* Antenna ball */}
      <circle cx="100" cy="15" r="8" fill="#f5a623" />
      <circle cx="100" cy="15" r="5" fill="#fbbf24" />
      
      {/* Ears/Side pieces */}
      <rect x="35" y="60" width="15" height="25" rx="4" fill="#f5a623" />
      <rect x="150" y="60" width="15" height="25" rx="4" fill="#f5a623" />
      
      {/* Smile/mouth area */}
      <path
        d="M75 100 Q100 115 125 100"
        stroke="#0a0a0a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Truck grill detail on body */}
      <rect x="70" y="135" width="60" height="25" rx="4" fill="#0a0a0a" />
      <rect x="75" y="140" width="12" height="15" rx="2" fill="#3b82f6" />
      <rect x="94" y="140" width="12" height="15" rx="2" fill="#3b82f6" />
      <rect x="113" y="140" width="12" height="15" rx="2" fill="#3b82f6" />
      
      {/* Wheels */}
      <circle cx="55" cy="170" r="15" fill="#1a1a1a" />
      <circle cx="55" cy="170" r="8" fill="#3a3a3a" />
      <circle cx="145" cy="170" r="15" fill="#1a1a1a" />
      <circle cx="145" cy="170" r="8" fill="#3a3a3a" />
      
      {/* Highlight on head */}
      <ellipse cx="85" cy="50" rx="20" ry="8" fill="#fbbf24" opacity="0.5" />
    </svg>
  )
}
