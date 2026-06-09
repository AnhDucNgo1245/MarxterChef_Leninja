import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Flame, Lightbulb, BookOpen } from 'lucide-react'

const schoolData: Record<string, {
  title: string
  tagline: string
  color: string
  origin: string
  keyFigures: string[]
  overview: string[]
  tenets: { title: string; desc: string }[]
  impact: string
  quotes: { text: string; author: string }[]
}> = {
  stoicism: {
    title: 'Chủ nghĩa Khắc kỷ',
    tagline: 'Bình thản trong biến động',
    color: 'from-slate-100 to-cream',
    origin: 'Hy Lạp cổ đại, khoảng 300 TCN',
    keyFigures: ['Zeno of Citium', 'Epictetus', 'Seneca', 'Marcus Aurelius'],
    overview: [
      'Chủ nghĩa Khắc kỷ (Stoicism) ra đời ở Athens vào khoảng 300 TCN, do Zeno xứ Citium sáng lập. Tên gọi xuất phát từ "Stoa Poikile" — hành lang có tranh trang trí nơi Zeno thường giảng dạy.',
      'Đây là một trường phái thực hành triết học — không chỉ là lý thuyết trừu tượng mà là hướng dẫn cụ thể cho cuộc sống hàng ngày, giúp con người đạt được sự bình thản nội tâm (ataraxia) bất kể ngoại cảnh.',
    ],
    tenets: [
      { title: 'Kiểm soát nhị phân', desc: 'Phân biệt rõ ràng những gì ta kiểm soát được (suy nghĩ, phán đoán, hành động) và những gì không thể kiểm soát (ngoại cảnh, ý kiến người khác). Chỉ đầu tư cảm xúc vào điều trước.' },
      { title: 'Đức hạnh là điều thiện tối cao', desc: 'Trí tuệ, can đảm, công bằng và tiết chế là bốn đức hạnh nền tảng. Chỉ đức hạnh mới là điều thiện thật sự; tài sản, danh tiếng, sức khỏe đều là "vật vô thưởng phạt".' },
      { title: 'Sống thuận theo tự nhiên', desc: 'Lý trí là bản chất của con người và của vũ trụ (Logos). Sống thuận theo tự nhiên nghĩa là sống thuận theo lý trí và đức hạnh.' },
    ],
    impact: 'Chủ nghĩa Khắc kỷ ảnh hưởng mạnh đến tư tưởng Thiên Chúa giáo sơ kỳ, luật pháp La Mã, và ngày nay là nền tảng của Liệu pháp Nhận thức - Hành vi (CBT) trong tâm lý học hiện đại.',
    quotes: [
      { text: 'Trở ngại là con đường.', author: 'Marcus Aurelius' },
      { text: 'Chúng ta bị làm khổ không phải bởi sự kiện, mà bởi ý kiến của mình về sự kiện.', author: 'Epictetus' },
    ],
  },
  materialism: {
    title: 'Duy vật Biện chứng',
    tagline: 'Thực tại khách quan, tư duy khoa học',
    color: 'from-red-50 to-cream',
    origin: 'Đức, thế kỷ 19',
    keyFigures: ['Karl Marx', 'Friedrich Engels', 'Vladimir Lenin', 'Georg Wilhelm Friedrich Hegel'],
    overview: [
      'Chủ nghĩa Duy vật Biện chứng (Dialectical Materialism) là nền tảng triết học của chủ nghĩa Mác, được phát triển bởi Karl Marx và Friedrich Engels trong thế kỷ 19. Nó kết hợp phép biện chứng của Hegel với quan điểm duy vật về thực tại.',
      'Không giống chủ nghĩa duy vật cơ học (coi vũ trụ như một cỗ máy), duy vật biện chứng nhìn nhận thế giới vật chất trong sự vận động và phát triển không ngừng, với mâu thuẫn nội tại là động lực.',
    ],
    tenets: [
      { title: 'Vật chất quyết định ý thức', desc: 'Thực tại vật chất tồn tại khách quan, độc lập với tư duy con người. Ý thức là sự phản ánh của vật chất — do đó thay đổi điều kiện vật chất sẽ thay đổi ý thức.' },
      { title: 'Phép biện chứng', desc: 'Mọi thứ đều đang vận động và thay đổi. Mâu thuẫn giữa các lực đối lập (luận đề và phản đề) tạo ra sự phát triển thành một cái gì đó mới hơn (tổng hợp).' },
      { title: 'Thực tiễn là tiêu chuẩn của chân lý', desc: 'Tri thức không được kiểm chứng bằng suy luận thuần túy mà bằng thực tiễn xã hội. Lý thuyết đúng là lý thuyết giúp con người cải tạo thế giới hiệu quả.' },
    ],
    impact: 'Duy vật biện chứng trở thành triết học nhà nước của Liên Xô và các nước xã hội chủ nghĩa thế kỷ 20. Tư tưởng này ảnh hưởng sâu sắc đến triết học, kinh tế học, xã hội học và phong trào giải phóng dân tộc toàn cầu.',
    quotes: [
      { text: 'Các triết gia mới chỉ giải thích thế giới, vấn đề là cải tạo thế giới.', author: 'Karl Marx' },
      { text: 'Tự do là ý thức về tất yếu.', author: 'Friedrich Engels' },
    ],
  },
  existentialism: {
    title: 'Chủ nghĩa Hiện sinh',
    tagline: 'Hiện sinh có trước bản chất',
    color: 'from-purple-50 to-cream',
    origin: 'Châu Âu, thế kỷ 19–20',
    keyFigures: ['Søren Kierkegaard', 'Jean-Paul Sartre', 'Simone de Beauvoir', 'Albert Camus', 'Martin Heidegger'],
    overview: [
      'Chủ nghĩa Hiện sinh (Existentialism) là phong trào triết học tập trung vào sự tồn tại cá nhân, tự do và lựa chọn. Không có một định nghĩa thống nhất, nhưng trọng tâm là: con người tồn tại trước, rồi mới định nghĩa bản chất của mình qua hành động.',
      'Ra đời từ Søren Kierkegaard ở thế kỷ 19, phong trào bùng nổ sau Thế chiến II khi Jean-Paul Sartre, Simone de Beauvoir và Albert Camus viết về sự phi lý, tự do và trách nhiệm trong thế giới đã mất đi ý nghĩa cũ.',
    ],
    tenets: [
      { title: 'Hiện sinh có trước bản chất', desc: 'Con người không có "bản chất" tiền định. Chúng ta sinh ra rồi tự tạo ra ý nghĩa và bản sắc của mình qua lựa chọn và hành động.' },
      { title: 'Tự do tuyệt đối và trách nhiệm', desc: '"Người ta bị kết án là tự do." (Sartre) — Con người luôn tự do lựa chọn, và kèm theo đó là trách nhiệm tuyệt đối với chính lựa chọn của mình.' },
      { title: 'Tính phi lý (Absurdity)', desc: 'Camus cho rằng con người luôn tìm kiếm ý nghĩa nhưng vũ trụ im lặng và vô cảm. Sự căng thẳng này là "phi lý". Phản ứng đúng đắn là nổi loạn và sáng tạo, chứ không phải tuyệt vọng.' },
    ],
    impact: 'Chủ nghĩa Hiện sinh định hình văn học, điện ảnh và nghệ thuật thế kỷ 20. Ảnh hưởng của nó còn thấm sâu vào tâm lý học nhân văn (Humanistic Psychology) với Abraham Maslow và Carl Rogers.',
    quotes: [
      { text: 'Cuộc sống tự nó không có ý nghĩa nào cả, nghĩa của cuộc sống là do bạn tự quyết định.', author: 'Jean-Paul Sartre' },
      { text: 'Phải tưởng tượng Sisyphus hạnh phúc.', author: 'Albert Camus' },
    ],
  },
  taoism: {
    title: 'Minh triết phương Đông',
    tagline: 'Thuận theo Đạo, vô vi nhi trị',
    color: 'from-emerald-50 to-cream',
    origin: 'Trung Quốc cổ đại, khoảng TK 6–4 TCN',
    keyFigures: ['Lão Tử (Laozi)', 'Trang Tử (Zhuangzi)', 'Khổng Tử (Confucius)', 'Mạnh Tử (Mencius)'],
    overview: [
      'Triết học phương Đông bao gồm nhiều truyền thống phong phú, từ Đạo giáo (Taoism), Nho giáo (Confucianism) đến Phật giáo. Điểm chung là sự quan tâm đến mối quan hệ hài hòa giữa con người với tự nhiên, xã hội và chính bản thân.',
      'Đạo giáo, với tư tưởng "Đạo" (Tao) là nguyên lý tối cao của vũ trụ, đề cao sự tự nhiên, giản dị và "Vô vi" — hành động thuận theo tự nhiên, không ép buộc hay cưỡng cầu.',
    ],
    tenets: [
      { title: 'Đạo (Tao)', desc: 'Là nguyên lý vô danh, vô hình mà muôn vật đều từ đó mà ra và quay trở lại. Không thể định nghĩa bằng ngôn ngữ, chỉ có thể cảm nhận và thuận theo.' },
      { title: 'Vô Vi (Wu Wei)', desc: 'Hành động không cưỡng bức — làm nhưng không ép buộc, lãnh đạo nhưng không thống trị, đạt được bằng cách buông bỏ. Như nước, mềm mỏng nhưng thắng cứng rắn.' },
      { title: 'Hài hòa âm dương', desc: 'Mọi thứ đều chứa mầm mống của cái đối lập. Sự hài hòa không phải là loại bỏ xung đột mà là chấp nhận và dung hòa sự tương phản — tối và sáng, cứng và mềm, có và không.' },
    ],
    impact: 'Tư tưởng phương Đông ảnh hưởng sâu rộng đến Thiền định (Zen Buddhism), Y học cổ truyền, võ thuật (Tai Chi, Judo) và phong trào Mindfulness hiện đại. Ngày nay, nhiều nhà lãnh đạo và doanh nhân phương Tây tìm đến triết học phương Đông như một nguồn cân bằng.',
    quotes: [
      { text: 'Hành trình vạn dặm bắt đầu từ một bước chân.', author: 'Lão Tử' },
      { text: 'Nước là thứ mềm nhất, mà chảy mòn cả đá cứng nhất.', author: 'Lão Tử' },
    ],
  },
}

export default function SchoolProfile() {
  const { id } = useParams<{ id: string }>()
  const data = id ? schoolData[id] : null

  if (!data) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-navy mb-4">Không tìm thấy</h1>
          <Link to="/" className="text-gold hover:underline">Quay về trang chủ</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        <Link to="/" className="inline-flex items-center gap-2 text-navy/50 hover:text-navy transition-colors text-sm font-bold uppercase tracking-widest mb-12">
          <ArrowLeft size={16} /> Trang chủ
        </Link>

        {/* Hero */}
        <header className={`bg-gradient-to-b ${data.color} rounded-[3rem] p-12 md:p-16 mb-16 border border-gold/10`}>
          <div className="mb-6">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Trường phái tư tưởng</p>
            <h1 className="text-4xl md:text-5xl font-serif text-navy mb-2">{data.title}</h1>
            <p className="text-navy/60 italic font-serif text-lg">"{data.tagline}"</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
            <div>
              <span className="text-xs font-bold text-navy/40 uppercase tracking-widest">Nguồn gốc</span>
              <p className="text-navy mt-1">{data.origin}</p>
            </div>
            <div>
              <span className="text-xs font-bold text-navy/40 uppercase tracking-widest">Đại diện tiêu biểu</span>
              <p className="text-navy mt-1">{data.keyFigures.join(', ')}</p>
            </div>
          </div>
          <div className="w-full h-px bg-gold/20 mb-6" />
          <div className="space-y-4">
            {data.overview.map((para, i) => (
              <p key={i} className="text-navy/80 leading-relaxed text-sm">{para}</p>
            ))}
          </div>
        </header>

        {/* Core Tenets */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="text-gold" size={24} />
            <h2 className="text-2xl font-serif text-navy">Luận Điểm Cốt Lõi</h2>
          </div>
          <div className="space-y-6">
            {data.tenets.map((tenet, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border-l-4 border-l-gold hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-gold uppercase tracking-widest border border-gold/30 px-3 py-1 rounded-full">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-bold text-navy text-lg font-serif">{tenet.title}</h3>
                </div>
                <p className="text-navy/70 leading-relaxed text-sm pl-10">{tenet.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="mb-16 glass-panel p-8 rounded-2xl bg-navy text-white">
          <div className="flex items-center gap-3 mb-4">
            <Flame className="text-gold" size={24} />
            <h2 className="text-xl font-serif text-white">Ảnh Hưởng Lịch Sử</h2>
          </div>
          <p className="text-white/80 leading-relaxed text-sm">{data.impact}</p>
        </section>

        {/* Quotes */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-gold" size={24} />
            <h2 className="text-2xl font-serif text-navy">Danh Ngôn Tiêu Biểu</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {data.quotes.map((q, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-black/5 relative overflow-hidden group hover:border-gold/30 transition-colors">
                <div className="absolute top-4 left-4 text-gold/10 font-serif text-5xl leading-none group-hover:text-gold/20 transition-colors">"</div>
                <p className="font-serif italic text-navy text-sm leading-relaxed relative z-10 pt-4 mb-4">{q.text}</p>
                <p className="text-xs font-bold text-gold uppercase tracking-widest">— {q.author}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 pt-8 border-t border-black/5 flex items-center justify-between">
          <span className="text-sm text-navy/50">Tiếp tục học hỏi</span>
          <Link to="/modules" className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-navy/80 transition-colors">
            Vào học Module <ArrowLeft size={14} className="rotate-180" />
          </Link>
        </div>

      </div>
    </div>
  )
}
