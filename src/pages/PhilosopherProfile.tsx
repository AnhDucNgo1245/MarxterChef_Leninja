import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Quote, Brain, Sparkles, MoveRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type ThemeConfig = {
  bgGradient: string;
  cardBg: string;
  glowColor: string;
  textColor: string;
  effectType: "socrates" | "marcus" | "marx" | "laozi";
  cardPattern: string;
};

type PhilosopherData = {
  name: string;
  role: string;
  life: string;
  letter: string;
  theme: ThemeConfig;
  bio: string[];
  coreIdeas: { title: string; desc: string }[];
  quotes: string[];
};

const philosopherData: Record<string, PhilosopherData> = {
  socrates: {
    name: "Socrates",
    role: "Khởi nguồn Triết học Phương Tây",
    life: "470 – 399 TCN",
    letter: "S",
    theme: {
      bgGradient: "from-[#050604] via-[#12140d] to-[#050604]",
      cardBg: "bg-[#15170f]/40",
      glowColor: "rgba(255,215,100,0.4)",
      textColor: "text-[#ffd764]",
      effectType: "socrates",
      cardPattern:
        "radial-gradient(circle at 100% 100%, rgba(255,215,100,0.05) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02) 75%, transparent 75%, transparent)",
    },
    bio: [
      "Socrates là triết gia người Athen cổ đại, được xem là một trong những người sáng lập triết học phương Tây. Ông không để lại tác phẩm nào, toàn bộ tư tưởng của ông được lưu truyền qua các đối thoại của Plato.",
      'Bị xét xử và kết án tử hình với tội danh "làm hỏng tuổi trẻ Athens" và "không tin vào các vị thần của nhà nước", Socrates đã bình thản uống thuốc độc, lựa chọn cái chết thay vì từ bỏ triết lý sống của mình.',
    ],
    coreIdeas: [
      {
        title: "Phương pháp Socratic",
        desc: "Một hình thức đối thoại biện chứng, dùng việc đặt câu hỏi liên tiếp để buộc người đối diện phải tự suy xét, vạch trần mâu thuẫn nội tại và tự mình khám phá ra chân lý.",
      },
      {
        title: "Biết mình không biết gì",
        desc: "Sự thông thái thực sự không nằm ở việc sở hữu mọi câu trả lời, mà ở việc nhận thức được giới hạn sâu sắc của sự hiểu biết cá nhân. Sự khiêm tốn nhận thức là nền tảng của mọi tri thức.",
      },
      {
        title: "Đức hạnh là tri thức",
        desc: "Con người làm điều xấu xa không phải do bản chất ác độc, mà do sự ngu muội và thiếu hiểu biết. Bất kỳ ai thực sự thấu hiểu cái Thiện, tự khắc sẽ hành động hướng Thiện.",
      },
    ],
    quotes: [
      "Cuộc đời không phản tư là cuộc đời không đáng sống.",
      "Tôi không thể dạy ai bất cứ điều gì. Tôi chỉ có thể khiến họ suy nghĩ.",
      "Sự thông thái thực sự duy nhất là biết rằng bạn không biết gì cả.",
      "Hãy tự biết mình.",
    ],
  },
  marcus: {
    name: "Marcus Aurelius",
    role: "Hoàng đế Triết gia Khắc kỷ",
    life: "121 – 180 CN",
    letter: "M",
    theme: {
      bgGradient: "from-[#020813] via-[#05101a] to-[#01040a]",
      cardBg: "bg-[#08152a]/30",
      glowColor: "rgba(60,130,255,0.4)",
      textColor: "text-[#66aaff]",
      effectType: "marcus",
      cardPattern:
        'radial-gradient(circle at 0% 0%, rgba(60,130,255,0.08) 0%, transparent 60%), url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.04%22/%3E%3C/svg%3E")',
    },
    bio: [
      'Marcus Aurelius là Hoàng đế La Mã trị vì từ năm 161 đến 180 CN. Ông được mệnh danh là "Hoàng đế Triết gia", biểu tượng tối cao của hình mẫu kết hợp giữa quyền lực tuyệt đối của một đế chế và đạo đức cá nhân thanh cao.',
      'Tác phẩm "Suy tưởng" (Meditations) vốn chỉ là những trang nhật ký riêng tư được viết giữa các chiến dịch quân sự đẫm máu trong những đêm đông lạnh giá ở Germania. Không hề có ý định xuất bản, cuốn sách ghi lại những cuộc đấu tranh nội tâm để giữ vững phẩm hạnh Khắc kỷ giữa tâm bão của quyền lực, chiến tranh và dịch bệnh.',
    ],
    coreIdeas: [
      {
        title: "Dichotomy of Control (Phân đôi Kiểm soát)",
        desc: "Tâm trí con người chỉ có thể kiểm soát những gì thuộc về nội tâm: phán đoán, ham muốn, ý chí. Mọi thứ bên ngoài (danh tiếng, tiền tài, cái chết) đều nằm ngoài tầm với và phải được tiếp nhận bằng sự điềm tĩnh tuyệt đối.",
      },
      {
        title: "Memento Mori (Hãy nhớ rằng bạn sẽ chết)",
        desc: "Ý thức sâu sắc về cái chết không phải là sự yếm thế, mà là lăng kính để nhìn rõ giá trị thực sự của cuộc sống. Mọi vinh quang thế tục rồi cũng thành tro bụi, chỉ có đức hạnh là trường tồn.",
      },
      {
        title: "Amor Fati (Tình yêu Định mệnh)",
        desc: 'Đừng chỉ chịu đựng nghịch cảnh, hãy ôm lấy nó bằng ngọn lửa nhiệt huyết. Khó khăn ném vào một ngọn lửa lớn sẽ chỉ làm ngọn lửa ấy bùng cháy dữ dội hơn. "Trở ngại chính là con đường."',
      },
    ],
    quotes: [
      "Tâm trí bạn sẽ mang màu sắc của những ý nghĩ thường trực.",
      "Bạn có sức mạnh đối với tâm trí mình, không phải đối với các sự kiện bên ngoài. Nhận ra điều này, bạn sẽ tìm thấy sức mạnh.",
      "Sự báo thù tốt nhất là không trở thành kẻ đã làm tổn thương mình.",
      "Nó không xảy ra với tôi, mà nó xảy ra cho tôi.",
    ],
  },
  marx: {
    name: "Karl Marx",
    role: "Duy Vật Biện Chứng & Đấu Tranh Giai Cấp",
    life: "1818 – 1883",
    letter: "K",
    theme: {
      bgGradient: "from-[#0a0a0a] via-[#1a1414] to-[#080808]",
      cardBg: "bg-[#221818]/40",
      glowColor: "rgba(255,20,20,0.5)",
      textColor: "text-[#ff3333]",
      effectType: "marx",
      cardPattern:
        "repeating-linear-gradient(45deg, rgba(255,0,0,0.02) 0px, rgba(255,0,0,0.02) 2px, transparent 2px, transparent 8px), linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%)",
    },
    bio: [
      'Karl Marx là triết gia, nhà kinh tế học chính trị, sử học và lý luận cách mạng vĩ đại người Đức. Cùng với Friedrich Engels, ông đã soạn thảo "Tuyên ngôn của Đảng Cộng sản" (1848) và công trình đồ sộ "Tư bản luận" (Das Kapital), giải phẫu toàn diện cơ chế bóc lột của chủ nghĩa tư bản.',
      "Bất chấp việc sống phần lớn cuộc đời trong cảnh lưu vong và nghèo đói tận cùng tại London, ngòi bút của Marx đã châm ngòi cho một sự thay đổi kiến trúc thượng tầng vĩnh viễn, truyền cảm hứng cho hàng loạt cuộc cách mạng xã hội định hình lại toàn bộ thế kỷ 20.",
    ],
    coreIdeas: [
      {
        title: "Duy vật Biện chứng & Duy vật Lịch sử",
        desc: "Thực tại không được định hình bởi ý niệm hay thần thánh, mà bởi điều kiện vật chất. Lực lượng sản xuất phát triển mâu thuẫn với quan hệ sản xuất lỗi thời, tạo ra bước ngoặt tất yếu của lịch sử thông qua đấu tranh.",
      },
      {
        title: "Lịch sử là Đấu tranh Giai cấp",
        desc: "Lịch sử của mọi xã hội từ trước đến nay thực chất chỉ là lịch sử của các cuộc đấu tranh giai cấp. Chế độ tư bản đã đơn giản hóa mâu thuẫn này thành hai cực đối lập: Giai cấp Tư sản (bóc lột) và Giai cấp Vô sản (bị bóc lột).",
      },
      {
        title: "Sự tha hóa của Lao động (Alienation)",
        desc: "Trong xã hội tư bản, người công nhân bị tha hóa khỏi chính sản phẩm họ làm ra, khỏi quá trình sản xuất, khỏi bản ngã của chính mình và khỏi đồng loại. Con người bị biến thành một bánh răng vô tri trong cỗ máy tích lũy tư bản.",
      },
    ],
    quotes: [
      "Các triết gia mới chỉ giải thích thế giới bằng nhiều cách khác nhau, vấn đề là cải tạo thế giới.",
      "Lịch sử của tất cả mọi xã hội từ trước đến nay đều là lịch sử đấu tranh giai cấp.",
      "Giai cấp vô sản chẳng có gì để mất ngoài những xiềng xích của họ. Họ có một thế giới để giành lấy.",
      "Sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người.",
    ],
  },
  laozi: {
    name: "Lão Tử",
    role: "Khai Sơn Tổ Sư Đạo Giáo",
    life: "TK 6 – 5 TCN",
    letter: "L",
    theme: {
      bgGradient: "from-[#030a08] via-[#091a14] to-[#020504]",
      cardBg: "bg-[#0b241b]/30",
      glowColor: "rgba(40,255,160,0.3)",
      textColor: "text-[#66ffbb]",
      effectType: "laozi",
      cardPattern:
        'radial-gradient(circle at 50% 50%, rgba(40,255,160,0.03) 0%, transparent 80%), url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.05%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.08%22/%3E%3C/svg%3E")',
    },
    bio: [
      'Lão Tử (nghĩa đen là "Lão Tôn" hoặc "Đứa trẻ già") là nhân vật truyền thuyết vĩ đại của Trung Hoa cổ đại. Ông được tôn vinh là người sáng lập triết học Đạo gia, một hệ tư tưởng đề cao sự hòa hợp tuyệt đối với trật tự tự nhiên của vũ trụ.',
      'Tương truyền, trước khi ẩn cư về phương Tây, ông đã để lại 5000 chữ vô giá: "Đạo Đức Kinh". Dù sự tồn tại mang tính lịch sử của ông còn bao phủ trong màn sương mù huyền thoại, Đạo Đức Kinh vẫn đứng vững như một ngọn hải đăng của trí tuệ Đông phương suốt hai thiên niên kỷ qua.',
    ],
    coreIdeas: [
      {
        title: "Đạo (Tao) - Cội nguồn vũ trụ",
        desc: '"Đạo" là nguyên lý tối cao, vô hình vô tướng, là người mẹ sinh ra vạn vật. Bất kỳ ngôn từ nào cố gắng định nghĩa Đạo đều lập tức khiến nó mất đi bản chất chân thật. "Đạo khả đạo, phi thường đạo."',
      },
      {
        title: "Vô Vi (Wu Wei) - Hành động không gượng ép",
        desc: "Vô Vi không phải là lười biếng phó mặc, mà là nghệ thuật hành động thuận theo dòng chảy tự nhiên. Không dùng sức mạnh khiên cưỡng, tựa như nước mềm mỏng chảy qua khe đá, cuối cùng nước lại có thể xuyên thủng cả núi non.",
      },
      {
        title: "Biện chứng Âm Dương",
        desc: "Sự vật luôn hàm chứa mặt đối lập của nó. Dài và ngắn hình thành lẫn nhau, cao và thấp nương tựa nhau, họa và phúc đan xen nhau. Nhận thức được vòng tuần hoàn này giúp con người đạt đến trạng thái tĩnh tại tuyệt đối.",
      },
    ],
    quotes: [
      "Hành trình vạn dặm bắt đầu từ một bước chân nhỏ bé.",
      "Biết người là trí, biết mình là sáng. Thắng người là có sức, tự thắng mình mới là người mạnh thật sự.",
      "Đạo thường không làm gì, nhưng không gì là không làm.",
      "Mềm mỏng nhất trong thiên hạ lại có thể vượt qua sự cứng rắn nhất.",
    ],
  },
};

/* ══════════════════════════════════════════════
   BACKGROUND EFFECTS COMPONENT (Immersive 3.0)
══════════════════════════════════════════════ */
function PhilosopherBackground({
  type,
  mousePos,
}: {
  type: ThemeConfig["effectType"];
  mousePos: { x: number; y: number };
}) {
  const [mounted, setMounted] = useState(false);

  // Cache randomized elements so they don't glitch on mousemove re-renders
  const socratesLetters = useMemo(() => {
    return [
      "α",
      "β",
      "γ",
      "δ",
      "ε",
      "ζ",
      "η",
      "θ",
      "ι",
      "κ",
      "λ",
      "μ",
      "ν",
      "ξ",
      "ο",
      "π",
      "ρ",
      "σ",
      "τ",
      "υ",
      "φ",
      "χ",
      "ψ",
      "ω",
    ].map((letter) => ({
      letter,
      left: Math.random() * 100 + "vw",
      top: "-50px",
      fontSize: Math.random() * 20 + 10 + "px",
      animationDelay: `-${Math.random() * 20}s`,
      animationDuration: Math.random() * 10 + 10 + "s",
    }));
  }, []);

  const marcusSnow = useMemo(() => {
    return Array.from({ length: 150 }).map(() => ({
      size: Math.random() * 3 + 1,
      left: Math.random() * 100 + "vw",
      animationDelay: `-${Math.random() * 5}s`,
      animationDuration: Math.random() * 3 + 2 + "s",
    }));
  }, []);

  const marxChains = useMemo(() => {
    return Array.from({ length: 5 }).map(() => ({
      animationDelay: `-${Math.random() * 5}s`,
      animationDuration: Math.random() * 2 + 3 + "s",
    }));
  }, []);

  const laoziBirds = useMemo(() => {
    return Array.from({ length: 4 }).map(() => ({
      animationDelay: `-${Math.random() * 15}s`,
      animationDuration: Math.random() * 10 + 15 + "s",
    }));
  }, []);

  const laoziLeaves = useMemo(() => {
    return Array.from({ length: 30 }).map(() => ({
      left: Math.random() * 100 + "vw",
      animationDelay: `-${Math.random() * 20}s`,
      animationDuration: Math.random() * 15 + 10 + "s",
    }));
  }, []);

  const socratesPillarsLeft = useMemo(
    () => Array.from({ length: 3 }).map(() => Math.random() * 20),
    [],
  );
  const socratesPillarsRight = useMemo(
    () => Array.from({ length: 3 }).map(() => Math.random() * 20),
    [],
  );

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Interactive parallax logic based on mouse
  const xOffset = (mousePos.x - window.innerWidth / 2) * -0.02;
  const yOffset = (mousePos.y - window.innerHeight / 2) * -0.02;

  switch (type) {
    case "socrates":
      return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050604]">
          {/* AI Generated Background */}
          <div
            className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center opacity-40 mix-blend-screen transition-transform duration-500 ease-out"
            style={{
              backgroundImage: 'url("/images/bg_socrates.png")',
              transform: `translate(${xOffset}px, ${yOffset}px)`,
            }}
          />

          {/* Mist / Fog base */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a05] to-transparent opacity-80" />

          {/* Falling Greek Letters */}
          <div className="absolute inset-0 z-20">
            {socratesLetters.map((item, i) => (
              <div
                key={i}
                className="absolute text-[#f5d87a] font-serif"
                style={{
                  left: item.left,
                  top: item.top,
                  fontSize: item.fontSize,
                  animation: `fall-letter ${item.animationDuration} linear infinite`,
                  animationDelay: item.animationDelay,
                  opacity: 0,
                  textShadow: "0 0 10px rgba(212,175,55,0.5)",
                }}
              >
                {item.letter}
              </div>
            ))}
          </div>

          {/* Animated SVG Pillars */}
          <div
            className="absolute top-0 bottom-0 left-[-10vw] w-[30vw] opacity-10 flex gap-10 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${xOffset}px)` }}
          >
            {socratesPillarsLeft.map((y, i) => (
              <div
                key={i}
                className="w-[10vw] h-[150vh] border-x-4 border-[#f5d87a] bg-[#f5d87a]/5"
                style={{ transform: `translateY(-${y}vh)` }}
              >
                {Array.from({ length: 6 }).map((_, j) => (
                  <div
                    key={j}
                    className="h-full w-px bg-[#f5d87a]/30 absolute"
                    style={{ left: `${(j + 1) * 16}%` }}
                  />
                ))}
              </div>
            ))}
          </div>

          <div
            className="absolute top-0 bottom-0 right-[-10vw] w-[30vw] opacity-10 flex gap-10 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${xOffset * -1}px)` }}
          >
            {socratesPillarsRight.map((y, i) => (
              <div
                key={i}
                className="w-[10vw] h-[150vh] border-x-4 border-[#f5d87a] bg-[#f5d87a]/5"
                style={{ transform: `translateY(-${y}vh)` }}
              >
                {Array.from({ length: 6 }).map((_, j) => (
                  <div
                    key={j}
                    className="h-full w-px bg-[#f5d87a]/30 absolute"
                    style={{ left: `${(j + 1) * 16}%` }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* God Rays */}
          <div
            className="absolute -top-1/4 left-1/4 w-[150vw] h-[150vh] origin-top opacity-20 pointer-events-none mix-blend-screen"
            style={{
              background:
                "linear-gradient(160deg, #f5d87a 0%, transparent 50%)",
              animation: "god-ray 12s infinite alternate ease-in-out",
            }}
          />
          <div
            className="absolute -top-1/4 left-1/2 w-[150vw] h-[150vh] origin-top opacity-10 pointer-events-none mix-blend-screen"
            style={{
              background:
                "linear-gradient(150deg, #ffffff 0%, transparent 40%)",
              animation: "god-ray 18s infinite alternate-reverse ease-in-out",
            }}
          />

          {/* Sacred Geometry */}
          <svg
            className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-[0.03] mix-blend-screen"
            style={{ animation: "pulse-geometry 60s linear infinite" }}
          >
            <polygon
              points="600,100 1033,850 167,850"
              fill="none"
              stroke="#f5d87a"
              strokeWidth="1"
            />
            <circle
              cx="600"
              cy="600"
              r="400"
              fill="none"
              stroke="#f5d87a"
              strokeWidth="1"
            />
            <rect
              x="317"
              y="317"
              width="566"
              height="566"
              fill="none"
              stroke="#f5d87a"
              strokeWidth="1"
              transform="rotate(45 600 600)"
            />
          </svg>
        </div>
      );

    case "marcus":
      return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020813]">
          {/* AI Generated Background */}
          <div
            className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center opacity-40 mix-blend-screen transition-transform duration-500 ease-out"
            style={{
              backgroundImage: 'url("/images/bg_marcus.png")',
              transform: `translate(${xOffset}px, ${yOffset}px)`,
            }}
          />

          {/* Intense vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_100%)] z-10 opacity-80" />

          {/* Roman Eagle Watermark */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] mix-blend-color-dodge transition-transform duration-500 ease-out"
            style={{
              transform: `translate(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px)) scale(1.5)`,
            }}
          >
            <svg viewBox="0 0 100 100" width="800" height="800" fill="#66aaff">
              <path d="M50 10 C 40 30, 20 40, 10 50 C 30 55, 45 45, 50 40 C 55 45, 70 55, 90 50 C 80 40, 60 30, 50 10 Z" />
              <path d="M50 45 C 40 60, 30 80, 20 90 C 40 85, 45 75, 50 70 C 55 75, 60 85, 80 90 C 70 80, 60 60, 50 45 Z" />
              <circle cx="50" cy="35" r="5" />
            </svg>
          </div>

          {/* Heavy Blizzard Snow */}
          <div className="absolute inset-0 z-20">
            {marcusSnow.map((item, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#ccddff]"
                style={{
                  width: item.size + "px",
                  height: item.size + "px",
                  left: item.left,
                  top: "-20px",
                  boxShadow: `0 0 ${item.size * 2}px rgba(150,200,255,0.8)`,
                  animation: `fall-snow ${item.animationDuration} linear infinite`,
                  animationDelay: item.animationDelay,
                  opacity: 0,
                }}
              />
            ))}
          </div>

          {/* Frost vignette */}
          <div
            className="absolute bottom-0 left-0 w-full h-[30vh] opacity-30 mix-blend-screen"
            style={{
              background:
                "linear-gradient(to top, rgba(100,180,255,0.2) 0%, transparent 100%)",
              filter: "blur(10px)",
            }}
          />
        </div>
      );

    case "marx":
      return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#080808]">
          {/* AI Generated Background */}
          <div
            className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center opacity-30 mix-blend-screen transition-transform duration-500 ease-out"
            style={{
              backgroundImage: 'url("/images/bg_marx.png")',
              transform: `translate(${xOffset}px, ${yOffset}px)`,
            }}
          />

          {/* Glitch Grid Base */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#ff0000 1px, transparent 1px), linear-gradient(90deg, #ff0000 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Iron Chains Hanging */}
          <div
            className="absolute top-0 left-0 right-0 h-[20vh] flex justify-around opacity-20 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${xOffset}px)` }}
          >
            {marxChains.map((item, i) => (
              <svg
                key={i}
                className="h-full w-4 origin-top"
                viewBox="0 0 20 200"
                preserveAspectRatio="none"
                style={{
                  animation: `swing-chain ${item.animationDuration} ease-in-out infinite alternate`,
                  animationDelay: item.animationDelay,
                }}
              >
                <path
                  d="M5,0 L15,0 L15,20 L5,20 Z M5,20 L15,20 L15,40 L5,40 Z M5,40 L15,40 L15,60 L5,60 Z M5,60 L15,60 L15,80 L5,80 Z M5,80 L15,80 L15,100 L5,100 Z M5,100 L15,100 L15,120 L5,120 Z M5,120 L15,120 L15,140 L5,140 Z"
                  fill="none"
                  stroke="#ff3333"
                  strokeWidth="2"
                />
              </svg>
            ))}
          </div>

          {/* Brutalist Spinning Gears */}
          <div
            className="absolute top-[10%] left-[-10%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] opacity-[0.03] mix-blend-screen"
            style={{ animation: "rotate-gear 40s linear infinite" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="#ff3333"
              strokeWidth="2"
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <path
                  key={i}
                  d={`M50,15 L55,0 L45,0 Z`}
                  transform={`rotate(${i * 15} 50 50)`}
                  fill="#ff3333"
                />
              ))}
              <circle cx="50" cy="50" r="35" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="25" />
              <circle cx="50" cy="50" r="5" fill="#ff3333" />
            </svg>
          </div>
          <div
            className="absolute bottom-[-15%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] opacity-[0.05] mix-blend-screen"
            style={{ animation: "rotate-gear 30s linear infinite reverse" }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="#ff3333"
              strokeWidth="3"
            >
              {Array.from({ length: 16 }).map((_, i) => (
                <rect
                  key={i}
                  x="45"
                  y="0"
                  width="10"
                  height="15"
                  transform={`rotate(${i * 22.5} 50 50)`}
                  fill="#ff3333"
                />
              ))}
              <circle cx="50" cy="50" r="35" />
              <circle cx="50" cy="50" r="10" />
            </svg>
          </div>

          {/* Industrial Steam/Smoke */}
          <div
            className="absolute bottom-0 left-0 w-[200vw] h-[60vh] bg-gradient-to-t from-[#110000] via-[#220000] to-transparent opacity-40 mix-blend-screen transition-transform duration-500 ease-out"
            style={{
              animation: "float-mist 20s ease-in-out infinite alternate",
              transform: `translateX(${xOffset}px)`,
            }}
          />

          {/* Siren Sweeping Light */}
          <div
            className="absolute inset-0 pointer-events-none z-30 opacity-20 mix-blend-screen"
            style={{
              background:
                "linear-gradient(90deg, transparent, #ff0000, transparent)",
              width: "50vw",
              animation: "siren-sweep 4s linear infinite",
            }}
          />

          {/* CRT Scanline & Laser */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04] z-20"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)",
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-[2px] bg-[#ff3333] opacity-40 blur-[2px] z-30"
            style={{ animation: "laser-scan 8s linear infinite" }}
          />
        </div>
      );

    case "laozi":
      return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020504]">
          {/* AI Generated Background */}
          <div
            className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center opacity-40 mix-blend-screen transition-transform duration-500 ease-out"
            style={{
              backgroundImage: 'url("/images/bg_laozi.png")',
              transform: `translate(${xOffset}px, ${yOffset}px)`,
            }}
          />

          {/* Water reflection floor */}
          <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#20ffaa]/5 to-transparent backdrop-blur-[2px] z-10" />

          {/* Massive Ink Yin-Yang */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-[0.02] mix-blend-screen"
            style={{
              animation: "rotate-gear 120s linear infinite",
              filter: "blur(8px)",
            }}
          >
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="#fff" />
              <path
                d="M50,2 A48,48 0 0,0 50,98 A24,24 0 0,0 50,50 A24,24 0 0,1 50,2"
                fill="#000"
              />
            </svg>
          </div>

          {/* Bamboo Silhouette Swaying */}
          <div
            className="absolute bottom-0 left-[-5vw] w-[30vw] h-[80vh] opacity-20 origin-bottom mix-blend-screen"
            style={{
              animation: "bamboo-sway 10s ease-in-out infinite alternate",
            }}
          >
            <svg
              viewBox="0 0 100 300"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="#66ffbb"
            >
              <path d="M45,300 C48,200 40,100 50,0 C55,100 52,200 50,300 Z" />
              <path d="M50,150 C60,140 70,145 80,130 C70,135 60,145 50,150 Z" />
              <path d="M48,200 C30,190 20,180 10,195 C20,185 35,195 48,200 Z" />
              <path d="M49,80 C65,70 75,75 85,60 C75,65 65,75 49,80 Z" />
            </svg>
          </div>
          <div
            className="absolute bottom-0 right-[5vw] w-[20vw] h-[60vh] opacity-15 origin-bottom mix-blend-screen"
            style={{
              animation:
                "bamboo-sway 8s ease-in-out infinite alternate-reverse",
              transform: "scaleX(-1)",
            }}
          >
            <svg
              viewBox="0 0 100 300"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="#66ffbb"
            >
              <path d="M45,300 C48,200 40,100 50,0 C55,100 52,200 50,300 Z" />
              <path d="M50,150 C60,140 70,145 80,130 C70,135 60,145 50,150 Z" />
            </svg>
          </div>

          {/* Ink Birds Flying */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            {laoziBirds.map((item, i) => (
              <svg
                key={i}
                className="absolute w-8 h-8 opacity-40 mix-blend-screen"
                viewBox="0 0 100 100"
                style={{
                  animation: `fly-bird ${item.animationDuration} ease-in-out infinite`,
                  animationDelay: item.animationDelay,
                }}
              >
                <path
                  d="M10,50 Q30,20 50,50 Q70,20 90,50 Q70,40 50,60 Q30,40 10,50 Z"
                  fill="#66ffbb"
                />
              </svg>
            ))}
          </div>

          {/* Falling Ink Leaves */}
          <div className="absolute inset-0 z-20">
            {laoziLeaves.map((item, i) => (
              <svg
                key={i}
                className="absolute"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(100,255,180,0.4)",
                  filter: "blur(1px)",
                  left: item.left,
                  top: "-50px",
                  animation: `fall-leaf ${item.animationDuration} linear infinite`,
                  animationDelay: item.animationDelay,
                  opacity: 0,
                }}
              >
                <path d="M12,2 C12,2 2,7 2,14 C2,19 7,22 12,22 C17,22 22,19 22,14 C22,7 12,2 12,2 Z" />
              </svg>
            ))}
          </div>

          {/* Zen Mist Layer */}
          <div
            className="absolute bottom-0 left-0 w-[200vw] h-[50vh] bg-gradient-to-t from-[#091a14] to-transparent opacity-60 transition-transform duration-500 ease-out"
            style={{
              animation: "float-mist 30s ease-in-out infinite alternate",
              transform: `translateX(${xOffset}px)`,
            }}
          />
        </div>
      );
  }
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function PhilosopherProfile() {
  const { id } = useParams<{ id: string }>();
  const data = id ? philosopherData[id] : null;
  const [mousePos, setMousePos] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#060912] flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-white mb-4">
            Lỗi Hệ Thống Lượng Tử
          </h1>
          <p className="text-white/50 mb-6">
            Dữ liệu về triết gia này chưa được giải mã.
          </p>
          <Link
            to="/modules"
            className="text-cyan-400 hover:text-cyan-300 hover:underline"
          >
            Quay về Trạm Chuyển Tiếp
          </Link>
        </div>
      </div>
    );
  }

  const { theme } = data;

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${theme.bgGradient} text-white selection:bg-white/20 relative overflow-hidden pb-32`}
    >
      <PhilosopherBackground type={theme.effectType} mousePos={mousePos} />

      {/* Global Mouse Tracking Spotlight */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none transition-opacity duration-300 mix-blend-screen opacity-70"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, ${theme.glowColor}, transparent 40%)`,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 pt-16">
        {/* Back Link */}
        <Link
          to="/modules"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-16 relative z-20 group"
        >
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors bg-black/50">
            <ArrowLeft size={14} />
          </div>
          Thư viện Hiền nhân
        </Link>

        {/* ── HERO SECTION ── */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-32 relative">
          <div className="relative shrink-0 group perspective-1000">
            {/* Glowing Avatar */}
            <div
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-white/20 flex items-center justify-center text-6xl md:text-7xl font-serif bg-black/60 backdrop-blur-xl relative z-10 transition-all duration-700 group-hover:scale-105 group-hover:rotate-[-5deg] overflow-hidden"
              style={{
                color: theme.textColor.replace("text-[", "").replace("]", ""),
                boxShadow: `inset 0 0 40px ${theme.glowColor}, 0 0 20px rgba(0,0,0,0.5)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{ background: theme.cardPattern }}
              />
              <span className="relative z-10 drop-shadow-2xl">
                {data.letter}
              </span>
            </div>
            {/* Ambient Glow */}
            <div
              className="absolute inset-0 rounded-full blur-[50px] opacity-60 transition-opacity duration-700 group-hover:opacity-100 animate-pulse"
              style={{ background: theme.glowColor }}
            />
          </div>

          <div className="text-center md:text-left flex-1 relative z-20">
            <div
              className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md mb-8 transition-transform hover:scale-105`}
            >
              <Sparkles size={16} className={theme.textColor} />
              <span
                className={`text-[11px] font-bold uppercase tracking-[0.25em] ${theme.textColor} drop-shadow-lg`}
              >
                {data.role}
              </span>
            </div>

            <h1
              className="text-6xl md:text-8xl font-serif mb-6 leading-none tracking-tight drop-shadow-2xl"
              style={{ textShadow: `0 10px 30px ${theme.glowColor}` }}
            >
              {data.name}
            </h1>

            <p className="text-2xl text-white/50 font-serif italic mb-10 tracking-wide">
              {data.life}
            </p>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto md:mx-0 mb-10" />

            <div
              className="space-y-6 text-white/80 leading-relaxed text-lg font-light md:text-xl text-justify md:text-left"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
            >
              {data.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </header>

        {/* ── CORE IDEAS ── */}
        <section className="mb-32 relative z-20">
          <div className="flex items-center gap-4 mb-16 justify-center md:justify-start">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <Brain className={theme.textColor} size={28} />
            </div>
            <h2 className="text-4xl font-serif drop-shadow-lg">
              Di Sản Tư Tưởng
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.coreIdeas.map((idea, i) => (
              <div
                key={i}
                className={`relative group p-10 rounded-3xl border border-white/10 ${theme.cardBg} backdrop-blur-2xl transition-all duration-700 hover:-translate-y-4 overflow-hidden`}
                style={{
                  boxShadow: `0 20px 50px rgba(0,0,0,0.5), inset 0 0 0 1px ${theme.glowColor.replace("0.3", "0.05")}`,
                }}
              >
                {/* Thematic Background Pattern reveals on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-0"
                  style={{ background: theme.cardPattern }}
                />

                {/* Light reflection follows mouse inside card */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 mix-blend-soft-light pointer-events-none"
                  style={{
                    background: `radial-gradient(400px circle at 50% 100%, ${theme.glowColor}, transparent 50%)`,
                  }}
                />

                {/* Number indicator */}
                <div
                  className={`absolute top-4 right-6 text-8xl font-serif font-black opacity-[0.02] transition-all duration-700 group-hover:opacity-[0.08] group-hover:-translate-y-2 ${theme.textColor} z-0 pointer-events-none`}
                >
                  0{i + 1}
                </div>

                <h3
                  className={`text-2xl font-serif mb-5 ${theme.textColor} relative z-10 drop-shadow-md`}
                >
                  {idea.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed relative z-10 font-light">
                  {idea.desc}
                </p>

                {/* Hover Glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-700 origin-left scale-x-0 group-hover:scale-x-100 z-10"
                  style={{
                    background: `linear-gradient(90deg, ${theme.glowColor.replace("0.3", "1")}, transparent)`,
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── QUOTES ── */}
        <section className="relative z-20">
          <div className="flex items-center gap-4 mb-16 justify-center md:justify-start">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <Quote className={theme.textColor} size={28} />
            </div>
            <h2 className="text-4xl font-serif drop-shadow-lg">
              Danh Ngôn Bất Hủ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {data.quotes.map((quote, i) => (
              <div
                key={i}
                className="relative p-12 rounded-[2.5rem] overflow-hidden group transition-transform duration-700 hover:scale-[1.02]"
              >
                {/* Background Glass */}
                <div
                  className={`absolute inset-0 ${theme.cardBg} backdrop-blur-xl opacity-60 border border-white/10 rounded-[2.5rem] transition-all duration-700 group-hover:opacity-80 group-hover:border-white/20`}
                />

                {/* Interactive highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Big Quote Icon watermark */}
                <Quote className="absolute -top-6 -left-6 w-48 h-48 text-white opacity-[0.015] transform -scale-x-100 transition-all duration-1000 group-hover:scale-125 group-hover:-scale-x-125 group-hover:opacity-[0.04] group-hover:rotate-12" />

                <p
                  className="relative z-10 text-2xl md:text-3xl font-serif leading-relaxed italic text-white/90 drop-shadow-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "{quote}"
                </p>

                {/* Decorative dot */}
                <div
                  className={`absolute bottom-8 right-12 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100`}
                  style={{
                    background: theme.textColor
                      .replace("text-[", "")
                      .replace("]", ""),
                    boxShadow: `0 0 10px ${theme.glowColor}`,
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer actions */}
        <div className="mt-40 text-center relative z-20">
          <Link
            to="/modules"
            className={`inline-flex items-center gap-4 px-10 py-5 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl transition-all duration-500 text-sm tracking-widest uppercase hover:scale-105 hover:border-white/30`}
            style={{
              boxShadow: `0 20px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.02)`,
            }}
          >
            Trở lại Khám phá các Module{" "}
            <MoveRight size={18} className={theme.textColor} />
          </Link>
        </div>
      </div>
    </div>
  );
}
