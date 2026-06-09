export interface GameQuote {
  id: string
  quote: string
  author: string
  options: string[]
}

export interface GameScenario {
  id: string
  scenario: string
  options: { id: string; label: string }[]
  answer: string
  explanation: string
}

export interface DecisionNode {
  id: string
  situation: string
  choices: { id: string; text: string; next: string; xp: number }[]
  analysis?: string
}

export const quotesGame: GameQuote[] = [
  {
    id: 'q1',
    quote: 'Các triết gia chỉ giải thích thế giới bằng nhiều cách khác nhau, vấn đề là phải thay đổi nó.',
    author: 'Karl Marx',
    options: ['Karl Marx', 'Friedrich Engels', 'V.I. Lenin', 'Georg Hegel'],
  },
  {
    id: 'q2',
    quote: 'Tôn giáo là thuốc phiện của nhân dân.',
    author: 'Karl Marx',
    options: ['Karl Marx', 'Ludwig Feuerbach', 'Friedrich Engels', 'V.I. Lenin'],
  },
  {
    id: 'q3',
    quote: 'Không có gì tồn tại nếu không vận động.',
    author: 'Friedrich Engels',
    options: ['Friedrich Engels', 'Karl Marx', 'Heraclitus', 'V.I. Lenin'],
  },
  {
    id: 'q4',
    quote: 'Vật chất là phạm trù triết học dùng để chỉ thực tại khách quan.',
    author: 'V.I. Lenin',
    options: ['V.I. Lenin', 'Karl Marx', 'Friedrich Engels', 'Georg Hegel'],
  },
  {
    id: 'q5',
    quote: 'Lịch sử của tất cả xã hội từ trước đến nay chỉ là lịch sử đấu tranh giai cấp.',
    author: 'Karl Marx',
    options: ['Karl Marx', 'Friedrich Engels', 'V.I. Lenin', 'Mao Trạch Đông'],
  },
  {
    id: 'q6',
    quote: 'Tất cả cái gì hợp lý thì có hiện thực, tất cả cái gì có hiện thực thì hợp lý.',
    author: 'Georg Hegel',
    options: ['Georg Hegel', 'Immanuel Kant', 'Karl Marx', 'Ludwig Feuerbach'],
  },
  {
    id: 'q7',
    quote: 'Con người là tổng hòa các mối quan hệ xã hội.',
    author: 'Karl Marx',
    options: ['Karl Marx', 'Friedrich Engels', 'V.I. Lenin', 'Jean-Paul Sartre'],
  },
  {
    id: 'q8',
    quote: 'Chủ nghĩa đế quốc là giai đoạn tột cùng của chủ nghĩa tư bản.',
    author: 'V.I. Lenin',
    options: ['V.I. Lenin', 'Karl Marx', 'Rosa Luxemburg', 'Friedrich Engels'],
  },
  {
    id: 'q9',
    quote: 'Tồn tại xã hội quyết định ý thức xã hội.',
    author: 'Karl Marx',
    options: ['Karl Marx', 'Georg Hegel', 'V.I. Lenin', 'Friedrich Engels'],
  },
  {
    id: 'q10',
    quote: 'Sự phủ định của phủ định là quy luật cơ bản của phép biện chứng.',
    author: 'Friedrich Engels',
    options: ['Friedrich Engels', 'Georg Hegel', 'Karl Marx', 'V.I. Lenin'],
  },
]

export const lawsGame: GameScenario[] = [
  {
    id: 'l1',
    scenario: 'Một sinh viên học tiếng Anh mỗi ngày. Sau 2 năm kiên trì, đột nhiên họ có thể nghe hiểu phim không cần phụ đề.',
    options: [
      { id: 'a', label: 'Quy luật Mâu thuẫn' },
      { id: 'b', label: 'Quy luật Lượng - Chất' },
      { id: 'c', label: 'Quy luật Phủ định của Phủ định' },
    ],
    answer: 'b',
    explanation: 'Đây là quy luật Lượng - Chất: tích lũy dần về lượng (số giờ học, từ vựng) đến điểm nút thì tạo ra bước nhảy về chất (khả năng nghe hiểu).',
  },
  {
    id: 'l2',
    scenario: 'Trong một công ty, mâu thuẫn giữa ban quản lý muốn cắt giảm chi phí và nhân viên muốn tăng lương dẫn đến đình công, buộc công ty phải thương lượng và đưa ra chính sách mới.',
    options: [
      { id: 'a', label: 'Quy luật Mâu thuẫn' },
      { id: 'b', label: 'Quy luật Lượng - Chất' },
      { id: 'c', label: 'Quy luật Phủ định của Phủ định' },
    ],
    answer: 'a',
    explanation: 'Đây là quy luật Mâu thuẫn: mâu thuẫn giữa hai mặt đối lập (quản lý vs nhân viên) là động lực dẫn đến sự thay đổi và phát triển của công ty.',
  },
  {
    id: 'l3',
    scenario: 'Từ kinh tế kế hoạch hóa tập trung → chuyển sang kinh tế thị trường → rồi phát triển thành kinh tế thị trường định hướng XHCN có vai trò nhà nước.',
    options: [
      { id: 'a', label: 'Quy luật Mâu thuẫn' },
      { id: 'b', label: 'Quy luật Lượng - Chất' },
      { id: 'c', label: 'Quy luật Phủ định của Phủ định' },
    ],
    answer: 'c',
    explanation: 'Đây là quy luật Phủ định của Phủ định: kinh tế thị trường phủ định kế hoạch hóa, rồi kinh tế XHCN phủ định kinh tế thị trường thuần túy, kế thừa ưu điểm của cả hai ở trình độ cao hơn.',
  },
  {
    id: 'l4',
    scenario: 'Nước được đun nóng từ 20°C lên 99°C vẫn là nước lỏng, nhưng đến 100°C thì chuyển thành hơi nước.',
    options: [
      { id: 'a', label: 'Quy luật Mâu thuẫn' },
      { id: 'b', label: 'Quy luật Lượng - Chất' },
      { id: 'c', label: 'Quy luật Phủ định của Phủ định' },
    ],
    answer: 'b',
    explanation: 'Ví dụ kinh điển của quy luật Lượng - Chất. 100°C là điểm nút, sự thay đổi từ nước sang hơi nước là bước nhảy về chất.',
  },
  {
    id: 'l5',
    scenario: 'Nghệ thuật hiện đại phủ nhận nghệ thuật cổ điển, rồi nghệ thuật hậu hiện đại lại quay về kết hợp yếu tố cổ điển nhưng ở góc nhìn mới.',
    options: [
      { id: 'a', label: 'Quy luật Mâu thuẫn' },
      { id: 'b', label: 'Quy luật Lượng - Chất' },
      { id: 'c', label: 'Quy luật Phủ định của Phủ định' },
    ],
    answer: 'c',
    explanation: 'Nghệ thuật hậu hiện đại là phủ định của phủ định: phủ nhận nghệ thuật hiện đại, kế thừa yếu tố cổ điển ở trình độ mới — phát triển xoáy ốc đi lên.',
  },
]

export const decisionTree: Record<string, DecisionNode> = {
  start: {
    id: 'start',
    situation: 'Bạn là một nhà sáng lập startup công nghệ với 10 nhân viên. Doanh thu đang tăng trưởng tốt. Nhà đầu tư đề nghị rót 5 tỷ đồng để mở rộng quy mô nhưng yêu cầu kiểm soát 51% cổ phần.',
    choices: [
      { id: 'accept', text: 'Chấp nhận đề nghị của nhà đầu tư', next: 'accepted_investment', xp: 10 },
      { id: 'negotiate', text: 'Thương lượng lại điều khoản', next: 'negotiate', xp: 20 },
      { id: 'reject', text: 'Từ chối, tự phát triển chậm hơn', next: 'rejected_investment', xp: 15 },
    ],
  },
  accepted_investment: {
    id: 'accepted_investment',
    situation: 'Bạn nhận vốn và mở rộng lên 50 nhân viên. Nhà đầu tư muốn thay đổi hướng sản phẩm để tối đa hóa lợi nhuận ngắn hạn, bỏ qua sứ mệnh ban đầu của bạn.',
    analysis: '⚡ Phân tích Mác-Lênin: Mâu thuẫn giữa lợi ích của nhà đầu tư (tư bản) và tầm nhìn của nhà sáng lập. Người sở hữu tư liệu sản xuất (vốn) có quyền kiểm soát — đây là biểu hiện của quan hệ sản xuất tư bản chủ nghĩa.',
    choices: [
      { id: 'comply', text: 'Tuân theo nhà đầu tư để giữ vốn', next: 'comply_end', xp: 5 },
      { id: 'resist', text: 'Kiên giữ sứ mệnh, thương lượng', next: 'resist_end', xp: 25 },
    ],
  },
  negotiate: {
    id: 'negotiate',
    situation: 'Sau nhiều vòng thương lượng, nhà đầu tư đồng ý chỉ lấy 30% cổ phần. Bạn có vốn mở rộng và vẫn giữ quyền kiểm soát.',
    analysis: '✅ Phân tích Mác-Lênin: Bạn đã giải quyết mâu thuẫn bằng cách tìm điểm cân bằng. Giữ được quyền sở hữu tư liệu sản xuất = giữ được định hướng phát triển. Đây là cách giải quyết mâu thuẫn theo hướng đôi bên cùng có lợi.',
    choices: [
      { id: 'expand', text: 'Mở rộng sản phẩm sang thị trường mới', next: 'expand_end', xp: 30 },
      { id: 'consolidate', text: 'Củng cố thị trường hiện tại', next: 'consolidate_end', xp: 20 },
    ],
  },
  rejected_investment: {
    id: 'rejected_investment',
    situation: 'Bạn phát triển chậm hơn nhưng tự chủ. Sau 3 năm, sản phẩm của bạn được thị trường thừa nhận, nhiều nhà đầu tư tốt hơn tiếp cận với điều kiện thuận lợi hơn.',
    analysis: '📊 Phân tích Mác-Lênin: Quy luật Lượng-Chất: tích lũy từ từ (lượng: kinh nghiệm, sản phẩm tốt) cuối cùng tạo ra bước nhảy (chất: vị thế thương lượng tốt hơn). Kiên nhẫn với giai đoạn tích lũy là điều quan trọng.',
    choices: [
      { id: 'accept_better', text: 'Nhận vốn từ nhà đầu tư tốt hơn', next: 'success_end', xp: 35 },
    ],
  },
  comply_end: {
    id: 'comply_end',
    situation: 'Startup đạt doanh thu cao nhưng mất đi sứ mệnh ban đầu. Nhiều nhân viên cốt lõi rời đi vì không còn đồng nhất với văn hóa công ty.',
    analysis: '💡 Bài học Triết học: Khi quan hệ sản xuất (cơ cấu sở hữu-quyết định) không phù hợp với lực lượng sản xuất (nhân tài, sáng tạo), mâu thuẫn nội tại sẽ cản trở sự phát triển bền vững.',
    choices: [],
  },
  resist_end: {
    id: 'resist_end',
    situation: 'Mâu thuẫn đỉnh điểm: nhà đầu tư thoái vốn, nhưng đội ngũ trung thành và sản phẩm vững chắc thu hút nhà đầu tư mới phù hợp hơn.',
    analysis: '🔥 Bài học Triết học: Mâu thuẫn được giải quyết triệt để tạo ra chất mới cao hơn. Phủ định cái cũ (quan hệ đầu tư bất lợi) để tạo ra cái mới tốt hơn — đây là phủ định biện chứng!',
    choices: [],
  },
  expand_end: {
    id: 'expand_end',
    situation: 'Startup mở rộng thành công sang 3 thị trường mới. Lực lượng sản xuất (đội ngũ, công nghệ) phát triển đòi hỏi tái cơ cấu quan hệ sản xuất (cơ cấu tổ chức, chính sách nhân sự).',
    analysis: '🚀 Bài học Triết học: LLSX phát triển → cần điều chỉnh QHSX. Đây chính xác là quy luật QHSX phải phù hợp với LLSX trong thực tiễn kinh doanh!',
    choices: [],
  },
  consolidate_end: {
    id: 'consolidate_end',
    situation: 'Công ty ổn định và có lợi nhuận bền vững. Tuy nhiên, đối thủ mới gia nhập thị trường với công nghệ đột phá tạo ra mâu thuẫn mới.',
    analysis: '⚖️ Bài học Triết học: Đứng im là tương đối, vận động là tuyệt đối. Mâu thuẫn luôn xuất hiện — câu hỏi là bạn giải quyết nó như thế nào?',
    choices: [],
  },
  success_end: {
    id: 'success_end',
    situation: 'Công ty phát triển bền vững, nhà đầu tư tôn trọng tầm nhìn, sứ mệnh được giữ nguyên. Bạn đã chứng minh rằng kiên nhẫn tích lũy về lượng tạo ra bước nhảy về chất!',
    analysis: '🏆 Bài học Triết học: Bạn đã ứng dụng cả ba quy luật: Tích lũy Lượng-Chất (phát triển chậm nhưng vững), giải quyết Mâu thuẫn (vốn vs tự chủ), và Phủ định của Phủ định (từ chối cũ, đón nhận cơ hội tốt hơn).',
    choices: [],
  },
}
