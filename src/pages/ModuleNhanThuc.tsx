import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, Eye, Brain, FlaskConical, Star, HelpCircle } from 'lucide-react'

/* ─── DATA ─── */

const sensoryStages = [
  {
    id: 'cam-giac',
    name: 'Cảm giác',
    eng: 'Sensation',
    icon: '👁️',
    color: 'bg-indigo-50 border-indigo-200',
    highlight: 'text-indigo-600',
    desc: 'Hình thức đầu tiên và thấp nhất của nhận thức cảm tính. Phản ánh từng thuộc tính riêng lẻ của sự vật thông qua giác quan khi sự vật đang trực tiếp tác động vào chúng.',
    example: 'Nhìn thấy màu đỏ của táo. Ngửi thấy mùi thơm của hoa. Nghe thấy âm thanh của chuông.',
    limit: 'Chỉ nắm bắt từng thuộc tính đơn lẻ, chưa có hình ảnh toàn vẹn về sự vật.',
  },
  {
    id: 'tri-giac',
    name: 'Tri giác',
    eng: 'Perception',
    icon: '🧩',
    color: 'bg-violet-50 border-violet-200',
    highlight: 'text-violet-600',
    desc: 'Tổng hợp nhiều cảm giác thành hình ảnh hoàn chỉnh về sự vật. Sự vật phải đang trực tiếp tác động vào giác quan để tri giác xuất hiện.',
    example: 'Nhìn một quả táo và thấy được màu sắc, hình dạng, kích thước — tổng thể quả táo đó.',
    limit: 'Vẫn phụ thuộc vào sự hiện diện trực tiếp của sự vật. Không có sự vật → không có tri giác.',
  },
  {
    id: 'bieu-tuong',
    name: 'Biểu tượng',
    eng: 'Representation',
    icon: '💭',
    color: 'bg-purple-500/10 border-purple-200',
    highlight: 'text-purple-600',
    desc: 'Hình ảnh của sự vật được lưu giữ và tái hiện trong não khi sự vật không còn trực tiếp tác động vào giác quan. Đây là hình thức cao nhất của nhận thức cảm tính.',
    example: 'Nhắm mắt lại và hình dung ra quả táo đã thấy trước đó — dù nó không còn ở trước mặt.',
    limit: 'Vẫn là hình ảnh cụ thể, cảm tính. Chưa nắm bắt được bản chất và quy luật bên trong.',
  },
]

const rationalStages = [
  {
    id: 'khai-niem',
    name: 'Khái niệm',
    eng: 'Concept',
    icon: '🔷',
    color: 'bg-amber-50 border-amber-200',
    highlight: 'text-amber-600',
    desc: 'Hình thức cơ bản nhất của tư duy, phản ánh những thuộc tính bản chất chung của một nhóm sự vật dưới dạng từ ngữ trừu tượng. Đây là bước nhảy vọt đầu tiên từ cảm tính lên lý tính.',
    example: '"Táo" không phải hình ảnh một quả táo cụ thể — mà là khái niệm nắm bắt cái chung của mọi quả táo: trái cây, ngọt hoặc chua, hạt trong, v.v.',
    limit: 'Khái niệm phản ánh sự vật ở trạng thái tĩnh, riêng lẻ.',
  },
  {
    id: 'phan-doan',
    name: 'Phán đoán',
    eng: 'Judgment',
    icon: '⚖️',
    color: 'bg-orange-900/30 border-orange-700/50',
    highlight: 'text-orange-600',
    desc: 'Liên kết các khái niệm với nhau để khẳng định hoặc phủ định một thuộc tính, quan hệ nào đó. Phán đoán là hình thức tư duy phản ánh mối liên hệ giữa các khái niệm.',
    example: '"Táo là trái cây." "Nước sôi ở 100°C." "Giai cấp công nhân là lực lượng tiên phong của cách mạng."',
    limit: 'Phán đoán phản ánh mối liên hệ nhưng chưa giải thích được TẠI SAO có mối liên hệ đó.',
  },
  {
    id: 'suy-luan',
    name: 'Suy luận',
    eng: 'Inference',
    icon: '🔗',
    color: 'bg-red-500/10 border-red-200',
    highlight: 'text-red-600',
    desc: 'Rút ra phán đoán mới từ những phán đoán đã biết thông qua các quy tắc logic. Suy luận cho phép mở rộng nhận thức mà không cần trực tiếp quan sát.',
    example: 'Mọi kim loại đều dẫn điện. Đồng là kim loại. → Đồng dẫn điện. (Chưa cần thử nghiệm trực tiếp.)',
    limit: 'Kết luận chỉ đúng khi tiền đề đúng và hình thức suy luận hợp lệ.',
  },
]

const truthProperties = [
  {
    name: 'Tính khách quan',
    icon: '🌍',
    color: 'border-blue-300 bg-blue-900/30',
    desc: 'Chân lý phản ánh thực tại khách quan, không phụ thuộc vào ý muốn hay ý thức của con người. Nước sôi ở 100°C là chân lý — dù ai muốn hay không muốn.',
    vs: 'Trái với: quan điểm chủ quan "mỗi người có chân lý riêng của mình."',
  },
  {
    name: 'Tính tuyệt đối',
    icon: '∞',
    color: 'border-purple-300 bg-purple-500/10',
    desc: 'Chân lý có nội dung hoàn toàn phù hợp với thực tại khách quan. Đây là "cực" mà nhận thức không ngừng tiếp cận — nhưng không bao giờ đạt được hoàn toàn.',
    vs: 'Là tiêu chuẩn lý tưởng — nhận thức luôn hướng đến nhưng không thể hoàn toàn chạm tới.',
  },
  {
    name: 'Tính tương đối',
    icon: '↔️',
    color: 'border-amber-300 bg-amber-50',
    desc: 'Nhận thức của con người trong từng giai đoạn lịch sử chỉ phản ánh được một phần, gần đúng với thực tại. Chân lý tương đối ngày càng tiến gần đến chân lý tuyệt đối.',
    vs: 'Vũ trụ địa tâm → nhật tâm → không có trung tâm: mỗi bước là chân lý tương đối tiến gần hơn.',
  },
  {
    name: 'Tính cụ thể',
    icon: '📍',
    color: 'border-green-300 bg-green-900/30',
    desc: 'Chân lý gắn liền với điều kiện, hoàn cảnh, không gian và thời gian cụ thể. Không có chân lý trừu tượng, vĩnh cửu áp dụng mọi nơi mọi lúc.',
    vs: '"Nước sôi ở 100°C" — đúng ở áp suất khí quyển chuẩn. Trên đỉnh núi cao → sôi ở 85°C. Chân lý phải gắn bối cảnh.',
  },
]

const faqItems = [
  {
    q: 'Nhận thức cảm tính bị coi là "thấp hơn" nhận thức lý tính — điều đó có nghĩa là cảm xúc và trực giác kém giá trị hơn lý trí không?',
    a: 'Không. "Thấp hơn" trong triết học Mác không có nghĩa là kém giá trị — mà là giai đoạn trước trong quá trình nhận thức. Không có nhận thức lý tính nếu không có nhận thức cảm tính làm cơ sở. Cảm giác là cổng vào duy nhất của thực tại — lý tính không thể xuất phát từ chân không. Vấn đề là: nhận thức cảm tính chưa đủ để hiểu bản chất và quy luật — phải được nâng lên bằng tư duy trừu tượng.',
  },
  {
    q: 'Lenin nói "thực tiễn là tiêu chuẩn của chân lý" — nhưng thực tiễn của những thời đại khác nhau sẽ xác nhận những điều khác nhau. Vậy tiêu chuẩn đó có thực sự khách quan không?',
    a: 'Đây là câu hỏi tinh tế. Triết học Mác thừa nhận: thực tiễn là tiêu chuẩn vừa tuyệt đối (không có tiêu chuẩn nào tốt hơn thực tiễn) vừa tương đối (thực tiễn trong từng giai đoạn có giới hạn của nó). Thực tiễn thế kỷ 19 xác nhận cơ học Newton — thực tiễn thế kỷ 20 phát hiện giới hạn của nó. Đây không phải mâu thuẫn — mà là bản chất của chân lý tương đối tiến đến chân lý tuyệt đối.',
  },
  {
    q: 'Nếu nhận thức bắt đầu từ cảm giác — và mọi cảm giác đều do hệ thần kinh xử lý — làm sao ta biết những gì ta "thấy" có phản ánh đúng thực tại không? (Vấn đề của Descartes và Matrix)',
    a: 'Đây là câu hỏi bất khả tri luận cổ điển. Triết học Mác trả lời không bằng lý luận thuần túy mà bằng thực tiễn: nếu nhận thức của tôi về lửa sai → tôi sẽ bị bỏng khi chạm vào. Thực tiễn thành công liên tục (máy bay bay, thuốc chữa bệnh, cầu đứng vững) là bằng chứng rằng nhận thức của chúng ta đủ gần với thực tại để hành động hiệu quả — ngay cả khi không hoàn toàn chính xác.',
  },
  {
    q: 'Chân lý có tính cụ thể — vậy có thứ gì là chân lý phổ quát áp dụng cho mọi thời đại không? Hay tất cả đều tương đối?',
    a: 'Triết học Mác phân biệt: tính cụ thể không có nghĩa là tương đối tuyệt đối. Các quy luật toán học, logic và một số quy luật tự nhiên cơ bản (bảo toàn năng lượng, quan hệ nhân quả) có phạm vi áp dụng cực rộng — tiệm cận chân lý tuyệt đối hơn. Nhưng ngay cả chúng cũng có điều kiện ngầm định (hệ quy chiếu, phạm vi ứng dụng). Không có chân lý nào hoàn toàn thoát khỏi bối cảnh — nhưng một số chân lý có bối cảnh cực rộng.',
  },
  {
    q: 'Khoa học hiện đại (đặc biệt vật lý lý thuyết) ngày càng xa rời thực tiễn trực tiếp — các lý thuyết như lý thuyết dây không thể kiểm chứng thực nghiệm. Vậy chúng có phải là chân lý không?',
    a: 'Đây là vấn đề triết học khoa học hiện đại rất sôi động. Triết học Mác đòi hỏi thực tiễn kiểm chứng — nhưng thực tiễn không chỉ là thực nghiệm trực tiếp mà còn là hiệu quả dự đoán, nhất quán nội tại, và tính thống nhất với lý thuyết đã kiểm chứng. Lý thuyết dây hiện đang ở trạng thái giả thuyết toán học — có thể là chân lý tương đối rất tốt, có thể là sai. Thực tiễn tương lai sẽ phán xét.',
  },
]

function SectionHeader({ num, icon, title, sub, color }: { num: string, icon: React.ReactNode, title: string, sub: string, color: string }) {
  return (
    <div className={`flex items-start gap-6 mb-12 border-l-4 ${color} pl-6`}>
      <div className="pt-1 text-current">{icon}</div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{num}</p>
        <h2 className="text-2xl md:text-3xl font-serif text-white/90">{title}</h2>
        <p className="text-sm text-white/50 italic mt-1">{sub}</p>
      </div>
    </div>
  )
}

export default function ModuleNhanThuc() {
  const [activeSensory, setActiveSensory] = useState(0)
  const [activeRational, setActiveRational] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#030A07] selection:bg-green-500/20 relative overflow-x-hidden">

      {/* ── NEURAL MATRIX BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(50,255,150,0.1) 1px, transparent 1px), radial-gradient(circle at 0% 0%, rgba(50,255,150,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}></div>
        {/* Glowing Neural Nodes */}
        <div className="absolute top-[20%] left-[15%] w-32 h-32 bg-green-500/10 rounded-full blur-[50px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[15%] w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px]" style={{ animation: 'pulse 4s infinite reverse' }}></div>
        <div className="absolute top-[60%] left-[30%] w-24 h-24 bg-emerald-500/10 rounded-full blur-[40px] animate-bounce"></div>
      </div>

      {/* ── HERO ── */}
      <div className="bg-transparent text-white pt-40 pb-32 px-6 relative z-10 overflow-hidden border-b border-green-500/10">
        {/* Gradient from dark to light */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-green-400/40 shadow-[0_0_10px_#4ade80]"></div>
          <div className="absolute top-40 left-40 w-1 h-1 rounded-full bg-green-400/40 shadow-[0_0_10px_#4ade80]"></div>
          <div className="absolute top-32 right-1/3 w-3 h-3 rounded-full bg-cyan-400/40 shadow-[0_0_15px_#22d3ee]"></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-emerald-400/40 shadow-[0_0_10px_#34d399]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/modules" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12">
            <ArrowLeft size={14} /> Quay lại Hub
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase mb-8">
            Module 4 · Hành trình nhận thức
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight glitch-hover" data-text="Lý luận Nhận thức">
            Lý luận<br/>
            <span className="text-green-500 glitch-hover" data-text="Nhận thức">Nhận thức</span>
          </h1>

          {/* The Journey Visual */}
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">🌑</div>
              <span className="text-white/60 text-xs">Bóng tối — Chưa biết</span>
            </div>
            <div className="flex-1 min-w-8 h-px border-t border-dashed border-gold/30"></div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-6 h-6 rounded-full bg-indigo-500/60 flex items-center justify-center">👁️</div>
              <span className="text-white/70 text-xs">Trực quan sinh động</span>
            </div>
            <div className="flex-1 min-w-8 h-px border-t border-dashed border-gold/30"></div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-6 h-6 rounded-full bg-amber-500/60 flex items-center justify-center">🧠</div>
              <span className="text-white/70 text-xs">Tư duy trừu tượng</span>
            </div>
            <div className="flex-1 min-w-8 h-px border-t border-dashed border-gold/30"></div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/30">
              <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">✨</div>
              <span className="text-gold text-xs font-bold">Thực tiễn — Chân lý</span>
            </div>
          </div>

          <div className="glass-neural border border-gold/20 bg-white/5 p-6 rounded-2xl max-w-3xl">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Công thức của Lenin</p>
            <p className="font-serif text-white text-lg leading-relaxed italic">
              "Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn — đó là con đường biện chứng của sự nhận thức chân lý, của sự nhận thức thực tại khách quan."
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-32 relative z-10">

        {/* ── PART I: THỰC TIỄN LÀ CƠ SỞ ── */}
        <section>
          <SectionHeader num="Phần I" icon={<FlaskConical size={20} className="text-emerald-500" />} title="Thực tiễn — Nền tảng của nhận thức" sub="Trước khi nhận thức — phải có thực tiễn." color="border-emerald-400" />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass-neural p-8 rounded-3xl">
              <h3 className="font-serif text-white/90 text-xl mb-4 glitch-hover" data-text="Thực tiễn là gì?">Thực tiễn là gì?</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Thực tiễn là toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử — xã hội của con người nhằm cải tạo tự nhiên và xã hội.
              </p>
              <div className="space-y-3">
                {[
                  { icon: '🏭', name: 'Sản xuất vật chất', desc: 'Cơ bản và nền tảng nhất — con người tác động vào tự nhiên để tạo ra của cải.' },
                  { icon: '⚖️', name: 'Hoạt động chính trị xã hội', desc: 'Đấu tranh giai cấp, cách mạng, xây dựng nhà nước, pháp luật.' },
                  { icon: '🔬', name: 'Thực nghiệm khoa học', desc: 'Thí nghiệm, quan sát có kiểm soát — hình thức thực tiễn đặc thù của khoa học.' },
                ].map((t, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-emerald-50/60 rounded-xl">
                    <span className="text-xl flex-shrink-0">{t.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-white/90">{t.name}</p>
                      <p className="text-xs text-white/60 mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-neural p-8 rounded-3xl">
              <h3 className="font-serif text-white/90 text-xl mb-6 glitch-hover" data-text="Bốn vai trò của thực tiễn">Bốn vai trò của thực tiễn</h3>
              <div className="space-y-4">
                {[
                  { num: '①', role: 'Cơ sở của nhận thức', desc: 'Nhận thức xuất phát từ thực tiễn. Con người nhận thức thế giới bằng cách tác động vào thế giới — không phải ngồi suy nghĩ thuần túy.', color: 'text-emerald-600' },
                  { num: '②', role: 'Động lực của nhận thức', desc: 'Nhu cầu thực tiễn thúc đẩy nhận thức phát triển. Cần vượt biển → nghiên cứu thiên văn. Cần chữa bệnh → phát triển y học.', color: 'text-blue-600' },
                  { num: '③', role: 'Mục đích của nhận thức', desc: 'Lý luận phải trở về thực tiễn. Nhận thức không phải mục đích tự thân — mà để phục vụ hành động và cải tạo thế giới.', color: 'text-amber-600' },
                  { num: '④', role: 'Tiêu chuẩn của chân lý', desc: 'Lý thuyết đúng hay sai → đưa vào thực tiễn → kết quả nói lên tất cả. Không phải logic thuần túy kiểm nghiệm chân lý.', color: 'text-gold' },
                ].map((r, i) => (
                  <div key={i} className="flex gap-4">
                    <span className={`font-bold font-serif text-lg ${r.color} flex-shrink-0`}>{r.num}</span>
                    <div>
                      <p className={`text-sm font-bold ${r.color}`}>{r.role}</p>
                      <p className="text-xs text-white/60 mt-1 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PART II: NHẬN THỨC CẢM TÍNH ── */}
        <section>
          <SectionHeader num="Phần II" icon={<Eye size={20} className="text-indigo-500" />} title="Nhận thức cảm tính" sub="Trực quan sinh động — Giai đoạn đầu tiên của hành trình" color="border-indigo-400" />

          <div className="glass-neural p-8 rounded-3xl mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-1 bg-gradient-to-r from-indigo-200 via-violet-300 to-purple-400 rounded-full"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 flex-shrink-0">Cảm giác → Tri giác → Biểu tượng</p>
            </div>

            {/* Stage Selector */}
            <div className="flex gap-3 mb-6 flex-wrap">
              {sensoryStages.map((stage, i) => (
                <button key={i} onClick={() => setActiveSensory(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeSensory === i ? 'bg-indigo-600 text-white shadow-lg scale-105' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'}`}>
                  <span>{stage.icon}</span> {stage.name}
                </button>
              ))}
            </div>

            {/* Stage Detail */}
            <div className={`border ${sensoryStages[activeSensory].color} p-6 rounded-2xl transition-all duration-300`}>
              <div className="flex items-start gap-4 mb-5">
                <div className="text-4xl flex-shrink-0">{sensoryStages[activeSensory].icon}</div>
                <div>
                  <h4 className={`font-serif text-xl font-bold ${sensoryStages[activeSensory].highlight}`}>{sensoryStages[activeSensory].name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">{sensoryStages[activeSensory].eng}</p>
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-4">{sensoryStages[activeSensory].desc}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/70 p-4 rounded-xl">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Ví dụ</p>
                  <p className="text-sm text-white/70 italic">{sensoryStages[activeSensory].example}</p>
                </div>
                <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-2">Giới hạn</p>
                  <p className="text-sm text-white/70">{sensoryStages[activeSensory].limit}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-2xl">
            <p className="text-sm text-white/70 leading-relaxed">
              💡 <strong>Đặc điểm chung:</strong> Nhận thức cảm tính nắm bắt sự vật một cách <strong>trực tiếp, cụ thể, sinh động</strong> — nhưng chỉ là <strong>bề ngoài, hiện tượng</strong>. Chưa thể nắm bắt được <em>bản chất</em>, <em>quy luật</em>, <em>mối liên hệ tất yếu</em> bên trong sự vật.
            </p>
          </div>
        </section>

        {/* ── PART III: NHẬN THỨC LÝ TÍNH ── */}
        <section>
          <SectionHeader num="Phần III" icon={<Brain size={20} className="text-amber-500" />} title="Nhận thức lý tính" sub="Tư duy trừu tượng — Bước nhảy vọt từ cảm tính lên lý tính" color="border-amber-400" />

          <div className="glass-neural p-8 rounded-3xl mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-1 bg-gradient-to-r from-amber-200 via-orange-300 to-red-400 rounded-full"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 flex-shrink-0">Khái niệm → Phán đoán → Suy luận</p>
            </div>

            <div className="flex gap-3 mb-6 flex-wrap">
              {rationalStages.map((stage, i) => (
                <button key={i} onClick={() => setActiveRational(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeRational === i ? 'bg-amber-600 text-white shadow-lg scale-105' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}`}>
                  <span>{stage.icon}</span> {stage.name}
                </button>
              ))}
            </div>

            <div className={`border ${rationalStages[activeRational].color} p-6 rounded-2xl transition-all duration-300`}>
              <div className="flex items-start gap-4 mb-5">
                <div className="text-4xl flex-shrink-0">{rationalStages[activeRational].icon}</div>
                <div>
                  <h4 className={`font-serif text-xl font-bold ${rationalStages[activeRational].highlight}`}>{rationalStages[activeRational].name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">{rationalStages[activeRational].eng}</p>
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed mb-4">{rationalStages[activeRational].desc}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/70 p-4 rounded-xl">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Ví dụ</p>
                  <p className="text-sm text-white/70 italic">{rationalStages[activeRational].example}</p>
                </div>
                <div className="bg-red-500/10/60 p-4 rounded-xl border border-red-200/50">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red-600 mb-2">Giới hạn</p>
                  <p className="text-sm text-white/70">{rationalStages[activeRational].limit}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl">
            <p className="text-sm text-white/70 leading-relaxed">
              💡 <strong>Bước nhảy vĩ đại:</strong> Chuyển từ cảm tính lên lý tính là bước nhảy về chất trong nhận thức. Lý tính nắm bắt được <strong>bản chất</strong>, <strong>quy luật</strong>, <strong>mối liên hệ tất yếu</strong> — những thứ mà giác quan không thể thấy được. Bạn không thể "thấy" lực hấp dẫn — nhưng tư duy trừu tượng nắm bắt nó.
            </p>
          </div>
        </section>

        {/* ── PART IV: CON ĐƯỜNG BIỆN CHỨNG ── */}
        <section>
          <div className="bg-[#06140D] rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-navy to-amber-900/30"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[60px]"></div>
            <div className="relative z-10">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6 text-center">Con đường biện chứng của nhận thức</p>

              <div className="max-w-2xl mx-auto space-y-0">
                {/* Step by step flow */}
                {[
                  { phase: 'Xuất phát điểm', label: 'Thực tiễn', sub: 'Con người tác động vào thế giới', icon: '🔧', color: 'bg-emerald-500/20 border-emerald-400/40' },
                  { arrow: '↓ Tác động vào giác quan' },
                  { phase: 'Giai đoạn 1', label: 'Nhận thức cảm tính', sub: 'Cảm giác · Tri giác · Biểu tượng', icon: '👁️', color: 'bg-indigo-500/20 border-indigo-400/40' },
                  { arrow: '↓ Tư duy trừu tượng hóa' },
                  { phase: 'Giai đoạn 2', label: 'Nhận thức lý tính', sub: 'Khái niệm · Phán đoán · Suy luận', icon: '🧠', color: 'bg-amber-500/20 border-amber-400/40' },
                  { arrow: '↓ Kiểm nghiệm & Cải tạo' },
                  { phase: 'Đích đến', label: 'Thực tiễn (mới)', sub: 'Lý luận trở về phục vụ thực tiễn', icon: '✨', color: 'bg-gold/20 border-gold/40', highlight: true },
                  { arrow: '↓ Nhận thức mới bắt đầu...' },
                ].map((step, i) => (
                  'arrow' in step ? (
                    <div key={i} className="flex flex-col items-center py-3">
                      <div className="w-px h-4 bg-gold/30"></div>
                      <p className="text-gold/60 text-[10px] italic">{step.arrow}</p>
                      <div className="w-px h-4 bg-gold/30"></div>
                    </div>
                  ) : (
                    <div key={i} className={`border ${step.color} p-5 rounded-2xl flex items-center gap-5 ${step.highlight ? 'ring-2 ring-gold/40' : ''}`}>
                      <div className="text-3xl flex-shrink-0">{step.icon}</div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{step.phase}</p>
                        <p className="font-serif font-bold text-white">{step.label}</p>
                        <p className="text-white/60 text-xs mt-0.5">{step.sub}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>

              <div className="mt-10 p-6 bg-white/5 border border-gold/20 rounded-2xl text-center">
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Điểm mấu chốt</p>
                <p className="font-serif text-white/90 text-lg italic">Nhận thức là một vòng tròn xoáy ốc không kết thúc — mỗi chu kỳ đưa chân lý lên một trình độ cao hơn.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PART V: CHÂN LÝ ── */}
        <section>
          <SectionHeader num="Phần V" icon={<Star size={20} className="text-gold" />} title="Chân lý và các tính chất" sub="Chân lý là nhận thức phù hợp với thực tại khách quan, được thực tiễn kiểm chứng." color="border-gold" />

          <div className="glass-neural p-8 rounded-3xl mb-8">
            <div className="bg-[#06140D] p-6 rounded-2xl mb-8 text-center">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Định nghĩa</p>
              <p className="font-serif text-white text-xl leading-relaxed">
                Chân lý là <span className="text-gold">tri thức phù hợp với thực tại khách quan</span> và được{' '}
                <span className="text-gold">thực tiễn kiểm nghiệm</span>.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {truthProperties.map((prop, i) => (
                <div key={i} className={`border ${prop.color} p-6 rounded-2xl hover:-translate-y-1 transition-transform`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{prop.icon}</span>
                    <h4 className="font-serif text-white/90 font-bold">{prop.name}</h4>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">{prop.desc}</p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-[11px] text-white/50 italic">{prop.vs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Absolute vs Relative */}
          <div className="glass-neural p-8 rounded-3xl">
            <h3 className="font-serif text-white/90 text-xl mb-6">Chân lý tuyệt đối và tương đối</h3>
            <div className="flex flex-col gap-0">
              {[
                { label: 'Ptolemy: Vũ trụ địa tâm', note: 'Chân lý tương đối của thế kỷ 2', progress: 20 },
                { label: 'Copernicus: Nhật tâm', note: 'Chân lý tương đối tốt hơn, thế kỷ 16', progress: 50 },
                { label: 'Newton: Cơ học thiên thể', note: 'Chân lý tương đối chính xác hơn, TK 17', progress: 75 },
                { label: 'Einstein: Tương đối tổng quát', note: 'Chân lý tương đối hiện nay, TK 20', progress: 90 },
                { label: '∞ Chân lý tuyệt đối', note: 'Không bao giờ đạt được hoàn toàn — nhưng luôn tiến đến', progress: 100 },
              ].map((step, i) => (
                <div key={i} className={`flex items-center gap-4 py-3 ${i < 4 ? 'border-b border-white/10' : ''}`}>
                  <div className="w-16 text-right">
                    <span className="text-xs font-bold text-white/40">{step.progress}%</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-green-900/300/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-400 to-gold rounded-full transition-all" style={{ width: `${step.progress}%` }}></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-bold ${i === 4 ? 'text-gold' : 'text-white/90'}`}>{step.label}</p>
                    <p className="text-[11px] text-white/50">{step.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <SectionHeader num="Câu hỏi hóc búa" icon={<HelpCircle size={20} className="text-white/90" />} title="Tranh luận chuyên sâu" sub="Những câu hỏi chạm đến giới hạn của lý luận nhận thức." color="border-[#0F2A1C]" />
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className={`glass-neural rounded-2xl overflow-hidden border transition-colors duration-300 ${openFaq === i ? 'border-gold/40' : 'border-transparent'}`}>
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

        {/* ── CONCLUSION ── */}
        <section className="bg-gradient-to-br from-navy via-navy to-indigo-900 rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-[60px]"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-black/30 border border-white/10 flex items-center justify-center text-2xl mb-2">🌑</div>
                <p className="text-white/40 text-xs">Bóng tối<br/>Thiếu hiểu biết</p>
              </div>
              <div className="flex-1 h-px border-t-2 border-dashed border-gold/30 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold text-xs">→→→</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-2xl mb-2">✨</div>
                <p className="text-gold text-xs font-bold">Ánh sáng<br/>Chân lý</p>
              </div>
            </div>
            <div className="text-center">
              <p className="font-serif text-xl text-white/90 italic leading-relaxed max-w-2xl mx-auto mb-6">
                Nhận thức không phải đích đến mà là hành trình. Mỗi chân lý tương đối ta nắm được hôm nay là nền để đứng lên cao hơn ngày mai — nhìn xa hơn, hiểu sâu hơn, hành động đúng hơn.
              </p>
              <p className="text-white/40 text-sm">Và hành trình đó không bao giờ kết thúc — vì vũ trụ vô hạn, còn nhận thức mãi tiến về phía trước.</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between border-t border-white/10 pt-8">
          <Link to="/modules/pbc" className="inline-flex items-center gap-3 px-6 py-3 text-white/50 hover:text-white/90 rounded-full text-sm font-bold uppercase tracking-widest transition-colors">
            <ArrowLeft size={16} /> Phép Biện chứng
          </Link>
          <Link to="/modules/cndvls-1" className="inline-flex items-center gap-3 px-6 py-3 bg-[#06140D] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#06140D]/80 transition-colors">
            Duy vật Lịch sử <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  )
}
