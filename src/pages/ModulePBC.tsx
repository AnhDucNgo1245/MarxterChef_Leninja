import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, Zap, GitMerge, RefreshCw, HelpCircle, Circle } from 'lucide-react'

/* ──────────── DATA ──────────── */

const faqItems = [
  { q: 'Quy luật lượng — chất nói lượng tích lũy đủ thì chất tất yếu thay đổi. Nhưng có những người học cả đời mà không "bật sáng". Điều đó có phủ nhận tính tất yếu của bước nhảy không?', a: 'Quy luật nói lượng đủ thì bước nhảy tất yếu xảy ra — nhưng "đủ" là điều kiện. Nhiều người "học cả đời" mà không bật sáng vì lượng tích lũy không đúng hướng, không đủ về chất lượng, hoặc thiếu điều kiện vật chất bổ trợ. Bước nhảy tất yếu trong điều kiện nhất định — không phải vô điều kiện. Đây không phủ nhận quy luật — mà nhắc nhở phải tích lũy lượng đúng hướng.' },
  { q: 'Nếu mâu thuẫn là phổ biến và là nguồn gốc của mọi phát triển — thì xã hội cộng sản không còn mâu thuẫn đối kháng mà Mác hướng đến có còn phát triển không?', a: 'Triết học Mác phân biệt mâu thuẫn đối kháng (bóc lột) và mâu thuẫn không đối kháng (khác biệt lợi ích có thể hòa giải). Xã hội cộng sản không có mâu thuẫn đối kháng — nhưng vẫn có mâu thuẫn không đối kháng giữa cá nhân và tập thể, giữa sản xuất và tiêu dùng... Những mâu thuẫn này tiếp tục thúc đẩy phát triển. Đây là điểm Mác ít phát triển và là câu hỏi mở quan trọng.' },
  { q: 'Phủ định biện chứng nói cái mới kế thừa cái tốt của cái cũ — nhưng ai quyết định cái gì là "tốt" đáng kế thừa và cái gì "lỗi thời" cần loại bỏ? Tiêu chuẩn đó có khách quan không?', a: 'Đây là câu hỏi sắc bén nhất. Triết học Mác trả lời: tiêu chuẩn là thực tiễn — cái gì phục vụ sự phát triển của LLSX và lợi ích lịch sử của nhân loại thì đáng kế thừa. Nhưng thực tiễn trong từng giai đoạn cụ thể lại bị điều kiện bởi quan hệ giai cấp — nên tiêu chuẩn đó có tính khách quan tương đối, không tuyệt đối. Đây là vấn đề triết học thực sự không có câu trả lời hoàn chỉnh.' },
  { q: 'Nếu phủ định của phủ định tạo ra vòng xoáy ốc tiến lên — thì có điểm kết thúc không? Hay vũ trụ xoáy ốc mãi mãi không có đích đến?', a: 'Triết học Mác không đặt ra "điểm kết thúc" tuyệt đối — đây là sự khác biệt với các triết học mục đích luận (teleology). Phát triển là quá trình mở, không có đích đến xác định trước. Điều này có vẻ bất an — nhưng cũng có thể hiểu là giải phóng: không có một trạng thái "hoàn hảo cuối cùng" cần đạt được — sự phát triển tự thân là có ý nghĩa.' },
  { q: 'Ba quy luật biện chứng được rút ra từ quan sát thực tế — làm sao ta biết chúng áp dụng được cho mọi sự vật mọi thời đại? Hay chúng chỉ là những mô hình hữu ích?', a: 'Đây là câu hỏi về nền tảng nhận thức luận của triết học Mác. Triết học Mác xác nhận bằng thực tiễn — ba quy luật đã được kiểm chứng qua hàng nghìn năm quan sát tự nhiên, xã hội và tư duy. Nhưng "kiểm chứng bằng thực tiễn" cũng dễ rơi vào xác nhận thiên kiến — chọn ví dụ phù hợp, bỏ qua phản ví dụ. Đây là giới hạn thực sự và triết học Mác thừa nhận không có chân lý tuyệt đối.' },
]

const motionExamples = [
  { label: 'Học tiếng Anh', phases: ['Học từ vựng, ngữ pháp hàng ngày', 'Giai đoạn plateau — cảm giác không tiến bộ', 'Bỗng nhiên nghe hiểu phim, nói trơn tru', 'Biết tiếng Anh — chiều sâu ngày càng tăng'], colors: ['bg-slate-200', 'bg-amber-200', 'bg-orange-300', 'bg-gold/40'] },
  { label: 'Cách mạng Pháp', phases: ['Bất công tích lũy, tư tưởng Khai sáng lan rộng', 'Xã hội phong kiến vẫn tồn tại bề ngoài', 'Phá ngục Bastille 1789 — bước nhảy', 'Xã hội tư sản, cộng hòa ra đời'], colors: ['bg-slate-200', 'bg-amber-200', 'bg-orange-300', 'bg-gold/40'] },
  { label: 'Đun nước', phases: ['25°C → 99°C: lượng tăng, chất không đổi', 'Đang trong độ — vẫn là nước lỏng', '100°C — điểm nút bắt buộc thay đổi', 'Hơi nước — chất mới với lượng mới'], colors: ['bg-slate-200', 'bg-amber-200', 'bg-orange-300', 'bg-gold/40'] },
]

const dialecticalNegation = [
  { title: 'Hạt giống', thesis: true, detail: 'Khẳng định ban đầu' },
  { title: 'Cây non', thesis: false, detail: 'Phủ định lần 1 — hạt bị phá vỡ' },
  { title: 'Hạt mới (×nhiều)', thesis: true, detail: 'Phủ định lần 2 — cao hơn ban đầu' },
]

/* ──────────── HELPERS ──────────── */

function SectionHeader({ num, color, icon, title, sub }: { num: string, color: string, icon: React.ReactNode, title: string, sub: string }) {
  return (
    <div className={`flex items-start gap-6 mb-12 border-l-4 ${color} pl-6`}>
      <div className="pt-1">{icon}</div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{num}</p>
        <h2 className="text-2xl md:text-3xl font-serif text-white/90">{title}</h2>
        <p className="text-sm text-white/50 italic mt-1">{sub}</p>
      </div>
    </div>
  )
}

/* ──────────── MAIN ──────────── */

export default function ModulePBC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeExample, setActiveExample] = useState(0)
  const [activeContradiction, setActiveContradiction] = useState(0)

  const contradictions = [
    { name: 'Sinh học', pair: ['Đồng hóa', 'Dị hóa'], desc: ['Xây dựng, tích lũy năng lượng', 'Phân giải, tiêu hao năng lượng'], result: 'Sự sống là mâu thuẫn được duy trì. Khi dị hóa thắng hoàn toàn → cái chết = mâu thuẫn được giải quyết hoàn toàn.' },
    { name: 'Nhận thức', pair: ['Biết', 'Không biết'], desc: ['Tri thức hiện có', 'Nhận ra mình thiếu hụt'], result: 'Mâu thuẫn biết vs không biết là động lực của toàn bộ lịch sử khoa học. Người biết nhiều nhất là người nhận ra mình không biết nhiều nhất.' },
    { name: 'Xã hội (Marx)', pair: ['Sản xuất xã hội', 'Chiếm hữu tư nhân'], desc: ['Nhiều người cùng làm ra của cải', 'Lợi nhuận về tay số ít'], result: 'Mâu thuẫn cơ bản của CNTB → khủng hoảng kinh tế định kỳ. Càng phát triển → mâu thuẫn càng gay gắt.' },
    { name: 'Cá nhân', pair: ['Muốn thay đổi', 'Sợ thay đổi'], desc: ['Khát vọng, ước mơ, bứt phá', 'Ổn định, an toàn, tránh rủi ro'], result: 'Chính mâu thuẫn này là lý do con người không bao giờ đứng yên — luôn có áp lực nội tâm thúc đẩy vận động.' },
  ]

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-gold/20 relative overflow-x-hidden">

      {/* ── YIN-YANG BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[800px] h-[800px] rounded-full border-[1px] border-white/5 opacity-50" style={{ animation: 'glyph-rotate 40s linear infinite' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full blur-[4px] shadow-[0_0_30px_10px_rgba(239,68,68,0.5)]"></div>
        </div>
        <div className="absolute top-[15%] right-[10%] w-[600px] h-[600px] rounded-full border-[1px] border-white/5 opacity-50" style={{ animation: 'glyph-rotate 30s linear infinite reverse' }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full blur-[4px] shadow-[0_0_30px_10px_rgba(59,130,246,0.5)]"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)]" />
      </div>

      {/* ── HERO ── */}
      <div className="bg-transparent text-white pt-40 pb-28 px-6 relative z-10 overflow-hidden border-b border-white/5">
        <div className="max-w-5xl mx-auto relative z-10">
          <Link to="/modules" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12">
            <ArrowLeft size={14} /> Quay lại Hub
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase mb-8">
            Module 3 · Ba quy luật cốt lõi
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Phép Biện chứng<br/>
            <span className="text-gold">Duy vật</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mb-12 leading-relaxed">
            Ba quy luật trong module này là bộ khung giải thích mọi sự thay đổi trong tự nhiên, xã hội và tư duy.
          </p>

          {/* 3 Laws Overview */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { num: 'QUY LUẬT I', name: 'Lượng — Chất', q: 'Sự thay đổi xảy ra như thế nào?', role: 'Cơ chế', icon: '⚡', color: 'border-amber-400 bg-amber-400/10' },
              { num: 'QUY LUẬT II', name: 'Mâu thuẫn', q: 'Tại sao sự thay đổi xảy ra?', role: 'Năng lượng', icon: '⚔️', color: 'border-red-400 bg-red-400/10' },
              { num: 'QUY LUẬT III', name: 'Phủ định biện chứng', q: 'Thay đổi đi theo hướng nào?', role: 'La bàn', icon: '🌀', color: 'border-emerald-400 bg-emerald-400/10' },
            ].map((law, i) => (
              <div key={i} className={`border ${law.color} p-6 rounded-2xl backdrop-blur-sm`}>
                <div className="text-2xl mb-3">{law.icon}</div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{law.num} · {law.role}</p>
                <h3 className="font-serif text-white font-bold mb-3">{law.name}</h3>
                <p className="text-white/60 text-xs italic leading-relaxed">"{law.q}"</p>
              </div>
            ))}
          </div>

          <div className="glass-yin-yang border border-gold/20 bg-white/5 p-6 rounded-2xl max-w-2xl">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3 text-center">Câu hỏi trung tâm</p>
            <p className="text-white text-xl font-serif italic leading-relaxed text-center">
              "Tại sao mọi thứ trong vũ trụ không bao giờ đứng yên — và sự thay đổi đó tuân theo quy luật gì?"
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-32 relative z-10">

        {/* ── DẪN NHẬP ── */}
        <section>
          <SectionHeader num="Dẫn nhập" color="border-[#2A3B66]" icon={<Circle size={20} className="text-white/90" />} title="Biện chứng là gì?" sub="Trước khi vào ba quy luật — cần hiểu rõ hai cách tư duy đối lập." />
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-3 text-white/40 uppercase tracking-widest text-xs font-bold"></th>
                  <th className="p-4 text-center bg-red-500/10 text-red-700 font-bold rounded-tl-xl">Tư duy siêu hình</th>
                  <th className="p-4 text-center bg-gold/10 text-gold font-bold rounded-tr-xl">Tư duy biện chứng</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Nhìn sự vật', 'Cô lập, tách rời', 'Trong mối liên hệ phổ biến'],
                  ['Trạng thái', 'Bất biến, tĩnh', 'Luôn vận động, phát triển'],
                  ['Mâu thuẫn', 'Hoặc A hoặc không-A', 'A chứa cả A và không-A'],
                  ['Nguồn gốc vận động', 'Từ bên ngoài', 'Từ mâu thuẫn bên trong'],
                  ['Phát triển', 'Thẳng hoặc vòng tròn', 'Xoáy ốc — tiến lên'],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="p-3 text-white/50 text-xs font-bold uppercase tracking-wider">{row[0]}</td>
                    <td className="p-3 text-center text-white/70 bg-red-500/10/60">{row[1]}</td>
                    <td className="p-3 text-center text-white/90 font-medium bg-gold/5">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ════ QUY LUẬT I ════ */}
        <section>
          <SectionHeader num="Quy luật I" color="border-amber-400" icon={<Zap size={20} className="text-amber-500" />} title="Lượng và Chất" sub="Quy luật về cách thức của sự phát triển" />

          {/* 5 concepts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
            {[
              { term: 'Chất', eng: 'Quality', def: 'Thuộc tính bản chất làm cho sự vật là chính nó, phân biệt với sự vật khác.' },
              { term: 'Lượng', eng: 'Quantity', def: 'Thuộc tính biểu thị về mặt số lượng, quy mô, trình độ — thay đổi từ từ, đo đếm được.' },
              { term: 'Độ', eng: 'Measure', def: 'Khoảng giới hạn mà trong đó lượng thay đổi nhưng chất chưa thay đổi. "Vùng an toàn."' },
              { term: 'Điểm nút', eng: 'Nodal Point', def: 'Điểm giới hạn tại đó lượng tất yếu dẫn đến thay đổi chất.' },
              { term: 'Bước nhảy', eng: 'Leap', def: 'Sự chuyển hóa về chất do tích lũy lượng trước đó gây ra.' },
            ].map((c, i) => (
              <div key={i} className="glass-yin-yang p-5 rounded-2xl text-center hover:-translate-y-1 transition-transform border-t-2 border-t-amber-300">
                <p className="text-amber-500 font-bold font-serif text-lg mb-0.5">{c.term}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3">{c.eng}</p>
                <p className="text-xs text-white/70 leading-relaxed">{c.def}</p>
              </div>
            ))}
          </div>

          {/* Core cycle visual */}
          <div className="glass-yin-yang p-8 rounded-3xl mb-10">
            <h3 className="font-serif text-white/90 text-xl mb-8 text-center">Vòng vận động Lượng — Chất</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 flex-wrap">
              {[
                { label: 'Chất cũ', sub: 'Trạng thái xuất phát', bg: 'bg-slate-100 border-slate-300' },
                { arrow: true },
                { label: 'Lượng tích lũy', sub: 'Dần dần, trong Độ', bg: 'bg-amber-50 border-amber-200' },
                { arrow: true },
                { label: 'Điểm nút', sub: 'Giới hạn bắt buộc', bg: 'bg-orange-100 border-orange-300', highlight: true },
                { arrow: true },
                { label: 'Bước nhảy', sub: 'Thay đổi về chất', bg: 'bg-gold/20 border-gold/40' },
                { arrow: true },
                { label: 'Chất mới + Lượng mới', sub: 'Chu kỳ mới bắt đầu...', bg: 'bg-green-50 border-green-200' },
              ].map((step, i) => (
                'arrow' in step ? (
                  <div key={i} className="text-amber-400 text-lg mx-2 hidden md:block">→</div>
                ) : (
                  <div key={i} className={`border ${step.bg} px-4 py-3 rounded-xl text-center ${step.highlight ? 'ring-2 ring-orange-400 ring-offset-2' : ''}`}>
                    <p className="text-sm font-bold text-white/90">{step.label}</p>
                    <p className="text-[10px] text-white/50 mt-0.5">{step.sub}</p>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Interactive examples */}
          <div className="glass-yin-yang p-8 rounded-3xl">
            <h3 className="font-serif text-white/90 text-lg mb-4">Ví dụ từ dễ đến sâu</h3>
            <div className="flex gap-2 mb-6 flex-wrap">
              {motionExamples.map((ex, i) => (
                <button key={i} onClick={() => setActiveExample(i)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${activeExample === i ? 'bg-amber-500 text-white shadow-lg' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}`}>
                  {ex.label}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {motionExamples[activeExample].phases.map((phase, i) => (
                <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${motionExamples[activeExample].colors[i]}`}>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${i === 2 ? 'bg-orange-500 text-white' : 'bg-white/60 text-white/90'}`}>{i + 1}</span>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-0.5">
                      {['Lượng tích lũy', 'Trong Độ', '⚡ Điểm nút — Bước nhảy', 'Chất mới'][i]}
                    </p>
                    <p className="text-sm text-white/90 font-medium">{phase}</p>
                  </div>
                </div>
              ))}
            </div>
            {activeExample === 0 && (
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-sm text-amber-800 italic">💡 Đây là lý do người học ngoại ngữ thường bỏ cuộc ở giai đoạn plateau — họ không biết mình đang tích lũy lượng, sắp đến điểm nút.</p>
              </div>
            )}
          </div>

          {/* Methodological tips */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 p-6 rounded-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-3">✓ Ý nghĩa thực tiễn</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Muốn thay đổi chất → kiên nhẫn tích lũy lượng</li>
                <li>Khi lượng đủ → dũng cảm thực hiện bước nhảy</li>
                <li>Đừng nản lòng trong giai đoạn "plateau"</li>
              </ul>
            </div>
            <div className="bg-red-500/10 border border-red-200 p-6 rounded-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">✗ Hai sai lầm cần tránh</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li><strong>Bảo thủ:</strong> Không chịu bước nhảy khi lượng đủ → bỏ lỡ cơ hội</li>
                <li><strong>Nóng vội:</strong> Ép bước nhảy khi lượng chưa đủ → thất bại</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ════ QUY LUẬT II ════ */}
        <section>
          <SectionHeader num="Quy luật II" color="border-red-400" icon={<GitMerge size={20} className="text-red-500" />} title="Mâu thuẫn" sub="Quy luật về nguồn gốc của sự phát triển" />

          {/* Core concept */}
          <div className="bg-[#0A0A0A] p-8 rounded-3xl mb-10 text-white">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4 text-center">Định nghĩa cốt lõi</p>
            <p className="font-serif text-xl text-center leading-relaxed italic">
              Mâu thuẫn là sự{' '}
              <span className="text-red-300">thống nhất</span>
              {' '}và{' '}
              <span className="text-amber-300">đấu tranh</span>
              {' '}của các{' '}
              <span className="text-gold">mặt đối lập</span>
              {' '}bên trong cùng một sự vật.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-red-500/100/20 border border-red-400/30 p-5 rounded-xl text-center">
                <p className="text-red-300 font-bold mb-2">Thống nhất → Tương đối</p>
                <p className="text-white/70 text-xs leading-relaxed">Tạm thời, có điều kiện. Hai mặt đối lập cùng tồn tại — không thể có cái này nếu không có cái kia.</p>
              </div>
              <div className="bg-amber-500/20 border border-amber-400/30 p-5 rounded-xl text-center">
                <p className="text-amber-300 font-bold mb-2">Đấu tranh → Tuyệt đối</p>
                <p className="text-white/70 text-xs leading-relaxed">Liên tục, vô điều kiện. Chính đấu tranh là nguồn gốc vận động — thống nhất chỉ là trạng thái tạm thời giữa hai lần đấu tranh.</p>
              </div>
            </div>
          </div>

          {/* Interactive Contradiction Examples */}
          <div className="glass-yin-yang p-8 rounded-3xl mb-10">
            <h3 className="font-serif text-white/90 text-xl mb-6">Mâu thuẫn trong thực tế</h3>
            <div className="flex gap-2 flex-wrap mb-6">
              {contradictions.map((c, i) => (
                <button key={i} onClick={() => setActiveContradiction(i)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${activeContradiction === i ? 'bg-red-500/100 text-white shadow-lg' : 'bg-red-500/10 text-red-700 hover:bg-red-100'}`}>
                  {c.name}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {contradictions[activeContradiction].pair.map((side, i) => (
                <div key={i} className={`p-6 rounded-2xl text-center ${i === 0 ? 'bg-blue-50 border border-blue-200' : 'bg-red-500/10 border border-red-200'}`}>
                  <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold ${i === 0 ? 'bg-blue-200 text-blue-700' : 'bg-red-200 text-red-700'}`}>
                    {i === 0 ? '⊕' : '⊖'}
                  </div>
                  <p className="font-bold text-white/90 font-serif">{side}</p>
                  <p className="text-xs text-white/60 mt-2">{contradictions[activeContradiction].desc[i]}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Kết quả của mâu thuẫn</p>
              <p className="text-sm text-white/90 leading-relaxed">{contradictions[activeContradiction].result}</p>
            </div>
          </div>

          {/* Types of Contradiction */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="glass-yin-yang p-6 rounded-2xl">
              <h4 className="font-serif text-white/90 font-bold mb-4">Phân loại mâu thuẫn</h4>
              <div className="space-y-3 text-sm">
                {[
                  { type: 'Bên trong', desc: 'Giữa các yếu tố trong sự vật — nguyên nhân chủ yếu của vận động', badge: 'bg-red-100 text-red-700' },
                  { type: 'Bên ngoài', desc: 'Giữa sự vật này với sự vật khác — điều kiện thúc đẩy hoặc kìm hãm', badge: 'bg-slate-100 text-slate-700' },
                  { type: 'Chủ yếu', desc: 'Quyết định bản chất, chi phối mâu thuẫn khác — giải quyết nó trước tiên', badge: 'bg-gold/30 text-amber-800' },
                  { type: 'Thứ yếu', desc: 'Phụ thuộc vào mâu thuẫn chủ yếu, sẽ tự giải quyết theo', badge: 'bg-[#0A0A0A]/10 text-white/60' },
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${t.badge}`}>{t.type}</span>
                    <p className="text-white/70 text-xs leading-relaxed pt-0.5">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-yin-yang p-6 rounded-2xl">
              <h4 className="font-serif text-white/90 font-bold mb-4">Quá trình vận động</h4>
              <div className="relative border-l-2 border-red-200 pl-5 space-y-4">
                {[
                  ['Thống nhất ban đầu', 'Hai mặt cùng tồn tại'],
                  ['Đấu tranh', 'Mỗi bên tích lũy lực lượng'],
                  ['Một mặt thắng thế', 'Mâu thuẫn gay gắt đến đỉnh'],
                  ['Mâu thuẫn được giải quyết', 'Bước nhảy xảy ra — chất mới'],
                  ['Mâu thuẫn mới xuất hiện', 'Ở trình độ cao hơn'],
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-white border-2 border-red-300"></div>
                    <p className="text-sm font-bold text-white/90">{step[0]}</p>
                    <p className="text-xs text-white/50">{step[1]}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gold mt-4 italic font-medium">💡 Mâu thuẫn cũ mất đi → mâu thuẫn mới xuất hiện ở trình độ cao hơn. Mâu thuẫn là vĩnh cửu.</p>
            </div>
          </div>
        </section>

        {/* ════ QUY LUẬT III ════ */}
        <section>
          <SectionHeader num="Quy luật III" color="border-emerald-400" icon={<RefreshCw size={20} className="text-emerald-500" />} title="Phủ định biện chứng" sub="Quy luật về khuynh hướng của sự phát triển" />

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-red-500/10 border border-red-200 p-6 rounded-2xl">
              <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">Phủ định siêu hình</p>
              <div className="space-y-2 text-sm text-white/70">
                <p>📌 Nguồn gốc: từ bên ngoài (lực tác động)</p>
                <p>📌 Tính chất: xóa sạch hoàn toàn</p>
                <p>📌 Kết quả: chấm dứt phát triển</p>
                <p className="italic text-red-600 mt-3">Ví dụ: Đập vỡ cái bình</p>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
              <p className="text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">Phủ định biện chứng</p>
              <div className="space-y-2 text-sm text-white/70">
                <p>📌 Nguồn gốc: từ mâu thuẫn bên trong</p>
                <p>📌 Tính chất: kế thừa cái tích cực</p>
                <p>📌 Kết quả: tiếp tục phát triển cao hơn</p>
                <p className="italic text-emerald-700 mt-3">Ví dụ: Cái mới thay thế nhưng giữ lại giá trị</p>
              </div>
            </div>
          </div>

          {/* Negation of Negation */}
          <div className="glass-yin-yang p-8 rounded-3xl mb-10">
            <h3 className="font-serif text-white/90 text-xl mb-2 text-center">Phủ định của phủ định</h3>
            <p className="text-white/50 text-sm text-center mb-10">Sau hai lần phủ định — sự vật dường như quay về điểm xuất phát, nhưng ở trình độ cao hơn.</p>

            {/* Spiral Visual */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { label: 'Hạt giống', detail: 'Khẳng định ban đầu', stage: 'Thesis', color: 'bg-slate-100 border-slate-300', up: false },
                { label: 'Cây non', detail: 'Phủ định lần 1 — hạt bị phá vỡ', stage: 'Antithesis', color: 'bg-red-500/10 border-red-200', up: false },
                { label: 'Hạt mới × nhiều', detail: 'Phủ định lần 2 — cao hơn hẳn ban đầu', stage: 'Synthesis', color: 'bg-emerald-50 border-emerald-300', up: true },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className={`border-2 ${s.color} p-6 rounded-2xl w-full ${s.up ? 'ring-2 ring-emerald-400 ring-offset-2' : ''}`}>
                    <p className="text-3xl mb-3">{['🌾', '🌱', '🌾🌾🌾'][i]}</p>
                    <p className="font-bold text-white/90 font-serif">{s.label}</p>
                    <p className="text-xs text-white/50 mt-1">{s.stage}</p>
                    <p className="text-xs text-white/70 mt-2">{s.detail}</p>
                  </div>
                  {i < 2 && <div className="text-emerald-400 text-2xl my-2 hidden md:block">↓</div>}
                </div>
              ))}
            </div>

            {/* Spiral diagram in CSS */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 text-white">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6 text-center">Hình thức xoáy ốc của sự phát triển</p>
              <div className="flex flex-col items-center gap-0 relative">
                {[
                  { label: 'Khởi điểm', offset: 'ml-0', size: 'w-6 h-6', opacity: 'opacity-40' },
                  { label: 'Phủ định 1', offset: 'ml-8', size: 'w-8 h-8', opacity: 'opacity-60' },
                  { label: 'Phủ định 2', offset: 'ml-16', size: 'w-10 h-10', opacity: 'opacity-80' },
                  { label: 'Phủ định 3', offset: 'ml-24', size: 'w-12 h-12', opacity: 'opacity-100' },
                ].map((point, i) => (
                  <div key={i} className={`flex items-center gap-4 ${i > 0 ? 'mt-4' : ''}`} style={{ marginLeft: `${i * 32}px` }}>
                    <div className={`${point.size} ${point.opacity} rounded-full bg-gold flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white/90 text-[10px] font-bold">{i + 1}</span>
                    </div>
                    <p className={`text-xs ${point.opacity === 'opacity-100' ? 'text-gold font-bold' : 'text-white/60'}`}>{point.label}</p>
                  </div>
                ))}
                <p className="text-white/40 text-[10px] mt-4 italic text-center">↗ Mỗi vòng kế thừa những gì tốt nhất của vòng trước — xu hướng tổng thể luôn tiến lên</p>
              </div>
            </div>
          </div>

          {/* Historical examples */}
          <div className="glass-yin-yang p-8 rounded-3xl">
            <h3 className="font-serif text-white/90 text-xl mb-6">Ví dụ lịch sử triết học</h3>
            <div className="space-y-4">
              {[
                { stage: 'Khẳng định', label: 'Triết học cổ đại', desc: 'Duy vật chất phác — tìm cơ sở vật chất của thế giới', color: 'bg-slate-100 border-slate-200' },
                { stage: 'Phủ định lần 1', label: 'Triết học Trung Cổ', desc: 'Duy tâm thần học — phủ định duy vật, đề cao tinh thần tuyệt đối', color: 'bg-red-500/10 border-red-200' },
                { stage: 'Phủ định lần 2', label: 'Triết học Mác-Lênin', desc: 'Duy vật biện chứng — "dường như" quay về duy vật nhưng ở trình độ cao hơn hoàn toàn: biện chứng, lịch sử, thực tiễn', color: 'bg-gold/10 border-gold/30' },
              ].map((step, i) => (
                <div key={i} className={`border ${step.color} p-5 rounded-xl flex gap-4 items-start`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/40 flex-shrink-0 w-24 pt-0.5">{step.stage}</span>
                  <div>
                    <p className="font-bold text-white/90 font-serif">{step.label}</p>
                    <p className="text-sm text-white/60 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ MỐI LIÊN HỆ 3 QUY LUẬT ════ */}
        <section className="bg-[#0A0A0A] text-white p-10 md:p-14 rounded-[3rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
          <div className="relative z-10">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4 text-center">Ba quy luật vận hành đồng thời</p>
            <h2 className="text-3xl font-serif text-center mb-12">Mối liên hệ giữa ba quy luật</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              {[
                { num: 'II', name: 'Mâu thuẫn', role: 'Cung cấp NĂNG LƯỢNG', sub: 'Nguồn gốc vận động', color: 'border-red-400 bg-red-500/100/10', icon: '⚔️' },
                { num: 'I', name: 'Lượng — Chất', role: 'Mô tả CƠ CHẾ', sub: 'Lượng → bước nhảy', color: 'border-amber-400 bg-amber-500/10', icon: '⚡' },
                { num: 'III', name: 'Phủ định', role: 'Chỉ HƯỚNG', sub: 'Xoáy ốc tiến lên', color: 'border-emerald-400 bg-emerald-500/10', icon: '🌀' },
              ].map((law, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`border ${law.color} p-6 rounded-2xl w-44 text-center`}>
                    <div className="text-2xl mb-2">{law.icon}</div>
                    <p className="text-white font-serif font-bold mb-1">{law.name}</p>
                    <p className="text-gold text-xs font-bold">{law.role}</p>
                    <p className="text-white/40 text-[10px] mt-1">{law.sub}</p>
                  </div>
                  {i < 2 && <div className="text-gold/40 text-2xl rotate-90 md:rotate-0 mt-2 md:hidden">↓</div>}
                </div>
              ))}
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Ví dụ: Cách mạng Công nghiệp</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-bold text-red-300 mb-1">⚔️ Mâu thuẫn</p>
                  <p className="text-white/60">LLSX mới (máy hơi nước) vs QHSX cũ (phong kiến) — nguồn gốc vận động.</p>
                </div>
                <div>
                  <p className="font-bold text-amber-300 mb-1">⚡ Lượng — Chất</p>
                  <p className="text-white/60">Mâu thuẫn tích lũy dần → điểm nút → cách mạng tư sản bùng nổ → xã hội tư bản ra đời.</p>
                </div>
                <div>
                  <p className="font-bold text-emerald-300 mb-1">🌀 Phủ định biện chứng</p>
                  <p className="text-white/60">Tư bản phủ định phong kiến — nhưng kế thừa luật pháp, tổ chức nhà nước, văn hóa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════ FAQ ════ */}
        <section>
          <SectionHeader num="Câu hỏi hóc búa" color="border-[#2A3B66]" icon={<HelpCircle size={20} className="text-white/90" />} title="Tranh luận chuyên sâu" sub="Những câu hỏi thử thách giới hạn của ba quy luật." />
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className={`glass-yin-yang rounded-2xl overflow-hidden border transition-colors duration-300 ${openFaq === i ? 'border-gold/40' : 'border-transparent'}`}>
                <button className="w-full p-6 text-left flex items-start justify-between gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
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
        <section className="bg-[#0A0A0A] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6">Điều quan trọng nhất để nhớ</p>
            <div className="flex gap-4 mb-6 p-5 bg-white/5 rounded-xl border border-white/10">
              <span className="text-red-400 font-bold flex-shrink-0">✗</span>
              <p className="text-white/50 text-sm line-through">"Học thuộc định nghĩa, ví dụ tiêu chuẩn, thi xong quên."</p>
            </div>
            <div className="flex gap-4 mb-10 p-5 bg-gold/10 rounded-xl border border-gold/20">
              <span className="text-gold font-bold flex-shrink-0">✓</span>
              <p className="text-white text-sm leading-relaxed">Ba quy luật này là <strong className="text-gold">công cụ tư duy</strong> — không phải kiến thức để nhớ. Chúng có giá trị khi bạn áp dụng được vào bất kỳ tình huống nào trong cuộc sống.</p>
            </div>
            <div className="border-t border-white/10 pt-8 space-y-4">
              <p className="text-gold text-sm font-bold">Bài kiểm tra thực sự không phải trong phòng thi — mà là lần bạn nhìn vào một tình huống khó khăn và tự hỏi:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  '"Mâu thuẫn bên trong đây là gì?"',
                  '"Lượng đã tích lũy đến đâu rồi?"',
                  '"Bước nhảy sẽ đi theo hướng nào?"',
                  '"Điều gì xứng đáng được kế thừa?"',
                ].map((q, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="font-serif italic text-white/80 text-sm">{q}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm italic mt-4">Khi những câu hỏi đó trở thành phản xạ tự nhiên — bạn đã thực sự hiểu phép biện chứng duy vật.</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between border-t border-white/10 pt-8">
          <Link to="/modules/cndv" className="inline-flex items-center gap-3 px-6 py-3 text-white/50 hover:text-white/90 rounded-full text-sm font-bold uppercase tracking-widest transition-colors">
            <ArrowLeft size={16} /> Bài trước
          </Link>
          <Link to="/modules/nhanthuc" className="inline-flex items-center gap-3 px-6 py-3 bg-[#0A0A0A] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#0A0A0A]/80 transition-colors">
            Lý luận Nhận thức <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  )
}
