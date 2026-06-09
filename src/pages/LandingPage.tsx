import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { ArrowRight, ChevronDown, BookOpen, Cpu, Sparkles } from "lucide-react";

/* ══════════════════════════════════════════════
   THREE.JS COSMIC SCENE — Enhanced
══════════════════════════════════════════════ */
function CosmicCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const w = mount.clientWidth,
      h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 2000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    /* ── Circular star sprite texture ── */
    const makeStarTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d")!;
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      // Sharper core, wider glow
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.1, "rgba(255,255,255,0.9)");
      grad.addColorStop(0.4, "rgba(255,255,255,0.3)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };
    const starTex = makeStarTexture();

    /* ── Layer 1: Stars (far) ── */
    const makeStarField = (
      count: number,
      spread: number,
      goldRatio: number,
      baseSize: number,
    ) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.4 - 30; // push behind
        const gold = Math.random() < goldRatio;
        col[i * 3] = gold ? 0.9 : 0.82 + Math.random() * 0.18;
        col[i * 3 + 1] = gold ? 0.78 : 0.86 + Math.random() * 0.14;
        col[i * 3 + 2] = gold ? 0.25 : 0.93 + Math.random() * 0.07;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const mat = new THREE.PointsMaterial({
        size: baseSize * 1.5, // slightly larger
        map: starTex,
        vertexColors: true,
        transparent: true,
        opacity: 1, // Full opacity
        blending: THREE.AdditiveBlending, // Makes stars glow brilliantly when overlapping
        sizeAttenuation: true,
        depthWrite: false,
      });
      return { points: new THREE.Points(geo, mat), geo, mat };
    };

    // Increased sizes to make them pop more
    const far = makeStarField(2000, 400, 0.12, 0.3);
    const mid = makeStarField(700, 180, 0.22, 0.5);
    const near = makeStarField(150, 70, 0.5, 0.8);
    scene.add(far.points, mid.points, near.points);

    /* ── Layer 2: Shooting stars (meteors) ── */
    const meteors: {
      mesh: THREE.Mesh;
      vel: THREE.Vector3;
      life: number;
      maxLife: number;
    }[] = [];
    const meteorGeo = new THREE.BoxGeometry(4, 0.05, 0.05);
    const spawnMeteor = () => {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xf5d87a,
        transparent: true,
        opacity: 0,
      });
      const m = new THREE.Mesh(meteorGeo, mat);
      m.position.set(
        (Math.random() - 0.5) * 200 + 100,
        Math.random() * 80 + 20,
        (Math.random() - 0.5) * 60,
      );
      const angle = Math.PI * 0.75 + (Math.random() - 0.5) * 0.3;
      m.rotation.z = angle;
      const speed = 1.5 + Math.random() * 2;
      const vel = new THREE.Vector3(
        Math.cos(angle) * speed,
        Math.sin(angle) * speed,
        0,
      );
      scene.add(m);
      meteors.push({ mesh: m, vel, life: 0, maxLife: 60 + Math.random() * 40 });
    };

    /* ── Layer 3: Sacred Geometry ── */
    const sacredGroup = new THREE.Group();
    sacredGroup.position.y = -6; // Shift down to avoid navbar overlap

    const makeRing = (radius: number, opacity: number, dashes?: boolean) => {
      const pts: THREE.Vector3[] = [];
      const seg = dashes ? 64 : 128;
      for (let i = 0; i <= seg; i++) {
        const a = (i / seg) * Math.PI * 2;
        pts.push(
          new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0),
        );
      }
      const mat = new THREE.LineBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity,
      });
      return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat);
    };
    const ring1 = makeRing(35, 0.12);
    const ring2 = makeRing(24, 0.07);
    const ring3 = makeRing(48, 0.05);
    sacredGroup.add(ring1, ring2, ring3);

    // Hexagon (Star of David-ish)
    const hexPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 6; i++) {
      const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
      hexPts.push(new THREE.Vector3(Math.cos(a) * 35, Math.sin(a) * 35, 0));
    }
    const hex = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(hexPts),
      new THREE.LineBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity: 0.04,
      }),
    );
    sacredGroup.add(hex);

    // Spokes
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const spokePts = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(a) * 35, Math.sin(a) * 35, 0),
      ];
      sacredGroup.add(
        new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(spokePts),
          new THREE.LineBasicMaterial({
            color: 0xd4af37,
            transparent: true,
            opacity: 0.03,
          }),
        ),
      );
    }

    scene.add(sacredGroup);

    /* ── Nebula clouds ── */
    const nebulaGeo = new THREE.SphereGeometry(1, 8, 8);
    const nebulaMeshes: THREE.Mesh[] = [];
    const nebulaData = [
      { pos: [40, 30, -80], scale: 25, col: 0x2a1a5e },
      { pos: [-50, -20, -100], scale: 30, col: 0x1a2a5e },
      { pos: [10, -40, -60], scale: 20, col: 0x3a1030 },
    ];
    nebulaData.forEach((d) => {
      const mat = new THREE.MeshBasicMaterial({
        color: d.col,
        transparent: true,
        opacity: 0.25,
      });
      const m = new THREE.Mesh(nebulaGeo, mat);
      m.position.set(...(d.pos as [number, number, number]));
      m.scale.setScalar(d.scale);
      scene.add(m);
      nebulaMeshes.push(m);
    });

    /* ── Mouse ── */
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    /* ── Resize ── */
    const onResize = () => {
      const nw = mount.clientWidth,
        nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    let frame = 0;
    let meteorTimer = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      frame += 0.004;

      // Smooth mouse
      mouseRef.current.x +=
        (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y +=
        (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Parallax layers
      far.points.rotation.y = mouseRef.current.x * 0.02 + frame * 0.025;
      far.points.rotation.x = mouseRef.current.y * 0.015;
      mid.points.rotation.y = mouseRef.current.x * 0.05 + frame * 0.04;
      mid.points.rotation.x = mouseRef.current.y * 0.03;
      near.points.rotation.y = mouseRef.current.x * 0.1 + frame * 0.06;
      near.points.rotation.x = mouseRef.current.y * 0.06;

      // Sacred geometry
      ring1.rotation.z = frame * 0.2;
      ring2.rotation.z = -frame * 0.35;
      ring3.rotation.z = frame * 0.12;
      hex.rotation.z = -frame * 0.08;

      // Nebula pulse
      nebulaMeshes.forEach((n, i) => {
        const mat = n.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.18 + Math.sin(frame * 0.8 + i * 2) * 0.08;
      });

      // Meteors
      meteorTimer++;
      if (meteorTimer > 90 + Math.random() * 120) {
        meteorTimer = 0;
        spawnMeteor();
      }
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life++;
        m.mesh.position.add(m.vel);
        const mat = m.mesh.material as THREE.MeshBasicMaterial;
        if (m.life < 10) mat.opacity = m.life / 10;
        else if (m.life > m.maxLife - 10)
          mat.opacity = (m.maxLife - m.life) / 10;
        else mat.opacity = 0.9;
        if (m.life >= m.maxLife) {
          scene.remove(m.mesh);
          meteors.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (mount.contains(renderer.domElement))
        mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}

/* ══════════════════════════════════════════════
   SCROLL REVEAL HOOK
══════════════════════════════════════════════ */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

/* ══════════════════════════════════════════════
   ANIMATED COUNTER
══════════════════════════════════════════════ */
function Counter({
  target,
  suffix = "",
}: {
  target: number | string;
  suffix?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (typeof target === "string") return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = () => {
            start += Math.ceil(target / 50);
            if (start >= target) {
              setVal(target);
              return;
            }
            setVal(start);
            requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {typeof target === "string" ? target : val}
      {suffix}
    </span>
  );
}

/* ══════════════════════════════════════════════
   TICKER
══════════════════════════════════════════════ */
const tickerItems = [
  "⊙ Giải mã thực tại",
  "✦ Tư duy biện chứng",
  "☯ Hòa hợp vũ trụ",
  "∞ Nhận thức không giới hạn",
  "⊕ Phát triển nội tâm",
  "◈ Triết học Mác-Lênin",
  "✧ Minh triết phương Đông",
  "⚛ Duy vật biện chứng",
  "⊙ Giải mã thực tại",
  "✦ Tư duy biện chứng",
  "☯ Hòa hợp vũ trụ",
  "∞ Nhận thức không giới hạn",
  "⊕ Phát triển nội tâm",
  "◈ Triết học Mác-Lênin",
  "✧ Minh triết phương Đông",
  "⚛ Duy vật biện chứng",
];

function Ticker() {
  return (
    <div
      className="ticker-wrap w-full overflow-hidden py-3 border-y"
      style={{
        borderColor: "rgba(212,175,55,0.12)",
        background: "rgba(212,175,55,0.02)",
        marginTop: "100px",
      }}
    >
      <div className="ticker-content">
        {tickerItems.map((item, i) => (
          <span
            key={i}
            className="text-[11px] font-bold uppercase tracking-[0.2em] mx-8 flex-shrink-0"
            style={{
              color: i % 4 === 0 ? "#d4af37" : "rgba(255,255,255,0.25)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const philosophers = [
  {
    id: "socrates",
    letter: "Σ",
    name: "Socrates",
    role: "Phương pháp Biện chứng",
    life: "470 – 399 TCN",
    accent: "#c9a84c",
    quote: '"Cuộc đời không phản tư là cuộc đời không đáng sống."',
    desc: "Phương pháp đặt câu hỏi liên tiếp để khám phá sự thật.",
    backQuote:
      '"Tôi chỉ biết rằng tôi không biết gì." — Điều kiện đầu tiên để học hỏi thật sự.',
    glyph: "⊙",
    bg: "linear-gradient(135deg, #0d1117 0%, #1a1400 100%)",
    backBg: "linear-gradient(135deg, #1a1400 0%, #3a2800 100%)",
  },
  {
    id: "marcus",
    letter: "Μ",
    name: "Marcus Aurelius",
    role: "Chủ nghĩa Khắc kỷ",
    life: "121 – 180 CN",
    accent: "#7eb8d4",
    quote: '"Tâm trí bạn sẽ mang màu sắc của những ý nghĩ thường trực."',
    desc: "Rèn luyện kỷ luật nội tâm, bình thản trước mọi biến cố.",
    backQuote:
      '"Trở ngại là con đường." — Nghịch cảnh không chắn đường, nghịch cảnh IS con đường.',
    glyph: "⊕",
    bg: "linear-gradient(135deg, #0d1117 0%, #001120 100%)",
    backBg: "linear-gradient(135deg, #001120 0%, #002040 100%)",
  },
  {
    id: "marx",
    letter: "Κ",
    name: "Karl Marx",
    role: "Duy vật Biện chứng",
    life: "1818 – 1883",
    accent: "#e05252",
    quote:
      '"Các triết gia mới chỉ giải thích thế giới, vấn đề là cải tạo thế giới."',
    desc: "Vật chất quyết định ý thức. Lịch sử có quy luật khách quan.",
    backQuote: '"Từ mỗi người theo năng lực, cho mỗi người theo nhu cầu."',
    glyph: "⊗",
    bg: "linear-gradient(135deg, #0d1117 0%, #1a0000 100%)",
    backBg: "linear-gradient(135deg, #1a0000 0%, #3a0808 100%)",
  },
  {
    id: "laozi",
    letter: "Λ",
    name: "Lão Tử",
    role: "Đạo học phương Đông",
    life: "TK 6 – 5 TCN",
    accent: "#6fcf97",
    quote: '"Hành trình vạn dặm bắt đầu từ một bước chân."',
    desc: "Vô vi — không cưỡng cầu, thuận theo quy luật tự nhiên.",
    backQuote:
      '"Biết người là trí, biết mình là sáng." — Bước đầu của giác ngộ.',
    glyph: "☯",
    bg: "linear-gradient(135deg, #0d1117 0%, #001a08 100%)",
    backBg: "linear-gradient(135deg, #001a08 0%, #003818 100%)",
  },
];

const schools = [
  {
    id: "stoicism",
    glyph: "⚖",
    title: "Chủ nghĩa Khắc kỷ",
    origin: "Hy Lạp, TK 3 TCN",
    desc: "Quản trị cảm xúc bằng lý trí. Phân biệt rõ những thứ trong và ngoài tầm kiểm soát.",
    accent: "#607D8B",
  },
  {
    id: "materialism",
    glyph: "⚛",
    title: "Duy vật Biện chứng",
    origin: "Đức, TK 19",
    desc: "Vật chất là nền tảng. Mâu thuẫn là động lực phát triển của mọi thứ trong vũ trụ.",
    accent: "#E53935",
  },
  {
    id: "existentialism",
    glyph: "∃",
    title: "Chủ nghĩa Hiện sinh",
    origin: "Pháp, TK 20",
    desc: "Hiện sinh đi trước bản chất. Con người hoàn toàn tự do — và hoàn toàn chịu trách nhiệm.",
    accent: "#7B1FA2",
  },
  {
    id: "taoism",
    glyph: "☯",
    title: "Minh triết phương Đông",
    origin: "Trung Hoa, TK 6 TCN",
    desc: "Hòa hợp tiểu vũ trụ con người với đại vũ trụ tự nhiên. Vô vi — thuận theo Đạo.",
    accent: "#2E7D32",
  },
];

const oratorQuotes = [
  {
    text: "Cuộc đời không phản tư là cuộc đời không đáng sống.",
    author: "Socrates",
    glyph: "Σ",
  },
  {
    text: "Tâm trí bạn sẽ mang màu sắc của những ý nghĩ thường trực.",
    author: "Marcus Aurelius",
    glyph: "Μ",
  },
  {
    text: "Biết người là trí, biết mình là sáng.",
    author: "Lão Tử",
    glyph: "Λ",
  },
  {
    text: "Các triết gia mới chỉ giải thích thế giới, vấn đề là cải tạo thế giới.",
    author: "Karl Marx",
    glyph: "Κ",
  },
  { text: "Trở ngại là con đường.", author: "Marcus Aurelius", glyph: "Μ" },
  {
    text: "Con người bị kết án phải tự do.",
    author: "Jean-Paul Sartre",
    glyph: "∃",
  },
  {
    text: "Người ta không thể tắm hai lần trên cùng một dòng sông.",
    author: "Heraclitus",
    glyph: "⌿",
  },
  {
    text: "Thứ gì mềm mại và uốn lượn thì sẽ tồn tại.",
    author: "Lão Tử",
    glyph: "Λ",
  },
];

const modules = [
  {
    num: "01",
    title: "Nhập môn Triết học",
    sub: "Nguồn gốc & Vấn đề cơ bản",
    path: "/modules/intro",
    icon: "◈",
    color: "#c9a84c",
  },
  {
    num: "02",
    title: "CNDV Biện chứng",
    sub: "Vật chất · Ý thức · Vận động",
    path: "/modules/cndv",
    icon: "⊚",
    color: "#7eb8d4",
  },
  {
    num: "03",
    title: "Phép Biện chứng",
    sub: "3 Quy luật vận động",
    path: "/modules/pbc",
    icon: "⟳",
    color: "#e05252",
  },
  {
    num: "04",
    title: "Lý luận Nhận thức",
    sub: "Con đường đến chân lý",
    path: "/modules/nhanthuc",
    icon: "◉",
    color: "#6fcf97",
  },
  {
    num: "05",
    title: "DVLS — Phần 1",
    sub: "CSHT · KTTT · Hình thái",
    path: "/modules/cndvls-1",
    icon: "⬡",
    color: "#bb86fc",
  },
  {
    num: "06",
    title: "DVLS — Phần 2",
    sub: "Tiến trình lịch sử",
    path: "/modules/cndvls-2",
    icon: "∞",
    color: "#d4af37",
  },
];

/* ── Flip Card ── */
function PhilosopherCard({
  p,
  delay,
}: {
  p: (typeof philosophers)[0];
  delay: number;
}) {
  return (
    <div
      className="flip-card h-80 reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flip-card-inner h-full">
        {/* Front */}
        <div
          className="flip-card-front flex flex-col p-7"
          style={{ background: p.bg, border: `1px solid ${p.accent}30` }}
        >
          {/* Top accent line */}
          <div
            className="h-[1px] w-full mb-6"
            style={{
              background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
            }}
          />
          <div className="flex items-center gap-4 mb-5">
            <div className="relative w-14 h-14 flex-shrink-0">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold relative z-10"
                style={{
                  background: `${p.accent}15`,
                  border: `1px solid ${p.accent}50`,
                  color: p.accent,
                  fontFamily: "Cinzel, serif",
                }}
              >
                {p.letter}
              </div>
              {/* Pulsing glow behind avatar */}
              <div
                className="absolute inset-0 rounded-full blur-md opacity-40"
                style={{
                  background: p.accent,
                  animation: "nebula-pulse 3s ease-in-out infinite",
                }}
              />
            </div>
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                style={{ color: p.accent }}
              >
                {p.role}
              </p>
              <h3 className="text-white font-serif text-lg leading-tight">
                {p.name}
              </h3>
              <p className="text-white/25 text-xs mt-0.5">{p.life}</p>
            </div>
          </div>
          <p className="text-white/60 font-serif italic text-sm leading-relaxed flex-1">
            {p.quote}
          </p>
          <div
            className="flex items-center gap-2 mt-4 text-[10px] font-bold uppercase tracking-widest"
            style={{ color: `${p.accent}80` }}
          >
            <span className="w-4 h-px" style={{ background: p.accent }} />
            Lật để khám phá
          </div>
        </div>
        {/* Back (Cosmic Theme) */}
        <div
          className="flip-card-back flex flex-col justify-between p-7 overflow-hidden"
          style={{ border: `1px solid ${p.accent}50` }}
        >
          {/* Deep space background */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, #02040a 0%, ${p.bg} 100%)`,
            }}
          />
          {/* Starry overlay */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-screen"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='white' opacity='0.8'/%3E%3Ccircle cx='40' cy='50' r='0.5' fill='white' opacity='0.5'/%3E%3Ccircle cx='80' cy='30' r='1.5' fill='white' opacity='0.3'/%3E%3Ccircle cx='60' cy='80' r='1' fill='white' opacity='0.6'/%3E%3C/svg%3E\")",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Nebula flare */}
          <div
            className="absolute -top-10 -right-10 w-32 h-32 blur-2xl rounded-full mix-blend-screen opacity-60"
            style={{ background: p.accent, animation: "pulse 4s infinite" }}
          />

          <div
            className="text-6xl text-center opacity-15 font-serif relative z-10"
            style={{ color: p.accent, textShadow: `0 0 20px ${p.accent}` }}
          >
            {p.glyph}
          </div>
          <div>
            <p className="text-white font-serif italic text-base leading-relaxed mb-4">
              {p.backQuote}
            </p>
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: p.accent }}
            >
              {p.name}
            </p>
          </div>
          <Link
            to={`/philosopher/${p.id}`}
            className="relative z-10 inline-flex items-center justify-center gap-2 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(0,0,0,0.4)",
              border: `1px solid ${p.accent}`,
              color: p.accent,
              boxShadow: `0 0 15px ${p.accent}30`,
            }}
          >
            Truy cập thư viện <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── School Card ── */
function SchoolCard({ s, i }: { s: (typeof schools)[0]; i: number }) {
  const [hov, setHov] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect)
      setPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
  };

  return (
    <Link
      ref={ref}
      to={`/school/${s.id}`}
      className="block rounded-2xl border relative overflow-hidden reveal group transition-all duration-500"
      style={{
        transitionDelay: `${i * 80}ms`,
        background: hov ? `${s.accent}10` : "#0a0c1e",
        borderColor: hov ? `${s.accent}60` : "rgba(212,175,55,0.08)",
        transform: hov ? "translateY(-8px)" : "none",
        boxShadow: hov ? `0 20px 60px ${s.accent}20` : "none",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onMouseMove={onMove}
    >
      {/* Mouse-follow radial glow */}
      {hov && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${s.accent}25 0%, transparent 65%)`,
          }}
        />
      )}
      <div className="p-7 relative z-10">
        <div
          className="text-3xl mb-4 transition-all duration-300 font-serif"
          style={{
            color: hov ? s.accent : `${s.accent}50`,
            transform: hov ? "scale(1.1)" : "scale(1)",
          }}
        >
          {s.glyph}
        </div>
        <p className="text-[10px] text-white/25 font-bold uppercase tracking-widest mb-2">
          {s.origin}
        </p>
        <h3 className="text-white font-serif text-lg mb-3 transition-colors duration-300 group-hover:text-gold">
          {s.title}
        </h3>
        <p className="text-white/40 text-xs leading-relaxed">{s.desc}</p>
        <div
          className={`mt-5 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all duration-300 ${hov ? "opacity-100" : "opacity-0"}`}
          style={{ color: s.accent }}
        >
          Khám phá <ArrowRight size={10} />
        </div>
      </div>
    </Link>
  );
}

/* ── Oracle ── */
function OracleSection() {
  const [idx, setIdx] = useState(0);
  const [key, setKey] = useState(0);
  const [busy, setBusy] = useState(false);

  const next = useCallback(() => {
    if (busy) return;
    setBusy(true);
    setTimeout(() => {
      let n: number;
      do {
        n = Math.floor(Math.random() * oratorQuotes.length);
      } while (n === idx);
      setIdx(n);
      setKey((k) => k + 1);
      setBusy(false);
    }, 350);
  }, [idx, busy]);

  const q = oratorQuotes[idx];

  return (
    <div className="reveal max-w-3xl mx-auto relative">
      {/* Orbiting rings */}
      <div className="absolute -inset-12 rounded-full border border-gold/5 pointer-events-none glyph-spin-slow" />
      <div
        className="absolute -inset-20 rounded-full border border-gold/3 pointer-events-none glyph-spin-reverse"
        style={{ animationDuration: "50s" }}
      />

      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: "rgba(6,8,20,0.95)",
          border: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div
            className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"
            style={{ animation: "scan-line 6s linear infinite" }}
          />
        </div>
        {/* Corner decorations */}
        {[
          ["top-3 left-3", "border-t border-l"],
          ["top-3 right-3", "border-t border-r"],
          ["bottom-3 left-3", "border-b border-l"],
          ["bottom-3 right-3", "border-b border-r"],
        ].map(([pos, border]) => (
          <div
            key={pos}
            className={`absolute ${pos} w-6 h-6 ${border}`}
            style={{ borderColor: "rgba(212,175,55,0.3)" }}
          />
        ))}

        <div className="p-10 text-center relative z-10">
          <p className="text-gold/40 text-[10px] font-bold uppercase tracking-[0.35em] mb-8">
            ☽ Oracle Triết Học ☾
          </p>

          <div key={key} className="oracle-text-reveal">
            <div
              className="text-4xl font-serif mb-4 opacity-15"
              style={{ color: "#d4af37", fontFamily: "Cinzel, serif" }}
            >
              {q.glyph}
            </div>
            <p className="text-white font-serif text-xl md:text-2xl italic leading-relaxed mb-6">
              "{q.text}"
            </p>
            <p className="text-gold text-sm font-bold uppercase tracking-widest">
              — {q.author}
            </p>
          </div>

          <button
            onClick={next}
            className="pulse-gold mt-10 inline-flex items-center gap-3 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              border: "1px solid rgba(212,175,55,0.4)",
              color: "#d4af37",
              background: busy ? "rgba(212,175,55,0.05)" : "transparent",
            }}
          >
            <Sparkles size={13} />
            {busy ? "Đang kết nối Tri Thức Vũ Trụ..." : ""}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════ */
export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div
      className="relative text-white overflow-x-hidden"
      style={{ cursor: "none" }}
    >
      <div className="fixed inset-0 z-[-1]" style={{ background: "#060912" }} />

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <CosmicCanvas />
        </div>

        {/* Gradient fades */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.04) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #060912)",
          }}
        />

        {/* Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto pt-28">
          {/* Badge */}
          <div
            className="stagger-1 inline-flex items-center gap-3 px-5 py-2 rounded-full mb-10"
            style={{
              border: "1px solid rgba(212,175,55,0.25)",
              background: "rgba(212,175,55,0.05)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-gold"
              style={{ animation: "nebula-pulse 2s infinite" }}
            />
            <span className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase">
              Học viện Triết học
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
          </div>

          {/* Main title */}
          <h1 className="font-serif leading-[1.05] mb-6 stagger-2">
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white/90 mb-2">
              Giải Mã
            </span>
            <span
              className="block text-5xl md:text-8xl lg:text-9xl gold-text glitch"
              data-text="Cuộc Sống"
            >
              Cuộc Sống
            </span>
            <span
              className="block text-2xl md:text-3xl lg:text-4xl text-white/40 mt-4 tracking-[0.1em]"
              style={{ fontFamily: "Cinzel, serif", letterSpacing: "0.12em" }}
            >
              BẰNG TRIẾT HỌC BIỆN CHỨNG
            </span>
          </h1>

          {/* Sub */}
          <p className="stagger-3 text-white/45 max-w-xl mx-auto leading-relaxed mb-12 text-base">
            6 module chuyên sâu — từ vũ trụ quan Marx đến Đạo học phương Đông.
            <br />
            Học triết học không phải để thuộc lòng, mà để{" "}
            <em className="text-gold/70">suy nghĩ khác đi.</em>
          </p>

          {/* CTAs */}
          <div className="stagger-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/modules"
              className="magnetic-btn group relative inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm font-bold uppercase tracking-widest overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #d4af37, #f5d87a, #b8962c)",
                color: "#060912",
                boxShadow: "0 8px 32px rgba(212,175,55,0.35)",
              }}
            >
              {/* Shine sweep */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <BookOpen size={16} className="relative z-10" />
              <span className="relative z-10">Khám phá 6 Module</span>
              <ArrowRight
                size={15}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/ai"
              className="magnetic-btn inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(212,175,55,0.5)";
                (e.currentTarget as HTMLElement).style.color = "#d4af37";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.65)";
              }}
            >
              <Cpu size={16} />
              Hỏi Đáp AI Triết Học
            </Link>
          </div>

          {/* Stats */}
          <div className="stagger-5 flex items-center justify-center gap-16 mt-16">
            {[
              { val: 6, label: "Modules", suffix: "" },
              { val: 4, label: "Triết gia", suffix: "+" },
              { val: "∞", label: "Câu hỏi", suffix: "" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span
                  className="font-serif text-4xl font-bold count-up"
                  style={{
                    background: "linear-gradient(135deg, #d4af37, #f5d87a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {typeof s.val === "number" ? (
                    <Counter target={s.val} suffix={s.suffix} />
                  ) : (
                    s.val
                  )}
                </span>
                <span className="text-white/25 text-[10px] font-bold uppercase tracking-widest">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-opacity duration-700 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.3em]">
            Khám phá thêm
          </p>
          <ChevronDown size={18} className="text-gold float-anim" />
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* ══ PHILOSOPHERS ══ */}
      <section className="px-6 py-28 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-gold text-[10px] font-bold uppercase tracking-[0.35em] mb-4">
            ✦ Trụ cột tư tưởng
          </p>
          <h2
            className="reveal font-serif text-4xl md:text-5xl text-white mb-4"
            style={{ transitionDelay: "100ms" }}
          >
            Những Bậc Tiền Nhân
          </h2>
          <p
            className="reveal text-white/35 max-w-md mx-auto text-sm"
            style={{ transitionDelay: "200ms" }}
          >
            Di chuột qua thẻ để lật và khám phá tư tưởng cốt lõi của mỗi triết
            gia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {philosophers.map((p, i) => (
            <PhilosopherCard key={p.id} p={p} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* ══ MODULE PATH ══ */}
      <section
        className="px-6 py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #060912 0%, #0a0f20 50%, #060912 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="reveal text-gold text-[10px] font-bold uppercase tracking-[0.35em] mb-4">
              ✦ Lộ trình học
            </p>
            <h2
              className="reveal font-serif text-4xl md:text-5xl text-white"
              style={{ transitionDelay: "100ms" }}
            >
              6 Cột Mốc Triết Học
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((m, i) => (
              <Link
                key={i}
                to={m.path}
                className="reveal portal-card p-6 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group"
                style={
                  {
                    transitionDelay: `${i * 80}ms`,
                    background: "rgba(8, 10, 20, 0.6)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    "--portal-color": m.color,
                  } as React.CSSProperties
                }
              >
                {/* Spinning portal border glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    boxShadow: `inset 0 0 20px ${m.color}30, 0 0 20px ${m.color}20`,
                  }}
                />

                {/* Background wash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 100% 100%, ${m.color}15 0%, transparent 70%)`,
                  }}
                />

                <div className="flex items-start gap-4 relative z-10">
                  <div
                    className="text-3xl font-serif flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110"
                    style={{ color: `${m.color}60` }}
                  >
                    {m.icon}
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ color: `${m.color}70` }}
                    >
                      Module {m.num}
                    </p>
                    <h3 className="text-white font-serif text-base mb-1 transition-colors duration-300 group-hover:text-gold">
                      {m.title}
                    </h3>
                    <p className="text-white/25 text-xs">{m.sub}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="flex-shrink-0 mt-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                    style={{ color: m.color }}
                  />
                </div>
              </Link>
            ))}
          </div>

          <div
            className="text-center mt-12 reveal"
            style={{ transitionDelay: "500ms" }}
          >
            <Link
              to="/modules"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                borderColor: "rgba(212,175,55,0.3)",
                color: "#d4af37",
                boxShadow: "hover:0 8px 24px rgba(212,175,55,0.2)",
              }}
            >
              Vào Hub Học tập completo <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SCHOOLS ══ */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-gold text-[10px] font-bold uppercase tracking-[0.35em] mb-4">
            ✦ Hệ tư tưởng
          </p>
          <h2
            className="reveal font-serif text-4xl md:text-5xl text-white"
            style={{ transitionDelay: "100ms" }}
          >
            Các Trường Phái Học Thuyết
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {schools.map((s, i) => (
            <SchoolCard key={s.id} s={s} i={i} />
          ))}
        </div>
      </section>

      {/* ══ ORACLE ══ */}
      <section
        className="px-6 py-28 relative overflow-hidden"
        style={{ background: "#07090f" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 60%)",
          }}
        />
        {/* Nebula blobs */}
        <div
          className="nebula-glow w-96 h-96 top-0 left-1/4"
          style={{ background: "rgba(100,60,200,0.12)" }}
        />
        <div
          className="nebula-glow w-64 h-64 bottom-0 right-1/4"
          style={{ background: "rgba(212,100,50,0.08)", animationDelay: "4s" }}
        />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="reveal text-gold text-[10px] font-bold uppercase tracking-[0.35em] mb-4">
              ✦ Tri thức
            </p>
            <h2
              className="reveal font-serif text-4xl md:text-5xl text-white"
              style={{ transitionDelay: "100ms" }}
            >
              Minh Ngôn Triết Học
            </h2>
            <p
              className="reveal text-white/30 text-sm mt-3"
              style={{ transitionDelay: "200ms" }}
            >
              Bấm để nhận lời khuyên từ các bậc tiền nhân.
            </p>
          </div>
          <OracleSection />
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section
        className="px-6 py-32 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #060912 0%, #0c1030 50%, #060912 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          {[600, 440, 300, 180].map((r, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold"
              style={{
                width: r,
                height: r,
                borderColor: `rgba(212,175,55,${0.02 + i * 0.01})`,
                animation: `orbit-ring ${25 + i * 10}s linear ${i % 2 === 0 ? "" : "reverse"} infinite`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div
            className="reveal text-5xl mb-8 float-anim"
            style={{ filter: "drop-shadow(0 0 20px rgba(212,175,55,0.5))" }}
          >
            ✦
          </div>
          <h2
            className="reveal font-serif text-4xl md:text-6xl text-white mb-6 leading-tight"
            style={{ transitionDelay: "100ms" }}
          >
            Bắt đầu hành trình
            <br />
            <span className="gold-text">giác ngộ triết học</span>
          </h2>
          <p
            className="reveal text-white/35 mb-12 leading-relaxed text-base"
            style={{ transitionDelay: "200ms" }}
          >
            Mỗi bài học là một bước tiến trong nhận thức.
            <br />
            Mỗi câu hỏi là một ánh sáng mới.
          </p>
          <div
            className="reveal flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ transitionDelay: "300ms" }}
          >
            <Link
              to="/modules"
              className="magnetic-btn group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest overflow-hidden hover:scale-105 active:scale-95 transition-transform"
              style={{
                background: "linear-gradient(135deg, #d4af37, #f5d87a)",
                color: "#060912",
                boxShadow: "0 8px 40px rgba(212,175,55,0.4)",
              }}
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <BookOpen size={16} className="relative z-10" />
              <span className="relative z-10">Bắt đầu ngay</span>
            </Link>
            <Link
              to="/ai"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105"
              style={{ borderColor: "rgba(212,175,55,0.3)", color: "#d4af37" }}
            >
              <Cpu size={16} />
              Hỏi AI Triết học
            </Link>
          </div>
        </div>
      </section>

      {/* AI FAB */}
      <Link
        to="/ai"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center pulse-gold hover:scale-110 active:scale-95 transition-transform"
        style={{
          background: "linear-gradient(135deg, #d4af37, #f5d87a)",
          color: "#060912",
          boxShadow: "0 8px 32px rgba(212,175,55,0.4)",
        }}
      >
        <Cpu size={20} />
      </Link>
    </div>
  );
}
