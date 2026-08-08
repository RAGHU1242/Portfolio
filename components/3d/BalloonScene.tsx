"use client";

/**
 * BalloonScene.tsx
 *
 * Enhanced Mascot & Fluid Rope Physics:
 * - Refined 3D gathered balloon bottom and organic latex flared knot.
 * - Multi-stage harmonic rope physics with realistic inertia lag, tension curve, and trailing tail oscillation.
 * - Smooth 60fps cursor gaze tracking on face.
 * - Single rigid parent pendulum float with soft fixed Gaussian highlights.
 */
export default function BalloonScene({
  mouseX = 0,
  mouseY = 0,
}: {
  mouseX?: number;
  mouseY?: number;
}) {
  // Direct, stable calculation with zero useEffect dependency shifts
  const gazeX = Math.max(-9, Math.min(9, mouseX * 9));
  const gazeY = Math.max(-7, Math.min(7, mouseY * 7));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "visible",
      }}
      aria-hidden="true"
    >
      {/* ────────────────────────────────────────────────────────────
          SINGLE RIGID PARENT CONTAINER
          - Float, sway, and pendulum tilt apply to the entire mascot
      ──────────────────────────────────────────────────────────── */}
      <div className="balloon-rigid-unit">
        {/* Soft Warm Ambient Glow Behind Balloon */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            width: "270px",
            height: "310px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255, 133, 0, 0.28) 0%, rgba(217, 74, 0, 0.08) 55%, transparent 70%)",
            filter: "blur(28px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ────────────────────────────────────────────────────────────
            BALLOON SVG ILLUSTRATION
        ──────────────────────────────────────────────────────────── */}
        <svg
          viewBox="0 0 300 440"
          width="295"
          height="430"
          style={{
            display: "block",
            position: "relative",
            zIndex: 1,
            overflow: "visible",
          }}
        >
          <defs>
            {/* 1. Rich Spherical Base Gradient */}
            <radialGradient
              id="balloonSphereGrad"
              cx="38%"
              cy="34%"
              r="65%"
              fx="32%"
              fy="28%"
            >
              <stop offset="0%" stopColor="#FFAA52" />
              <stop offset="35%" stopColor="#FF8500" />
              <stop offset="72%" stopColor="#EB5B00" />
              <stop offset="92%" stopColor="#BA3800" />
              <stop offset="100%" stopColor="#8A2400" />
            </radialGradient>

            {/* 2. Knot Radial Gradient */}
            <radialGradient
              id="balloonKnotGrad"
              cx="45%"
              cy="30%"
              r="70%"
              fx="40%"
              fy="25%"
            >
              <stop offset="0%" stopColor="#FF9E3B" />
              <stop offset="40%" stopColor="#EB5B00" />
              <stop offset="85%" stopColor="#9C2A00" />
              <stop offset="100%" stopColor="#6E1B00" />
            </radialGradient>

            {/* 3. Knot Lip Rim Gradient */}
            <linearGradient id="knotLipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFAA52" />
              <stop offset="50%" stopColor="#D94A00" />
              <stop offset="100%" stopColor="#7A1E00" />
            </linearGradient>

            {/* 4. Soft Gaussian Blur Filters for Fixed Highlights */}
            <filter id="softHighlightBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="9" />
            </filter>
            <filter id="crispHighlightBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" />
            </filter>
            <filter id="ambientBounceBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="11" />
            </filter>

            {/* 5. Soft Drop Shadow for Knot & String */}
            <filter id="knotSoftShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#4D1200" floodOpacity="0.45" />
            </filter>
            <filter id="ropeShadow" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0.5" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* ─────────────────────────────────────────────
              1. MAIN BALLOON BODY WITH ORGANIC GATHERED BOTTOM
          ───────────────────────────────────────────── */}
          <path
            d="M 150 16
               C 224 16, 276 68, 276 150
               C 276 226, 218 286, 158 289
               C 155 291, 153 293, 150 294
               C 147 293, 145 291, 142 289
               C 82 286, 24 226, 24 150
               C 24 68, 76 16, 150 16 Z"
            fill="url(#balloonSphereGrad)"
          />

          {/* ─────────────────────────────────────────────
              2. SOFT FIXED GLOSSY HIGHLIGHTS (Static to Body)
          ───────────────────────────────────────────── */}
          {/* Primary Broad Soft Highlight Patch (Top-Left) */}
          <ellipse
            cx="106"
            cy="84"
            rx="56"
            ry="40"
            transform="rotate(-28 106 84)"
            fill="#FFE8CC"
            opacity="0.55"
            filter="url(#softHighlightBlur)"
          />

          {/* Inner Brighter Specular Core (Top-Left) */}
          <ellipse
            cx="98"
            cy="74"
            rx="28"
            ry="18"
            transform="rotate(-28 98 74)"
            fill="#FFFFFF"
            opacity="0.65"
            filter="url(#crispHighlightBlur)"
          />

          {/* Secondary Soft Rim / Ambient Bounce Reflection (Lower-Right) */}
          <ellipse
            cx="210"
            cy="218"
            rx="46"
            ry="24"
            transform="rotate(32 210 218)"
            fill="#FFB366"
            opacity="0.22"
            filter="url(#ambientBounceBlur)"
          />

          {/* ─────────────────────────────────────────────
              3. CUTE MINIMAL FACE WITH RESPONSIVE GAZE TRACKING
          ───────────────────────────────────────────── */}
          <g
            id="balloon-face"
            style={{
              transform: `translate(${gazeX}px, ${gazeY}px)`,
              transition: "transform 0.04s ease-out",
            }}
          >
            {/* Left Eye: Solid dark oval */}
            <ellipse
              cx="116"
              cy="146"
              rx="6.5"
              ry="8.5"
              fill="#140804"
            />

            {/* Right Eye: Solid dark oval */}
            <ellipse
              cx="184"
              cy="146"
              rx="6.5"
              ry="8.5"
              fill="#140804"
            />

            {/* Smile: Small, clean continuous U-shaped curve */}
            <path
              d="M 136 172
                 Q 150 186, 164 172"
              fill="none"
              stroke="#140804"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
          </g>

          {/* ─────────────────────────────────────────────
              4. ORGANIC GATHERED BALLOON BOTTOM & 3D KNOT
          ───────────────────────────────────────────── */}
          <g id="balloon-knot-group" filter="url(#knotSoftShadow)">
            {/* Ambient occlusion shadow under balloon base */}
            <ellipse
              cx="150"
              cy="292"
              rx="12"
              ry="4"
              fill="#4A1000"
              opacity="0.6"
            />

            {/* Flared latex nozzle neck / gather */}
            <path
              d="M 144 290
                 C 142 293, 140 297, 143 301
                 C 146 303, 154 303, 157 301
                 C 160 297, 158 293, 156 290
                 C 152 292, 148 292, 144 290 Z"
              fill="url(#balloonKnotGrad)"
            />

            {/* Rolled flared rim / lip at bottom of tie knot */}
            <ellipse
              cx="150"
              cy="302"
              rx="8.5"
              ry="3.8"
              fill="url(#knotLipGrad)"
            />

            {/* Inner nozzle depression */}
            <ellipse
              cx="150"
              cy="302.2"
              rx="4.2"
              ry="1.8"
              fill="#521400"
            />

            {/* Tightly wound string tie wrap collar */}
            <ellipse
              cx="150"
              cy="296"
              rx="6.8"
              ry="2.2"
              fill="none"
              stroke="#E0DFD8"
              strokeWidth="1.8"
              opacity="0.95"
            />
          </g>

          {/* ─────────────────────────────────────────────
              5. FLUID CATENARY ROPE WITH MULTI-STAGE PHYSICS
          ───────────────────────────────────────────── */}
          <g className="balloon-rope-system" filter="url(#ropeShadow)">
            {/* Primary Fluid Rope Stem (Leading upper-mid wave) */}
            <path
              className="rope-harmonic-stem"
              d="M 150 298
                 C 149 320, 144 342, 148 365
                 C 152 388, 155 408, 149 428"
              fill="none"
              stroke="#F2F0EB"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Soft inner thread highlight core */}
            <path
              className="rope-harmonic-stem"
              d="M 150 298
                 C 149 320, 144 342, 148 365
                 C 152 388, 155 408, 149 428"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.75"
            />

            {/* Trailing loose tip with curl physics */}
            <path
              className="rope-trailing-tip"
              d="M 149 428
                 C 145 440, 152 448, 150 454"
              fill="none"
              stroke="#E8E6E0"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.85"
            />
          </g>
        </svg>
      </div>

      {/* ────────────────────────────────────────────────────────────
          ORGANIC PENDULUM FLOAT + MULTI-STAGE HARMONIC ROPE PHYSICS
      ──────────────────────────────────────────────────────────── */}
      <style>{`
        .balloon-rigid-unit {
          transform-origin: 50% 10%;
          animation: balloonOrganicPendulum 5.6s ease-in-out infinite alternate;
          will-change: transform;
        }

        /* ── Multi-Stage Fluid Rope Physics ── */
        .balloon-rope-system {
          transform-origin: 150px 298px;
          animation: ropeRootSway 5.6s ease-in-out infinite alternate;
          will-change: transform;
        }

        .rope-harmonic-stem {
          transform-origin: 150px 330px;
          animation: ropeStemHarmonic 5.6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
          will-change: transform;
        }

        .rope-trailing-tip {
          transform-origin: 149px 428px;
          animation: ropeTipWhip 5.6s cubic-bezier(0.35, 0.15, 0.45, 1) infinite alternate;
          will-change: transform;
        }

        /* Balloon Pendulum Float & Drift */
        @keyframes balloonOrganicPendulum {
          0% {
            transform: translateY(-11px) translateX(-7px) rotate(-6.5deg);
          }
          50% {
            transform: translateY(9px) translateX(2px) rotate(0.8deg);
          }
          100% {
            transform: translateY(-9px) translateX(8px) rotate(6.8deg);
          }
        }

        /* Root Rope Joint (Follows Knot with gentle initial lag) */
        @keyframes ropeRootSway {
          0% {
            transform: rotate(5.5deg) skewX(-3deg);
          }
          50% {
            transform: rotate(-1deg) skewX(1deg);
          }
          100% {
            transform: rotate(-5.5deg) skewX(3.5deg);
          }
        }

        /* Mid-Stem Catenary Flex (Inertia phase lag wave) */
        @keyframes ropeStemHarmonic {
          0% {
            transform: rotate(-4.5deg) scaleX(0.96) translateX(-2.5px);
          }
          45% {
            transform: rotate(2deg) scaleX(1.02) translateX(1px);
          }
          100% {
            transform: rotate(5deg) scaleX(0.96) translateX(3px);
          }
        }

        /* Trailing Tip (Secondary harmonic whip/curl) */
        @keyframes ropeTipWhip {
          0% {
            transform: rotate(9deg) translateX(3.5px) scaleY(0.98);
          }
          55% {
            transform: rotate(-3deg) translateX(-1px) scaleY(1.03);
          }
          100% {
            transform: rotate(-11deg) translateX(-4px) scaleY(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .balloon-rigid-unit,
          .balloon-rope-system,
          .rope-harmonic-stem,
          .rope-trailing-tip,
          #balloon-face {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
