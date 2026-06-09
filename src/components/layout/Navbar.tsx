import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { BookOpen, Cpu, Menu, X } from "lucide-react";

/* ══════════════════════════════════════════════
   PHI LOGO — Larger, more detailed
══════════════════════════════════════════════ */
function PhiLogo() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outermost ring — slow dashed */}
      <circle
        cx="26"
        cy="26"
        r="24"
        stroke="url(#g1)"
        strokeWidth="0.7"
        strokeDasharray="6 3"
        style={{
          animation: "orbit-ring 16s linear infinite",
          transformOrigin: "26px 26px",
        }}
      />
      {/* Middle ring */}
      <circle
        cx="26"
        cy="26"
        r="17"
        stroke="url(#g1)"
        strokeWidth="0.5"
        opacity="0.55"
        style={{
          animation: "orbit-ring 22s linear infinite reverse",
          transformOrigin: "26px 26px",
        }}
      />
      {/* Inner ring */}
      <circle
        cx="26"
        cy="26"
        r="10"
        stroke="url(#g1)"
        strokeWidth="0.4"
        opacity="0.3"
        style={{
          animation: "orbit-ring 10s linear infinite",
          transformOrigin: "26px 26px",
        }}
      />
      {/* Central glow */}
      <circle cx="26" cy="26" r="9" fill="url(#gInner)" opacity="0.18" />
      {/* Phi Φ */}
      <text
        x="26"
        y="34"
        textAnchor="middle"
        fontFamily="Cinzel, Georgia, serif"
        fontSize="22"
        fontWeight="700"
        fill="url(#g1)"
      >
        Φ
      </text>
      {/* Orbiting planet 1 — gold */}
      <circle
        cx="26"
        cy="2"
        r="3"
        fill="#f5d87a"
        style={{
          animation: "orbit-ring 5s linear infinite",
          transformOrigin: "26px 26px",
        }}
      >
        <animate
          attributeName="r"
          values="3;4;3"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.9;1;0.9"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Orbiting planet 2 — small, opposite phase */}
      <circle
        cx="26"
        cy="50"
        r="2"
        fill="#b8962c"
        opacity="0.7"
        style={{
          animation: "orbit-ring 5s linear infinite",
          transformOrigin: "26px 26px",
        }}
      />
      {/* Orbiting planet 3 — tiny, middle ring */}
      <circle
        cx="26"
        cy="9"
        r="1.5"
        fill="#fff"
        opacity="0.5"
        style={{
          animation: "orbit-ring 8s linear infinite reverse",
          transformOrigin: "26px 26px",
        }}
      />
      <defs>
        <linearGradient
          id="g1"
          x1="0"
          y1="0"
          x2="52"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#fff8e1" />
          <stop offset="40%" stopColor="#f5d87a" />
          <stop offset="70%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#b8962c" />
        </linearGradient>
        <radialGradient id="gInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5d87a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ══════════════════════════════════════════════
   ORBITING PLANET COMPONENT
══════════════════════════════════════════════ */
interface PlanetConfig {
  color: string;
  size: number;
  orbitR: number;
  dur: number;
  glow: string;
}

const PLANET_CONFIGS: Record<string, PlanetConfig> = {
  "/": {
    color: "#29d4f5", // cyan — Earth-like
    size: 8,
    orbitR: 44,
    dur: 2.6,
    glow: "rgba(41,212,245,0.7)",
  },
  "/modules": {
    color: "#ff6b35", // deep orange — Mars-like
    size: 8,
    orbitR: 48,
    dur: 2.0,
    glow: "rgba(255,107,53,0.7)",
  },
  "/ai": {
    color: "#c77dff", // vivid purple — Neptune-like
    size: 8,
    orbitR: 44,
    dur: 3.0,
    glow: "rgba(199,125,255,0.7)",
  },
};

function OrbitingPlanet({
  config,
  active,
}: {
  config: PlanetConfig;
  active: boolean;
}) {
  return (
    <span
      className="pointer-events-none absolute"
      style={{
        top: "50%",
        left: "50%",
        width: 0,
        height: 0,
        display: "block",
        perspective: "800px",
      }}
    >
      {/* Tilted 3D Orbit System */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          transformStyle: "preserve-3d",
          transform: "rotateX(65deg) rotateY(-15deg)", // Tilt the entire orbit system
        }}
      >
        {/* Static orbit ring (always visible when shown) */}
        <span
          style={{
            position: "absolute",
            top: -config.orbitR,
            left: -config.orbitR,
            width: config.orbitR * 2,
            height: config.orbitR * 2,
            borderRadius: "50%",
            border: `1.5px dashed ${config.color}50`,
            boxShadow: `0 0 15px ${config.color}20, inset 0 0 15px ${config.color}15`,
            pointerEvents: "none",
          }}
        />

        {/* Rotating arm */}
        <span
          style={{
            position: "absolute",
            top: -config.orbitR,
            left: -config.orbitR,
            width: config.orbitR * 2,
            height: config.orbitR * 2,
            borderRadius: "50%",
            animation: active
              ? `orbit-ring ${config.dur}s linear infinite`
              : "none",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Planet body attached to the ring */}
          <span
            style={{
              position: "absolute",
              top: 0,
              left: config.orbitR, // Pos at top center edge of the ring
              transformStyle: "preserve-3d",
              animation: active
                ? `orbit-ring ${config.dur}s linear infinite reverse`
                : "none", // Counter-spin the planet container
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -config.size / 2,
                left: -config.size / 2,
                width: config.size,
                height: config.size,
                borderRadius: "50%",
                background: `radial-gradient(circle at 35% 35%, #fff, ${config.color} 55%, #111 90%)`,
                boxShadow: [
                  `0 0 0 1px ${config.color}50`,
                  `0 0 ${config.size * 2}px ${config.glow}`,
                  `0 0 ${config.size * 5}px ${config.color}70`,
                ].join(", "),
                transform: "rotateY(15deg) rotateX(-65deg)", // Counter-tilt to keep planet perfectly upright facing camera
                transformStyle: "preserve-3d",
              }}
            >
              {/* Little moon */}
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 0,
                  height: 0,
                  animation: active
                    ? `orbit-ring 1.5s linear infinite`
                    : "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: -1,
                    left: config.size + 3,
                    width: 2,
                    height: 2,
                    borderRadius: "50%",
                    background: "#fff",
                    boxShadow: "0 0 4px #fff",
                  }}
                />
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  );
}

/* ══════════════════════════════════════════════
   NAV LINK WITH PLANET
══════════════════════════════════════════════ */
function NavLink({
  to,
  label,
  exact,
  isDark,
}: {
  to: string;
  label: string;
  exact: boolean;
  isDark: boolean;
}) {
  const location = useLocation();
  const [hovered, setHovered] = useState(false);
  const planet = PLANET_CONFIGS[to];

  const active = exact
    ? location.pathname === to
    : location.pathname.startsWith(to) && to !== "/";

  const showPlanet = hovered || active;

  return (
    <Link
      to={to}
      className="relative flex items-center justify-center px-5 py-3 group"
      style={{ cursor: "none", minWidth: "90px", textAlign: "center" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Orbit ring + planet */}
      {showPlanet && <OrbitingPlanet config={planet} active={showPlanet} />}

      {/* Label */}
      <span
        className="relative z-10 text-sm font-medium transition-all duration-300"
        style={{
          color: active
            ? "#f5d87a"
            : hovered
              ? "#ffffff"
              : isDark
                ? "rgba(255,255,255,0.6)"
                : "rgba(26,38,57,0.65)",
          fontFamily: active ? "'Playfair Display', serif" : "inherit",
          letterSpacing: active ? "0.05em" : "normal",
          textShadow: active
            ? `0 0 12px ${planet?.color ?? "#d4af37"}80`
            : hovered
              ? "0 0 8px rgba(255,255,255,0.3)"
              : "none",
        }}
      >
        {label}
      </span>

      {/* Gold underline */}
      <span
        className="absolute bottom-0 left-3 right-3 h-[1px] transition-all duration-300 origin-center"
        style={{
          background: `linear-gradient(90deg, transparent, ${planet?.color ?? "#d4af37"}, transparent)`,
          transform: active || hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </Link>
  );
}

/* ══════════════════════════════════════════════
   MINI STARS CANVAS for Navbar
══════════════════════════════════════════════ */
export function NavStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = (canvas.width = canvas.offsetWidth);
    const H = (canvas.height = canvas.offsetHeight);

    // Multicolor stars
    const palette = [
      [212, 175, 55], // gold
      [255, 255, 255], // white
      [41, 212, 245], // cyan
      [199, 125, 255], // purple
      [255, 107, 53], // orange
    ];
    const stars = Array.from({ length: 140 }, () => {
      const col = palette[Math.floor(Math.random() * palette.length)];
      const r = Math.random() * 1.4 + 0.4;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.004 + 0.001, // Twinkle speed
        vx: -(Math.random() * 0.3 + 0.1) * (r * 0.4), // Parallax: bigger stars move faster leftwards
        phase: Math.random() * Math.PI * 2,
        col,
      };
    });

    // Shooting stars
    const meteors: any[] = [];

    let animId: number;
    let frame = 0;

    const draw = () => {
      animId = requestAnimationFrame(draw);
      frame += 1;
      ctx.clearRect(0, 0, W, H);

      // Randomly spawn meteors
      if (Math.random() < 0.015) {
        meteors.push({
          x: W + 10,
          y: Math.random() * H,
          vx: -(Math.random() * 6 + 4), // Fast left
          vy: (Math.random() - 0.5) * 1.5,
          life: 0,
          maxLife: 60 + Math.random() * 40,
        });
      }

      // Draw normal drifting stars
      stars.forEach((s) => {
        // Move star
        s.x += s.vx;
        if (s.x < -10) s.x = W + 10;

        const opacity =
          s.opacity * (0.55 + 0.45 * Math.sin(frame * s.speed + s.phase));
        const [r, g, b] = s.col;
        // Glow
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
        grd.addColorStop(0, `rgba(${r},${g},${b},${opacity})`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        // Core
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(opacity * 1.5, 1)})`;
        ctx.fill();
      });

      // Draw meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life++;
        m.x += m.vx;
        m.y += m.vy;

        const progress = m.life / m.maxLife;
        const opacity =
          progress < 0.1
            ? progress * 10
            : progress > 0.8
              ? (1 - progress) * 5
              : 1;

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.vx * 4, m.y - m.vy * 4); // tail
        ctx.strokeStyle = `rgba(245, 216, 122, ${opacity * 0.8})`;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.stroke();

        if (m.life >= m.maxLife || m.x < -50) meteors.splice(i, 1);
      }
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ borderRadius: "inherit", opacity: 0.65 }}
    />
  );
}

/* ══════════════════════════════════════════════
   MAIN NAVBAR
══════════════════════════════════════════════ */
const navLinks = [
  { to: "/", label: "Trang chủ", exact: true },
  { to: "/modules", label: "Modules", exact: false },
  { to: "/ai", label: "AI Triết học", exact: false },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDark =
    location.pathname === "/" ||
    location.pathname.startsWith("/modules") ||
    location.pathname.startsWith("/ai");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navBgStyle = isDark
    ? {
        background: scrolled
          ? "linear-gradient(to bottom, rgba(5,7,16,0.98), rgba(12,16,36,0.95))"
          : "linear-gradient(to bottom, rgba(4,6,14,0.2), rgba(10,14,28,0.05))",
        backdropFilter: scrolled ? "blur(32px)" : "blur(12px)",
        WebkitBackdropFilter: scrolled ? "blur(32px)" : "blur(12px)",
        borderBottom: "1px solid rgba(212,175,55,0.15)",
      }
    : {
        background: "rgba(252,251,249,0.96)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      };

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-500 overflow-visible"
        style={navBgStyle}
      >
        {/* ── Nebula Aurora Blob inside Navbar ── */}
        {isDark && (
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ opacity: scrolled ? 0.3 : 0.15 }}
          >
            <div
              className="absolute -top-10 left-1/4 w-96 h-40 bg-purple-500/20 blur-3xl rounded-full mix-blend-screen"
              style={{ animation: "orbit-ring 20s linear infinite" }}
            />
            <div
              className="absolute top-0 right-1/4 w-64 h-32 bg-cyan-500/20 blur-3xl rounded-full mix-blend-screen"
              style={{ animation: "orbit-ring 15s linear infinite reverse" }}
            />
          </div>
        )}
        {/* ── Subtle star canvas background (dark mode only) ── */}
        {isDark && <NavStars />}

        {/* ── Gold glow line at bottom (always dark) ── */}
        {isDark && (
          <div
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.35) 30%, rgba(245,216,122,0.5) 50%, rgba(212,175,55,0.35) 70%, transparent 100%)",
            }}
          />
        )}

        {/* ── Scrolled glow (more intense) ── */}
        {isDark && scrolled && (
          <div
            className="absolute -bottom-px left-0 right-0 h-[2px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,175,55,0.6) 40%, rgba(245,216,122,0.8) 50%, rgba(212,175,55,0.6) 60%, transparent)",
            }}
          />
        )}

        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative z-10">
          {/* ── LOGO ── */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group"
            style={{ cursor: "none" }}
          >
            <div className="relative flex-shrink-0">
              <PhiLogo />
              {/* Radial glow on hover */}
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 65%)",
                }}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  background:
                    "linear-gradient(135deg, #fff8e1 0%, #f5d87a 25%, #d4af37 55%, #f5d87a 75%, #b8962c 100%)",
                  backgroundSize: "250% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gold-shimmer 5s linear infinite",
                  filter: "drop-shadow(0 0 10px rgba(212,175,55,0.5))",
                }}
              >
                MARXTERCHEF
              </span>
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: isDark
                    ? "rgba(212,175,55,0.55)"
                    : "rgba(212,175,55,0.75)",
                  marginTop: "2px",
                }}
              >
                LêNinJa
              </span>
            </div>
          </Link>

          {/* ── NAV LINKS with orbiting planets ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                label={link.label}
                exact={link.exact}
                isDark={isDark}
              />
            ))}
          </div>

          {/* ── RIGHT ACTIONS ── */}
          <div className="flex items-center gap-3">
            {/* Học ngay CTA */}
            <Link
              to="/modules"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
              style={{
                background:
                  "linear-gradient(135deg, #d4af37, #f5d87a, #b8962c)",
                color: "#060912",
                boxShadow: "0 4px 20px rgba(212,175,55,0.35)",
                cursor: "none",
              }}
            >
              {/* Shine sweep on hover */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <BookOpen size={13} className="relative z-10" />
              <span className="relative z-10">Học ngay</span>
            </Link>

            {/* AI button */}
            <Link
              to="/ai"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 relative overflow-hidden group"
              style={{
                borderColor: "rgba(212,175,55,0.35)",
                color: "#d4af37",
                background: isDark
                  ? "rgba(212,175,55,0.06)"
                  : "rgba(212,175,55,0.06)",
                cursor: "none",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, transparent 70%)",
                }}
              />
              <Cpu size={16} className="relative z-10" />
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
              style={{
                borderColor: "rgba(212,175,55,0.2)",
                color: isDark ? "rgba(255,255,255,0.7)" : "#1a2639",
                cursor: "none",
              }}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-24"
          style={{
            background: "rgba(3,5,12,0.98)",
            backdropFilter: "blur(40px)",
          }}
        >
          {/* Scan line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div
              className="absolute w-full h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
                animation: "scan-line 5s linear infinite",
              }}
            />
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-10 relative z-10">
            {navLinks.map((link, i) => {
              const active = link.exact
                ? location.pathname === link.to
                : location.pathname.startsWith(link.to) && link.to !== "/";
              const planet = PLANET_CONFIGS[link.to];
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="relative font-serif text-4xl transition-all duration-300 hover:scale-110 px-8 py-3"
                  style={
                    {
                      fontFamily: "Cinzel, serif",
                      background: active
                        ? "linear-gradient(135deg, #d4af37, #f5d87a)"
                        : "none",
                      WebkitBackgroundClip: active ? "text" : "initial",
                      WebkitTextFillColor: active
                        ? "transparent"
                        : "rgba(255,255,255,0.55)",
                      color: active ? "transparent" : "rgba(255,255,255,0.55)",
                      animationDelay: `${i * 0.1}s`,
                      cursor: "none",
                      textShadow: active
                        ? `0 0 20px ${planet.color}60`
                        : "none",
                    } as React.CSSProperties
                  }
                >
                  {/* Planet in mobile */}
                  {active && (
                    <span
                      className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                      style={{
                        background: planet.color,
                        boxShadow: `0 0 10px ${planet.glow}`,
                        animation: `orbit-ring ${planet.dur}s linear infinite`,
                        transformOrigin: "-20px 0",
                      }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/modules"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              style={{
                background: "linear-gradient(135deg, #d4af37, #f5d87a)",
                color: "#060912",
                cursor: "none",
              }}
            >
              Bắt đầu học ngay
            </Link>
          </div>

          <div className="flex justify-center pb-12 gap-8 text-white/10 text-3xl font-serif">
            <span className="float-anim">∞</span>
            <span className="float-anim-2">Φ</span>
            <span className="float-anim">⊚</span>
            <span className="float-anim-2">✦</span>
          </div>
        </div>
      )}
    </>
  );
}
