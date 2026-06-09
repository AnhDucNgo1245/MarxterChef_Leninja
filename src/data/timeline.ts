export interface TimelineMilestone {
  id: string
  year: string
  title: string
  subtitle: string
  description: string
  keyIdeas: string[]
  color: string
  icon: string
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'ancient',
    year: 'TK V TCN',
    title: 'Triết học Cổ đại',
    subtitle: 'Hy Lạp & Phương Đông',
    description: 'Nền tảng đầu tiên của tư duy triết học. Các nhà triết học cổ đại đặt câu hỏi về bản chất của thực tại, sự vật và con người.',
    keyIdeas: ['Heraclitus: "Mọi thứ đều biến đổi"', 'Democritus: Nguyên tử luận', 'Plato: Thế giới ý niệm', 'Aristotle: Logic hình thức'],
    color: '#a855f7',
    icon: '🏛️',
  },
  {
    id: 'medieval',
    year: 'TK XI–XVI',
    title: 'Triết học Trung Cổ',
    subtitle: 'Kinh viện & Phục Hưng',
    description: 'Triết học gắn liền với thần học. Dần dần tách ra trong thời kỳ Phục Hưng với sự trỗi dậy của chủ nghĩa nhân văn.',
    keyIdeas: ['Thomas Aquinas: Tổng hợp thần học-triết học', 'Francis Bacon: Thực nghiệm luận', 'Descartes: "Tôi suy nghĩ, vậy tôi tồn tại"'],
    color: '#64748b',
    icon: '⚔️',
  },
  {
    id: 'enlightenment',
    year: 'TK XVII–XVIII',
    title: 'Triết học Khai Sáng',
    subtitle: 'Duy vật Pháp & Kinh nghiệm Anh',
    description: 'Lý trí được tôn vinh. Chủ nghĩa duy vật cơ học phát triển mạnh. Đặt nền móng cho tư duy khoa học hiện đại.',
    keyIdeas: ['Diderot, d\'Alembert: Bách khoa toàn thư', 'Locke, Hume: Chủ nghĩa kinh nghiệm', 'Rousseau: Khế ước xã hội', 'Kant: Phê phán lý tính thuần túy'],
    color: '#f59e0b',
    icon: '💡',
  },
  {
    id: 'hegel',
    year: '1770–1831',
    title: 'Georg Wilhelm Friedrich Hegel',
    subtitle: 'Phép Biện chứng Duy tâm',
    description: 'Hegel xây dựng hệ thống triết học biện chứng vĩ đại nhất trong lịch sử tư tưởng, mặc dù còn mang tính duy tâm.',
    keyIdeas: ['Phép biện chứng: Chính đề → Phản đề → Hợp đề', '"Tinh thần tuyệt đối" là nền tảng thực tại', 'Lịch sử là sự tự triển khai của Tinh thần', 'Phủ định của phủ định'],
    color: '#ec4899',
    icon: '🔮',
  },
  {
    id: 'feuerbach',
    year: '1804–1872',
    title: 'Ludwig Feuerbach',
    subtitle: 'Chủ nghĩa Duy vật Nhân học',
    description: 'Feuerbach lật ngược Hegel: không phải tinh thần tạo ra vật chất, mà vật chất là nền tảng, con người là trung tâm.',
    keyIdeas: ['Con người tạo ra thần, không phải ngược lại', 'Tôn giáo là sự tha hóa của bản chất người', 'Chủ nghĩa duy vật nhân học', 'Nền tảng cho Marx xây dựng duy vật lịch sử'],
    color: '#3b82f6',
    icon: '🔄',
  },
  {
    id: 'marx',
    year: '1818–1883',
    title: 'Karl Marx',
    subtitle: 'Nhà Sáng lập Chủ nghĩa Mác',
    description: 'Marx kết hợp phép biện chứng của Hegel với chủ nghĩa duy vật của Feuerbach, tạo ra cuộc cách mạng trong triết học và tư tưởng xã hội.',
    keyIdeas: ['"Tuyên ngôn Đảng Cộng sản" (1848)', '"Tư bản" (Das Kapital, 1867)', 'Duy vật lịch sử và đấu tranh giai cấp', '"Triết học không chỉ giải thích thế giới mà phải thay đổi nó"'],
    color: '#00ff9f',
    icon: '⚡',
  },
  {
    id: 'engels',
    year: '1820–1895',
    title: 'Friedrich Engels',
    subtitle: 'Đồng Sáng lập & Người Kế thừa',
    description: 'Engels đồng hành cùng Marx và sau khi Marx mất, tiếp tục phát triển và hệ thống hóa chủ nghĩa Mác.',
    keyIdeas: ['"Biện chứng của tự nhiên"', '"Chống Dühring" — hệ thống hóa triết học Mác', 'Ba quy luật biện chứng', '"Nguồn gốc gia đình, sở hữu tư nhân và nhà nước"'],
    color: '#00d4ff',
    icon: '📚',
  },
  {
    id: 'lenin',
    year: '1870–1924',
    title: 'Vladimir Ilyich Lenin',
    subtitle: 'Phát triển Chủ nghĩa Mác',
    description: 'Lenin phát triển chủ nghĩa Mác trong điều kiện lịch sử mới — thời đại đế quốc chủ nghĩa và cách mạng vô sản.',
    keyIdeas: ['"Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán"', 'Định nghĩa vật chất nổi tiếng', '"Chủ nghĩa đế quốc — giai đoạn tột cùng của CNTB"', 'Lý luận về đảng kiểu mới và cách mạng'],
    color: '#f97316',
    icon: '🌟',
  },
]
