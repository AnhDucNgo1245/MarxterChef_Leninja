import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, Building2, Layers, Network, HelpCircle, Clock } from 'lucide-react'

/* ─── DATA ─── */

const historicalExamples = [
  {
    id: 'medieval',
    label: 'Trung Cổ châu Âu',
    tag: 'CSHT phong kiến',
    csht: {
      title: 'Cơ sở hạ tầng phong kiến',
      points: ['Địa chủ quý tộc sở hữu toàn bộ đất đai', 'Nông nô gắn với ruộng đất, nộp địa tô', 'Kinh tế tự cấp tự túc, thị trường hạn chế'],
    },
    kttt: {
      title: 'Kiến trúc thượng tầng Công giáo',
      points: [
        { icon: '⛪', name: 'Tôn giáo', desc: '"Trật tự xã hội do Chúa sắp đặt — người nghèo phải an phận, người giàu được Chúa chọn."' },
        { icon: '👑', name: 'Nhà nước', desc: 'Quân chủ thần quyền — vua cai trị theo ý Chúa.' },
        { icon: '📜', name: 'Pháp luật', desc: 'Bảo vệ quyền sở hữu đất và thế tập quý tộc.' },
        { icon: '🎨', name: 'Nghệ thuật', desc: 'Nhà thờ, thánh tích, tranh thánh — ca ngợi Thượng đế và trật tự thần thánh.' },
      ],
    },
    conclusion: 'KTTT Công giáo biện minh và củng cố CSHT phong kiến hoàn hảo — người nông nô không nổi loạn vì tin rằng địa vị của họ là ý Chúa.',
    color: 'border-amber-400',
    bg: 'bg-amber-50',
  },
  {
    id: 'uk18',
    label: 'Anh TK 18–19',
    tag: 'CSHT tư bản',
    csht: {
      title: 'Cơ sở hạ tầng tư bản',
      points: ['Tư sản công nghiệp sở hữu máy móc nhà máy', 'Công nhân bán sức lao động tự do', 'Thị trường tự do, tích lũy tư bản'],
    },
    kttt: {
      title: 'Kiến trúc thượng tầng tự do chủ nghĩa',
      points: [
        { icon: '📈', name: 'Triết học', desc: 'Adam Smith — bàn tay vô hình, tự do thị trường là tự nhiên và hiệu quả nhất.' },
        { icon: '🙏', name: 'Đạo đức', desc: 'Đạo đức Tin Lành — làm giàu là đức hạnh, nghèo là lười biếng.' },
        { icon: '⚖️', name: 'Pháp luật', desc: 'Bảo vệ quyền tư hữu, hợp đồng tự do, sở hữu trí tuệ.' },
        { icon: '🏛️', name: 'Nhà nước', desc: 'Dân chủ tư sản — bảo vệ tự do cá nhân và tài sản tư nhân.' },
      ],
    },
    conclusion: 'KTTT tự do chủ nghĩa biện minh cho CSHT tư bản — coi thị trường tự do, tư hữu, cạnh tranh là "tự nhiên" và "tất yếu" — không phải lựa chọn lịch sử có thể thay đổi.',
    color: 'border-blue-400',
    bg: 'bg-stone-900/30',
  },
  {
    id: 'vietnam',
    label: 'Việt Nam Đổi Mới 1986',
    tag: 'Mâu thuẫn CSHT — KTTT',
    csht: {
      title: 'Trước 1986 → Sau 1986',
      points: ['Trước: kinh tế bao cấp tập trung — nhà nước quản lý toàn bộ sản xuất', 'Mâu thuẫn: CSHT kìm hãm LLSX → thiếu lương thực, khủng hoảng', 'Sau 1986: kinh tế thị trường định hướng XHCN — cho phép tư nhân, thị trường'],
    },
    kttt: {
      title: 'KTTT đang thay đổi theo (nhưng có độ trễ)',
      points: [
        { icon: '💭', name: 'Tư tưởng', desc: 'Chấp nhận kinh tế tư nhân là "bộ phận quan trọng của nền kinh tế."' },
        { icon: '📋', name: 'Pháp luật', desc: 'Luật Doanh nghiệp, Luật Đầu tư, Luật Sở hữu trí tuệ — phù hợp kinh tế thị trường.' },
        { icon: '🏛️', name: 'Nhà nước', desc: 'Chuyển từ "quản lý" sang "kiến tạo" — phục vụ doanh nghiệp thay vì chỉ huy.' },
        { icon: '🎓', name: 'Giáo dục', desc: 'Đào tạo kỹ năng thị trường, tư duy khởi nghiệp.' },
      ],
    },
    conclusion: 'Độ trễ vẫn còn: nhiều tư duy, thể chế, thói quen từ thời bao cấp vẫn tồn tại — đây là biểu hiện điển hình của độ trễ KTTT.',
    color: 'border-red-400',
    bg: 'bg-orange-900/20',
  },
  {
    id: 'digital',
    label: 'Thời đại số (Hiện tại)',
    tag: 'CSHT đang biến đổi',
    csht: {
      title: 'CSHT số đang hình thành',
      points: ['Dữ liệu là tư liệu sản xuất mới — ai kiểm soát data, kiểm soát quyền lực', 'Nền tảng số độc quyền thay thế nhà máy truyền thống', 'AI bắt đầu thay thế người lao động — mâu thuẫn LLSX vs QHSX mới'],
    },
    kttt: {
      title: 'KTTT đang bị áp lực thay đổi',
      points: [
        { icon: '⚖️', name: 'Pháp luật', desc: 'Luật dữ liệu, chống độc quyền số — đang được viết lại, chưa hoàn chỉnh.' },
        { icon: '🗳️', name: 'Chính trị', desc: 'Dân chủ số, thao túng thông tin — thể chế chưa thích nghi kịp.' },
        { icon: '🎓', name: 'Giáo dục', desc: 'Học trực tuyến, kỹ năng số — cải cách chậm so với nhu cầu.' },
        { icon: '🤖', name: 'Đạo đức', desc: 'AI ethics, quyền riêng tư — tranh luận chưa có kết luận.' },
      ],
    },
    conclusion: 'Đây là bằng chứng sống động nhất của mâu thuẫn CSHT — KTTT đang diễn ra trước mắt chúng ta trong thời gian thực.',
    color: 'border-emerald-400',
    bg: 'bg-emerald-50',
  },
]

const faqItems = [
  { q: 'Nếu CSHT quyết định KTTT — thì thay đổi tư tưởng, văn hóa mà không thay đổi kinh tế có vô nghĩa không?', a: 'Không hoàn toàn vô nghĩa — vì KTTT tác động ngược lại CSHT. Thay đổi tư tưởng có thể tạo áp lực thay đổi CSHT, định hướng và đẩy nhanh thay đổi kinh tế. Tuy nhiên Mác cảnh báo: KTTT không thể tự mình thay đổi căn bản khi chưa có sự thay đổi tương ứng ở CSHT. Cải cách tư tưởng thuần túy mà bỏ qua cải cách kinh tế = duy ý chí.' },
  { q: 'Mác nói nhà nước là công cụ của giai cấp thống trị — nhưng nhiều nhà nước hiện đại có phúc lợi xã hội, bảo vệ người nghèo. Điều đó có phủ nhận lý thuyết của Mác không?', a: 'Không phủ nhận — mà bổ sung. Phúc lợi xã hội ra đời không phải do lòng tốt của tư sản — mà do đấu tranh giai cấp (áp lực từ phong trào công nhân, Liên Xô cạnh tranh, cách mạng xã hội chủ nghĩa). Nhà nước phúc lợi là kết quả của mâu thuẫn giai cấp được quản lý — không phải bằng chứng nhà nước đứng trên giai cấp. Mác sẽ hỏi: ai quyết định mức phúc lợi, và điều kiện nào dẫn đến cắt giảm nó?' },
  { q: 'Nếu tôn giáo chỉ là KTTT phản ánh CSHT — làm sao giải thích các tôn giáo lớn (Phật giáo, Cơ Đốc) tồn tại qua nhiều CSHT hoàn toàn khác nhau?', a: 'Đây là điểm Mác thừa nhận KTTT có tính tương đối độc lập. Tôn giáo không đơn giản là gương phản chiếu CSHT — nó có đời sống nội tại, khả năng thích nghi và tái diễn giải trong các CSHT khác nhau. Phật giáo có thể biện minh cho cả chế độ quân chủ và nền dân chủ — bằng cách diễn giải khác nhau. Điều Mác chỉ ra là mỗi lần diễn giải đó phục vụ lợi ích giai cấp nào.' },
  { q: '"Tồn tại xã hội quyết định ý thức" — nhưng ý thức cũng là một dạng "tồn tại". Vậy ranh giới giữa CSHT và KTTT ở đâu, và nó có tuyệt đối không?', a: 'Ranh giới đó không tuyệt đối — đây là vấn đề Engels thừa nhận về sau. Một số nhà tư tưởng Marxist (Gramsci, Althusser) đề xuất rằng ranh giới CSHT — KTTT mờ nhạt và tương tác hơn nhiều so với Mác ban đầu trình bày. Tuy nhiên nguyên lý cốt lõi vẫn giữ: điều kiện vật chất của sản xuất có tính quyết định ưu tiên so với hệ tư tưởng trong dài hạn.' },
]

function SectionHeader({ num, color, icon, title, sub }: { num: string, color: string, icon: React.ReactNode, title: string, sub: string }) {
  return (
    <div className={`flex items-start gap-5 mb-10 border-l-4 ${color} pl-5`}>
      <div className="pt-1">{icon}</div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-amber-100/40 mb-1">{num}</p>
        <h2 className="text-2xl md:text-3xl font-serif text-amber-50/90">{title}</h2>
        <p className="text-sm text-amber-100/50 italic mt-1">{sub}</p>
      </div>
    </div>
  )
}

export default function ModuleCNDVLS1() {
  const [activeExample, setActiveExample] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#150a05] selection:bg-gold/20 relative overflow-x-hidden">

      {/* ── CLOCKWORK GEARS BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.15]">
        {/* Giant Gear 1 */}
        <svg className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] text-amber-600" style={{ animation: 'glyph-rotate 60s linear infinite' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="50" cy="50" r="35" strokeDasharray="5, 10" strokeWidth="8"/>
          <circle cx="50" cy="50" r="20" />
          <path d="M50 15 L50 30 M50 70 L50 85 M15 50 L30 50 M70 50 L85 50 M25 25 L35 35 M65 65 L75 75 M25 75 L35 65 M65 25 L75 35" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
        {/* Giant Gear 2 */}
        <svg className="absolute top-[30%] -left-[5%] w-[400px] h-[400px] text-gold" style={{ animation: 'glyph-rotate 40s linear infinite reverse' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="50" cy="50" r="30" strokeDasharray="8, 8" strokeWidth="10"/>
          <circle cx="50" cy="50" r="15" />
          <path d="M50 20 L50 35 M50 65 L50 80 M20 50 L35 50 M65 50 L80 50" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </svg>
        {/* Giant Gear 3 */}
        <svg className="absolute -bottom-[20%] right-[10%] w-[800px] h-[800px] text-orange-700" style={{ animation: 'glyph-rotate 80s linear infinite' }} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="50" cy="50" r="40" strokeDasharray="4, 12" strokeWidth="15"/>
          <circle cx="50" cy="50" r="25" />
          <path d="M50 10 L50 25 M50 75 L50 90 M10 50 L25 50 M75 50 L90 50 M22 22 L32 32 M68 68 L78 78 M22 78 L32 68 M68 22 L78 32" />
        </svg>
      </div>

      {/* ── HERO ── */}
      <div className="bg-transparent text-white pt-40 pb-28 px-6 relative z-10 overflow-hidden border-b border-[#3d1c0c]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_60%)]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#150a05] to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/modules" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12">
            <ArrowLeft size={14} /> Quay lại Hub
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase mb-8">
            Module 5 · Duy vật Lịch sử — Phần 1
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Cơ sở Hạ tầng<br/>
            <span className="text-gold">&</span> Kiến trúc Thượng tầng
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mb-10 leading-relaxed">
            Từ triết học tự nhiên sang triết học xã hội — tại sao xã hội loài người có hình dạng như vậy và tại sao nó thay đổi.
          </p>

          {/* CSHT-KTTT Pyramid */}
          <div className="max-w-lg mx-auto mb-10">
            <div className="bg-blue-900/60 border border-blue-400/30 p-5 rounded-t-2xl text-center">
              <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-1">Kiến Trúc Thượng Tầng</p>
              <p className="text-white/70 text-xs">Nhà nước · Pháp luật · Tôn giáo · Triết học · Nghệ thuật</p>
            </div>
            <div className="flex items-center justify-center bg-[#1a0c06]/80 border-x border-blue-400/20 py-2">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 border-t border-dashed border-gold/40"></div>
                <span className="text-gold/70 text-[10px] font-bold uppercase tracking-widest">Quyết định · Tác động ngược</span>
                <div className="h-px w-12 border-t border-dashed border-gold/40"></div>
              </div>
            </div>
            <div className="bg-gold/20 border border-gold/40 p-5 text-center">
              <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1">Cơ Sở Hạ Tầng</p>
              <p className="text-white/70 text-xs">Quan hệ sở hữu · Tổ chức SX · Phân phối sản phẩm</p>
            </div>
            <div className="flex items-center justify-center bg-[#1a0c06]/80 border-x border-gold/20 py-2">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 border-t border-dashed border-emerald-400/40"></div>
                <span className="text-emerald-400/70 text-[10px] font-bold uppercase tracking-widest">Quyết định · Tác động ngược</span>
                <div className="h-px w-12 border-t border-dashed border-emerald-400/40"></div>
              </div>
            </div>
            <div className="bg-emerald-900/60 border border-emerald-400/30 p-5 rounded-b-2xl text-center">
              <p className="text-emerald-200 text-[10px] font-bold uppercase tracking-widest mb-1">Lực Lượng Sản Xuất</p>
              <p className="text-white/70 text-xs">Người lao động · Tư liệu sản xuất · Khoa học — công nghệ</p>
            </div>
          </div>

          <div className="glass-clockwork border border-gold/20 bg-white/5 p-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3 text-center">Câu hỏi trung tâm</p>
            <p className="text-white text-xl font-serif italic text-center leading-relaxed">
              "Cái gì quyết định cấu trúc và sự vận động của xã hội loài người?"
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-28 relative z-10">

        {/* ── DẪN NHẬP ── */}
        <section>
          <SectionHeader num="Dẫn nhập" color="border-[#3d1c0c]" icon={<Layers size={20} className="text-amber-50/90" />} title="Hai cách nhìn về lịch sử" sub="Triết học Mác đang phản bác điều gì?" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-900/20 border border-red-200 p-8 rounded-3xl">
              <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">✗ Cách nhìn duy tâm (trước Mác)</p>
              <div className="space-y-3">
                {[
                  ['🦁', 'Ý chí vĩ nhân', 'Napoleon, Caesar, Thành Cát Tư Hãn quyết định lịch sử'],
                  ['🙏', 'Thượng đế sắp đặt', 'Thần học Trung Cổ — lịch sử là kế hoạch của Chúa'],
                  ['💡', 'Ý niệm tuyệt đối', 'Hegel — Tinh thần tuyệt đối vận động tạo ra lịch sử'],
                  ['📖', 'Đạo đức và tư tưởng', 'Khai sáng — tư tưởng tiến bộ thay đổi xã hội'],
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item[0]}</span>
                    <div>
                      <p className="text-sm font-bold text-amber-50/90">{item[1]}</p>
                      <p className="text-xs text-amber-100/60">{item[2]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gold/10 border border-gold/30 p-8 rounded-3xl">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">✓ Cách nhìn duy vật (Mác)</p>
              <div className="bg-[#1a0c06] p-5 rounded-xl mb-4">
                <p className="font-serif italic text-white leading-relaxed text-sm">
                  "Không phải ý thức của con người quyết định tồn tại của họ — mà ngược lại, <span className="text-gold font-bold">tồn tại xã hội quyết định ý thức của họ</span>."
                </p>
                <p className="text-gold/60 text-[10px] mt-2">— Marx, Lời tựa 1859</p>
              </div>
              <p className="text-sm text-amber-100/70 leading-relaxed">
                Lịch sử không do ý chí hay thần linh — mà do <strong>điều kiện vật chất của sản xuất và sinh hoạt</strong> quyết định.
              </p>
            </div>
          </div>
        </section>

        {/* ── PHẦN II: CSHT ── */}
        <section>
          <SectionHeader num="Phần II" color="border-gold" icon={<Building2 size={20} className="text-amber-500" />} title="Cơ sở Hạ tầng (CSHT)" sub="Toàn bộ quan hệ sản xuất — không phải cơ sở vật chất kỹ thuật!" />

          {/* Warning box */}
          <div className="bg-orange-900/20 border-2 border-red-300 p-5 rounded-2xl mb-8 flex gap-4">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <p className="font-bold text-red-700 mb-1">Sai lầm phổ biến nhất</p>
              <p className="text-sm text-amber-100/70">
                <span className="line-through text-red-500">CSHT = nhà máy, đường sá, cầu cống, máy móc</span>
                {' '}→ Đó là <strong>LLSX</strong>.<br/>
                CSHT là <strong>quan hệ</strong> — thứ <em>vô hình</em> nhưng quyết định tất cả. Ai sở hữu? Ai ra lệnh? Ai được hưởng?
              </p>
            </div>
          </div>

          {/* 3 dimensions of CSHT */}
          <div className="glass-clockwork p-8 rounded-3xl mb-8">
            <h3 className="font-serif text-amber-50/90 text-xl mb-6 text-center">Cấu trúc 3 tầng của CSHT</h3>
            <div className="space-y-3">
              {[
                { n: '①', name: 'Quan hệ sở hữu TLSX', q: 'Ai sở hữu tư liệu sản xuất?', note: 'Mặt cơ bản nhất — quyết định hai mặt còn lại', color: 'bg-gold/20 border-gold/40', badge: 'Căn bản nhất' },
                { n: '②', name: 'Quan hệ tổ chức — quản lý', q: 'Ai ra lệnh? Ai thực hiện?', note: 'Do sở hữu quyết định — ai sở hữu sẽ có quyền quản lý', color: 'bg-amber-50 border-amber-200', badge: 'Phụ thuộc ①' },
                { n: '③', name: 'Quan hệ phân phối sản phẩm', q: 'Ai được hưởng bao nhiêu?', note: 'Kết quả tất yếu của sở hữu và quản lý', color: 'bg-slate-50 border-amber-800/50', badge: 'Phụ thuộc ①②' },
              ].map((row, i) => (
                <div key={i} className={`border ${row.color} p-5 rounded-2xl flex items-start gap-5`}>
                  <span className="text-2xl font-serif text-gold flex-shrink-0">{row.n}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h4 className="font-bold text-amber-50/90">{row.name}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-100/40 border border-[#3d1c0c]/20 px-2 py-0.5 rounded-full">{row.badge}</span>
                    </div>
                    <p className="text-gold text-sm font-medium italic mb-1">{row.q}</p>
                    <p className="text-xs text-amber-100/60">{row.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CSHT qua các hình thái */}
          <div className="glass-clockwork p-8 rounded-3xl mb-8">
            <h3 className="font-serif text-amber-50/90 text-xl mb-6">CSHT qua các hình thái lịch sử</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs min-w-[600px]">
                <thead>
                  <tr className="border-b border-amber-100/10">
                    <th className="text-left p-3 text-amber-100/50 font-bold uppercase tracking-wider">Hình thái</th>
                    <th className="p-3 text-center text-amber-100/50 font-bold uppercase tracking-wider">Sở hữu TLSX</th>
                    <th className="p-3 text-center text-amber-100/50 font-bold uppercase tracking-wider">Phân phối</th>
                    <th className="p-3 text-center text-amber-100/50 font-bold uppercase tracking-wider">Bóc lột</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { era: 'Nguyên thủy', own: 'Tập thể công cộng', dist: 'Chia đều theo nhu cầu', exploit: 'Không có', color: 'bg-yellow-900/20' },
                    { era: 'Nô lệ', own: 'Chủ nô sở hữu cả TLSX lẫn người', dist: 'Nô lệ không được gì', exploit: 'Trực tiếp, tàn bạo nhất', color: 'bg-orange-900/20' },
                    { era: 'Phong kiến', own: 'Địa chủ sở hữu đất', dist: 'Địa tô — phần lớn cho địa chủ', exploit: 'Qua địa tô', color: 'bg-amber-50' },
                    { era: 'Tư bản', own: 'Tư sản sở hữu TLSX', dist: 'Lương + giá trị thặng dư', exploit: 'Ẩn qua trao đổi', color: 'bg-stone-900/30' },
                    { era: 'XHCN', own: 'Công hữu về TLSX', dist: 'Phân phối theo lao động', exploit: 'Không còn giai cấp', color: 'bg-emerald-50' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t border-amber-100/10 ${row.color}`}>
                      <td className="p-3 font-bold text-amber-50/90">{row.era}</td>
                      <td className="p-3 text-center text-amber-100/70">{row.own}</td>
                      <td className="p-3 text-center text-amber-100/70">{row.dist}</td>
                      <td className="p-3 text-center text-amber-100/70">{row.exploit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Giá trị thặng dư */}
          <div className="bg-[#1a0c06] text-white p-8 rounded-3xl">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Khái niệm trung tâm — Giá trị thặng dư</p>
            <p className="text-white/70 text-sm mb-6">Mác giải thích tại sao tư bản là bóc lột dù mọi thứ trông có vẻ bình đẳng:</p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold font-bold font-serif text-lg">8h</span>
                <div className="flex-1 h-8 rounded-lg overflow-hidden flex">
                  <div className="w-1/2 bg-blue-400/40 border-r border-white/20 flex items-center justify-center">
                    <span className="text-xs text-blue-200 font-bold">4h = Lương</span>
                  </div>
                  <div className="w-1/2 bg-gold/40 flex items-center justify-center">
                    <span className="text-xs text-gold font-bold">4h = Giá trị thặng dư</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-400/10 p-4 rounded-xl border border-blue-400/20">
                  <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">Thời gian tất yếu</p>
                  <p className="text-white/80">Công nhân tạo ra giá trị = lương. Tư bản hoàn lại cho công nhân.</p>
                </div>
                <div className="bg-gold/10 p-4 rounded-xl border border-gold/20">
                  <p className="text-gold text-xs font-bold uppercase tracking-wider mb-2">Thời gian thặng dư</p>
                  <p className="text-white/80">Công nhân tạo ra giá trị vượt lương. Tư bản chiếm hữu — không hoàn lại.</p>
                </div>
              </div>
            </div>
            <div className="text-center p-4 bg-gold/10 rounded-xl border border-gold/20">
              <p className="font-serif text-gold text-lg">Giá trị thặng dư = Giá trị công nhân tạo ra − Lương nhận được</p>
            </div>
          </div>
        </section>

        {/* ── PHẦN III: KTTT ── */}
        <section>
          <SectionHeader num="Phần III" color="border-blue-400" icon={<Layers size={20} className="text-blue-500" />} title="Kiến trúc Thượng tầng (KTTT)" sub="Quan điểm, tư tưởng xã hội + thiết chế chính trị — xã hội tương ứng." />

          {/* Two layers */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-clockwork p-7 rounded-3xl border-t-4 border-t-indigo-400">
              <p className="text-indigo-500 text-xs font-bold uppercase tracking-widest mb-4">Lớp 1 — Hệ tư tưởng</p>
              <div className="space-y-2">
                {['Tư tưởng chính trị', 'Tư tưởng pháp quyền', 'Đạo đức', 'Tôn giáo', 'Nghệ thuật', 'Triết học', 'Khoa học (một phần)'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-amber-100/70 py-1.5 border-b border-amber-100/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-clockwork p-7 rounded-3xl border-t-4 border-t-blue-400">
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">Lớp 2 — Thiết chế</p>
              <div className="space-y-2">
                {[
                  { name: 'Nhà nước', note: 'quan trọng nhất' },
                  { name: 'Hệ thống pháp luật — tòa án', note: '' },
                  { name: 'Quân đội — cảnh sát', note: '' },
                  { name: 'Giáo hội — tổ chức tôn giáo', note: '' },
                  { name: 'Trường học — viện nghiên cứu', note: '' },
                  { name: 'Đảng phái chính trị', note: '' },
                  { name: 'Tổ chức xã hội dân sự', note: '' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-amber-100/70 py-1.5 border-b border-amber-100/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></div>
                    {item.name}
                    {item.note && <span className="text-[10px] text-blue-400 font-bold">({item.note})</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key KTTT elements */}
          <div className="space-y-4">
            {[
              {
                icon: '🏛️', name: 'Nhà nước', badge: 'Bộ phận quan trọng nhất',
                quote: '"Nhà nước là công cụ của giai cấp thống trị dùng để đàn áp các giai cấp khác."',
                points: ['Nắm bạo lực hợp pháp — quân đội, cảnh sát, tòa án, nhà tù', 'Bảo vệ quan hệ sở hữu của giai cấp thống trị', 'Tạo ra hệ thống pháp luật phù hợp với lợi ích giai cấp thống trị'],
                color: 'border-l-4 border-l-navy',
              },
              {
                icon: '⚖️', name: 'Pháp luật', badge: 'Ý chí giai cấp được luật hóa',
                quote: '"Pháp luật của các ông chỉ là ý chí của giai cấp các ông được nâng lên thành luật." — Tuyên ngôn Cộng sản',
                points: ['Bảo vệ quyền tư hữu → phục vụ ai có tài sản', 'Hợp đồng lao động → bảo vệ quyền tư bản sa thải', 'Luật hình sự → bảo vệ trật tự xã hội hiện tại'],
                color: 'border-l-4 border-l-blue-400',
              },
              {
                icon: '🙏', name: 'Tôn giáo', badge: 'KTTT phức tạp nhất',
                quote: '"Tôn giáo là tiếng thở dài của sinh linh bị áp bức, là trái tim của thế giới không có trái tim... Tôn giáo là thuốc phiện của nhân dân."',
                points: ['Phản ánh nỗi đau thực của con người trong xã hội bất công', 'Cung cấp sự an ủi ảo thay vì giải pháp thực tế', 'Biện minh cho trật tự xã hội hiện tại (ý Chúa, số phận, karma)'],
                color: 'border-l-4 border-l-amber-400',
              },
            ].map((item, i) => (
              <div key={i} className={`glass-clockwork p-7 rounded-2xl ${item.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-serif text-amber-50/90 font-bold text-lg">{item.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-100/40">{item.badge}</span>
                  </div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl mb-4 italic text-sm text-amber-100/80 font-serif">
                  {item.quote}
                </div>
                <ul className="space-y-1.5">
                  {item.points.map((p, j) => (
                    <li key={j} className="text-sm text-amber-100/70 flex gap-2">
                      <span className="text-gold flex-shrink-0">·</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── PHẦN IV: QUAN HỆ BIỆN CHỨNG ── */}
        <section>
          <SectionHeader num="Phần IV" color="border-emerald-400" icon={<Network size={20} className="text-emerald-500" />} title="Mối quan hệ biện chứng" sub="Không phải một chiều — mà là mạng lưới phản hồi phức tạp." />

          {/* Two directions */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Direction 1 */}
            <div className="glass-clockwork p-7 rounded-3xl border-t-4 border-t-gold">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Chiều 1 — CSHT → KTTT</p>
              <div className="space-y-4">
                {[
                  { n: '①', t: 'Quyết định sự xuất hiện', d: 'Mỗi CSHT tạo ra KTTT tương ứng. CSHT thay đổi → KTTT phải thay đổi theo — dù có độ trễ.' },
                  { n: '②', t: 'Quyết định cấu trúc', d: 'Hình dạng nhà nước, nội dung pháp luật, tính chất đạo đức, chủ đề nghệ thuật — tất cả phản ánh CSHT.' },
                  { n: '③', t: 'Quyết định sự biến đổi', d: 'Khi CSHT thay đổi căn bản → sớm hay muộn KTTT phải thay đổi theo.' },
                ].map((r, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-gold font-bold font-serif flex-shrink-0">{r.n}</span>
                    <div>
                      <p className="text-sm font-bold text-amber-50/90 mb-1">{r.t}</p>
                      <p className="text-xs text-amber-100/60 leading-relaxed">{r.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direction 2 */}
            <div className="glass-clockwork p-7 rounded-3xl border-t-4 border-t-blue-400">
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">Chiều 2 — KTTT → CSHT</p>
              <div className="space-y-4">
                {[
                  { n: '①', t: 'Khi KTTT phù hợp CSHT', d: 'Nhà nước bảo vệ quan hệ sở hữu → CSHT ổn định. Giáo dục đào tạo nhân lực → LLSX phát triển.', good: true },
                  { n: '②', t: 'Khi KTTT không còn phù hợp', d: 'Nhà nước quan liêu → kìm hãm kinh tế. Pháp luật lạc hậu → cản trở đổi mới. Tư tưởng giáo điều → không thích nghi được.', good: false },
                  { n: '③', t: 'KTTT tiến bộ thúc đẩy CSHT', d: 'Chính sách công nghiệp đúng đắn → LLSX phát triển. Giáo dục tốt → năng suất lao động cao hơn.', good: true },
                ].map((r, i) => (
                  <div key={i} className="flex gap-3">
                    <span className={`font-bold font-serif flex-shrink-0 ${r.good ? 'text-emerald-500' : 'text-red-400'}`}>{r.n}</span>
                    <div>
                      <p className="text-sm font-bold text-amber-50/90 mb-1">{r.t}</p>
                      <p className="text-xs text-amber-100/60 leading-relaxed">{r.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feedback cycle */}
          <div className="bg-[#1a0c06] text-white p-8 rounded-3xl">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6 text-center">Cơ chế vận hành — Khi CSHT thay đổi</p>
            <div className="max-w-lg mx-auto space-y-0">
              {[
                { step: 'CSHT thay đổi', sub: 'LLSX phát triển, mâu thuẫn tích lũy', icon: '⚙️' },
                { arrow: '↓ KTTT cũ không còn phù hợp' },
                { step: 'Áp lực thay đổi KTTT tích lũy', sub: 'Mâu thuẫn CSHT mới vs KTTT cũ', icon: '⚡' },
                { arrow: '↓ Phản ứng của giai cấp thống trị' },
                { step: 'Cải cách hoặc Cách mạng', sub: 'Linh hoạt → cải cách. Cứng nhắc → cách mạng', icon: '🔄' },
                { arrow: '↓ Kết quả' },
                { step: 'KTTT mới ra đời', sub: 'Phù hợp với CSHT mới → chu kỳ tiếp theo', icon: '✨' },
              ].map((item, i) => (
                'arrow' in item ? (
                  <div key={i} className="flex flex-col items-center py-2">
                    <div className="w-px h-3 bg-gold/30"></div>
                    <p className="text-gold/60 text-[10px] italic">{item.arrow}</p>
                    <div className="w-px h-3 bg-gold/30"></div>
                  </div>
                ) : (
                  <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-bold text-white">{item.step}</p>
                      <p className="text-white/50 text-xs">{item.sub}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* ── PHẦN V: ĐỘ TRỄ ── */}
        <section>
          <SectionHeader num="Phần V" color="border-purple-400" icon={<Clock size={20} className="text-purple-500" />} title="Độ trễ & Tính độc lập tương đối" sub="KTTT không thay đổi ngay khi CSHT thay đổi — và có đời sống riêng." />
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-clockwork p-7 rounded-3xl">
              <h4 className="font-serif text-amber-50/90 font-bold mb-4 flex items-center gap-2">
                <Clock size={16} className="text-purple-400" /> Nguyên nhân độ trễ
              </h4>
              <div className="space-y-4">
                {[
                  { n: '①', t: 'Quán tính của thiết chế', d: 'Nhà nước, pháp luật, giáo hội — một khi được xây dựng → có xu hướng tự bảo vệ và tồn tại lâu hơn CSHT sinh ra nó.' },
                  { n: '②', t: 'Quán tính của tư tưởng', d: 'Văn hóa, thói quen thay đổi chậm hơn cơ cấu kinh tế. Nhiều thế hệ cần đi qua trước khi thế giới quan mới thay thế cái cũ.' },
                  { n: '③', t: 'Lợi ích của giai cấp thống trị', d: 'Giai cấp đang nắm KTTT có lợi ích mạnh mẽ trong việc giữ nguyên KTTT — dù CSHT đã thay đổi.' },
                ].map((r, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-purple-400 font-bold font-serif flex-shrink-0">{r.n}</span>
                    <div>
                      <p className="text-sm font-bold text-amber-50/90 mb-1">{r.t}</p>
                      <p className="text-xs text-amber-100/60 leading-relaxed">{r.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-clockwork p-7 rounded-3xl">
              <h4 className="font-serif text-amber-50/90 font-bold mb-4">Tính độc lập tương đối</h4>
              <div className="space-y-3">
                {[
                  { icon: '📚', t: 'Lịch sử phát triển nội tại', d: 'Triết học, nghệ thuật phát triển theo logic riêng — không hoàn toàn do CSHT từng bước quyết định.' },
                  { icon: '🌍', t: 'Tồn tại lâu hơn CSHT', d: 'Tư tưởng Nho giáo tồn tại ở VN và TQ hàng thế kỷ sau khi chế độ phong kiến sụp đổ.' },
                  { icon: '✈️', t: 'Ảnh hưởng qua biên giới', d: 'Triết học Hy Lạp ảnh hưởng châu Âu cả nghìn năm sau. Phật giáo lan sang CSHT khác nhau.' },
                  { icon: '🎭', t: 'Nghệ thuật — độc lập nhất', d: 'Mác thừa nhận khó giải thích tại sao nghệ thuật Hy Lạp (CSHT nô lệ) vẫn có giá trị thẩm mỹ với TK 19.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-amber-900/20 rounded-xl">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-amber-50/90">{item.t}</p>
                      <p className="text-xs text-amber-100/60 mt-0.5 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Delay timeline */}
          <div className="bg-amber-900/20 border border-purple-200 p-6 rounded-2xl">
            <p className="text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">Ví dụ lịch sử — Cách mạng Pháp 1789</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-amber-50/90 mb-2">CSHT thay đổi nhanh</p>
                <p className="text-xs text-amber-100/70">CSHT tư bản thay thế phong kiến tương đối nhanh sau 1789.</p>
              </div>
              <div>
                <p className="text-sm font-bold text-amber-50/90 mb-2">KTTT thay đổi chậm hơn nhiều</p>
                <ul className="space-y-1">
                  {['Giáo hội Công giáo vẫn ảnh hưởng lớn nhiều thập kỷ', 'Tư tưởng quý tộc vẫn tồn tại trong văn hóa', 'Hệ thống giáo dục vẫn mang dấu ấn phong kiến'].map((p, i) => (
                    <li key={i} className="text-xs text-amber-100/70 flex gap-2"><span className="text-purple-400">·</span>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── PHẦN VI: VÍ DỤ LỊCH SỬ INTERACTIVE ── */}
        <section>
          <SectionHeader num="Phần VI" color="border-emerald-400" icon={<Network size={20} className="text-emerald-500" />} title="Ví dụ minh họa qua các thời đại" sub="CSHT và KTTT tương ứng — từ Trung Cổ đến thời đại số." />

          <div className="flex gap-2 flex-wrap mb-6">
            {historicalExamples.map((ex, i) => (
              <button key={i} onClick={() => setActiveExample(i)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${activeExample === i ? 'bg-[#1a0c06] text-white shadow-lg scale-105' : 'bg-amber-500/10 text-amber-100/60 hover:bg-[#1a0c06]/10'}`}>
                {ex.label}
              </button>
            ))}
          </div>

          <div className={`glass-clockwork p-8 rounded-3xl border-l-4 ${historicalExamples[activeExample].color} transition-all duration-300`}>
            <div className="flex items-center gap-3 mb-6">
              <span className={`text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${historicalExamples[activeExample].bg} ${historicalExamples[activeExample].color.replace('border', 'border').replace('-4', '')}`}>
                {historicalExamples[activeExample].tag}
              </span>
              <h3 className="font-serif text-amber-50/90 font-bold text-xl">{historicalExamples[activeExample].label}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">{historicalExamples[activeExample].csht.title}</p>
                <ul className="space-y-2">
                  {historicalExamples[activeExample].csht.points.map((p, i) => (
                    <li key={i} className="text-sm text-amber-100/70 flex gap-2 items-start">
                      <span className="text-gold flex-shrink-0 mt-0.5">·</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-3">{historicalExamples[activeExample].kttt.title}</p>
                <div className="space-y-2">
                  {historicalExamples[activeExample].kttt.points.map((p, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-stone-900/30/60 rounded-xl">
                      <span className="flex-shrink-0">{p.icon}</span>
                      <div>
                        <p className="text-xs font-bold text-amber-50/90">{p.name}</p>
                        <p className="text-[11px] text-amber-100/60">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 bg-gold/10 border border-gold/20 rounded-xl">
              <p className="text-sm text-amber-50/90 font-medium">
                <span className="text-gold font-bold">→ Kết luận: </span>
                {historicalExamples[activeExample].conclusion}
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <SectionHeader num="Câu hỏi hóc búa" color="border-[#3d1c0c]" icon={<HelpCircle size={20} className="text-amber-50/90" />} title="Tranh luận chuyên sâu" sub="Những câu hỏi thử thách giới hạn của lý thuyết CSHT — KTTT." />
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className={`glass-clockwork rounded-2xl overflow-hidden border transition-colors duration-300 ${openFaq === i ? 'border-gold/40' : 'border-transparent'}`}>
                <button className="w-full p-6 text-left flex items-start justify-between gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex items-start gap-4">
                    <span className="text-gold font-bold text-sm flex-shrink-0 font-serif">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm font-serif text-amber-50/90 leading-relaxed">{item.q}</p>
                  </div>
                  <ChevronDown size={18} className={`text-gold flex-shrink-0 mt-1 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 ml-10 border-t border-gold/10 pt-4">
                    <p className="text-sm text-amber-100/70 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── CONCLUSION ── */}
        <section className="bg-[#1a0c06] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6">Câu kết đáng nhớ nhất</p>
            <p className="font-serif text-xl text-white/90 italic leading-relaxed mb-8 max-w-3xl">
              Khi bạn đọc tin tức, xem phim, học ở trường, nghe lời dạy của tôn giáo — tất cả đó là KTTT đang vận hành.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                '"CSHT nào đã sinh ra những thứ này?"',
                '"Chúng đang phục vụ lợi ích của ai?"',
                '"Và liệu chúng có thể khác đi không?"',
              ].map((q, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <p className="font-serif italic text-gold text-sm leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-sm">Đặt được ba câu hỏi đó — bạn đã bắt đầu tư duy duy vật lịch sử thật sự.</p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between border-t border-amber-100/10 pt-8">
          <Link to="/modules/nhanthuc" className="inline-flex items-center gap-3 px-6 py-3 text-amber-100/50 hover:text-amber-50/90 rounded-full text-sm font-bold uppercase tracking-widest transition-colors">
            <ArrowLeft size={16} /> Lý luận Nhận thức
          </Link>
          <Link to="/modules/cndvls-2" className="inline-flex items-center gap-3 px-6 py-3 bg-[#1a0c06] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#1a0c06]/80 transition-colors">
            DVLS Phần 2 <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  )
}
