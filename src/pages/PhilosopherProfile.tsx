import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Quote, Brain, Sparkles, MoveRight } from 'lucide-react'
import { useEffect, useState, useMemo } from 'react'

type ThemeConfig = {
  bgGradient: string
  cardBg: string
  glowColor: string
  textColor: string
  effectType: 'socrates' | 'marcus' | 'marx' | 'laozi'
}

type PhilosopherData = {
  name: string
  role: string
  life: string
  letter: string
  theme: ThemeConfig
  bio: string[]
  coreIdeas: { title: string; desc: string }[]
  quotes: string[]
}

const philosopherData: Record<string, PhilosopherData> = {
  socrates: {
    name: 'Socrates',
    role: 'Đặt Câu Hỏi Biện Chứng',
    life: '470 – 399 TCN',
    letter: 'S',
    theme: {
      bgGradient: 'from-[#0a0a05] via-[#14120b] to-[#0a0a05]',
      cardBg: 'bg-[#1a170f]/60',
      glowColor: 'rgba(212,175,55,0.3)',
      textColor: 'text-[#f5d87a]',
      effectType: 'socrates',
    },
    bio: [
      'Socrates là triết gia người Athen cổ đại, được xem là một trong những người sáng lập triết học phương Tây. Ông không để lại tác phẩm nào, toàn bộ tư tưởng của ông được lưu truyền qua các đối thoại của Plato.',
      'Bị xét xử và kết án tử hình với tội danh "làm hỏng tuổi trẻ Athens" và "không tin vào các vị thần của nhà nước", Socrates đã bình thản uống thuốc độc, lựa chọn cái chết thay vì từ bỏ triết học.',
    ],
    coreIdeas: [
      { title: 'Phương pháp Socratic', desc: 'Phương pháp đặt câu hỏi liên tiếp để khám phá sự thật, buộc đối thoại phải tự suy xét và nhận ra mâu thuẫn trong nhận thức của mình.' },
      { title: 'Biết mình không biết gì', desc: 'Câu nói nổi tiếng "Tôi chỉ biết rằng tôi không biết gì" phản ánh sự khiêm tốn nhận thức — điều kiện đầu tiên để học hỏi thật sự.' },
      { title: 'Đức hạnh là tri thức', desc: 'Socrates tin rằng con người làm điều xấu là do thiếu hiểu biết, chứ không phải do bản chất xấu. Ai hiểu thật sự cái tốt thì tự nhiên sẽ làm điều tốt.' },
    ],
    quotes: [
      'Cuộc đời không phản tư là cuộc đời không đáng sống.',
      'Tôi chỉ biết rằng tôi không biết gì.',
      'Hãy tự biết mình.',
      'Cách duy nhất để làm điều tốt là biết điều tốt là gì.',
    ],
  },
  marcus: {
    name: 'Marcus Aurelius',
    role: 'Chủ Nghĩa Khắc Kỷ',
    life: '121 – 180 CN',
    letter: 'M',
    theme: {
      bgGradient: 'from-[#120505] via-[#1a0f12] to-[#0a080a]',
      cardBg: 'bg-[#2a1515]/50',
      glowColor: 'rgba(255,80,80,0.25)',
      textColor: 'text-[#ff9999]',
      effectType: 'marcus',
    },
    bio: [
      'Marcus Aurelius là Hoàng đế La Mã từ năm 161 đến 180 CN, đồng thời là nhà triết học Khắc kỷ vĩ đại. Ông được mệnh danh là "Hoàng đế Triết gia" — người duy nhất trong lịch sử La Mã kết hợp hoàn hảo quyền lực tuyệt đối với đức hạnh cao cả.',
      'Tác phẩm "Suy tưởng" (Meditations) của ông là bộ nhật ký cá nhân, ghi lại những suy tư thực hành triết học hàng ngày của một vị hoàng đế. Cuốn sách không được viết ra để xuất bản, nhưng đã trở thành một trong những tác phẩm truyền cảm hứng nhất mọi thời đại.',
    ],
    coreIdeas: [
      { title: 'Dichotomy of Control', desc: 'Chỉ tập trung vào những thứ trong tầm kiểm soát của mình (suy nghĩ, hành động, phán đoán), và chấp nhận bình thản những thứ ngoài tầm kiểm soát.' },
      { title: 'Memento Mori', desc: 'Nhớ rằng mình sẽ chết. Nhận thức về cái chết không phải để bi quan, mà để trân trọng hiện tại và sống với mục đích.' },
      { title: 'Amor Fati', desc: 'Yêu thương số phận — chấp nhận và thậm chí yêu quý mọi điều xảy đến, kể cả nghịch cảnh, vì chúng là cơ hội để rèn luyện đức hạnh.' },
    ],
    quotes: [
      'Tâm trí bạn sẽ mang màu sắc của những ý nghĩ thường trực.',
      'Bạn có sức mạnh trong tâm trí mình, không phải bên ngoài. Hãy nhận ra điều đó, và bạn sẽ tìm thấy sức mạnh.',
      'Trở ngại là con đường.',
      'Sự mất mát chỉ là sự thay đổi, và thay đổi là niềm vui của tự nhiên.',
    ],
  },
  marx: {
    name: 'Karl Marx',
    role: 'Duy Vật Biện Chứng',
    life: '1818 – 1883',
    letter: 'K',
    theme: {
      bgGradient: 'from-[#141414] via-[#1f1b1c] to-[#121212]',
      cardBg: 'bg-[#242424]/80',
      glowColor: 'rgba(200,40,40,0.35)',
      textColor: 'text-[#ff5555]',
      effectType: 'marx',
    },
    bio: [
      'Karl Marx là nhà triết học, kinh tế học và nhà cách mạng người Đức. Cùng với Friedrich Engels, ông đã đặt nền móng cho chủ nghĩa cộng sản khoa học qua các tác phẩm như "Tuyên ngôn Đảng Cộng sản" (1848) và "Tư bản" (Das Kapital, 1867).',
      'Marx sống phần lớn cuộc đời trong cảnh nghèo túng ở London, nhưng tư tưởng của ông đã định hình lại lịch sử thế giới thế kỷ 20, ảnh hưởng đến nhiều cuộc cách mạng và phong trào xã hội trên toàn cầu.',
    ],
    coreIdeas: [
      { title: 'Chủ nghĩa Duy vật Biện chứng', desc: 'Vật chất là nền tảng của thực tại, ý thức là sự phản ánh của vật chất. Mâu thuẫn nội tại là động lực của sự phát triển (Luận đề → Phản đề → Tổng hợp).' },
      { title: 'Chủ nghĩa Duy vật Lịch sử', desc: 'Lực lượng sản xuất và quan hệ sản xuất quyết định cơ cấu xã hội. Lịch sử là lịch sử đấu tranh giai cấp — cuộc xung đột giữa những người sở hữu tư liệu sản xuất và những người bị bóc lột.' },
      { title: 'Phê phán tha hóa', desc: 'Trong xã hội tư bản, người lao động bị tha hóa khỏi sản phẩm lao động, quá trình lao động, loài người và đồng loại. Giải phóng con người đòi hỏi xóa bỏ nguồn gốc của tha hóa này.' },
    ],
    quotes: [
      'Các triết gia mới chỉ giải thích thế giới, vấn đề là cải tạo thế giới.',
      'Lịch sử của tất cả mọi xã hội từ trước đến nay đều là lịch sử đấu tranh giai cấp.',
      'Tôn giáo là thuốc phiện của nhân dân.',
      'Từ mỗi người theo năng lực, cho mỗi người theo nhu cầu.',
    ],
  },
  laozi: {
    name: 'Lão Tử',
    role: 'Triết Học Đạo Gia',
    life: 'TK 6 – 5 TCN',
    letter: 'L',
    theme: {
      bgGradient: 'from-[#06120b] via-[#0b1f14] to-[#040d08]',
      cardBg: 'bg-[#0f2b1c]/50',
      glowColor: 'rgba(50,255,150,0.2)',
      textColor: 'text-[#88ffcc]',
      effectType: 'laozi',
    },
    bio: [
      'Lão Tử (nghĩa là "Ông già" hay "Thầy già") là người sáng lập Đạo giáo — một trong những trường phái triết học lớn nhất phương Đông. Ông được cho là tác giả của "Đạo Đức Kinh", một trong những tác phẩm triết học sâu sắc nhất lịch sử nhân loại.',
      'Sự tồn tại lịch sử của Lão Tử còn nhiều tranh cãi. Dù vậy, tư tưởng Đạo gia mà ông đại diện đã ảnh hưởng sâu sắc đến văn hóa, nghệ thuật và nhân sinh quan Đông Á suốt hàng nghìn năm.',
    ],
    coreIdeas: [
      { title: 'Đạo (Tao)', desc: '"Đạo" là nguyên lý tối cao, không thể đặt tên, không thể định nghĩa, nhưng là nguồn gốc của vạn vật. "Đạo khả đạo, phi thường đạo" — Đạo nói ra được, không phải Đạo thường hằng.' },
      { title: 'Vô Vi (Wu Wei)', desc: 'Không cưỡng cầu, thuận theo tự nhiên. Không phải là không làm gì, mà là hành động một cách tự nhiên, thuận lẽ, không ép buộc. Như nước mềm mỏng mà chảy qua mọi chỗ.' },
      { title: 'Biện chứng âm dương', desc: 'Mọi thứ đều chứa đựng mầm mống của cái đối lập. Cứng và mềm, có và không, cao và thấp — chúng tạo ra nhau, không thể tách rời. Sức mạnh thật sự nằm ở sự mềm mỏng.' },
    ],
    quotes: [
      'Hành trình vạn dặm bắt đầu từ một bước chân.',
      'Biết người là trí, biết mình là sáng.',
      'Nước là thứ mềm nhất, mà chảy mòn cả đá cứng nhất.',
      'Thứ gì cứng nhắc và cứng rắn thì sẽ vỡ. Thứ gì mềm mại và uốn lượn thì sẽ tồn tại.',
    ],
  },
}

/* ══════════════════════════════════════════════
   BACKGROUND EFFECTS COMPONENT
══════════════════════════════════════════════ */
function PhilosopherBackground({ type }: { type: ThemeConfig['effectType'] }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  switch (type) {
    case 'socrates':
      // Sacred Geometry
      return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
          <svg className="absolute top-1/4 left-1/4 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2" style={{ animation: 'pulse-geometry 40s linear infinite' }}>
            <polygon points="400,100 700,600 100,600" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="2" />
            <circle cx="400" cy="430" r="170" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="2" />
          </svg>
          <svg className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/4 translate-y-1/4" style={{ animation: 'pulse-geometry 30s linear infinite reverse' }}>
            <rect x="150" y="150" width="300" height="300" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="2" transform="rotate(45 300 300)" />
            <circle cx="300" cy="300" r="212" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="2" />
          </svg>
        </div>
      )
    case 'marcus':
      // Embers & Ash
      return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                background: Math.random() > 0.5 ? '#ff5050' : '#ffaa50',
                left: Math.random() * 100 + 'vw',
                bottom: '-10px',
                boxShadow: '0 0 10px #ff5050',
                animation: `float-ash ${Math.random() * 8 + 4}s linear infinite`,
                animationDelay: `-${Math.random() * 10}s`,
                opacity: 0,
              }}
            />
          ))}
          {/* Roman marble cracks illusion */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </div>
      )
    case 'marx':
      // Gears & Smoke
      return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Giant Gears */}
          <svg className="absolute -left-[200px] -top-[200px] w-[600px] h-[600px] opacity-10" viewBox="0 0 100 100" style={{ animation: 'rotate-gear 60s linear infinite' }}>
            <path fill="#ff5555" d="M50,10 L55,20 A30,30 0 0,1 80,45 L90,50 L80,55 A30,30 0 0,1 55,80 L50,90 L45,80 A30,30 0 0,1 20,55 L10,50 L20,45 A30,30 0 0,1 45,20 Z" />
            <circle cx="50" cy="50" r="15" fill="#141414" />
          </svg>
          <svg className="absolute -right-[100px] top-[40%] w-[400px] h-[400px] opacity-[0.08]" viewBox="0 0 100 100" style={{ animation: 'rotate-gear 40s linear infinite reverse' }}>
            <path fill="#ff5555" d="M50,5 L58,15 A35,35 0 0,1 85,42 L95,50 L85,58 A35,35 0 0,1 58,85 L50,95 L42,85 A35,35 0 0,1 15,58 L5,50 L15,42 A35,35 0 0,1 42,15 Z" />
            <circle cx="50" cy="50" r="20" fill="#141414" />
          </svg>
          {/* Smoke Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1f1b1c] to-transparent opacity-80 mix-blend-multiply" />
        </div>
      )
    case 'laozi':
      // Falling leaves & Ink
      return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 25 }).map((_, i) => (
            <svg
              key={i}
              className="absolute"
              width="24" height="24" viewBox="0 0 24 24"
              style={{
                fill: 'rgba(50,255,150,0.3)',
                left: Math.random() * 100 + 'vw',
                top: '-50px',
                animation: `fall-leaf ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `-${Math.random() * 20}s`,
                opacity: 0,
              }}
            >
              <path d="M12,2 C12,2 4,6 4,14 C4,18 7,22 12,22 C17,22 20,18 20,14 C20,6 12,2 12,2 Z" />
            </svg>
          ))}
          {/* Yin-Yang gigantic watermark */}
          <svg className="absolute top-1/2 right-0 w-[800px] h-[800px] -translate-y-1/2 translate-x-1/4 opacity-[0.04]" viewBox="0 0 100 100" style={{ animation: 'rotate-gear 120s linear infinite' }}>
            <circle cx="50" cy="50" r="48" fill="#fff" />
            <path d="M50,2 A48,48 0 0,0 50,98 A24,24 0 0,0 50,50 A24,24 0 0,1 50,2" fill="#000" />
            <circle cx="50" cy="26" r="6" fill="#fff" />
            <circle cx="50" cy="74" r="6" fill="#000" />
          </svg>
        </div>
      )
  }
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function PhilosopherProfile() {
  const { id } = useParams<{ id: string }>()
  const data = id ? philosopherData[id] : null

  if (!data) {
    return (
      <div className="min-h-screen bg-[#060912] flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-white mb-4">Lỗi Hệ Thống Lượng Tử</h1>
          <p className="text-white/50 mb-6">Dữ liệu về triết gia này chưa được tải lên hệ thống.</p>
          <Link to="/modules" className="text-cyan-400 hover:text-cyan-300 hover:underline">Quay về Trạm Chuyển Tiếp</Link>
        </div>
      </div>
    )
  }

  const { theme } = data

  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.bgGradient} text-white selection:bg-white/20 relative overflow-hidden pb-32`}>
      <PhilosopherBackground type={theme.effectType} />

      <div className="max-w-5xl mx-auto px-6 relative z-10 pt-16">
        
        {/* Back Link */}
        <Link 
          to="/modules" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-16"
        >
          <ArrowLeft size={16} /> Thư viện Hiền nhân
        </Link>

        {/* ── HERO SECTION ── */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-24 relative">
          <div className="relative shrink-0 group">
            {/* Glowing Avatar */}
            <div 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 flex items-center justify-center text-5xl md:text-6xl font-serif bg-black/50 backdrop-blur-md relative z-10 transition-transform duration-700 group-hover:scale-105"
              style={{ color: theme.textColor.replace('text-[', '').replace(']', '') }}
            >
              {data.letter}
            </div>
            {/* Ambient Glow */}
            <div 
              className="absolute inset-0 rounded-full blur-[40px] opacity-60 transition-opacity duration-700 group-hover:opacity-100"
              style={{ background: theme.glowColor }}
            />
          </div>

          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
              <Sparkles size={14} className={theme.textColor} />
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${theme.textColor}`}>
                {data.role}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif mb-4 leading-tight">
              {data.name}
            </h1>
            
            <p className="text-xl text-white/50 font-serif italic mb-8">
              {data.life}
            </p>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto md:mx-0 mb-8" />

            <div className="space-y-4 text-white/70 leading-relaxed text-lg font-light">
              {data.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </header>

        {/* ── CORE IDEAS ── */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
            <Brain className={theme.textColor} size={28} />
            <h2 className="text-3xl font-serif">Tư Tưởng Cốt Lõi</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {data.coreIdeas.map((idea, i) => (
              <div 
                key={i} 
                className={`relative group p-8 rounded-3xl border border-white/5 ${theme.cardBg} backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20`}
                style={{
                  boxShadow: `0 10px 40px rgba(0,0,0,0.5), inset 0 0 0 1px ${theme.glowColor.replace('0.3', '0.05')}`
                }}
              >
                {/* Number indicator */}
                <div className={`absolute top-6 right-6 text-6xl font-serif font-black opacity-[0.03] transition-opacity duration-500 group-hover:opacity-10 ${theme.textColor}`}>
                  0{i + 1}
                </div>
                
                <h3 className={`text-xl font-serif mb-4 ${theme.textColor}`}>
                  {idea.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed relative z-10">
                  {idea.desc}
                </p>

                {/* Hover Glow line */}
                <div 
                  className="absolute bottom-0 left-8 right-8 h-[2px] transition-all duration-500 origin-center scale-x-0 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${theme.glowColor}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── QUOTES ── */}
        <section>
          <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
            <Quote className={theme.textColor} size={28} />
            <h2 className="text-3xl font-serif">Danh Ngôn Bất Hủ</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.quotes.map((quote, i) => (
              <div 
                key={i} 
                className="relative p-10 rounded-[2rem] overflow-hidden group"
              >
                {/* Background Glass */}
                <div className={`absolute inset-0 ${theme.cardBg} backdrop-blur-md opacity-40 border border-white/5 rounded-[2rem] transition-opacity duration-500 group-hover:opacity-60`} />
                
                {/* Big Quote Icon watermark */}
                <Quote 
                  className="absolute -top-4 -left-4 w-32 h-32 text-white opacity-[0.02] transform -scale-x-100 transition-transform duration-700 group-hover:scale-110 group-hover:-scale-x-110" 
                />
                
                <p className="relative z-10 text-xl md:text-2xl font-serif leading-relaxed italic text-white/90" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer actions */}
        <div className="mt-32 text-center">
          <Link 
            to="/modules" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm tracking-widest uppercase hover:scale-105"
          >
            Trở lại Khám phá các Module <MoveRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  )
}
