import { Link } from "react-router-dom";
import { ArrowRight, Orbit, Zap } from "lucide-react";
import { NavStars } from "../components/layout/Navbar";
import { useEffect, useMemo } from "react";

function Constellation({ id, color, glowColor }: { id: string; color: string; glowColor: string }) {
  const points = useMemo(() => {
    const hash = id
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const pts = [];
    for (let i = 0; i < 12; i++) {
      pts.push({
        x: 10 + ((hash * (i + 1) * 17) % 80),
        y: 10 + ((hash * (i + 3) * 23) % 80),
      });
    }
    return pts;
  }, [id]);

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-60 mix-blend-color-dodge"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {points.map((p, i) => {
        const next = points[(i + 1) % points.length];
        const next2 = points[(i + 2) % points.length];
        return (
          <g key={i}>
            <line
              x1={p.x}
              y1={p.y}
              x2={next.x}
              y2={next.y}
              stroke={glowColor}
              strokeWidth="0.3"
            />
            {i % 2 === 0 && (
              <line
                x1={p.x}
                y1={p.y}
                x2={next2.x}
                y2={next2.y}
                stroke={glowColor}
                strokeWidth="0.1"
                strokeDasharray="1 1"
              />
            )}
            <circle
              cx={p.x}
              cy={p.y}
              r={i % 3 === 0 ? 1 : 0.5}
              fill="rgba(255,255,255,0.9)"
            />
            <circle
              cx={p.x}
              cy={p.y}
              r={2.5}
              fill={color}
              filter="blur(2px)"
              opacity="0.4"
            />
          </g>
        );
      })}
    </svg>
  );
}

const modules = [
  {
    id: "intro",
    title: "Nhập môn Triết học Mác-Lênin",
    subtitle:
      "Tìm hiểu nguồn gốc hình thành và các chức năng thế giới quan, phương pháp luận của Triết học Mác-Lênin. Trạm không gian nền tảng khởi nguồn cho mọi tư duy.",
    tags: ["Triết học là gì", "Thế giới quan"],
    link: "/modules/intro",
    color: "#d4af37",
    glowColor: "rgba(212,175,55,0.3)",
    bgColor: "rgba(212,175,55,0.05)"
  },
  {
    id: "cndv",
    title: "Chủ nghĩa Duy vật Biện chứng",
    subtitle:
      "Bản chất của vật chất, ý thức và mối quan hệ biện chứng sinh động giữa chúng. Lưới không-thời gian lượng tử định hình thực tại.",
    tags: ["Vật chất & Ý thức", "Không-Thời gian"],
    link: "/modules/cndv",
    color: "#29d4f5",
    glowColor: "rgba(41,212,245,0.3)",
    bgColor: "rgba(41,212,245,0.05)"
  },
  {
    id: "pbc",
    title: "Phép Biện chứng Duy vật",
    subtitle:
      "Ba quy luật cơ bản: Lượng - Chất, Mâu thuẫn, Phủ định biện chứng — động lực phát triển vạn vật. Nơi các thế lực đối lập va chạm và hợp nhất.",
    tags: ["Quy luật Lượng Chất", "Đấu tranh đối lập"],
    link: "/modules/pbc",
    color: "#ff6b35",
    glowColor: "rgba(255,107,53,0.3)",
    bgColor: "rgba(255,107,53,0.05)"
  },
  {
    id: "nhanthuc",
    title: "Lý luận Nhận thức",
    subtitle:
      "Con đường nhận thức biện chứng của tri thức khoa học đi từ trực quan sinh động đến tư duy trừu tượng. Xâm nhập vào ma trận mạng neural.",
    tags: ["Thực tiễn khách quan", "Chân lý tiệm cận"],
    link: "/modules/nhanthuc",
    color: "#00ff88",
    glowColor: "rgba(0,255,136,0.3)",
    bgColor: "rgba(0,255,136,0.05)"
  },
  {
    id: "cndvls1",
    title: "Duy vật Lịch sử (Phần 1)",
    subtitle:
      "Cấu trúc xã hội: Phân tích cơ sở hạ tầng và kiến trúc thượng tầng thông qua các mô hình cơ chế bánh răng lịch sử.",
    tags: ["Cơ sở hạ tầng", "Kiến trúc thượng tầng"],
    link: "/modules/cndvls-1",
    color: "#d2691e",
    glowColor: "rgba(210,105,30,0.3)",
    bgColor: "rgba(210,105,30,0.05)"
  },
  {
    id: "cndvls2",
    title: "Duy vật Lịch sử (Phần 2)",
    subtitle:
      "Sự phát triển của các hình thái kinh tế - xã hội như một quá trình lịch sử - tự nhiên. Bước vào đường hầm ánh sáng Warp Speed.",
    tags: ["Hình thái KT-XH", "Tiến trình lịch sử"],
    link: "/modules/cndvls-2",
    color: "#c77dff",
    glowColor: "rgba(199,125,255,0.3)",
    bgColor: "rgba(199,125,255,0.05)"
  },
];

export default function ModulesHub() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#03050a] selection:bg-gold/20 relative overflow-hidden">
      {/* ── ASTROLABE & STARS BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Starfield */}
        <div className="absolute inset-0 opacity-100">
          <NavStars />
        </div>

        {/* Glowing Nebulas */}
        <div
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"
          style={{ animation: "orbit-ring 30s linear infinite" }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen"
          style={{ animation: "orbit-ring 25s linear infinite reverse" }}
        />
        <div className="absolute top-[40%] left-[40%] w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[150px] mix-blend-screen" />

        {/* Astrolabe Circles */}
        <div className="absolute inset-0 flex items-center justify-center opacity-60">
          <div
            className="absolute w-[800px] h-[800px] rounded-full border border-gold/10 border-dashed"
            style={{ animation: "glyph-rotate 60s linear infinite" }}
          />
          <div
            className="absolute w-[1200px] h-[1200px] rounded-full border border-gold/5"
            style={{ animation: "glyph-rotate 100s linear infinite reverse" }}
          >
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-gold rounded-full shadow-[0_0_20px_gold]" />
          </div>
          <div
            className="absolute w-[1600px] h-[1600px] rounded-full border-[2px] border-gold/5 border-dotted"
            style={{ animation: "glyph-rotate 150s linear infinite" }}
          >
            <div className="absolute bottom-0 right-1/4 w-4 h-4 bg-orange-400 rounded-full shadow-[0_0_20px_orange]" />
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#03050a_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
        <div className="text-center mb-24 reveal">
          <p className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            ✦ Lộ trình giác ngộ
          </p>
          <h1
            className="text-5xl md:text-6xl font-serif text-white mb-6"
            style={{ textShadow: "0 0 40px rgba(212,175,55,0.3)" }}
          >
            Đài Thiên Văn Triết Học
          </h1>
          <p className="text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
            Mỗi module là một vì sao trên bầu trời nhận thức. Hãy chọn một trạm
            không gian để bắt đầu hành trình khai mở tư duy của bạn.
          </p>
        </div>

        <div className="relative">
          {/* Laser Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {modules.map((mod, i) => (
              <div
                key={mod.id}
                className="relative flex justify-center reveal group"
                style={{ 
                  transitionDelay: `${i * 80}ms`,
                  "--theme-color": mod.color,
                  "--theme-glow": mod.glowColor,
                  "--theme-bg": mod.bgColor
                } as React.CSSProperties}
              >
                {/* Orbital Node in the center */}
                <div className="absolute left-1/2 top-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-20 pointer-events-none">
                  {/* Outer spinning ring */}
                  <div
                    className="absolute inset-0 rounded-full border group-hover:scale-150 transition-all duration-700"
                    style={{ animation: "glyph-rotate 4s linear infinite", borderColor: "var(--theme-glow)" }}
                  />
                  {/* Inner dashed ring */}
                  <div
                    className="absolute inset-3 rounded-full border border-dashed group-hover:scale-125 transition-all duration-500"
                    style={{
                      animation: "glyph-rotate 3s linear infinite reverse",
                      borderColor: "var(--theme-glow)"
                    }}
                  />
                  {/* Core star */}
                  <div 
                    className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                    style={{ backgroundColor: "var(--theme-color)", boxShadow: "0 0 15px var(--theme-color)" }}
                  />
                </div>

                {/* Card Container (Alternating left/right) */}
                <div
                  className={`w-full md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
                >
                  <div
                    className="block portal-card rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group"
                    style={
                      { 
                        "--portal-color": mod.color,
                        borderColor: "rgba(255,255,255,0.05)",
                        boxShadow: "none" // We'll add the shadow on hover dynamically
                      } as React.CSSProperties
                    }
                  >
                    {/* Dark Base */}
                    <div className="absolute inset-0 bg-[#0a0d16]/80 backdrop-blur-xl z-0" />
                    
                    {/* Dynamic Hover Shadow via before pseudo-element hack or inline style? We'll use inline style on a wrapper or just trust the hover class */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]" style={{ boxShadow: `0 10px 40px ${mod.glowColor}` }} />

                    {/* Radar Sweep */}
                    <div
                      className="absolute top-[-100%] left-[-100%] right-[-100%] bottom-[-100%] z-10 radar-spin blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background:
                          `conic-gradient(from 0deg, transparent 0%, transparent 60%, ${mod.glowColor} 80%, var(--portal-color) 100%)`,
                      }}
                    />

                    {/* Constellation Layer (Revealed by radar) */}
                    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                      <Constellation id={mod.id} color={mod.color} glowColor={mod.glowColor} />
                    </div>

                    <Link to={mod.link} className="relative z-30 p-8 block">
                      {/* Hover magic circle inside card */}
                      <div className="absolute -right-20 -top-20 w-64 h-64 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                        <Orbit
                          size={256}
                          strokeWidth={1}
                          style={{
                            animation: "glyph-rotate 20s linear infinite",
                            color: "var(--theme-color)"
                          }}
                        />
                      </div>

                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-4xl font-serif font-bold transition-all" style={{ color: "var(--theme-color)", opacity: 0.2 }}>
                          0{i + 1}
                        </span>
                        {/* We add a secondary span on hover to make it glow with the theme color */}
                        <span className="absolute text-4xl font-serif font-bold transition-all opacity-0 group-hover:opacity-60" style={{ color: "var(--theme-color)" }}>
                          0{i + 1}
                        </span>
                        <div className="h-px flex-1 opacity-20" style={{ background: "linear-gradient(to right, var(--theme-color), transparent)" }} />
                      </div>

                      <h2 className="text-2xl font-serif text-white mb-4 transition-colors" style={{ color: "white" }} 
                          onMouseEnter={(e) => e.currentTarget.style.color = mod.color}
                          onMouseLeave={(e) => e.currentTarget.style.color = "white"}>
                        {mod.title}
                      </h2>
                      <p className="text-white/50 text-sm mb-8 leading-relaxed line-clamp-3">
                        {mod.subtitle}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {mod.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 border rounded-full text-[10px] font-bold uppercase tracking-widest"
                            style={{
                              borderColor: "var(--theme-glow)",
                              backgroundColor: "var(--theme-bg)",
                              color: "var(--theme-color)"
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--theme-color)" }}>
                        <Zap size={14} className="group-hover:animate-pulse" />
                        <span className="mt-0.5">Truy cập trạm</span>
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-2 transition-transform"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
