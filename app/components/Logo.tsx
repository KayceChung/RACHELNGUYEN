interface LogoProps {
  variant?: "signature" | "monogram";
  className?: string;
}

export function Logo({ variant = "signature", className = "" }: LogoProps) {
  if (variant === "monogram") {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Elegant circular frame */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.3"
        />
        
        {/* Inner decorative circle */}
        <circle
          cx="24"
          cy="24"
          r="18"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.2"
        />

        {/* R letter - elegant serif style */}
        <path
          d="M16 15 L16 33 M16 15 L21 15 Q24 15 24 18.5 Q24 22 21 22 L16 22 M21 22 L25 33"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* N letter - elegant serif style */}
        <path
          d="M28 15 L28 33 M28 15 L35 33 M35 15 L35 33"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Subtle compass point accent at bottom */}
        <path
          d="M24 39 L24 41"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    );
  }

  // Signature variant (default)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Decorative accent mark */}
      <div className="relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Elegant minimal compass rose */}
          <circle
            cx="16"
            cy="16"
            r="14"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.25"
          />
          
          {/* North point */}
          <path
            d="M16 5 L16 27 M16 5 L11 16 M16 5 L21 16"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
          />
          
          {/* East-West line */}
          <path
            d="M5 16 L27 16"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.4"
          />
          
          {/* Center dot */}
          <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      {/* Brand name typography */}
      <div className="flex flex-col leading-tight">
        <span
          className="text-lg tracking-wide"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 500,
            letterSpacing: '0.02em'
          }}
        >
          Rachel Nguyễn
        </span>
        <span
          className="text-xs opacity-70 tracking-widest uppercase"
          style={{
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.1em'
          }}
        >
          Travel Consultant
        </span>
      </div>
    </div>
  );
}

// Alternative minimal version for mobile/compact spaces
export function LogoCompact({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          r="12"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.3"
        />
        <path
          d="M14 5 L14 23 M14 5 L10 14 M14 5 L18 14"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" opacity="0.8" />
      </svg>
      <span
        className="font-medium"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem'
        }}
      >
        Rachel
      </span>
    </div>
  );
}
