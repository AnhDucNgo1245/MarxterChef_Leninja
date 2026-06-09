import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, GitBranch, Globe, HelpCircle, Zap } from 'lucide-react'

/* ─── DATA ─── */

const formations = [
  {
    id: 1,
    name: 'Cộng sản nguyên thủy',
    era: 'Thời kỳ đồ đá',
    icon: '🪨',
    color: 'bg-stone-100 border-stone-300',
    badge: 'bg-stone-200 text-stone-700',
    llsx: ['Công cụ đá, xương, gỗ — thô sơ nhất', 'Phân công tự nhiên theo giới tính, tuổi tác', 'Năng suất cực thấp — chỉ đủ tồn tại'],
    csht: ['Công hữu nguyên thủy — không ai sở hữu riêng', 'Thị tộc, bộ lạc — bình đẳng nguyên thủy', 'Phân phối bình quân theo nhu cầu'],
    kttt: ['Không có nhà nước — không có giai cấp', 'Tín ngưỡng vật tổ, ma thuật, thờ tự nhiên', 'Nghệ thuật hang động phục vụ nghi lễ'],
    collapse: 'LLSX phát triển → dư thừa xuất hiện → tư hữu hình thành → giai cấp ra đời. Phát hiện đồng, sắt là điểm nút: năng suất tăng → tích lũy đủ lớn → bất bình đẳng → sụp đổ.',
    accent: 'stone',
  },
  {
    id: 2,
    name: 'Chiếm hữu nô lệ',
    era: 'Cổ đại: Hy Lạp, La Mã, Ai Cập',
    icon: '⛓️',
    color: 'bg-pink-900/20 border-red-200',
    badge: 'bg-red-100 text-red-700',
    llsx: ['Công cụ đồng, sắt — cày sâu, tàu thuyền', 'Nô lệ — "công cụ biết nói" (Aristotle)', 'Năng suất đủ để xây dựng văn minh lớn'],
    csht: ['Chủ nô sở hữu cả TLSX lẫn người lao động', 'Cưỡng bức tuyệt đối bằng bạo lực', 'Nô lệ chỉ nhận đủ để sống — thặng dư về tay chủ nô'],
    kttt: ['Nhà nước nô lệ — La Mã, Hy Lạp', 'Triết học biện minh: "Một số sinh ra để làm chủ" (Aristotle)', 'Tôn giáo đa thần phản ánh cấu trúc quyền lực phức tạp'],
    collapse: 'Nô lệ có ý thức → phản kháng (Spartacus). Lao động cưỡng bức có trần năng suất thấp. LLSX đòi người lao động có kỹ năng và động lực hơn → QHSX nô lệ lỗi thời.',
    accent: 'red',
    paradox: 'Nghịch lý vĩ đại: Văn minh Hy Lạp-La Mã huy hoàng nhất cổ đại — triết học, nghệ thuật, kiến trúc — được xây dựng trên lưng nô lệ chiếm 1/3 đến 1/2 dân số.',
  },
  {
    id: 3,
    name: 'Phong kiến',
    era: 'Trung Cổ: châu Âu, Đông Á',
    icon: '🏰',
    color: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    llsx: ['Cày sâu cải tiến, thủy lợi, thủ công nghiệp', 'Nông nô — có gia đình, mảnh đất nhỏ nhưng gắn với lãnh địa', 'Năng suất cao hơn nô lệ vì có động lực nhất định'],
    csht: ['Địa chủ — quý tộc sở hữu đất đai', 'Chế độ lãnh địa — cưỡng bức bằng luật và tập tục', 'Địa tô: lao dịch → hiện vật → tiền tệ'],
    kttt: ['Quân chủ thần quyền — thiên tử / cai trị theo ý Chúa', 'Công giáo / Nho giáo biện minh: "Trật tự xã hội là ý Trời"', 'Triết học kinh viện: "Lý trí là tôi tớ của thần học"'],
    collapse: 'Thủ công → thương mại → tiền tệ hóa → tư sản mầm mống. QHSX phong kiến (đất gắn người, lãnh địa hạn chế thị trường) không còn phù hợp. Cách mạng tư sản bùng nổ.',
    accent: 'amber',
  },
  {
    id: 4,
    name: 'Tư bản chủ nghĩa',
    era: 'TK 18 — Hiện tại',
    icon: '⚙️',
    color: 'bg-indigo-900/30 border-indigo-700/50',
    badge: 'bg-blue-100 text-blue-700',
    llsx: ['Máy hơi nước → điện → tự động hóa → AI', 'Công nhân tự do về pháp lý — buộc bán sức lao động', 'Khoa học trở thành LLSX trực tiếp — lần đầu tiên trong lịch sử'],
    csht: ['Tư sản sở hữu tư nhân TLSX', 'Thị trường tự do — giá cả do cung cầu', 'Giá trị thặng dư — nguồn gốc lợi nhuận'],
    kttt: ['Dân chủ tư sản — tam quyền phân lập', '"Tự do, bình đẳng, bác ái" — nhưng tự do của tư bản', 'Truyền thông kiểm soát bởi tư bản — bá quyền văn hóa (Gramsci)'],
    collapse: 'Mâu thuẫn căn bản: Sản xuất xã hội hóa vs Chiếm hữu tư nhân hóa. Khủng hoảng định kỳ (1929, 2008). Khoảng cách giàu nghèo tăng. 1% sở hữu gần 50% tài sản toàn cầu.',
    accent: 'blue',
  },
  {
    id: 5,
    name: 'Cộng sản chủ nghĩa',
    era: 'Giai đoạn quá độ XHCN → tương lai',
    icon: '✨',
    color: 'bg-emerald-50 border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    llsx: ['LLSX phát triển đủ cao để tạo của cải dồi dào', 'Tự động hóa, AI giải phóng con người khỏi lao động cưỡng bức', 'Không còn khan hiếm căn bản'],
    csht: ['XHCN: "Làm theo năng lực — hưởng theo lao động"', 'CSCS: "Làm theo năng lực — hưởng theo nhu cầu"', 'Công hữu về TLSX'],
    kttt: ['Nhà nước vô sản → dần tự tiêu vong', 'Không còn giai cấp', 'Con người phát triển toàn diện — không bị tha hóa'],
    collapse: 'Điều kiện: LLSX đủ cao + xóa bỏ giai cấp + ý thức xã hội đạt trình độ cao. Thực tế TK 20: Liên Xô, Trung Quốc, Việt Nam... kết quả phức tạp và còn tranh cãi.',
    accent: 'emerald',
  },
]

const marxPredictions = [
  { claim: 'Tập trung tư bản → độc quyền', result: true, note: 'FAANG, tập đoàn đa quốc gia' },
  { claim: 'Khủng hoảng kinh tế định kỳ', result: true, note: '1929, 1973, 2008...' },
  { claim: 'Toàn cầu hóa tư bản', result: true, note: 'Thực tế toàn cầu hóa hiện nay' },
  { claim: 'Khoảng cách giàu nghèo tăng', result: true, note: '1% sở hữu ~50% tài sản toàn cầu' },
  { claim: 'Cách mạng ở nước tư bản phát triển nhất', result: false, note: 'Không xảy ra — xảy ra ở Nga, TQ, VN' },
  { claim: 'Công nhân bần cùng hóa tuyệt đối', result: false, note: 'Tư bản điều chỉnh qua nhà nước phúc lợi' },
  { claim: 'Tư bản tất yếu sụp đổ sớm', result: false, note: 'Chưa xảy ra sau 200 năm' },
]

const faqItems = [
  { q: 'Mác nói lịch sử tất yếu tiến đến cộng sản. Nhưng nhiều nền văn minh đã sụp đổ không phục hồi — La Mã, Maya, Khmer. Điều đó có phủ nhận tính tất yếu của lịch sử không?', a: 'Không. Sụp đổ của một nền văn minh không có nghĩa là lùi về hình thái thấp hơn — mà thường là bước trung gian trong quá trình lớn hơn. La Mã sụp đổ → "Thời kỳ đen tối" → rồi châu Âu bước vào phong kiến và sau đó tư bản ở trình độ cao hơn hẳn La Mã. Xu hướng không phải đường thẳng — mà là xoáy ốc với những bước lùi tạm thời.' },
  { q: 'Đấu tranh giai cấp là động lực lịch sử — vậy các xã hội không có giai cấp rõ ràng phát triển bằng gì? Và xã hội cộng sản không giai cấp phát triển thế nào?', a: 'Mâu thuẫn không biến mất — chỉ hình thức thay đổi. Cộng sản nguyên thủy có mâu thuẫn người — tự nhiên. Cộng sản chủ nghĩa sẽ có mâu thuẫn không đối kháng (khác biệt lợi ích có thể hòa giải). Nhưng đây là điểm Mác ít phát triển — câu hỏi về động lực phát triển của xã hội không giai cấp là một câu hỏi mở triết học.' },
  { q: 'Các nước Bắc Âu có CSHT tư bản, mâu thuẫn giai cấp rất lớn nhưng không có cách mạng — thay vào đó là nhà nước phúc lợi. Cải cách có thể thay thế cách mạng không?', a: 'Đây là tranh luận lớn nhất trong nội bộ chủ nghĩa Marx. Bernstein (Dân chủ xã hội) lập luận: có — cải cách từ từ đủ để thay đổi bản chất. Lenin và Luxemburg phản bác: nhà nước phúc lợi là nhượng bộ tạm thời — không thay đổi cấu trúc quyền lực. Thực tế Bắc Âu cho thấy tư bản có khả năng tự điều chỉnh cao hơn Mác dự đoán — nhưng cũng cho thấy áp lực giai cấp (phong trào công nhân mạnh) mới tạo ra sự điều chỉnh đó.' },
  { q: '5 hình thái của Mác dựa chủ yếu trên lịch sử châu Âu. Nhiều xã hội châu Á, châu Phi không trải qua đủ 5 hình thái tuần tự. Đây có phải quy luật phổ biến hay chỉ là mô hình châu Âu?', a: 'Đây là phê phán quan trọng và có cơ sở. Mác bản thân cuối đời (thư gửi Vera Zasulich, 1881) cũng tỏ ra nghi ngờ về tính phổ quát tuyệt đối của 5 hình thái. Ông thừa nhận một số xã hội có thể đi con đường khác. Nhiều nhà Marxist sau này (Wittfogel — phương thức sản xuất châu Á) đề xuất các biến thể. Đây là điểm lý thuyết cần tiếp tục phát triển — không phải áp dụng cứng nhắc.' },
  { q: 'Ai chịu trách nhiệm về bi kịch lịch sử như Holocaust, Gulag, Cách mạng Văn hóa? Quy luật khách quan — hay những con người cụ thể?', a: 'Câu hỏi này chạm đến vấn đề trách nhiệm đạo đức trong triết học duy vật. Duy vật lịch sử không miễn trách nhiệm cá nhân — nó giải thích điều kiện, không biện minh cho hành động. Hitler, Stalin, Mao là sản phẩm của điều kiện lịch sử — nhưng họ cũng là chủ thể đưa ra quyết định cụ thể trong những điều kiện đó. Cả hai chiều đều đúng: điều kiện khách quan tạo ra khả năng — nhưng con người cụ thể thực hiện hành động và phải chịu trách nhiệm.' },
]

function SectionHeader({ num, color, icon, title, sub }: { num: string, color: string, icon: React.ReactNode, title: string, sub: string }) {
  return (
    <div className={`flex items-start gap-5 mb-10 border-l-4 ${color} pl-5`}>
      <div className="pt-1">{icon}</div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-100/40 mb-1">{num}</p>
        <h2 className="text-2xl md:text-3xl font-serif text-fuchsia-50/90">{title}</h2>
        <p className="text-sm text-fuchsia-100/50 italic mt-1">{sub}</p>
      </div>
    </div>
  )
}

export default function ModuleCNDVLS2() {
  const [activeFormation, setActiveFormation] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [expandedSection, setExpandedSection] = useState<string>('llsx')

  const f = formations[activeFormation]

  return (
    <div className="min-h-screen bg-[#0f0412] selection:bg-gold/20 relative overflow-x-hidden">

      {/* ── WARP SPEED / QUANTUM TUNNEL BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0 perspective-[800px]">
        {/* Hyperspace lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-[2px] h-[100vh] bg-gradient-to-b from-transparent via-fuchsia-500/30 to-transparent"
                 style={{
                   '--rot': `${i * 18}deg`,
                   transform: `rotate(${i * 18}deg) translateY(-50%)`,
                   transformOrigin: 'bottom center',
                   animation: `warp-speed 3s linear infinite ${i * 0.15}s`
                 } as React.CSSProperties}></div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#0f0412_80%)]"></div>
        <style>{`
          @keyframes warp-speed {
            0% { opacity: 0; transform: rotate(var(--rot)) translateY(-50%) scaleY(0.1); }
            50% { opacity: 1; transform: rotate(var(--rot)) translateY(-20%) scaleY(1); }
            100% { opacity: 0; transform: rotate(var(--rot)) translateY(50%) scaleY(2); }
          }
        `}</style>
      </div>

      {/* ── HERO ── */}
      <div className="bg-transparent text-white pt-40 pb-28 px-6 relative z-10 overflow-hidden border-b border-[#300c3b]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.08),transparent_60%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/modules" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12">
            <ArrowLeft size={14} /> Quay lại Hub
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase mb-8">
            Module 6 · Duy vật Lịch sử — Phần 2
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Tiến trình Lịch sử<br/>
            <span className="text-gold">Qua các Hình thái</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mb-10 leading-relaxed">
            Lịch sử xã hội loài người đi theo hướng nào — và tại sao? Kết nối toàn bộ những gì đã học thành một bức tranh hoàn chỉnh.
          </p>

          {/* 5 Formations Preview */}
          <div className="flex items-center gap-0 mb-10 overflow-x-auto pb-2">
            {formations.map((f, i) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <div className={`text-center px-4 cursor-pointer ${activeFormation === i ? 'opacity-100' : 'opacity-40'}`} onClick={() => setActiveFormation(i)}>
                  <div className="text-2xl mb-1">{f.icon}</div>
                  <p className="text-[10px] text-white font-bold whitespace-nowrap">{f.name.split(' ').slice(0, 2).join(' ')}</p>
                </div>
                {i < 4 && <div className="flex-shrink-0 mx-1 text-gold/30 text-lg">→</div>}
              </div>
            ))}
          </div>

          <div className="glass-warp border border-gold/20 bg-white/5 p-6 rounded-2xl max-w-2xl">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3 text-center">Câu hỏi trung tâm</p>
            <p className="text-white text-xl font-serif italic text-center leading-relaxed">
              "Lịch sử xã hội loài người có quy luật không — hay chỉ là chuỗi sự kiện ngẫu nhiên?"
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-28 relative z-10">

        {/* ── DẪN NHẬP ── */}
        <section>
          <SectionHeader num="Dẫn nhập" color="border-[#300c3b]" icon={<GitBranch size={20} className="text-fuchsia-50/90" />} title="Hai cách hiểu về lịch sử" sub="Mác đang phản bác điều gì?" />
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-pink-900/20 border border-red-200 p-7 rounded-3xl">
              <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">✗ Trước Mác</p>
              <p className="text-sm text-fuchsia-100/70 leading-relaxed">Lịch sử là chuỗi sự kiện do vĩ nhân, Thượng đế, hay ngẫu nhiên tạo ra. <strong>Không có quy luật</strong> — chỉ có câu chuyện.</p>
            </div>
            <div className="bg-gold/10 border border-gold/30 p-7 rounded-3xl">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">✓ Mác</p>
              <p className="font-serif italic text-fuchsia-50/90 leading-relaxed text-sm">"Cho đến nay lịch sử của tất cả các xã hội tồn tại từ trước đến nay chỉ là lịch sử <strong>đấu tranh giai cấp</strong>."</p>
              <p className="text-fuchsia-100/40 text-[10px] mt-3">— Tuyên ngôn Cộng sản, 1848</p>
            </div>
          </div>
          <div className="glass-warp p-7 rounded-2xl">
            <p className="text-sm text-fuchsia-100/70 leading-relaxed">
              Lịch sử là <strong>quá trình lịch sử — tự nhiên</strong>: vừa tuân theo quy luật khách quan như tự nhiên, vừa do con người tạo ra thông qua hoạt động thực tiễn có ý thức.
            </p>
          </div>
        </section>

        {/* ── PHẦN I: HÌNH THÁI KT-XH ── */}
        <section>
          <SectionHeader num="Phần I" color="border-gold" icon={<Zap size={20} className="text-gold" />} title="Hình thái Kinh tế — Xã hội" sub="LLSX + QHSX + KTTT kết hợp thành chỉnh thể hữu cơ." />

          <div className="glass-warp p-8 rounded-3xl mb-8">
            <div className="bg-[#15051a] p-6 rounded-2xl mb-6 text-center">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Định nghĩa</p>
              <p className="font-serif text-white text-lg leading-relaxed italic">
                Hình thái KT-XH = <span className="text-gold">LLSX</span> + <span className="text-blue-300">QHSX/CSHT</span> + <span className="text-purple-300">KTTT</span> — kết hợp thành một <em>chỉnh thể hữu cơ sống</em>.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: 'LLSX', sub: 'Nền tảng vật chất', items: ['Người lao động', 'Tư liệu sản xuất', 'Khoa học — công nghệ'], color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
                { label: 'QHSX / CSHT', sub: 'Quan hệ sản xuất', items: ['Sở hữu TLSX', 'Tổ chức lao động', 'Phân phối sản phẩm'], color: 'bg-gold/10 border-gold/30 text-amber-700' },
                { label: 'KTTT', sub: 'Tư tưởng & Thiết chế', items: ['Nhà nước, pháp luật', 'Tôn giáo, triết học', 'Nghệ thuật, đạo đức'], color: 'bg-indigo-900/30 border-indigo-700/50 text-blue-700' },
              ].map((t, i) => (
                <div key={i} className={`border ${t.color.split(' ').slice(1).join(' ')} p-5 rounded-xl`}>
                  <p className={`font-bold font-serif ${t.color.split(' ')[0] === 'bg-emerald-50' ? 'text-emerald-700' : t.color.split(' ')[0] === 'bg-gold/10' ? 'text-amber-700' : 'text-blue-700'} mb-1`}>{t.label}</p>
                  <p className="text-xs text-fuchsia-100/50 mb-3">{t.sub}</p>
                  <ul className="space-y-1">{t.items.map((item, j) => <li key={j} className="text-xs text-fuchsia-100/70">· {item}</li>)}</ul>
                </div>
              ))}
            </div>
            <div className="mt-5 p-4 bg-purple-500/10 rounded-xl text-sm text-fuchsia-100/70">
              💡 <strong>Tại sao "hữu cơ"?</strong> Giống cơ thể sống — không thể tách tim ra khỏi phổi mà vẫn gọi là "cơ thể". Thay đổi một tầng kéo theo thay đổi các tầng khác. Đây là sinh thể xã hội — không phải tập hợp cơ học.
            </div>
          </div>
        </section>

        {/* ── PHẦN II: 5 HÌNH THÁI INTERACTIVE ── */}
        <section>
          <SectionHeader num="Phần II" color="border-emerald-400" icon={<Globe size={20} className="text-emerald-500" />} title="Năm hình thái lịch sử" sub="Mỗi hình thái là một giai đoạn phát triển cao hơn hình thái trước." />

          {/* Formation Selector — Timeline */}
          <div className="glass-warp p-6 rounded-3xl mb-8">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gold/20 -translate-y-1/2 z-0"></div>
              {formations.map((f, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveFormation(i); setExpandedSection('llsx') }}
                  className={`relative z-10 flex flex-col items-center gap-2 transition-all duration-300 ${activeFormation === i ? 'scale-110' : 'opacity-50 hover:opacity-80'}`}
                >
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-xl ${activeFormation === i ? 'bg-[#15051a] border-gold shadow-lg shadow-gold/20' : 'bg-white border-[#300c3b]/20'}`}>
                    {f.icon}
                  </div>
                  <span className={`text-[10px] font-bold text-center leading-tight max-w-16 ${activeFormation === i ? 'text-fuchsia-50/90' : 'text-fuchsia-100/40'}`}>
                    {f.name.split(' ').slice(0, 2).join('\n')}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Formation Detail */}
          <div className={`border ${f.color.split(' ').slice(1).join(' ')} glass-warp p-8 rounded-3xl`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl flex-shrink-0">{f.icon}</div>
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${f.badge}`}>{f.era}</span>
                <h3 className="font-serif text-fuchsia-50/90 text-2xl mt-2">{f.name}</h3>
              </div>
            </div>

            {/* Section tabs */}
            <div className="flex gap-2 mb-5 flex-wrap">
              {[
                { key: 'llsx', label: '⚙️ LLSX' },
                { key: 'csht', label: '🏗️ CSHT' },
                { key: 'kttt', label: '🏛️ KTTT' },
                { key: 'collapse', label: '💥 Tại sao tan rã?' },
              ].map((tab) => (
                <button key={tab.key} onClick={() => setExpandedSection(tab.key)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${expandedSection === tab.key ? 'bg-[#15051a] text-white' : 'bg-purple-500/10 text-fuchsia-100/60 hover:bg-[#15051a]/10'}`}>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="min-h-24">
              {expandedSection === 'collapse' ? (
                <div className="space-y-3">
                  <p className="text-sm text-fuchsia-100/80 leading-relaxed">{f.collapse}</p>
                  {f.paradox && (
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
                      <p className="text-amber-700 text-xs font-bold uppercase tracking-widest mb-2">Nghịch lý lịch sử</p>
                      <p className="text-sm text-fuchsia-100/80 italic">{f.paradox}</p>
                    </div>
                  )}
                </div>
              ) : (
                <ul className="space-y-2">
                  {(expandedSection === 'llsx' ? f.llsx : expandedSection === 'csht' ? f.csht : f.kttt).map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-fuchsia-100/80 p-3 bg-white/60 rounded-xl">
                      <span className="text-gold flex-shrink-0">·</span>{item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Marx's predictions about capitalism */}
          {activeFormation === 3 && (
            <div className="mt-6 glass-warp p-7 rounded-3xl">
              <h4 className="font-serif text-fuchsia-50/90 text-xl mb-4">Mác dự báo gì về tư bản? (Nhìn lại sau 200 năm)</h4>
              <div className="space-y-2">
                {marxPredictions.map((p, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${p.result ? 'bg-violet-900/20 border border-violet-700/50' : 'bg-pink-900/20 border border-red-200'}`}>
                    <span className={`text-xl flex-shrink-0 ${p.result ? 'text-green-500' : 'text-red-400'}`}>{p.result ? '✓' : '✗'}</span>
                    <div>
                      <p className={`text-sm font-bold ${p.result ? 'text-green-700' : 'text-red-700'}`}>{p.claim}</p>
                      <p className="text-xs text-fuchsia-100/60 mt-0.5">{p.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Communism detail */}
          {activeFormation === 4 && (
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="glass-warp p-6 rounded-2xl border-t-4 border-t-blue-400">
                <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">Giai đoạn thấp — XHCN</p>
                <div className="bg-purple-500/10 p-4 rounded-xl mb-3">
                  <p className="font-serif italic text-fuchsia-50/90 text-center">"Mỗi người làm theo năng lực — hưởng theo lao động."</p>
                </div>
                <ul className="space-y-1 text-xs text-fuchsia-100/70">
                  <li>· Vẫn còn nhà nước — nhà nước vô sản</li>
                  <li>· Công hữu về TLSX</li>
                  <li>· Phân phối theo lao động — vẫn có bất bình đẳng</li>
                </ul>
              </div>
              <div className="glass-warp p-6 rounded-2xl border-t-4 border-t-gold">
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Giai đoạn cao — CSCS</p>
                <div className="bg-[#15051a] p-4 rounded-xl mb-3">
                  <p className="font-serif italic text-gold text-center">"Mỗi người làm theo năng lực — hưởng theo nhu cầu."</p>
                </div>
                <ul className="space-y-1 text-xs text-white/60">
                  <li>· Nhà nước tự tiêu vong</li>
                  <li>· Không còn giai cấp</li>
                  <li>· Con người phát triển toàn diện</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* ── PHẦN III: QUÁ TRÌNH LỊCH SỬ — TỰ NHIÊN ── */}
        <section>
          <SectionHeader num="Phần III" color="border-blue-400" icon={<GitBranch size={20} className="text-blue-500" />} title="Quá trình Lịch sử — Tự nhiên" sub="Vừa có quy luật khách quan vừa do con người tạo ra." />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-warp p-7 rounded-3xl border-t-4 border-t-slate-400">
              <p className="text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">Mặt "Tự nhiên" — Có quy luật</p>
              <div className="space-y-3">
                {[
                  'Có quy luật khách quan không phụ thuộc ý muốn cá nhân',
                  'Tất yếu — không thể tránh khỏi về xu hướng dài hạn',
                  'Giống nước sôi ở 100°C — ai muốn hay không cũng vậy',
                ].map((p, i) => (
                  <div key={i} className="flex gap-3 text-sm text-fuchsia-100/70">
                    <span className="text-slate-400 flex-shrink-0">·</span>{p}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-warp p-7 rounded-3xl border-t-4 border-t-gold">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Mặt "Lịch sử" — Do con người</p>
              <div className="space-y-3">
                {[
                  'Do con người tạo ra thông qua hoạt động có ý thức',
                  'Cụ thể — hình thức và thời gian có thể thay đổi',
                  'Giống bếp và nhiên liệu — quyết định bao lâu đạt 100°C',
                ].map((p, i) => (
                  <div key={i} className="flex gap-3 text-sm text-fuchsia-100/70">
                    <span className="text-gold flex-shrink-0">·</span>{p}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic mechanism */}
          <div className="bg-[#15051a] text-white p-8 rounded-3xl mb-8">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6 text-center">Cơ chế vận động — Mâu thuẫn là động lực</p>
            <div className="max-w-md mx-auto space-y-0">
              {[
                { step: 'LLSX phát triển (từ từ, liên tục)', icon: '⚙️' },
                '↓ Mâu thuẫn với QHSX cũ tích lũy',
                { step: 'QHSX kìm hãm LLSX', icon: '🔒' },
                '↓ Mâu thuẫn giai cấp gay gắt',
                { step: 'Cách mạng xã hội — bước nhảy lịch sử', icon: '⚡', highlight: true },
                '↓ Hình thái mới ra đời',
                { step: 'LLSX tiếp tục phát triển → chu kỳ mới', icon: '↻' },
              ].map((item, i) => (
                typeof item === 'string' ? (
                  <div key={i} className="flex flex-col items-center py-2">
                    <div className="w-px h-3 bg-gold/30"></div>
                    <p className="text-gold/60 text-[10px] italic">{item}</p>
                    <div className="w-px h-3 bg-gold/30"></div>
                  </div>
                ) : (
                  <div key={i} className={`p-4 rounded-xl flex items-center gap-4 ${(item as any).highlight ? 'bg-gold/20 border border-gold/30' : 'bg-white/5 border border-white/10'}`}>
                    <span className="text-2xl flex-shrink-0">{(item as any).icon}</span>
                    <p className={`text-sm font-medium ${(item as any).highlight ? 'text-gold font-bold' : 'text-white'}`}>{(item as any).step}</p>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Class & Class struggle */}
          <div className="glass-warp p-8 rounded-3xl">
            <h3 className="font-serif text-fuchsia-50/90 text-xl mb-6">Giai cấp và Đấu tranh giai cấp</h3>
            <div className="bg-purple-500/10 border border-purple-500/20 p-5 rounded-xl mb-6 italic text-sm text-fuchsia-100/80 font-serif">
              "Giai cấp là những tập đoàn người to lớn có địa vị khác nhau trong một hệ thống sản xuất xã hội nhất định, khác nhau về quan hệ của họ đối với tư liệu sản xuất..." — Lenin
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: '💰', name: 'Kinh tế', desc: 'Đình công, bãi công, đòi tăng lương. Hình thức cơ bản và liên tục nhất.', badge: 'Hình thức cơ bản' },
                { icon: '🗳️', name: 'Chính trị', desc: 'Đấu tranh giành quyền lực nhà nước. Hình thức cao nhất — kết quả là cách mạng xã hội.', badge: 'Hình thức cao nhất' },
                { icon: '💭', name: 'Tư tưởng', desc: 'Đấu tranh văn hóa, chống hệ tư tưởng giai cấp thống trị, xây dựng ý thức giai cấp.', badge: 'Mặt trận văn hóa' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-purple-500/10 rounded-xl border border-purple-500/20 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-fuchsia-50/90 mb-1">{item.name}</h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-fuchsia-100/40 border border-[#300c3b]/20 px-2 py-0.5 rounded-full">{item.badge}</span>
                  <p className="text-xs text-fuchsia-100/60 mt-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHẦN IV: TÍNH PHỔ BIẾN VÀ ĐẶC THÙ ── */}
        <section>
          <SectionHeader num="Phần IV" color="border-purple-400" icon={<Globe size={20} className="text-purple-500" />} title="Phổ biến & Đặc thù" sub="Quy luật chung — nhưng mỗi xã hội một con đường riêng." />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-warp p-7 rounded-3xl border-t-4 border-t-purple-400">
              <p className="text-purple-600 text-xs font-bold uppercase tracking-widest mb-4">Tính phổ biến</p>
              <p className="text-sm text-fuchsia-100/70 leading-relaxed">Tất cả xã hội đều có xu hướng phát triển từ thấp đến cao — vì LLSX luôn phát triển và kéo theo thay đổi QHSX và KTTT. <strong>Đây là quy luật không có ngoại lệ tuyệt đối về xu hướng dài hạn.</strong></p>
            </div>
            <div className="glass-warp p-7 rounded-3xl border-t-4 border-t-gold">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Tính đặc thù</p>
              <div className="space-y-2">
                {[
                  '① Điều kiện địa lý — tự nhiên',
                  '② Tiếp xúc giữa các nền văn minh',
                  '③ Một số xã hội bỏ qua giai đoạn',
                  '④ Cải cách vs Cách mạng — hình thức khác nhau',
                ].map((p, i) => (
                  <div key={i} className="text-sm text-fuchsia-100/70 py-2 border-b border-fuchsia-100/10">{p}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Vietnam's historical path */}
          <div className="bg-pink-900/20 border border-red-200 p-8 rounded-3xl">
            <p className="text-red-700 text-xs font-bold uppercase tracking-widest mb-6">🇻🇳 Tiến trình lịch sử Việt Nam</p>
            <div className="relative border-l-2 border-red-200 pl-6 space-y-5">
              {[
                { era: 'Công xã nguyên thủy', sub: 'Thời kỳ đồ đá — đồng thau' },
                { era: 'Phong kiến sơ khai', sub: 'Văn Lang — Âu Lạc' },
                { era: 'Bắc thuộc + tiếp thu văn minh Hán', sub: '111 TCN — 938 SCN' },
                { era: 'Phong kiến độc lập', sub: '938 — 1858 · Nho giáo, làng xã, chống ngoại xâm' },
                { era: 'Nửa phong kiến — nửa thuộc địa', sub: '1858 — 1945 · LLSX bị khai thác, mâu thuẫn tích lũy', highlight: true },
                { era: 'Cách mạng Tháng Tám 1945', sub: 'Bước nhảy — giải phóng dân tộc + dân chủ', highlight: true },
                { era: 'Quá độ lên XHCN', sub: '1975 → nay · Bao cấp → Đổi Mới 1986 → Kinh tế thị trường định hướng XHCN' },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[29px] top-1 w-4 h-4 rounded-full border-2 ${step.highlight ? 'bg-red-400 border-red-500' : 'bg-white border-red-300'}`}></div>
                  <p className={`text-sm font-bold ${step.highlight ? 'text-red-700' : 'text-fuchsia-50/90'}`}>{step.era}</p>
                  <p className="text-xs text-fuchsia-100/50">{step.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <SectionHeader num="Câu hỏi hóc búa" color="border-[#300c3b]" icon={<HelpCircle size={20} className="text-fuchsia-50/90" />} title="Tranh luận chuyên sâu" sub="Những câu hỏi thử thách giới hạn của lý thuyết hình thái KT-XH." />
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className={`glass-warp rounded-2xl overflow-hidden border transition-colors duration-300 ${openFaq === i ? 'border-gold/40' : 'border-transparent'}`}>
                <button className="w-full p-6 text-left flex items-start justify-between gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex items-start gap-4">
                    <span className="text-gold font-bold text-sm flex-shrink-0 font-serif">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm font-serif text-fuchsia-50/90 leading-relaxed">{item.q}</p>
                  </div>
                  <ChevronDown size={18} className={`text-gold flex-shrink-0 mt-1 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 ml-10 border-t border-gold/10 pt-4">
                    <p className="text-sm text-fuchsia-100/70 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── CONCLUSION ── */}
        <section className="bg-[#15051a] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6">Điều đáng nhớ nhất</p>
            <div className="flex gap-4 mb-6 p-5 bg-white/5 rounded-xl border border-white/10">
              <span className="text-red-400 font-bold flex-shrink-0">✗</span>
              <p className="text-white/50 text-sm line-through">"5 hình thái KT-XH là một cái thang — mọi xã hội đều leo lên từng bậc theo đúng thứ tự."</p>
            </div>
            <div className="flex gap-4 mb-10 p-5 bg-gold/10 rounded-xl border border-gold/20">
              <span className="text-gold font-bold flex-shrink-0">✓</span>
              <p className="text-white text-sm leading-relaxed">Các hình thái có thể đan xen trong cùng một xã hội. Một số giai đoạn có thể bỏ qua. Hình thức cụ thể rất đa dạng dù xu hướng chung là nhất quán.</p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="font-serif text-xl text-white/90 italic leading-relaxed mb-4 max-w-2xl">
                Bạn đang sống trong một hình thái KT-XH cụ thể. Những giá trị bạn được dạy là đúng, những mong muốn bạn có, những lựa chọn nghề nghiệp bạn thấy là "tự nhiên" — tất cả đều được hình thành bởi hình thái KT-XH mà bạn đang sống trong đó.
              </p>
              <p className="text-white/50 text-sm">Nhận ra điều đó không có nghĩa là tất cả đều sai — mà có nghĩa là bạn nhìn thấy được điều kiện lịch sử của chính mình. Và đó là bước đầu tiên để suy nghĩ tự do thực sự.</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between border-t border-fuchsia-100/10 pt-8">
          <Link to="/modules/cndvls-1" className="inline-flex items-center gap-3 px-6 py-3 text-fuchsia-100/50 hover:text-fuchsia-50/90 rounded-full text-sm font-bold uppercase tracking-widest transition-colors">
            <ArrowLeft size={16} /> DVLS Phần 1
          </Link>
          <Link to="/" className="inline-flex items-center gap-3 px-6 py-3 bg-gold text-fuchsia-50/90 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gold/80 transition-colors">
            Hoàn thành chương trình ✨
          </Link>
        </div>

      </div>
    </div>
  )
}
