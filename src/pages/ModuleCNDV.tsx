import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, Atom, Brain, Zap, RotateCcw, HelpCircle } from 'lucide-react'

/* ─────────────────── DATA ─────────────────── */

const motionForms = [
  { name: 'Cơ học', desc: 'Dịch chuyển vị trí', example: 'Viên đá lăn', color: 'bg-slate-800/40 border-slate-600/50' },
  { name: 'Vật lý', desc: 'Nhiệt, điện, từ, quang', example: 'Nước sôi, nam châm', color: 'bg-blue-900/30 border-blue-700/50' },
  { name: 'Hóa học', desc: 'Biến đổi chất', example: 'Sắt gỉ, đốt cháy', color: 'bg-orange-900/30 border-orange-700/50' },
  { name: 'Sinh học', desc: 'Trao đổi chất, sinh trưởng', example: 'Cơ thể sống', color: 'bg-green-900/30 border-green-700/50' },
  { name: 'Xã hội', desc: 'Hoạt động người, lịch sử', example: 'Cách mạng, văn hóa', color: 'bg-gold/10 border-gold/30' },
]

const consciousnessStructure = [
  { name: 'Tri thức', desc: 'Hiểu biết về thế giới', role: 'Nền tảng — ý thức không có tri thức là ý thức rỗng', icon: '📚' },
  { name: 'Tình cảm', desc: 'Thái độ cảm xúc với thực tại', role: 'Động lực — thúc đẩy hoặc kìm hãm hành động', icon: '❤️' },
  { name: 'Ý chí', desc: 'Khả năng vượt khó để đạt mục tiêu', role: 'Sức mạnh — biến nhận thức thành hành động', icon: '⚡' },
  { name: 'Tự ý thức', desc: 'Nhận thức về chính bản thân', role: 'Đỉnh cao — chỉ người mới có đầy đủ', icon: '🪞' },
]

const faqItems = [
  {
    q: 'Vật lý lượng tử cho thấy hạt lượng tử thay đổi trạng thái khi bị quan sát — tức là ý thức người quan sát tác động vào vật chất. Vậy vật chất có thực sự độc lập với ý thức không?',
    a: 'Đây là hiểu lầm phổ biến nhất về vật lý lượng tử trong triết học. "Quan sát" trong vật lý lượng tử không nghĩa là "người có ý thức nhìn vào" — mà nghĩa là "tương tác vật lý với thiết bị đo lường". Máy đo tương tác với hạt → hạt sụp đổ hàm sóng — không cần ý thức người. Vật chất vẫn độc lập với ý thức — nhưng ở tầng lượng tử, vật chất cư xử theo xác suất, không phải tất định.'
  },
  {
    q: 'Nếu ý thức là sản phẩm của não — bộ phận vật chất — thì khi não ngừng hoạt động lúc chết, ý thức biến mất hoàn toàn. Toàn bộ ý nghĩa, tình yêu mà con người tạo ra cũng biến mất hoàn toàn không?',
    a: 'Đây là câu hỏi hiện sinh sâu nhất phát sinh từ chủ nghĩa duy vật. Triết học Mác trả lời qua ý niệm ý thức xã hội: những giá trị, tri thức, tình yêu con người tạo ra được mã hóa vào ngôn ngữ, văn hóa, thiết chế — tức là vào vật chất xã hội — và tồn tại sau khi cá nhân mất đi. Newton chết nhưng định luật Newton vẫn đang vận hành. Đây không phải bất tử cá nhân — nhưng là một dạng trường tồn qua tác động vào thực tại.'
  },
  {
    q: 'Thực tiễn của Liên Xô trong 70 năm cho thấy nhiều lý luận Marx-Lenin không hoạt động như kỳ vọng. Vậy thực tiễn đó có đang bác bỏ lý luận không?',
    a: 'Câu hỏi rất hay và cần phân biệt hai tầng: (1) Phương pháp biện chứng duy vật — cách nhìn thế giới trong mối liên hệ, vận động, mâu thuẫn — vẫn còn giá trị. (2) Các kết luận cụ thể về con đường xây dựng CNXH cần được điều chỉnh theo thực tiễn. Bản thân nguyên tắc "thực tiễn là tiêu chuẩn chân lý" của Mác đòi hỏi phải học từ thất bại — không phải bảo vệ kết luận cũ bằng mọi giá.'
  },
  {
    q: 'Nếu ý thức là hình ảnh chủ quan của thế giới khách quan — thì làm sao ta biết hình ảnh đó có phản ánh đúng thực tại không? Mọi công cụ kiểm tra đều là ý thức — ta đang dùng thước đo chính cái thước.',
    a: 'Triết học Mác trả lời bằng thực tiễn: không phải ý thức kiểm tra ý thức — mà thực tiễn kiểm tra ý thức. Khi tôi dùng ý thức thiết kế cầu và cây cầu đứng vững → nhận thức đó đúng. Khi cầu sập → sai. Thực tiễn như là tòa án khách quan cho ý thức. Đây không loại bỏ hoàn toàn vấn đề nhận thức luận — nhưng dịch chuyển nó từ bình diện lý luận sang bình diện thực tiễn.'
  },
  {
    q: 'Nếu AI học được ngôn ngữ, giải quyết vấn đề, và thực hiện lao động phức tạp — theo định nghĩa của Mác AI có ý thức không?',
    a: 'Câu hỏi vô cùng thú vị mà Mác không thể dự đoán. Tiêu chí Mác đưa ra: lao động có mục đích + ngôn ngữ = ý thức. AI hiện tại xử lý ngôn ngữ và thực hiện "lao động" theo nghĩa kỹ thuật — nhưng thiếu điều mà Mác gọi là "tính xã hội" — AI không có nhu cầu, không có lịch sử tiến hóa, không có cơ thể trong thế giới. Đây là ranh giới mờ và là câu hỏi triết học nóng bỏng nhất của thế kỷ 21.'
  },
]

/* ─────────────────── COMPONENT ─────────────────── */

function SectionHeader({ num, title, subtitle, icon }: { num: string, title: string, subtitle: string, icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-6 mb-12">
      <div className="flex-shrink-0 text-center w-16">
        <div className="text-5xl font-serif text-white/5 font-bold leading-none">{num}</div>
        <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mx-auto -mt-5">
          {icon}
        </div>
      </div>
      <div className="pt-2">
        <h2 className="text-2xl md:text-3xl font-serif text-white/90 mb-1">{title}</h2>
        <p className="text-white/50 text-sm italic">{subtitle}</p>
        <div className="w-16 h-0.5 bg-gold mt-3"></div>
      </div>
    </div>
  )
}

function HighlightBlock({ label, text, sub }: { label: string, text: string, sub?: string }) {
  return (
    <div className="border-l-4 border-gold pl-6 py-2">
      <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">{label}</p>
      <p className="font-serif text-white/90 leading-relaxed">{text}</p>
      {sub && <p className="text-xs text-white/50 mt-2 italic">{sub}</p>}
    </div>
  )
}

export default function ModuleCNDV() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeMotion, setActiveMotion] = useState(0)

  return (
    <div className="min-h-screen bg-[#050B10] selection:bg-cyan-500/20 relative overflow-x-hidden">

      {/* ── SPACETIME GRID BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0 perspective-[1000px]">
        {/* Animated glowing grid */}
        <div className="absolute inset-0 bg-transparent" style={{
          backgroundImage: 'linear-gradient(rgba(40,200,200,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(40,200,200,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: 'rotateX(60deg) translateY(-100px) scale(2)',
          transformOrigin: 'top center',
          animation: 'grid-move 10s linear infinite',
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,transparent_0%,#050B10_80%)]" />
        <style>{`
          @keyframes grid-move {
            from { background-position: 0 0; }
            to { background-position: 0 50px; }
          }
        `}</style>
      </div>

      {/* ── HERO ── */}
      <div className="bg-transparent text-white pt-40 pb-32 px-6 relative z-10 overflow-hidden border-b border-cyan-500/10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/modules" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12">
            <ArrowLeft size={14} /> Quay lại Hub
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase mb-8">
            Module 2 · Triết học thuần túy nhất
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Chủ nghĩa Duy vật<br/>
            <span className="text-gold">Biện chứng</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mb-12 leading-relaxed">
            Nền tảng lý luận cho mọi module còn lại. Hiểu sâu module này là hiểu được tại sao triết học Mác nhìn thế giới theo cách đó.
          </p>

          {/* Two-Orb Diagram */}
          <div className="flex items-center justify-center gap-0 mb-12 select-none">
            <div className="relative">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-white/5 border border-white/20 flex flex-col items-center justify-center">
                <Atom className="text-gold mb-2" size={28} />
                <p className="font-serif text-xl text-white">Vật Chất</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Matter</p>
              </div>
            </div>
            <div className="relative -mx-8 z-10 flex flex-col items-center gap-2">
              <div className="h-12 w-px border-l border-dashed border-gold/40"></div>
              <div className="w-10 h-10 rounded-full bg-[#0A121A] border-2 border-gold flex items-center justify-center">
                <RotateCcw size={16} className="text-gold" />
              </div>
              <div className="h-12 w-px border-l border-dashed border-gold/40"></div>
            </div>
            <div className="relative">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gold/10 border border-gold/30 flex flex-col items-center justify-center">
                <Brain className="text-gold mb-2" size={28} />
                <p className="font-serif text-xl text-white">Ý Thức</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Consciousness</p>
              </div>
            </div>
          </div>

          <div className="glass-quantum border border-gold/20 bg-white/5 p-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3 text-center">Câu hỏi trung tâm</p>
            <p className="text-white text-xl font-serif italic leading-relaxed text-center">
              "Thế giới thực sự là gì — và con người hiểu được nó bằng cách nào?"
            </p>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-32 relative z-10">

        {/* ════ PART I: VẬT CHẤT ════ */}
        <section>
          <SectionHeader num="I" icon={<Atom size={18} />} title="Bản chất của Vật Chất" subtitle="Vật chất là gì — và câu hỏi đó phức tạp hơn chúng ta nghĩ." />

          {/* 1. Lịch sử */}
          <div className="mb-12">
            <h3 className="font-bold font-serif text-white/90 text-xl mb-6 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#0A121A] text-white text-xs flex items-center justify-center">1</span>
              Lịch sử quan niệm về vật chất
            </h3>
            <div className="relative border-l-2 border-gold/20 pl-8 space-y-6">
              {[
                { era: 'Cổ đại', tag: 'Duy vật chất phác', color: 'text-amber-500', content: 'Tìm "chất liệu nguyên thủy": Thales → nước. Anaximenes → không khí. Heraclitus → lửa. Democritus → nguyên tử. Đúng ở chỗ tìm cơ sở vật chất — sai ở chỗ đồng nhất với một dạng cụ thể.' },
                { era: 'TK 17–18', tag: 'Duy vật siêu hình', color: 'text-blue-500', content: 'Khoa học Newton → vật chất = thứ có khối lượng, chiếm không gian, tuân theo định luật cơ học. Tiến bộ hơn — nhưng vẫn gắn vật chất với thuộc tính cụ thể.' },
                { era: 'Cuối TK 19', tag: '⚠️ Khủng hoảng', color: 'text-red-500', content: 'Phát hiện electron — không nhìn thấy được, chuyển động như sóng. Nhiều người kết luận: "Vật chất tan biến — chỉ còn năng lượng và phương trình toán học!" → Khủng hoảng triết học thật sự.' },
                { era: '1909', tag: '✓ Lenin giải quyết', color: 'text-gold', content: 'Lenin viết định nghĩa vật chất mới — thoát khỏi mọi dạng vật chất cụ thể, chỉ giữ lại thuộc tính căn bản nhất: thực tại khách quan.' },
              ].map((h, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white border-2 border-gold/50"></div>
                  <div className="glass-quantum p-5 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold ${h.color}`}>{h.era}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest border border-current/20 px-2 py-0.5 rounded-full" style={{ color: 'inherit' }}>{h.tag}</span>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">{h.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Định nghĩa Lenin */}
          <div className="mb-12">
            <h3 className="font-bold font-serif text-white/90 text-xl mb-6 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#0A121A] text-white text-xs flex items-center justify-center">2</span>
              Định nghĩa vật chất của Lenin
            </h3>
            <div className="bg-[#0A121A] p-8 md:p-12 rounded-[2.5rem] mb-8">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Lenin, 1909</p>
              <p className="font-serif text-white text-xl leading-relaxed italic">
                "Vật chất là một phạm trù triết học dùng để chỉ{' '}
                <span className="text-gold not-italic font-bold">thực tại khách quan</span>,
                được đem lại cho con người trong{' '}
                <span className="text-gold not-italic font-bold">cảm giác</span>,
                được cảm giác của chúng ta chép lại, chụp lại, phản ánh, và tồn tại{' '}
                <span className="text-gold not-italic font-bold">không lệ thuộc vào cảm giác</span>."
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { phrase: '"Phạm trù triết học"', meaning: 'Vật chất không phải vật thể cụ thể nào — không phải nguyên tử, không phải nước hay lửa. Đây là khái niệm chỉ toàn bộ thực tại khách quan. Lenin tách vật chất khỏi mọi dạng cụ thể — đây là điểm sắc bén nhất.' },
                { phrase: '"Thực tại khách quan"', meaning: 'Thuộc tính DUY NHẤT và căn bản nhất: tồn tại bên ngoài và độc lập với ý thức. Mặt trăng vẫn ở đó dù không ai nhìn vào nó. Đây là ranh giới phân biệt duy vật với duy tâm.' },
                { phrase: '"Được đem lại trong cảm giác"', meaning: 'Vật chất không phải bí ẩn vĩnh viễn — con người nhận thức được qua cảm giác, thực nghiệm, khoa học. Phân biệt duy vật với bất khả tri luận.' },
                { phrase: '"Không lệ thuộc vào cảm giác"', meaning: 'Dù con người có nhận thức hay không — vật chất vẫn tồn tại. Phản bác Berkeley: "Tồn tại là được nhận thức."' },
              ].map((item, i) => (
                <div key={i} className="glass-quantum p-6 rounded-2xl border-l-4 border-l-gold">
                  <p className="font-serif italic text-gold text-sm mb-3">{item.phrase}</p>
                  <p className="text-sm text-white/70 leading-relaxed">{item.meaning}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 bg-gold/5 border border-gold/20 rounded-xl">
              <p className="text-sm text-white/90 font-bold">
                💡 Lenin nói: Không phải vật chất tan biến — mà <span className="text-gold">giới hạn nhận thức cũ về vật chất</span> tan biến. Electron vẫn là vật chất vì nó vẫn tồn tại khách quan — chỉ là vật chất ở trình độ sâu hơn.
              </p>
            </div>
          </div>

          {/* 3. Hình thức tồn tại */}
          <div className="mb-12">
            <h3 className="font-bold font-serif text-white/90 text-xl mb-6 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#0A121A] text-white text-xs flex items-center justify-center">3</span>
              Các hình thức tồn tại của vật chất
            </h3>

            {/* Vận động */}
            <div className="glass-quantum p-8 rounded-3xl mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-gold" size={20} />
                <h4 className="font-bold text-white/90 font-serif text-lg">① Vận động — thuộc tính cố hữu</h4>
              </div>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">Vật chất không vận động thì không tồn tại. Vận động không có vật chất thì không có gì để vận động. Hai thứ không thể tách rời.</p>

              {/* Interactive Motion Types */}
              <div className="flex gap-2 flex-wrap mb-4">
                {motionForms.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMotion(i)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeMotion === i ? 'bg-[#0A121A] text-white shadow-lg scale-105' : 'bg-cyan-500/10 text-white/60 hover:bg-[#0A121A]/10'}`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
              <div className={`${motionForms[activeMotion].color} border p-5 rounded-2xl transition-all duration-300`}>
                <p className="font-bold text-white/90 mb-1">{motionForms[activeMotion].name}</p>
                <p className="text-sm text-white/70 mb-2">{motionForms[activeMotion].desc}</p>
                <p className="text-xs text-white/50 italic">Ví dụ: {motionForms[activeMotion].example}</p>
              </div>
              <div className="mt-4 p-4 bg-cyan-500/10 rounded-xl">
                <p className="text-xs text-white/60 leading-relaxed">
                  <strong>"Đứng yên"</strong> là gì? Chỉ là vận động tương đối. Cái ghế bạn ngồi đang chuyển động <strong>460 m/s</strong> cùng Trái Đất, <strong>30 km/s</strong> quanh Mặt Trời, <strong>220 km/s</strong> quanh Ngân Hà — đồng thời các phân tử trong ghế đang dao động nhiệt liên tục.
                </p>
              </div>
            </div>

            {/* Không gian & Thời gian */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-quantum p-6 rounded-2xl">
                <h4 className="font-bold text-white/90 font-serif mb-3">② Không gian</h4>
                <p className="text-sm text-white/70 leading-relaxed">Hình thức tồn tại của vật chất về mặt <strong>quảng tính</strong> — chiều dài, rộng, cao, vị trí tương đối. Không thể có không gian rỗng không có vật chất.</p>
              </div>
              <div className="glass-quantum p-6 rounded-2xl">
                <h4 className="font-bold text-white/90 font-serif mb-3">③ Thời gian</h4>
                <p className="text-sm text-white/70 leading-relaxed">Hình thức tồn tại của vật chất về mặt <strong>trình tự</strong> — trước, sau, đồng thời, tốc độ diễn biến. Thời gian chảy khác nhau tùy cường độ hấp dẫn.</p>
              </div>
            </div>
            <div className="mt-4 bg-slate-900 text-white p-6 rounded-2xl flex gap-4 items-start">
              <div className="text-2xl flex-shrink-0">⚡</div>
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Einstein xác nhận quan điểm duy vật</p>
                <p className="text-sm text-white/80 leading-relaxed">Thuyết tương đối chứng minh không-thời gian bị bẻ cong bởi vật chất có khối lượng. Gần vật thể khổng lồ → không gian cong, thời gian chậm lại. <strong className="text-gold">Không có vật chất → không có không-thời gian.</strong> Đây là xác nhận khoa học cho triết học Mác.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ════ PART II: Ý THỨC ════ */}
        <section>
          <SectionHeader num="II" icon={<Brain size={18} />} title="Bản chất của Ý Thức" subtitle="Ý thức từ đâu mà ra — và bản chất của nó là gì?" />

          {/* Nguồn gốc */}
          <div className="mb-12">
            <h3 className="font-bold font-serif text-white/90 text-xl mb-6 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#0A121A] text-white text-xs flex items-center justify-center">1</span>
              Nguồn gốc của ý thức
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tự nhiên */}
              <div className="glass-quantum p-8 rounded-3xl border-t-4 border-t-blue-400">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">① Nguồn gốc tự nhiên</p>
                <h4 className="font-serif text-white/90 text-lg mb-4">Não người & Phản ánh</h4>
                <div className="space-y-3">
                  {[
                    { level: 'Vật chất vô cơ', desc: 'Phản ánh cơ học — đá bị mài mòn do nước', h: 'h-2' },
                    { level: 'Thực vật', desc: 'Phản ánh sinh lý — hướng về ánh sáng', h: 'h-3' },
                    { level: 'Động vật', desc: 'Phản ánh tâm lý — phản xạ có điều kiện', h: 'h-5' },
                    { level: 'Con người', desc: 'Ý thức — phản ánh cao nhất, chủ động, sáng tạo', h: 'h-8' },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`${r.h} w-1 bg-blue-400 rounded-full flex-shrink-0`}></div>
                      <div>
                        <p className="text-xs font-bold text-white/90">{r.level}</p>
                        <p className="text-[11px] text-white/60">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Xã hội */}
              <div className="glass-quantum p-8 rounded-3xl border-t-4 border-t-gold">
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">② Nguồn gốc xã hội</p>
                <h4 className="font-serif text-white/90 text-lg mb-4">Lao động & Ngôn ngữ</h4>
                <div className="bg-cyan-500/10 p-4 rounded-xl mb-4">
                  <p className="text-xs text-white/70 leading-relaxed italic mb-3">
                    "Điều phân biệt kiến trúc sư tệ nhất với con ong giỏi nhất là: kiến trúc sư xây công trình trong đầu trước khi xây trong thực tế."
                  </p>
                  <p className="text-xs font-bold text-gold">— Karl Marx</p>
                </div>
                {/* Cycle */}
                <div className="flex flex-col gap-2 text-center text-xs">
                  {[
                    'Lao động có mục đích',
                    '↓ cần giao tiếp',
                    'Ngôn ngữ phát triển',
                    '↓ mã hóa tư duy',
                    'Ý thức phức tạp hơn',
                    '↓ lao động phức tạp hơn',
                    '↻ Chu kỳ tiếp theo...',
                  ].map((step, i) => (
                    <div key={i} className={`py-1.5 px-3 rounded-lg text-[11px] font-medium ${step.startsWith('↓') || step.startsWith('↻') ? 'text-gold/70' : 'bg-gold/10 text-white/90'}`}>{step}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bản chất ý thức */}
          <div className="mb-12">
            <h3 className="font-bold font-serif text-white/90 text-xl mb-6 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#0A121A] text-white text-xs flex items-center justify-center">2</span>
              Bản chất của ý thức
            </h3>
            <div className="space-y-4">
              {[
                { n: '①', t: 'Sự phản ánh thực tại khách quan vào não người', d: 'Ý thức không tạo ra thế giới — nó phản ánh thế giới. Nội dung đến từ bên ngoài — không phải từ bản thân não. Nhưng phản ánh của ý thức có tính chọn lọc, chủ động, và sáng tạo.' },
                { n: '②', t: 'Hình ảnh chủ quan của thế giới khách quan', d: 'Cùng một cơn bão: người nông dân → lo mùa màng. Nhà thơ → thấy vẻ đẹp. Nhà khí tượng → phân tích áp suất. Cùng thực tại khách quan — ba hình ảnh chủ quan khác nhau.' },
                { n: '③', t: 'Tính năng động sáng tạo', d: 'Ý thức hình dung thế giới như nó có thể là → định hướng hoạt động cải tạo. Con vật phản ứng với hiện tại. Con người hình dung tương lai và hành động hướng đến tương lai.' },
                { n: '④', t: 'Bản chất xã hội', d: 'Đứa trẻ lớn lên trong rừng không có ngôn ngữ, không tiếp xúc xã hội → không phát triển ý thức người đầy đủ — dù não bộ sinh học bình thường. Bằng chứng rõ ràng nhất.' },
              ].map((item, i) => (
                <div key={i} className="glass-quantum p-6 rounded-2xl flex gap-5">
                  <span className="text-gold font-bold text-xl font-serif flex-shrink-0 w-8">{item.n}</span>
                  <div>
                    <h4 className="font-bold text-white/90 mb-2 text-sm">{item.t}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kết cấu ý thức */}
          <div>
            <h3 className="font-bold font-serif text-white/90 text-xl mb-6 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#0A121A] text-white text-xs flex items-center justify-center">3</span>
              Kết cấu của ý thức
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {consciousnessStructure.map((item, i) => (
                <div key={i} className="glass-quantum p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-white/90 font-serif mb-2">{item.name}</h4>
                  <p className="text-xs text-white/60 mb-3">{item.desc}</p>
                  <div className="w-full h-px bg-gold/20 mb-3"></div>
                  <p className="text-[10px] text-gold leading-relaxed">{item.role}</p>
                </div>
              ))}
            </div>
            {/* Consciousness Layers */}
            <div className="bg-gradient-to-b from-navy to-navy/80 rounded-3xl p-8 text-white">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6 text-center">Theo chiều sâu — Các tầng tâm lý</p>
              <div className="space-y-3">
                {[
                  { name: 'Ý thức', sub: 'Conscious', bg: 'bg-white/20', w: 'w-full', desc: 'Những gì bạn biết mình đang nghĩ. Tầng nổi của tảng băng.' },
                  { name: 'Tiền ý thức', sub: 'Preconscious', bg: 'bg-white/10', w: 'w-3/4 mx-auto', desc: 'Ký ức và thói quen có thể gọi ra được khi cần.' },
                  { name: 'Vô thức', sub: 'Unconscious — Freud', bg: 'bg-gold/20', w: 'w-1/2 mx-auto', desc: 'Vận hành bên dưới, ý thức không tiếp cận trực tiếp được.' },
                  { name: 'Ý thức xã hội', sub: 'Tầng vĩ mô', bg: 'bg-gold/30', w: 'w-full border-t-2 border-gold/30', desc: 'Hệ thống tư tưởng, giá trị, chuẩn mực của cả xã hội.' },
                ].map((t, i) => (
                  <div key={i} className={`${t.bg} ${t.w} rounded-xl p-4`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-white text-sm">{t.name}</span>
                        <span className="text-white/40 text-[10px] ml-2">{t.sub}</span>
                      </div>
                    </div>
                    <p className="text-white/60 text-xs mt-1">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════ PART III: MỐI QUAN HỆ ════ */}
        <section>
          <SectionHeader num="III" icon={<RotateCcw size={18} />} title="Mối quan hệ biện chứng" subtitle="Vật chất quyết định ý thức — nhưng ý thức không thụ động." />

          {/* Sơ đồ chu kỳ nhận thức */}
          <div className="glass-quantum p-8 md:p-12 rounded-[3rem] mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy/3 to-gold/3"></div>
            <h3 className="font-serif text-white/90 text-xl mb-8 text-center relative z-10">Chu kỳ nhận thức — thực tiễn</h3>
            <div className="relative z-10 flex flex-col items-center space-y-0 max-w-sm mx-auto">
              {[
                { label: 'Thực tại khách quan', sub: '(Vật chất)', bg: 'bg-[#0A121A] text-white', arrow: 'Tác động vào giác quan →' },
                { label: 'Nhận thức cảm tính', sub: 'Cảm giác · Tri giác · Biểu tượng', bg: 'bg-blue-900/30 border border-blue-700/50 text-white/90', arrow: 'Tư duy trừu tượng hóa →' },
                { label: 'Nhận thức lý tính', sub: 'Khái niệm · Phán đoán · Suy luận', bg: 'bg-gold/10 border border-gold/30 text-white/90', arrow: 'Quay về thực tiễn kiểm nghiệm →' },
                { label: 'Thực tiễn', sub: 'Kiểm nghiệm & Cải tạo', bg: 'bg-[#0A121A] text-white', arrow: null },
              ].map((step, i) => (
                <div key={i} className="w-full flex flex-col items-center">
                  <div className={`w-full p-4 rounded-2xl text-center ${step.bg}`}>
                    <p className="font-bold text-sm font-serif">{step.label}</p>
                    <p className="text-[10px] opacity-60 mt-1">{step.sub}</p>
                  </div>
                  {step.arrow && (
                    <div className="flex flex-col items-center py-2">
                      <div className="w-px h-3 bg-gold/40"></div>
                      <p className="text-[10px] text-gold/70 italic text-center px-2">{step.arrow}</p>
                      <div className="w-px h-3 bg-gold/40"></div>
                      <div className="w-2 h-2 border-r-2 border-b-2 border-gold/40 rotate-45 -mt-1"></div>
                    </div>
                  )}
                </div>
              ))}
              <div className="text-center mt-4">
                <p className="text-gold text-xs italic">↻ Chu kỳ nhận thức mới bắt đầu...</p>
              </div>
            </div>
          </div>

          {/* 2 chiều tác động */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass-quantum p-8 rounded-3xl border-t-4 border-t-navy">
              <h4 className="font-serif text-white/90 text-xl mb-6">Vật chất → Ý thức</h4>
              <div className="space-y-4">
                <HighlightBlock label="① Quyết định nguồn gốc" text="Ý thức chỉ xuất hiện khi vật chất đạt trình độ tổ chức cao — não người. Không có não → không có ý thức." />
                <HighlightBlock label="② Quyết định nội dung" text='"Không phải ý thức của con người quyết định tồn tại của họ — mà ngược lại, tồn tại xã hội quyết định ý thức của họ." — Marx' />
                <HighlightBlock label="③ Quyết định biến đổi" text="Khi điều kiện vật chất thay đổi → ý thức sớm muộn phải thay đổi theo. Không thể giữ ý thức cũ mãi khi vật chất đã thay đổi." />
              </div>
            </div>
            <div className="glass-quantum p-8 rounded-3xl border-t-4 border-t-gold">
              <h4 className="font-serif text-white/90 text-xl mb-6">Ý thức → Vật chất</h4>
              <div className="space-y-4">
                <HighlightBlock label="① Thúc đẩy hoặc kìm hãm" text="Ý thức đúng đắn → hành động đúng → thay đổi vật chất theo hướng tốt. Ý thức sai lầm → hành động sai → thay đổi xấu hoặc không thay đổi được." />
                <HighlightBlock label="② Phụ thuộc vào" text="Mức độ phản ánh đúng thực tại · Mức độ thâm nhập vào quần chúng · Điều kiện vật chất cho phép." />
                <HighlightBlock label="③ Giới hạn quan trọng nhất" text="Ý thức không thể tạo ra thứ không có cơ sở vật chất. Không thể dùng nghị quyết để thay thế công nghệ." />
              </div>
            </div>
          </div>

          {/* Thực tiễn */}
          <div className="bg-[#0A121A] rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <RotateCcw className="text-gold" size={20} />
              <h4 className="font-serif text-white text-xl">Thực tiễn — Cầu nối biện chứng</h4>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: '①', t: 'Cơ sở', d: 'Con người nhận thức thế giới thông qua việc tác động vào thế giới.' },
                { n: '②', t: 'Động lực', d: 'Nhu cầu thực tiễn thúc đẩy nhận thức phát triển. Cần vượt biển → nghiên cứu thiên văn.' },
                { n: '③', t: 'Mục đích', d: 'Lý luận phải trở về thực tiễn. Nhận thức không phải mục đích tự thân.' },
                { n: '④', t: 'Tiêu chuẩn chân lý', d: 'Lý thuyết đúng hay sai → đưa vào thực tiễn → kết quả nói lên tất cả.' },
              ].map((p, i) => (
                <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/10">
                  <div className="text-gold font-bold font-serif text-lg mb-1">{p.n} {p.t}</div>
                  <p className="text-xs text-white/60 leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ PART IV: PHƯƠNG PHÁP LUẬN ════ */}
        <section>
          <SectionHeader num="IV" icon={<Zap size={18} />} title="Ý nghĩa phương pháp luận" subtitle="Từ lý luận đến thực tiễn — tránh hai sai lầm cực đoan." />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-quantum p-8 rounded-3xl border-t-4 border-t-gold">
              <div className="text-3xl mb-4">①</div>
              <h4 className="font-bold text-white/90 font-serif text-lg mb-3">Xuất phát từ thực tế khách quan</h4>
              <p className="text-sm text-white/70 leading-relaxed">Mọi quyết định phải dựa trên phân tích điều kiện vật chất thực tế — không phải nguyện vọng hay lý tưởng.</p>
            </div>
            <div className="glass-quantum p-8 rounded-3xl border-t-4 border-t-navy">
              <div className="text-3xl mb-4">②</div>
              <h4 className="font-bold text-white/90 font-serif text-lg mb-3">Phát huy tính năng động sáng tạo</h4>
              <p className="text-sm text-white/70 leading-relaxed">Tôn trọng điều kiện khách quan không có nghĩa là thụ động. Trong cùng điều kiện — ý thức đúng đắn tạo ra kết quả hoàn toàn khác nhau.</p>
            </div>
            <div className="glass-quantum p-8 rounded-3xl border-t-4 border-t-red-400">
              <div className="text-3xl mb-4">③</div>
              <h4 className="font-bold text-white/90 font-serif text-lg mb-3">Chống hai khuynh hướng sai</h4>
              <div className="space-y-2 mt-2">
                <div className="bg-red-500/10 p-3 rounded-xl text-xs text-white/70"><strong>Duy vật tầm thường:</strong> Chỉ thấy điều kiện vật chất, thụ động ỷ lại.</div>
                <div className="bg-purple-500/10 p-3 rounded-xl text-xs text-white/70"><strong>Duy ý chí:</strong> Bỏ qua điều kiện vật chất, áp đặt mong muốn → thất bại.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ════ FAQ ════ */}
        <section>
          <SectionHeader num="V" icon={<HelpCircle size={18} />} title="Câu hỏi hóc búa" subtitle="Những câu chạm đến giới hạn của lý luận." />
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className={`glass-quantum rounded-2xl overflow-hidden border transition-colors duration-300 ${openFaq === i ? 'border-gold/40' : 'border-transparent'}`}>
                <button
                  className="w-full p-6 text-left flex items-start justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-gold font-bold text-sm flex-shrink-0 font-serif">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm font-serif text-white/90 leading-relaxed">{item.q}</p>
                  </div>
                  <ChevronDown size={18} className={`text-gold flex-shrink-0 mt-1 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 ml-10 border-t border-gold/10 pt-4">
                    <p className="text-sm text-white/70 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ════ CONCLUSION ════ */}
        <section className="bg-[#0A121A] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6">Điều quan trọng nhất để nhớ</p>
            <div className="flex gap-4 mb-6 p-5 bg-white/5 rounded-xl border border-white/10">
              <span className="text-red-400 font-bold flex-shrink-0">✗</span>
              <p className="text-white/50 text-sm line-through">"Vật chất quyết định ý thức — vậy ý thức không quan trọng, chỉ cần lo điều kiện vật chất là đủ."</p>
            </div>
            <div className="flex gap-4 mb-10 p-5 bg-gold/10 rounded-xl border border-gold/20">
              <span className="text-gold font-bold flex-shrink-0">✓</span>
              <p className="text-white text-sm leading-relaxed">Chính vì ý thức phản ánh vật chất — nên ý thức đúng đắn, khoa học là <strong className="text-gold">công cụ mạnh nhất</strong> để cải tạo vật chất. Hiểu đúng quy luật khách quan → hành động đúng → thay đổi thực tại hiệu quả hơn.</p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="font-serif text-xl text-white/90 italic leading-relaxed mb-4">
                Vật chất tạo ra ý thức — nhưng ý thức quay lại hỏi: "Vật chất là gì?" Đó là khoảnh khắc vũ trụ tự hỏi về chính mình — và không có gì kỳ diệu hơn điều đó trong toàn bộ lịch sử 13,8 tỷ năm của vũ trụ.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between border-t border-white/10 pt-8">
          <Link to="/modules/intro" className="inline-flex items-center gap-3 px-6 py-3 text-white/50 hover:text-white/90 rounded-full text-sm font-bold uppercase tracking-widest transition-colors">
            <ArrowLeft size={16} /> Bài trước
          </Link>
          <Link to="/modules/pbc" className="inline-flex items-center gap-3 px-6 py-3 bg-[#0A121A] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#0A121A]/80 transition-colors">
            Phép Biện chứng <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  )
}
