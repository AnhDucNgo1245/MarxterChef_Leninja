export interface PhilosophyEntry {
  id: string
  question: string
  keywords: string[]
  answer: string
  concepts: string[]
  related: string[]
}

export const philosophyKB: PhilosophyEntry[] = [
  {
    id: 'vat-chat-la-gi',
    question: 'Vật chất là gì?',
    keywords: ['vật chất', 'matter', 'định nghĩa vật chất'],
    answer: `**Vật chất** theo V.I.Lênin là "một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác của chúng ta chép lại, chụp lại, phản ánh, và tồn tại không lệ thuộc vào cảm giác."

Đặc trưng cơ bản của vật chất:
- **Tồn tại khách quan**: Vật chất tồn tại bên ngoài và độc lập với ý thức con người
- **Có thể nhận thức được**: Con người có thể nhận thức vật chất thông qua thực tiễn
- **Vận động là thuộc tính cố hữu**: Vật chất luôn vận động và không ngừng biến đổi

Ví dụ thực tiễn: Khi bạn nhìn thấy một chiếc bàn, chiếc bàn đó tồn tại thực sự, không phụ thuộc vào việc bạn có nhìn thấy hay không.`,
    concepts: ['Vật chất', 'Ý thức', 'Thực tại khách quan', 'Nhận thức'],
    related: ['y-thuc-la-gi', 'quan-he-vat-chat-y-thuc', 'van-dong-la-gi'],
  },
  {
    id: 'y-thuc-la-gi',
    question: 'Ý thức là gì?',
    keywords: ['ý thức', 'consciousness', 'tâm trí', 'tinh thần'],
    answer: `**Ý thức** là sự phản ánh thế giới khách quan vào trong bộ não con người, là hình thức cao nhất của sự phản ánh thực tại. Ý thức bao gồm:

- **Tri thức**: Những hiểu biết về thế giới khách quan
- **Tình cảm**: Những rung động cảm xúc của con người
- **Ý chí**: Năng lực định hướng hoạt động của con người

**Nguồn gốc của ý thức**: Ý thức xuất hiện từ quá trình lao động của con người và sự phát triển của ngôn ngữ, xã hội. Ý thức không phải là bẩm sinh mà được hình thành qua thực tiễn.

**Ý thức và vật chất**: Vật chất quyết định ý thức, nhưng ý thức có thể tác động ngược trở lại vật chất thông qua hoạt động thực tiễn của con người.`,
    concepts: ['Ý thức', 'Vật chất', 'Phản ánh', 'Lao động'],
    related: ['vat-chat-la-gi', 'quan-he-vat-chat-y-thuc', 'thuc-tien-la-gi'],
  },
  {
    id: 'quan-he-vat-chat-y-thuc',
    question: 'Quan hệ giữa vật chất và ý thức như thế nào?',
    keywords: ['quan hệ vật chất ý thức', 'vật chất quyết định ý thức', 'ý thức tác động vật chất'],
    answer: `**Quan hệ biện chứng giữa vật chất và ý thức** là một trong những vấn đề cơ bản nhất của triết học Mác-Lênin:

**Vật chất quyết định ý thức:**
- Vật chất có trước, ý thức có sau
- Ý thức là sự phản ánh của vật chất vào bộ não người
- Điều kiện vật chất thay đổi → ý thức thay đổi theo

**Ý thức tác động trở lại vật chất:**
- Ý thức không thụ động mà có thể thúc đẩy hoặc cản trở sự phát triển vật chất
- Ví dụ: Tư tưởng đổi mới → cải cách kinh tế → phát triển vật chất

**Ứng dụng thực tiễn:** Trong quản lý doanh nghiệp, cần chú ý cả điều kiện vật chất (vốn, thiết bị) lẫn yếu tố tinh thần (văn hóa doanh nghiệp, động lực nhân viên).`,
    concepts: ['Vật chất', 'Ý thức', 'Biện chứng', 'Thực tiễn'],
    related: ['vat-chat-la-gi', 'y-thuc-la-gi', 'thuc-tien-la-gi'],
  },
  {
    id: 'mau-thuan-la-gi',
    question: 'Mâu thuẫn là gì? Tại sao mâu thuẫn là động lực phát triển?',
    keywords: ['mâu thuẫn', 'contradiction', 'động lực phát triển', 'thống nhất đối lập'],
    answer: `**Mâu thuẫn** trong triết học biện chứng là sự thống nhất và đấu tranh giữa các mặt đối lập trong cùng một sự vật, hiện tượng.

**Cấu trúc mâu thuẫn:**
- Mỗi sự vật đều chứa đựng các mặt đối lập
- Các mặt đối lập vừa thống nhất (cùng tồn tại trong một sự vật) vừa đấu tranh (loại trừ nhau)

**Tại sao mâu thuẫn là động lực phát triển?**
1. Đấu tranh giữa các mặt đối lập → tạo ra căng thẳng
2. Căng thẳng → tích lũy năng lượng
3. Giải quyết mâu thuẫn → sự vật chuyển lên trạng thái mới, cao hơn

**Ví dụ thực tiễn:**
- Mâu thuẫn giữa **cung và cầu** → thị trường điều chỉnh, kinh tế phát triển
- Mâu thuẫn giữa **lực lượng sản xuất và quan hệ sản xuất** → cách mạng xã hội
- Trong startup: mâu thuẫn giữa **sáng tạo và ổn định** → đổi mới sản phẩm`,
    concepts: ['Mâu thuẫn', 'Đối lập thống nhất', 'Phát triển', 'Biện chứng'],
    related: ['luong-chat', 'phu-dinh-cua-phu-dinh', 'thuc-tien-la-gi'],
  },
  {
    id: 'luong-chat',
    question: 'Quy luật lượng - chất là gì?',
    keywords: ['lượng chất', 'quantity quality', 'chuyển hóa lượng chất', 'điểm nút'],
    answer: `**Quy luật chuyển hóa từ những thay đổi về lượng thành những thay đổi về chất** là một trong ba quy luật cơ bản của phép biện chứng.

**Các khái niệm cơ bản:**
- **Lượng**: Những đặc điểm có thể đo lường, tính toán (số lượng, quy mô, tốc độ...)
- **Chất**: Những đặc điểm căn bản, bản chất của sự vật
- **Điểm nút**: Điểm mà tại đó sự thay đổi về lượng dẫn đến thay đổi về chất
- **Bước nhảy**: Sự chuyển hóa từ chất cũ sang chất mới

**Ví dụ kinh điển:**
- Nước ở 99°C → 100°C: chuyển thành hơi nước (bước nhảy về chất)
- Học 1000 từ tiếng Anh → đột nhiên có thể giao tiếp được
- Tích lũy vốn đủ lớn → mở rộng quy mô kinh doanh

**Ý nghĩa thực tiễn:**
Cần kiên nhẫn tích lũy về lượng (kiến thức, vốn, kinh nghiệm) để tạo ra bước nhảy về chất. Không thể bỏ qua giai đoạn tích lũy!`,
    concepts: ['Lượng', 'Chất', 'Điểm nút', 'Bước nhảy', 'Phát triển'],
    related: ['mau-thuan-la-gi', 'phu-dinh-cua-phu-dinh', 'luc-luong-san-xuat'],
  },
  {
    id: 'phu-dinh-cua-phu-dinh',
    question: 'Quy luật phủ định của phủ định là gì?',
    keywords: ['phủ định của phủ định', 'negation', 'phát triển xoáy ốc', 'kế thừa'],
    answer: `**Quy luật phủ định của phủ định** mô tả xu hướng phát triển của sự vật theo hình thức xoáy ốc: không phải đường thẳng mà là vòng tròn ngày càng cao hơn.

**Phủ định biện chứng:**
- Không phải phủ nhận hoàn toàn cái cũ
- Mà là **kế thừa** những yếu tố tích cực, **loại bỏ** những yếu tố lỗi thời
- Tạo ra cái mới ở trình độ cao hơn

**Cấu trúc phát triển:**
Khẳng định → Phủ định → Phủ định của phủ định (trở lại điểm xuất phát nhưng ở trình độ cao hơn)

**Ví dụ:**
- Từ nền kinh tế kế hoạch hóa → kinh tế thị trường (phủ định 1) → kinh tế thị trường định hướng XHCN (phủ định 2, giữ lại vai trò nhà nước)
- Từ điện thoại cơ bản → smartphone (phủ định 1) → wearable tech (phủ định 2)

**Ý nghĩa:** Sự phát triển không bao giờ đi thẳng mà luôn kế thừa và vượt qua những gì đã có.`,
    concepts: ['Phủ định biện chứng', 'Kế thừa', 'Phát triển xoáy ốc'],
    related: ['mau-thuan-la-gi', 'luong-chat', 'lich-su-chu-nghia-mac'],
  },
  {
    id: 'thuc-tien-la-gi',
    question: 'Thực tiễn là gì? Vai trò của thực tiễn với nhận thức?',
    keywords: ['thực tiễn', 'practice', 'nhận thức', 'lao động thực tiễn'],
    answer: `**Thực tiễn** là toàn bộ hoạt động vật chất có mục đích, có tính lịch sử - xã hội của con người nhằm cải tạo tự nhiên và xã hội.

**Các hình thức cơ bản của thực tiễn:**
1. **Hoạt động sản xuất vật chất**: Lao động tạo ra của cải
2. **Hoạt động chính trị - xã hội**: Đấu tranh giai cấp, cải cách xã hội
3. **Hoạt động thực nghiệm khoa học**: Nghiên cứu, thí nghiệm

**Vai trò của thực tiễn với nhận thức:**
- **Là cơ sở của nhận thức**: Mọi tri thức đều xuất phát từ thực tiễn
- **Là động lực của nhận thức**: Thực tiễn đặt ra những vấn đề cần giải quyết
- **Là tiêu chuẩn chân lý**: Chỉ có thực tiễn mới kiểm chứng được nhận thức đúng sai

**Ứng dụng:** "Học đi đôi với hành" - lý thuyết phải được kiểm nghiệm qua thực tiễn.`,
    concepts: ['Thực tiễn', 'Nhận thức', 'Chân lý', 'Lao động'],
    related: ['vat-chat-la-gi', 'y-thuc-la-gi', 'luc-luong-san-xuat'],
  },
  {
    id: 'luc-luong-san-xuat',
    question: 'Lực lượng sản xuất là gì?',
    keywords: ['lực lượng sản xuất', 'productive forces', 'tư liệu sản xuất', 'người lao động'],
    answer: `**Lực lượng sản xuất** là toàn bộ những năng lực thực tiễn dùng trong sản xuất vật chất của xã hội, bao gồm:

**Cấu thành lực lượng sản xuất:**
1. **Người lao động**: Với kinh nghiệm, kỹ năng, tri thức
2. **Tư liệu sản xuất**:
   - Đối tượng lao động (nguyên vật liệu, đất đai...)
   - Công cụ lao động (máy móc, thiết bị...) ← quan trọng nhất

**Lực lượng sản xuất trong thời đại AI:**
- AI, robot, tự động hóa là những **công cụ lao động** mới
- Chúng đang làm thay đổi cơ bản lực lượng sản xuất
- → Đòi hỏi **quan hệ sản xuất** phải thay đổi theo (vấn đề việc làm, phân phối thu nhập)

**Vai trò:** Lực lượng sản xuất là yếu tố **năng động nhất**, luôn phát triển và là nền tảng của mọi biến đổi xã hội.`,
    concepts: ['Lực lượng sản xuất', 'Quan hệ sản xuất', 'Tư liệu sản xuất', 'Lao động'],
    related: ['quan-he-san-xuat', 'co-so-ha-tang', 'doi-moi-kinh-te'],
  },
  {
    id: 'quan-he-san-xuat',
    question: 'Quan hệ sản xuất là gì?',
    keywords: ['quan hệ sản xuất', 'relations of production', 'sở hữu tư liệu sản xuất'],
    answer: `**Quan hệ sản xuất** là toàn bộ những mối quan hệ kinh tế - vật chất giữa người với người trong quá trình sản xuất vật chất xã hội.

**Ba mặt của quan hệ sản xuất:**
1. **Quan hệ sở hữu tư liệu sản xuất**: Ai sở hữu máy móc, đất đai, vốn?
2. **Quan hệ tổ chức quản lý sản xuất**: Ai điều hành? Cách thức quản lý?
3. **Quan hệ phân phối sản phẩm**: Ai được hưởng bao nhiêu?

**Mâu thuẫn cơ bản:**
Khi **lực lượng sản xuất** phát triển mạnh mẽ nhưng **quan hệ sản xuất** không thay đổi kịp → mâu thuẫn → cách mạng xã hội

**Ví dụ Đổi Mới 1986:**
- LLSX phát triển (lao động sáng tạo) nhưng QHSX cũ (kế hoạch tập trung) kìm hãm → Đổi Mới để điều chỉnh QHSX phù hợp LLSX mới`,
    concepts: ['Quan hệ sản xuất', 'Lực lượng sản xuất', 'Sở hữu', 'Phân phối'],
    related: ['luc-luong-san-xuat', 'co-so-ha-tang', 'kien-truc-thuong-tang'],
  },
  {
    id: 'co-so-ha-tang',
    question: 'Cơ sở hạ tầng và kiến trúc thượng tầng là gì?',
    keywords: ['cơ sở hạ tầng', 'kiến trúc thượng tầng', 'base superstructure', 'hạ tầng kinh tế'],
    answer: `**Cơ sở hạ tầng** là toàn bộ những quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội (hạ tầng kinh tế).

**Kiến trúc thượng tầng** là toàn bộ những quan điểm, tư tưởng (chính trị, pháp luật, triết học, đạo đức, nghệ thuật, tôn giáo...) và những thiết chế tương ứng (nhà nước, đảng phái, giáo hội, tòa án...).

**Quan hệ biện chứng:**
- Cơ sở hạ tầng **quyết định** kiến trúc thượng tầng
- Kiến trúc thượng tầng **tác động ngược** lại hạ tầng

**Ví dụ thực tiễn:**
- Nền kinh tế thị trường (hạ tầng) → luật pháp thị trường, dân chủ pháp quyền (thượng tầng)
- Cách mạng công nghiệp → nhà nước pháp quyền hiện đại

**Ứng dụng:** Muốn thay đổi xã hội phải thay đổi cơ sở kinh tế trước, không chỉ thay đổi luật pháp hay tư tưởng.`,
    concepts: ['Cơ sở hạ tầng', 'Kiến trúc thượng tầng', 'Quan hệ sản xuất'],
    related: ['quan-he-san-xuat', 'luc-luong-san-xuat', 'doi-moi-kinh-te'],
  },
  {
    id: 'doi-moi-kinh-te',
    question: 'Tại sao khu vực tư nhân được mở rộng sau Đổi Mới?',
    keywords: ['đổi mới', 'doi moi', 'kinh tế tư nhân', 'kinh tế thị trường', '1986'],
    answer: `Đây là câu hỏi điển hình được giải thích qua **quy luật quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất**.

**Trước Đổi Mới (trước 1986):**
- **LLSX**: Lao động sáng tạo, nhu cầu đa dạng của nhân dân
- **QHSX**: Kinh tế kế hoạch tập trung, sở hữu toàn dân là chính
- **Mâu thuẫn**: QHSX kìm hãm LLSX → khủng hoảng kinh tế

**Sau Đổi Mới (1986):**
- Thừa nhận kinh tế nhiều thành phần (trong đó có tư nhân)
- QHSX được điều chỉnh để **phù hợp** với LLSX đang phát triển
- → Kinh tế bứt phá, đời sống nhân dân được cải thiện

**Bài học triết học:**
Đổi Mới không phải từ bỏ CNXH mà là **điều chỉnh quan hệ sản xuất** cho phù hợp với lực lượng sản xuất hiện tại.`,
    concepts: ['Đổi Mới', 'Quan hệ sản xuất', 'Lực lượng sản xuất', 'Kinh tế nhiều thành phần'],
    related: ['quan-he-san-xuat', 'luc-luong-san-xuat', 'mau-thuan-la-gi'],
  },
  {
    id: 'ai-llsx',
    question: 'AI ảnh hưởng đến lực lượng sản xuất như thế nào?',
    keywords: ['AI', 'trí tuệ nhân tạo', 'lực lượng sản xuất', 'tự động hóa', 'robot'],
    answer: `**AI và Lực lượng sản xuất** - Một phân tích duy vật biện chứng:

**AI là công cụ lao động mới:**
Theo quan điểm Mác-xít, AI, robot và tự động hóa là những **công cụ lao động** thuộc lực lượng sản xuất. Chúng đang làm thay đổi cơ bản cách con người sản xuất.

**Tác động của AI:**
1. **Tăng năng suất lao động** theo cấp số nhân
2. **Thay thế lao động giản đơn** → thất nghiệp cấu trúc
3. **Đòi hỏi lao động sáng tạo** cao hơn
4. **Tạo ra mâu thuẫn mới**: Ai sở hữu AI? Ai hưởng lợi từ AI?

**Mâu thuẫn cần giải quyết:**
- Mâu thuẫn giữa LLSX (AI siêu mạnh) và QHSX (vẫn dựa trên lao động làm thuê)
- → Cần điều chỉnh: thuế robot, thu nhập cơ bản phổ quát, tái phân phối lợi ích AI

**Kết luận triết học:** AI không phải mối đe dọa mà là bước phát triển mới của LLSX, đòi hỏi QHSX và thượng tầng pháp lý phải thích ứng.`,
    concepts: ['AI', 'Lực lượng sản xuất', 'Tự động hóa', 'Mâu thuẫn xã hội'],
    related: ['luc-luong-san-xuat', 'quan-he-san-xuat', 'mau-thuan-la-gi'],
  },
  {
    id: 'tiktok-triet-hoc',
    question: 'TikTok có liên quan gì đến triết học Mác?',
    keywords: ['tiktok', 'mạng xã hội', 'kiến trúc thượng tầng', 'ý thức xã hội'],
    answer: `**TikTok qua lăng kính triết học Mác-Lênin:**

**1. Góc nhìn Duy vật (Vật chất quyết định ý thức):**
- Hạ tầng vật chất: Server, băng thông, điện thoại thông minh → TikTok mới tồn tại được
- Điều kiện kinh tế của người dùng → quyết định họ xem gì, đăng gì

**2. Góc nhìn Biện chứng (Mâu thuẫn):**
- Mâu thuẫn giữa **tự do sáng tạo** và **thuật toán kiểm soát**
- Mâu thuẫn giữa **nhà sản xuất nội dung** (creator) và **nền tảng** (ByteDance)
- → Phong trào đòi quyền lợi creator, quy định luật pháp mạng xã hội

**3. Góc nhìn Duy vật lịch sử:**
- TikTok là sản phẩm của lực lượng sản xuất (AI, smartphone) giai đoạn này
- Quan hệ sản xuất: ByteDance sở hữu TLSX (thuật toán, dữ liệu), creator tạo giá trị nhưng không sở hữu
- → Đây là dạng **bóc lột số** (digital exploitation) mới

**Kết luận:** TikTok không chỉ là app giải trí mà là biểu hiện của quan hệ sản xuất trong nền kinh tế số.`,
    concepts: ['Kiến trúc thượng tầng', 'Quan hệ sản xuất', 'Ý thức xã hội', 'Bóc lột'],
    related: ['co-so-ha-tang', 'luc-luong-san-xuat', 'ai-llsx'],
  },
  {
    id: 'startup-triet-hoc',
    question: 'Phân tích startup qua triết học Mác-Lênin',
    keywords: ['startup', 'khởi nghiệp', 'doanh nghiệp', 'vốn', 'đổi mới sáng tạo'],
    answer: `**Startup qua lăng kính Triết học Mác-Lênin:**

**1. Quy luật Lượng - Chất trong Startup:**
- Giai đoạn tích lũy (lượng): Xây dựng sản phẩm, tích lũy người dùng, học hỏi
- Điểm nút: Đạt Product-Market Fit
- Bước nhảy về chất: Từ startup nhỏ → công ty có quy mô

**2. Mâu thuẫn trong Startup:**
- Mâu thuẫn sáng tạo ↔ kỷ luật
- Mâu thuẫn vision dài hạn ↔ doanh thu ngắn hạn  
- Mâu thuẫn founder ↔ investor
- → Giải quyết mâu thuẫn = phát triển startup

**3. Duy vật lịch sử:**
- Startup chỉ thành công khi điều kiện vật chất (hạ tầng, vốn, thị trường) chín muồi
- Airbnb không thể thành công năm 1990 (chưa có smartphone, internet phổ thông)

**Bài học thực tiễn:**
"Thời thế tạo anh hùng" - điều kiện vật chất-lịch sử quyết định startup nào có thể thành công.`,
    concepts: ['Lượng-Chất', 'Mâu thuẫn', 'Duy vật lịch sử', 'Điều kiện vật chất'],
    related: ['luong-chat', 'mau-thuan-la-gi', 'luc-luong-san-xuat'],
  },
  {
    id: 'bien-doi-khi-hau',
    question: 'Biến đổi khí hậu và triết học Mác',
    keywords: ['biến đổi khí hậu', 'môi trường', 'tự nhiên', 'sản xuất', 'môi sinh'],
    answer: `**Biến đổi khí hậu qua Triết học Mác-Lênin:**

**1. Mối quan hệ Người - Tự nhiên:**
- Quan điểm duy vật: Con người là một phần của tự nhiên, không phải chủ nhân tự nhiên
- Lao động sản xuất → con người tác động vào tự nhiên → tự nhiên phản ứng lại (BĐKH)

**2. Mâu thuẫn cơ bản:**
- Mâu thuẫn giữa **lực lượng sản xuất** (công nghiệp hóa, tiêu thụ năng lượng hóa thạch) và **hệ sinh thái** (sức chịu đựng của trái đất)
- Mâu thuẫn giữa **lợi ích doanh nghiệp** ngắn hạn và **lợi ích xã hội** dài hạn

**3. Phân tích giai cấp:**
- Các nước giàu (phát thải nhiều) gánh trách nhiệm lịch sử hơn
- Người nghèo chịu tác động nặng nề nhất từ BĐKH
- → Công bằng khí hậu (climate justice) là yêu cầu của duy vật lịch sử

**Giải pháp theo quan điểm duy vật:**
Phải thay đổi **lực lượng sản xuất** (chuyển sang năng lượng tái tạo) và **quan hệ sản xuất** (kinh tế xanh, thuế carbon).`,
    concepts: ['Quan hệ Người-Tự nhiên', 'Mâu thuẫn xã hội', 'Lực lượng sản xuất', 'Công bằng xã hội'],
    related: ['luc-luong-san-xuat', 'mau-thuan-la-gi', 'thuc-tien-la-gi'],
  },
  {
    id: 'van-dong-la-gi',
    question: 'Vận động là gì? Các hình thức vận động?',
    keywords: ['vận động', 'motion', 'hình thức vận động', 'phát triển'],
    answer: `**Vận động** là thuộc tính cố hữu, là phương thức tồn tại của vật chất. Không có vật chất nào tồn tại mà không vận động.

**5 hình thức vận động cơ bản (Ăng-ghen):**
1. **Vận động cơ học**: Chuyển dịch vị trí trong không gian
2. **Vận động vật lý**: Âm thanh, ánh sáng, điện từ, nhiệt...
3. **Vận động hóa học**: Phân hóa, hóa hợp các chất
4. **Vận động sinh học**: Trao đổi chất, di truyền, tiến hóa
5. **Vận động xã hội**: Sự biến đổi, phát triển của xã hội loài người ← cao nhất

**Vận động và đứng im:**
- Đứng im là trạng thái tương đối, tạm thời
- Vận động là tuyệt đối, vĩnh cửu

**Ý nghĩa:** Không có gì là bất biến. Mọi sự vật đều trong quá trình vận động và phát triển.`,
    concepts: ['Vận động', 'Vật chất', 'Phát triển', 'Hình thức vận động'],
    related: ['vat-chat-la-gi', 'mau-thuan-la-gi', 'luong-chat'],
  },
  {
    id: 'nhan-thuc-la-gi',
    question: 'Nhận thức là gì? Các giai đoạn nhận thức?',
    keywords: ['nhận thức', 'cognition', 'cảm tính', 'lý tính', 'chân lý'],
    answer: `**Nhận thức** là quá trình phản ánh tích cực, tự giác và sáng tạo thế giới khách quan vào bộ não người.

**Con đường nhận thức:**
Thực tiễn → Nhận thức cảm tính → Nhận thức lý tính → Thực tiễn (vòng lặp nâng cao)

**Giai đoạn 1 - Nhận thức cảm tính:**
- Cảm giác: Phản ánh từng thuộc tính riêng lẻ
- Tri giác: Phản ánh tổng thể sự vật
- Biểu tượng: Hình ảnh trong óc khi không còn tác động

**Giai đoạn 2 - Nhận thức lý tính:**
- Khái niệm: Nắm bắt bản chất, quy luật
- Phán đoán: Liên kết các khái niệm
- Suy lý: Rút ra tri thức mới

**Chân lý và kiểm nghiệm:**
Chỉ có thực tiễn mới là tiêu chuẩn khách quan để kiểm nghiệm chân lý. Lý thuyết đúng hay sai phải được kiểm chứng qua thực tiễn.`,
    concepts: ['Nhận thức', 'Thực tiễn', 'Chân lý', 'Cảm tính', 'Lý tính'],
    related: ['thuc-tien-la-gi', 'vat-chat-la-gi', 'y-thuc-la-gi'],
  },
  {
    id: 'lich-su-chu-nghia-mac',
    question: 'Chủ nghĩa Mác ra đời như thế nào?',
    keywords: ['lịch sử chủ nghĩa mác', 'marx', 'engels', 'ra đời', 'nguồn gốc'],
    answer: `**Nguồn gốc và sự ra đời của Chủ nghĩa Mác:**

**Điều kiện kinh tế - xã hội:**
- Cuộc Cách mạng Công nghiệp (thế kỷ 18-19) tạo ra mâu thuẫn gay gắt giữa tư sản và vô sản
- Phong trào công nhân phát triển mạnh mẽ

**Ba nguồn gốc lý luận:**
1. **Triết học cổ điển Đức**: Hegel (phép biện chứng) + Feuerbach (chủ nghĩa duy vật)
2. **Kinh tế chính trị học Anh**: Adam Smith, David Ricardo
3. **Chủ nghĩa xã hội không tưởng Pháp**: Saint-Simon, Fourier, Owen

**Marx và Engels kế thừa và vượt qua:**
- Kế thừa phép biện chứng của Hegel → áp dụng vào vật chất (duy vật biện chứng)
- Kế thừa chủ nghĩa duy vật của Feuerbach → áp dụng vào lịch sử (duy vật lịch sử)
- → Tạo ra cuộc cách mạng trong triết học

**Dấu mốc lịch sử:** Tuyên ngôn Đảng Cộng sản (1848) - "Một bóng ma đang ám ảnh châu Âu..."`,
    concepts: ['Chủ nghĩa Mác', 'Lịch sử tư tưởng', 'Biện chứng', 'Duy vật'],
    related: ['mau-thuan-la-gi', 'co-so-ha-tang', 'van-dong-la-gi'],
  },
]
