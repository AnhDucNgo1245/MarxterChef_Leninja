import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, HelpCircle, BookOpen, Lightbulb, FlaskConical, Clock, Layers, ChevronDown } from 'lucide-react'

const faqItems = [
  {
    q: 'Triết học Mác-Lênin ra đời từ điều kiện kinh tế xã hội thế kỷ 19 — vậy khi điều kiện đó đã thay đổi hoàn toàn, triết học này có còn phù hợp không?',
    a: 'Bản thân triết học Mác-Lênin đặt ra nguyên tắc: không có chân lý tuyệt đối — chỉ có chân lý tương đối ngày càng tiếp cận chân lý tuyệt đối thông qua thực tiễn. Vì vậy, phương pháp biện chứng duy vật (cách nhìn nhận thế giới trong mối liên hệ, vận động, mâu thuẫn) vẫn còn nguyên giá trị — dù các kết luận cụ thể cần được điều chỉnh theo thực tiễn mới.'
  },
  {
    q: 'Nếu triết học Mác nói mọi lý luận đều phản ánh lợi ích giai cấp — thì bản thân lý luận đó cũng phản ánh lợi ích giai cấp công nhân. Vậy nó có thể được coi là chân lý khách quan không?',
    a: 'Đây là một câu hỏi tự phản (self-referential) cổ điển. Triết học Mác lập luận rằng: vì giai cấp công nhân là giai cấp cuối cùng cần giải phóng — và giải phóng giai cấp công nhân đồng nghĩa với giải phóng toàn nhân loại — lợi ích của họ trùng khớp với lợi ích khách quan của lịch sử. Đây là lập luận có thể tranh luận, nhưng không phải vô lý.'
  },
  {
    q: 'Lenin nói cách mạng có thể thắng ở khâu yếu nhất của đế quốc — dù LLSX chưa đủ trình độ. Điều đó có mâu thuẫn với quy luật LLSX quyết định QHSX không?',
    a: 'Lenin không bác bỏ quy luật của Mác — ông bổ sung thêm lý luận về "khâu yếu nhất" trong bối cảnh đế quốc chủ nghĩa toàn cầu. Điều kiện LLSX cần xét trên bình diện thế giới, không chỉ một quốc gia. Thực tiễn Nga 1917 chứng minh cách mạng có thể thắng — nhưng cũng đặt ra câu hỏi về khả năng duy trì và phát triển khi nền kinh tế chưa đủ trưởng thành.'
  },
  {
    q: 'Nếu phương pháp luận biện chứng nói không có gì bất biến — thì bản thân quy luật biện chứng có bất biến không? Nếu có thì nó tự mâu thuẫn với chính nó?',
    a: 'Phép biện chứng phân biệt giữa "không thay đổi về nội dung" và "không thay đổi về hình thức tồn tại". Quy luật biện chứng có thể là quy luật phổ quát nhất mà chúng ta biết — nhưng triết học Mác để ngỏ khả năng nhận thức của chúng ta về nó sẽ ngày càng đầy đủ hơn. Đây là sự khác biệt giữa chân lý tuyệt đối và chân lý tương đối.'
  },
]

const timeline = [
  { year: '1844', event: 'Bản thảo kinh tế — triết học', detail: 'Marx lần đầu hệ thống hóa quan điểm duy vật về lao động, tha hóa, và bản chất con người.' },
  { year: '1845', event: 'Luận cương về Feuerbach', detail: '"Các nhà triết học chỉ giải thích thế giới theo nhiều cách khác nhau — nhưng vấn đề là phải thay đổi nó."' },
  { year: '1848', event: 'Tuyên ngôn Cộng sản', detail: 'Phân tích lịch sử như lịch sử đấu tranh giai cấp. Kêu gọi: "Vô sản toàn thế giới, đoàn kết lại!"' },
  { year: '1867', event: 'Tư bản luận (Quyển 1)', detail: 'Phân tích cơ chế bóc lột tư bản qua lý thuyết giá trị thặng dư. Chứng minh mâu thuẫn nội tại của CNTB.' },
  { year: '1902', event: 'Lenin: "Làm gì?"', detail: 'Lý luận về đảng cách mạng kiểu mới — giai cấp công nhân cần đảng chuyên nghiệp dẫn đường.' },
  { year: '1916', event: 'Lenin: Chủ nghĩa đế quốc', detail: 'Phân tích CNTB độc quyền — giai đoạn cao nhất và cuối cùng trước khi sụp đổ.' },
  { year: '1917', event: 'Cách mạng Tháng Mười', detail: 'Lý luận được kiểm chứng bằng thực tiễn. Cách mạng thắng ở "khâu yếu nhất" của đế quốc.' },
]

export default function ModuleIntro() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#0B1224] selection:bg-gold/20 relative overflow-x-hidden">
      
      {/* ── DAWN AURORA BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-[-10%] w-[60%] h-[500px] bg-orange-400/10 blur-[120px] rounded-full mix-blend-screen" style={{ animation: 'float 12s ease-in-out infinite' }} />
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[600px] bg-blue-500/10 blur-[130px] rounded-full mix-blend-screen" style={{ animation: 'float 15s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[70%] h-[400px] bg-purple-500/10 blur-[100px] rounded-full mix-blend-screen" style={{ animation: 'float 10s ease-in-out infinite' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>
      
      {/* HERO */}
      <div className="bg-transparent text-white pt-40 pb-32 px-6 relative z-10 overflow-hidden border-b border-white/5">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/modules" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12">
            <ArrowLeft size={14} /> Quay lại Hub
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase mb-8">
            Module 1 · Bài nền tảng
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Nhập môn<br/>
            <span className="text-gold">Triết học Mác-Lênin</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mb-12 leading-relaxed">
            Hiểu bài này là hiểu tại sao mọi thứ còn lại trong chương trình được dạy theo cách đó.
          </p>
          <div className="glass-dawn border border-gold/20 bg-white/5 p-6 rounded-2xl max-w-2xl">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Câu hỏi trung tâm</p>
            <p className="text-white text-xl font-serif italic leading-relaxed">
              "Triết học Mác-Lênin từ đâu mà ra — và nó khác gì các triết học khác đã tồn tại trước đó?"
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-32 relative z-10">

        {/* PART 1 */}
        <section>
          <SectionHeader number="01" icon={<BookOpen size={20} />} title="Triết học là gì?" subtitle="Tại sao con người cần triết học?" />
          
          <div className="space-y-8">
            <div className="glass-dawn p-8 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-gold" size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-white/90 font-serif text-lg mb-2">Định nghĩa</h3>
                  <p className="text-white/80 leading-relaxed">
                    Triết học là <strong>hệ thống lý luận chung nhất</strong> về thế giới và vị trí của con người trong thế giới đó. Khác với khoa học cụ thể, triết học hỏi những câu hỏi bao trùm tất cả:
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ml-14">
                {['Thực tại là gì?', 'Con người biết được gì?', 'Cuộc sống có ý nghĩa gì?', 'Xã hội nên tổ chức thế nào?'].map((q, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                    <p className="text-sm font-serif italic text-white/80">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-dawn p-8 rounded-3xl">
              <h3 className="font-bold text-white/90 font-serif text-xl mb-2">Vấn đề cơ bản của triết học</h3>
              <p className="text-white/60 text-sm mb-6 italic">Mọi triết học đều phải trả lời một câu hỏi nền tảng:</p>
              <div className="bg-[#151D36] p-6 rounded-2xl text-center mb-8">
                <p className="text-gold font-serif text-2xl italic">"Cái gì có trước — vật chất hay ý thức?"</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left p-3 text-white/50 uppercase tracking-widest text-xs font-bold"></th>
                      <th className="p-3 text-center bg-purple-500/10 rounded-tl-xl text-white/90 font-bold">Chủ nghĩa duy tâm</th>
                      <th className="p-3 text-center bg-gold/10 rounded-tr-xl text-white/90 font-bold">Chủ nghĩa duy vật</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: 'Cái gì có trước?', idealism: 'Ý thức, tinh thần, Thượng đế', materialism: 'Vật chất' },
                      { label: 'Thế giới là gì?', idealism: 'Biểu hiện của ý niệm', materialism: 'Vật chất vận động' },
                      { label: 'Đại diện', idealism: 'Plato, Hegel, Berkeley', materialism: 'Democritus, Feuerbach, Marx' },
                      { label: 'Nhận thức thế giới?', idealism: 'Có thể có, có thể không', materialism: 'Có — qua thực tiễn' },
                    ].map((row, i) => (
                      <tr key={i} className="border-t border-white/10">
                        <td className="p-3 text-white/50 text-xs font-bold uppercase tracking-wider">{row.label}</td>
                        <td className="p-3 text-center text-white/80 bg-purple-500/100/10">{row.idealism}</td>
                        <td className="p-3 text-center text-white/80 bg-gold/5">{row.materialism}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-gold/5 border border-gold/20 rounded-xl">
                <p className="text-sm text-white/90 font-bold">
                  Triết học Mác-Lênin trả lời: <span className="text-gold">Vật chất có trước</span> — và con người hoàn toàn có thể nhận thức được thế giới <span className="text-gold">thông qua thực tiễn</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PART 2 */}
        <section>
          <SectionHeader number="02" icon={<FlaskConical size={20} />} title="Nguồn gốc hình thành" subtitle="Triết học Mác-Lênin không xuất hiện từ chân không — nó có 3 nguồn gốc rõ ràng." />

          <div className="space-y-6">
            {/* Origin 1 */}
            <div className="glass-dawn p-8 rounded-3xl border-l-4 border-l-red-400">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-red-400 border border-red-200 px-3 py-1 rounded-full">Nguồn gốc 1</span>
                <h3 className="font-bold text-white/90 font-serif text-lg">Điều kiện kinh tế xã hội</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Thế kỷ 19 — Cách mạng Công nghiệp bùng nổ ở Tây Âu → máy móc thay thế lao động thủ công → giai cấp công nhân hình thành → mâu thuẫn giữa tư sản và vô sản ngày càng gay gắt.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { stat: '14–16h', label: 'làm việc/ngày' },
                  { stat: '5–6 tuổi', label: 'trẻ em vào nhà máy' },
                  { stat: '0', label: 'bảo hiểm lao động' },
                  { stat: '∞', label: 'mâu thuẫn giai cấp' },
                ].map((item, i) => (
                  <div key={i} className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-center">
                    <p className="text-red-500 font-bold text-xl font-serif">{item.stat}</p>
                    <p className="text-xs text-white/60 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Origin 2 */}
            <div className="glass-dawn p-8 rounded-3xl border-l-4 border-l-gold">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold border border-gold/30 px-3 py-1 rounded-full">Nguồn gốc 2</span>
                <h3 className="font-bold text-white/90 font-serif text-lg">Tiền đề lý luận</h3>
              </div>
              <p className="text-white/70 text-sm mb-6">Kế thừa và phê phán 3 dòng triết học lớn:</p>
              <div className="space-y-4">
                {[
                  {
                    src: 'Triết học cổ điển Đức (Hegel & Feuerbach)',
                    keep: 'Phép biện chứng — mọi thứ vận động qua mâu thuẫn',
                    critique: 'Hegel: duy tâm. Feuerbach: duy vật máy móc, thiếu thực tiễn',
                    marx: 'Lật ngược Hegel: vật chất vận động, ý thức phản ánh. Bổ sung thực tiễn vào Feuerbach.',
                  },
                  {
                    src: 'Kinh tế chính trị học cổ điển Anh (Smith & Ricardo)',
                    keep: 'Lý thuyết giá trị lao động',
                    critique: 'Coi quan hệ tư bản là tự nhiên và vĩnh cửu',
                    marx: 'Phát triển thành lý thuyết giá trị thặng dư — chỉ ra cơ chế bóc lột.',
                  },
                  {
                    src: 'CNXH không tưởng Pháp (Saint-Simon, Fourier, Owen)',
                    keep: 'Phê phán sâu sắc CNTB, đề xuất xã hội công bằng',
                    critique: 'Không tưởng — không chỉ ra được lực lượng và con đường thực hiện',
                    marx: 'Thay thế không tưởng bằng khoa học: quy luật lịch sử + lực lượng cách mạng.',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                    <div className="bg-gold/10 p-4 border-b border-gold/10">
                      <p className="text-sm font-bold text-white/90">① {item.src}</p>
                    </div>
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5">
                      <div className="p-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-green-600 mb-2">Kế thừa</p>
                        <p className="text-xs text-white/70 leading-relaxed">{item.keep}</p>
                      </div>
                      <div className="p-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-2">Phê phán</p>
                        <p className="text-xs text-white/70 leading-relaxed">{item.critique}</p>
                      </div>
                      <div className="p-4 bg-gold/5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">Mác làm gì</p>
                        <p className="text-xs text-white/80 leading-relaxed font-medium">{item.marx}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Origin 3 */}
            <div className="glass-dawn p-8 rounded-3xl border-l-4 border-l-blue-400">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 border border-blue-200 px-3 py-1 rounded-full">Nguồn gốc 3</span>
                <h3 className="font-bold text-white/90 font-serif text-lg">Tiền đề khoa học tự nhiên</h3>
              </div>
              <p className="text-white/70 text-sm mb-6">Ba phát hiện khoa học lớn thế kỷ 19 cung cấp cơ sở tự nhiên cho triết học Mác:</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { year: '1847', name: 'Định luật bảo toàn năng lượng', author: 'Helmholtz', detail: 'Năng lượng không tự sinh ra và không tự mất đi — chứng minh tính thống nhất vật chất của thế giới.' },
                  { year: '1859', name: 'Thuyết tiến hóa', author: 'Darwin', detail: 'Các loài tiến hóa qua chọn lọc tự nhiên — không cần Thượng đế. Đặt nền tảng duy vật cho sinh học.' },
                  { year: '1838–39', name: 'Học thuyết tế bào', author: 'Schwann & Schleiden', detail: 'Mọi sinh vật đều cấu thành từ tế bào — chứng minh tính thống nhất vật chất của thế giới hữu cơ.' },
                ].map((sci, i) => (
                  <div key={i} className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl">
                    <p className="text-blue-400 font-bold text-sm mb-1">{sci.year}</p>
                    <h4 className="font-bold text-white/90 font-serif mb-1">{sci.name}</h4>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider mb-3">— {sci.author}</p>
                    <p className="text-xs text-white/70 leading-relaxed">{sci.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PART 3 — TIMELINE */}
        <section>
          <SectionHeader number="03" icon={<Clock size={20} />} title="Quá trình hình thành" subtitle="Từ Marx đến Lenin — hành trình xây dựng lý luận." />
          <div className="relative pl-8 border-l-2 border-gold/30 space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-white border-4 border-gold flex items-center justify-center"></div>
                <div className="glass-dawn p-6 rounded-2xl hover:-translate-y-1 transition-transform group">
                  <div className="flex items-start gap-4">
                    <span className="text-gold font-bold font-serif text-sm border border-gold/20 bg-gold/5 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">{item.year}</span>
                    <div>
                      <h4 className="font-bold text-white/90 font-serif mb-2 group-hover:text-gold transition-colors">{item.event}</h4>
                      <p className="text-sm text-white/60 leading-relaxed italic">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PART 4 — Characteristics */}
        <section>
          <SectionHeader number="04" icon={<Layers size={20} />} title="Đặc điểm nổi bật" subtitle="Điều phân biệt Triết học Mác với mọi triết học trước đó." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '①',
                title: 'Thống nhất Duy vật + Biện chứng',
                body: 'Trước Mác: Feuerbach duy vật nhưng tĩnh; Hegel biện chứng nhưng duy tâm. Mác kết hợp: Vật chất vận động biện chứng — thế giới vừa là vật chất, vừa luôn vận động qua mâu thuẫn.',
                color: 'border-gold'
              },
              {
                num: '②',
                title: 'Thống nhất Lý luận + Thực tiễn',
                body: 'Triết học trước Mác: nhận thức thế giới để hiểu nó. Triết học Mác: nhận thức thế giới để thay đổi nó. Lý luận phải gắn với thực tiễn — thực tiễn kiểm nghiệm lý luận.',
                color: 'border-[#2A3B66]'
              },
              {
                num: '③',
                title: 'Lập trường giai cấp rõ ràng',
                body: 'Mọi triết học đều có lập trường giai cấp — dù thừa nhận hay không. Triết học Mác công khai đứng về phía giai cấp công nhân và nhân dân lao động.',
                color: 'border-red-400'
              },
            ].map((c, i) => (
              <div key={i} className={`glass-dawn p-8 rounded-3xl border-t-4 ${c.color} hover:-translate-y-2 transition-transform duration-300`}>
                <div className="text-3xl font-serif text-gold/40 mb-4">{c.num}</div>
                <h3 className="font-bold text-white/90 font-serif text-lg mb-4">{c.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#151D36] text-white p-8 rounded-3xl">
            <p className="font-serif italic text-white/90 text-lg mb-3">
              "Vũ khí của phê phán không thể thay thế sự phê phán bằng vũ khí."
            </p>
            <p className="text-gold text-xs font-bold uppercase tracking-widest">— Karl Marx</p>
          </div>
        </section>

        {/* PART 5 & 6 — TWO FUNCTIONS */}
        <section>
          <SectionHeader number="05–06" icon={<Lightbulb size={20} />} title="Hai chức năng cốt lõi" subtitle="Thế giới quan & Phương pháp luận." />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Thế giới quan */}
            <div className="space-y-4">
              <div className="bg-gold/10 border border-gold/20 p-6 rounded-2xl">
                <h3 className="font-bold text-white/90 font-serif text-xl mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm font-bold">TG</span>
                  Thế giới quan
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">Hệ thống quan điểm về thế giới — bản chất thực tại, vị trí con người, và ý nghĩa cuộc sống.</p>
              </div>
              {[
                { n: '①', t: 'Thế giới là vật chất — tồn tại khách quan', d: 'Không có Thượng đế, không có linh hồn bất tử. Chỉ có vật chất vận động — ý thức là sản phẩm của vật chất.' },
                { n: '②', t: 'Thế giới có thể nhận thức được', d: 'Chỉ có những thứ chưa biết, không có thứ không thể biết. Nhận thức phát triển vô hạn qua thực tiễn.' },
                { n: '③', t: 'Thế giới luôn vận động và phát triển', d: 'Không có gì bất biến vĩnh cửu. Mọi thứ đều có quá trình hình thành, phát triển và diệt vong.' },
                { n: '④', t: 'Con người có thể cải tạo thế giới', d: 'Con người không phải nạn nhân thụ động — mà là chủ thể tích cực cải tạo thực tại.' },
              ].map((item, i) => (
                <div key={i} className="glass-dawn p-5 rounded-xl flex gap-4">
                  <span className="text-gold font-bold flex-shrink-0">{item.n}</span>
                  <div>
                    <h4 className="text-sm font-bold text-white/90 mb-1">{item.t}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Phương pháp luận */}
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-bold text-white/90 font-serif text-xl mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-[#151D36] text-white flex items-center justify-center text-sm font-bold">PL</span>
                  Phương pháp luận
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">Hệ thống nguyên tắc chỉ đạo hoạt động nhận thức và thực tiễn — áp dụng cho mọi lĩnh vực.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-3 text-white/40 uppercase tracking-wider text-[10px]"></th>
                      <th className="p-3 text-center text-white/40 uppercase tracking-wider text-[10px]">Siêu hình</th>
                      <th className="p-3 text-center text-gold uppercase tracking-wider text-[10px]">Biện chứng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Nhìn sự vật', 'Cô lập, tách rời', 'Trong mối liên hệ'],
                      ['Trạng thái', 'Bất biến, tĩnh', 'Luôn vận động'],
                      ['Mâu thuẫn', 'Hoặc A hoặc không-A', 'A vừa là A vừa không-A'],
                      ['Nguồn gốc', 'Từ bên ngoài', 'Từ mâu thuẫn nội tại'],
                    ].map((row, i) => (
                      <tr key={i} className="border-t border-white/10">
                        <td className="p-3 text-white/50 font-bold">{row[0]}</td>
                        <td className="p-3 text-center text-white/60 bg-red-500/100/10">{row[1]}</td>
                        <td className="p-3 text-center text-white/90 font-medium bg-gold/5">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {[
                { n: '①', t: 'Nguyên tắc khách quan', d: 'Nhìn nhận sự vật như nó vốn có — không áp đặt ý muốn chủ quan.' },
                { n: '②', t: 'Nguyên tắc toàn diện', d: 'Xem xét trong tất cả các mặt, các mối quan hệ — không chỉ nhìn một chiều.' },
                { n: '③', t: 'Nguyên tắc lịch sử — cụ thể', d: 'Xem xét trong điều kiện lịch sử cụ thể — không áp công thức cứng nhắc.' },
                { n: '④', t: 'Nguyên tắc phát triển', d: 'Nhìn sự vật trong quá trình vận động — phát hiện xu hướng để hành động đúng.' },
              ].map((item, i) => (
                <div key={i} className="glass-dawn p-5 rounded-xl flex gap-4">
                  <span className="text-white/90 font-bold flex-shrink-0">{item.n}</span>
                  <div>
                    <h4 className="text-sm font-bold text-white/90 mb-1">{item.t}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SectionHeader number="07" icon={<HelpCircle size={20} />} title="Câu hỏi hóc búa" subtitle="Mang những câu hỏi này vào lớp để tranh luận." />
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className={`glass-dawn rounded-2xl overflow-hidden border transition-colors duration-300 ${openFaq === i ? 'border-gold/40' : 'border-transparent'}`}>
                <button
                  className="w-full p-6 text-left flex items-start justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-gold font-bold text-sm flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm font-serif text-white/90 leading-relaxed">{item.q}</p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-gold flex-shrink-0 mt-0.5 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0 ml-14 border-t border-gold/10 pt-4">
                    <p className="text-sm text-white/70 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="bg-[#151D36] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6">Điều quan trọng nhất để nhớ</p>
            <div className="flex items-start gap-4 mb-8 bg-white/5 p-6 rounded-xl border border-white/10">
              <span className="text-red-400 font-bold flex-shrink-0">✗</span>
              <div>
                <p className="text-white/50 text-sm line-through">Triết học Mác-Lênin là chân lý tuyệt đối, hoàn chỉnh và không thể thay đổi.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-8 bg-gold/10 p-6 rounded-xl border border-gold/20">
              <span className="text-gold font-bold flex-shrink-0">✓</span>
              <div>
                <p className="text-white text-sm leading-relaxed">Không có chân lý tuyệt đối — chỉ có chân lý tương đối ngày càng tiếp cận chân lý tuyệt đối thông qua thực tiễn. Triết học Mác-Lênin tự đặt ra tiêu chuẩn để phê phán chính nó — và đó là điều làm nó khác với giáo điều.</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="font-serif text-xl text-white/90 italic leading-relaxed mb-4">
                Marx không muốn người ta thờ phụng ông — ông muốn người ta dùng phương pháp của ông để phân tích thực tại và thay đổi nó.
              </p>
              <p className="text-white/40 text-sm">Học triết học Mác mà chỉ thuộc lòng định nghĩa — là đang làm điều ngược lại với những gì Marx muốn.</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-end border-t border-white/10 pt-8">
          <Link to="/modules/cndv" className="inline-flex items-center gap-3 px-6 py-3 bg-[#151D36] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#151D36]/80 transition-colors">
            Bài tiếp theo: Duy vật Biện chứng <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  )
}

function SectionHeader({ number, icon, title, subtitle }: { number: string, icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <div className="flex items-start gap-6 mb-12">
      <div className="flex-shrink-0 text-center">
        <div className="text-5xl font-serif text-white/5 font-bold leading-none">{number}</div>
        <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mx-auto -mt-4">
          {icon}
        </div>
      </div>
      <div className="pt-2">
        <h2 className="text-3xl font-serif text-white/90 mb-2">{title}</h2>
        <p className="text-white/50 text-sm">{subtitle}</p>
        <div className="w-16 h-0.5 bg-gold mt-4"></div>
      </div>
    </div>
  )
}
