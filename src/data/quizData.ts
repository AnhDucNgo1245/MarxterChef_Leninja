export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-3
}

export const QUIZ_DATA: QuizQuestion[] = [
  {
    "id": 2,
    "question": "Việc giải quyết mặt thứ nhất của vấn đề cơ bản của triết học đã chia các nhà triết học thành hai trường phái lớn nào?",
    "options": [
      "Khả tri luận và Bất khả tri luận.",
      "Biện chứng và Siêu hình.",
      "Chủ nghĩa duy vật và Chủ nghĩa duy tâm.",
      "Nhất nguyên luận và Nhị nguyên luận."
    ],
    "correctAnswer": 2
  },
  {
    "id": 3,
    "question": "Khái niệm \"Ý thức xã hội\" dùng để chỉ điều gì?",
    "options": [
      "Phương diện sinh hoạt tinh thần của xã hội, nảy sinh từ tồn tại xã hội và phản ánh tồn tại xã hội trong những giai đoạn phát triển nhất định.",
      "Những tư tưởng tiên tiến, vượt trước thời đại do các vĩ nhân sáng tạo ra.",
      "Toàn bộ sinh hoạt vật chất của con người.",
      "Lực lượng sản xuất và quan hệ sản xuất của xã hội."
    ],
    "correctAnswer": 0
  },
  {
    "id": 4,
    "question": "Quan điểm toàn diện trong nhận thức và thực tiễn đòi hỏi chúng ta phải làm gì?",
    "options": [
      "Chỉ cần xem xét các mối liên hệ cơ bản, chủ yếu và bỏ qua các mối liên hệ khác.",
      "Nhấn mạnh mọi yếu tố và coi các mối liên hệ của sự vật có vai trò ngang bằng nhau.",
      "Xem xét sự vật trong mối liên hệ qua lại giữa các yếu tố của nó và với sự vật khác, đồng thời phải đánh giá đúng vị trí, vai trò của từng mối liên hệ.",
      "Xem xét sự vật trong trạng thái tĩnh tại, cô lập để tìm ra bản chất."
    ],
    "correctAnswer": 2
  },
  {
    "id": 5,
    "question": "Ý nghĩa quan trọng nhất trong định nghĩa vật chất của V.I.Lênin đối với mặt thứ hai vấn đề cơ bản của triết học là gì?",
    "options": [
      "Chỉ ra vật chất là thực tại khách quan tồn tại độc lập với ý thức.",
      "Bác bỏ hoàn toàn thuyết bất khả tri, khẳng định cảm giác, ý thức của con người có khả năng phản ánh đúng thế giới khách quan.",
      "Khắc phục được tính chất siêu hình trong quan niệm về vật chất.",
      "Khẳng định tính thống nhất vật chất của thế giới."
    ],
    "correctAnswer": 1
  },
  {
    "id": 6,
    "question": "Theo chủ nghĩa duy vật lịch sử, \"cơ sở hạ tầng\" là phạm trù dùng để chỉ điều gì?",
    "options": [
      "Hệ thống giao thông, điện, đường, trường, trạm của một quốc gia.",
      "Toàn bộ những quan hệ sản xuất hợp thành cơ cấu kinh tế của một xã hội nhất định.",
      "Các thiết chế chính trị - xã hội như Nhà nước, pháp luật.",
      "Lực lượng sản xuất và các tư liệu lao động của xã hội."
    ],
    "correctAnswer": 1
  },
  {
    "id": 7,
    "question": "Trong quy luật lượng - chất, khái niệm nào dùng để chỉ bước ngoặt thay đổi căn bản về chất của sự vật do sự tích lũy về lượng trước đó tạo ra?",
    "options": [
      "Độ.",
      "Điểm nút.",
      "Bước nhảy.",
      "Hiện thực."
    ],
    "correctAnswer": 2
  },
  {
    "id": 8,
    "question": "Việc Đảng Cộng sản Việt Nam chủ trương phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa với nhiều thành phần kinh tế là sự vận dụng sáng tạo quy luật nào của chủ nghĩa duy vật lịch sử?",
    "options": [
      "Quy luật về sự tồn tại xã hội quyết định ý thức xã hội.",
      "Quy luật đấu tranh giai cấp trong thời kỳ quá độ.",
      "Quy luật quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất.",
      "Quy luật cơ sở hạ tầng quyết định kiến trúc thượng tầng."
    ],
    "correctAnswer": 2
  },
  {
    "id": 9,
    "question": "Bản chất của nhận thức theo triết học Mác - Lênin là gì?",
    "options": [
      "Sự phản ánh thụ động, máy móc thế giới khách quan vào đầu óc con người.",
      "Sự hồi tưởng lại của linh hồn về những ý niệm có từ trước.",
      "Sự tự nhận thức của ý niệm tuyệt đối thông qua bộ óc con người.",
      "Quá trình phản ánh năng động, sáng tạo hiện thực khách quan vào đầu óc con người dựa trên cơ sở thực tiễn."
    ],
    "correctAnswer": 3
  },
  {
    "id": 10,
    "question": "Mâu thuẫn quy định bản chất của sự vật, tồn tại trong suốt quá trình vận động, phát triển của sự vật từ khi hình thành đến khi tiêu vong được gọi là mâu thuẫn gì?",
    "options": [
      "Mâu thuẫn chủ yếu.",
      "Mâu thuẫn cơ bản.",
      "Mâu thuẫn bên trong.",
      "Mâu thuẫn đối kháng."
    ],
    "correctAnswer": 1
  },
  {
    "id": 11,
    "question": "Quy luật chuyển hóa từ những sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại nói lên phương diện nào của sự phát triển?",
    "options": [
      "Khuynh hướng của sự phát triển.",
      "Nguồn gốc, động lực của sự phát triển.",
      "Cách thức chung nhất của sự vận động và phát triển.",
      "Tính chất của sự phát triển."
    ],
    "correctAnswer": 2
  },
  {
    "id": 12,
    "question": "Thực chất bước chuyển cách mạng trong triết học do C. Mác và Ph. Ăngghen thực hiện là gì?",
    "options": [
      "Xây dựng được chủ nghĩa duy vật siêu hình về tự nhiên.",
      "Phê phán toàn diện hệ thống triết học duy tâm của Hêghen.",
      "Thống nhất giữa thế giới quan duy vật và phép biện chứng, sáng tạo ra chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử.",
      "Xác định triết học là khoa học của mọi khoa học."
    ],
    "correctAnswer": 2
  },
  {
    "id": 13,
    "question": "Triết học Mác - Lênin thực hiện những chức năng cơ bản nào?",
    "options": [
      "Chức năng khoa học của các khoa học.",
      "Chức năng giải thích cấu trúc ngôn ngữ.",
      "Chức năng làm cầu nối cho các khoa học.",
      "Chức năng thế giới quan và phương pháp luận."
    ],
    "correctAnswer": 3
  },
  {
    "id": 14,
    "question": "Vì sao chủ nghĩa duy vật biện chứng khẳng định \"đứng im mang tính tương đối\"?",
    "options": [
      "Vì nó chỉ là ảo giác của tư duy con người.",
      "Vì nó chỉ xảy ra trong một mối quan hệ nhất định, đối với một hình thức vận động xác định và trong một thời gian nhất định.",
      "Vì mọi sự vật cuối cùng cũng sẽ chuyển sang trạng thái đứng im tuyệt đối.",
      "Vì vật chất có giới hạn về không gian và thời gian."
    ],
    "correctAnswer": 1
  },
  {
    "id": 15,
    "question": "Theo chủ nghĩa duy vật lịch sử, sự xuất hiện và tồn tại của giai cấp xét đến cùng là do nguyên nhân nào?",
    "options": [
      "Nguyên nhân chính trị.",
      "Sự áp đặt của bạo lực.",
      "Sự khác biệt về tài năng, đạo đức cá nhân.",
      "Nguyên nhân kinh tế (sự phát triển của LLSX dẫn đến chế độ tư hữu về tư liệu sản xuất)."
    ],
    "correctAnswer": 3
  },
  {
    "id": 16,
    "question": "C. Mác khẳng định: \"Tôi coi sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên\". Luận điểm này mang hàm ý khoa học gì?",
    "options": [
      "Sự phát triển của xã hội tuân theo các quy luật khách quan, giống như giới tự nhiên, không phụ thuộc vào ý muốn chủ quan của con người.",
      "Xã hội phát triển hoàn toàn giống như một sinh vật tự nhiên sinh ra và chết đi.",
      "Lịch sử xã hội là kết quả của sự chi phối từ các lực lượng siêu nhiên, thần thánh.",
      "Quá trình phát triển của xã hội không chịu sự tác động của hoạt động tự giác của con người."
    ],
    "correctAnswer": 0
  },
  {
    "id": 17,
    "question": "Theo quan điểm của triết học Mác - Lênin, phương thức tồn tại của vật chất là gì?",
    "options": [
      "Sự đứng im.",
      "Sự sinh ra và mất đi.",
      "Không gian và thời gian.",
      "Vận động."
    ],
    "correctAnswer": 3
  },
  {
    "id": 18,
    "question": "Theo quan điểm của chủ nghĩa Mác - Lênin, bản chất của nhà nước là gì?",
    "options": [
      "Là một tổ chức siêu giai cấp, đại diện cho lợi ích của toàn dân.",
      "Là cơ quan điều hòa những mâu thuẫn đối kháng trong xã hội.",
      "Là một bộ máy của giai cấp này dùng để trấn áp một giai cấp khác (công cụ chuyên chính giai cấp).",
      "Là cơ quan thực thi công lý tự nhiên vì sự phát triển của mọi người."
    ],
    "correctAnswer": 2
  },
  {
    "id": 19,
    "question": "Tính độc lập tương đối của ý thức xã hội được biểu hiện ở đặc điểm nào sau đây?",
    "options": [
      "Ý thức xã hội hoàn toàn không phụ thuộc vào tồn tại xã hội.",
      "Ý thức xã hội chỉ phản ánh một cách thụ động tồn tại xã hội.",
      "Ý thức xã hội thường lạc hậu hơn; có thể vượt trước; có tính kế thừa và có sự tác động trở lại đối với tồn tại xã hội.",
      "Ý thức xã hội luôn đồng hành và thay đổi cùng lúc với tồn tại xã hội."
    ],
    "correctAnswer": 2
  },
  {
    "id": 20,
    "question": "Khái niệm \"Tồn tại xã hội\" dùng để chỉ điều gì?",
    "options": [
      "Phương diện sinh hoạt tinh thần của xã hội.",
      "Toàn bộ sinh hoạt vật chất và những điều kiện sinh hoạt vật chất của xã hội.",
      "Các thiết chế chính trị, pháp luật, đạo đức của xã hội.",
      "Sự tồn tại của con người trong môi trường tự nhiên."
    ],
    "correctAnswer": 1
  },
  {
    "id": 21,
    "question": "Trong \"Luận cương về Phoiơbắc\", C. Mác đã đưa ra luận điểm nổi tiếng nào về bản chất con người?",
    "options": [
      "Con người là kết quả của sự tiến hóa từ vượn thành người.",
      "Con người là một động vật chính trị.",
      "Trong tính hiện thực của nó, bản chất con người là tổng hòa những quan hệ xã hội.",
      "Bản chất con người là thiện hoặc ác do bẩm sinh."
    ],
    "correctAnswer": 2
  },
  {
    "id": 22,
    "question": "Nguồn gốc xã hội trực tiếp và quan trọng nhất quyết định sự ra đời của ý thức là gì?",
    "options": [
      "Hoạt động nhận thức khoa học.",
      "Sự xuất hiện của ngôn ngữ.",
      "Thực tiễn, lao động sản xuất.",
      "Sự phát triển của bộ óc người."
    ],
    "correctAnswer": 2
  },
  {
    "id": 23,
    "question": "Phạm trù triết học dùng để chỉ những mặt, những thuộc tính không những có ở một sự vật, hiện tượng nào đó, mà còn lặp lại trong nhiều sự vật, hiện tượng khác được gọi là gì?",
    "options": [
      "Cái riêng.",
      "Cái chung.",
      "Cái đơn nhất.",
      "Cái phổ biến."
    ],
    "correctAnswer": 1
  },
  {
    "id": 24,
    "question": "Giai đoạn nhận thức cảm tính (trực quan sinh động) bao gồm những hình thức cơ bản nào?",
    "options": [
      "Khái niệm, phán đoán, suy luận.",
      "Cảm giác, tri giác, biểu tượng.",
      "Cảm giác, khái niệm, biểu tượng.",
      "Tri giác, phán đoán, giả thuyết."
    ],
    "correctAnswer": 1
  },
  {
    "id": 25,
    "question": "Cơ sở tạo nên mối liên hệ phổ biến của vạn vật trong thế giới theo phép biện chứng duy vật là gì?",
    "options": [
      "Sự chi phối của ý niệm tuyệt đối.",
      "Khát vọng sinh tồn của vạn vật.",
      "Do con người nhận thức và gán ghép cho chúng.",
      "Tính thống nhất vật chất của thế giới."
    ],
    "correctAnswer": 3
  },
  {
    "id": 26,
    "question": "Theo chủ nghĩa duy vật biện chứng, thực tiễn là gì?",
    "options": [
      "Là sự nỗ lực tư duy lý luận của con người để khám phá thế giới.",
      "Là toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử - xã hội của con người nhằm cải tạo tự nhiên và xã hội.",
      "Là mọi hoạt động bản năng của con người để sinh tồn.",
      "Là sự quan sát trực tiếp thế giới khách quan bằng các giác quan."
    ],
    "correctAnswer": 1
  },
  {
    "id": 27,
    "question": "Trong định nghĩa về giai cấp của V.I. Lênin, đặc trưng cơ bản nhất để phân biệt các giai cấp khác nhau trong một hệ thống sản xuất xã hội là gì?",
    "options": [
      "Khác nhau về tư tưởng, tôn giáo và hệ thống giá trị đạo đức.",
      "Sự khác nhau về quan hệ của họ đối với việc sở hữu những tư liệu sản xuất của xã hội.",
      "Khác nhau về mức độ thu nhập và cách thức hưởng thụ.",
      "Khác nhau về trình độ học vấn và văn hóa."
    ],
    "correctAnswer": 1
  },
  {
    "id": 28,
    "question": "V.I. Lênin đã khái quát con đường biện chứng của sự nhận thức chân lý như thế nào?",
    "options": [
      "Từ tư duy trừu tượng đến trực quan sinh động, và từ trực quan sinh động đến thực tiễn.",
      "Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn.",
      "Từ thực tiễn đến tư duy trừu tượng, và từ tư duy trừu tượng đến trực quan sinh động.",
      "Từ lý luận đến thực tiễn, rồi từ thực tiễn quay về chân lý khách quan."
    ],
    "correctAnswer": 1
  },
  {
    "id": 29,
    "question": "Vấn đề cơ bản của triết học có hai mặt, mặt thứ hai giải quyết câu hỏi nào dưới đây?",
    "options": [
      "Giữa vật chất và ý thức, cái nào có trước, cái nào quyết định cái nào?",
      "Con người có khả năng nhận thức được thế giới hay không?",
      "Thế giới có vận động và phát triển hay không?",
      "Vật chất và ý thức có tồn tại độc lập với nhau không?"
    ],
    "correctAnswer": 1
  },
  {
    "id": 30,
    "question": "Phạm trù triết học dùng để chỉ sự tác động lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau, từ đó tạo ra sự biến đổi nhất định, được gọi là gì?",
    "options": [
      "Nguyên nhân.",
      "Kết quả.",
      "Khả năng.",
      "Tất nhiên."
    ],
    "correctAnswer": 0
  },
  {
    "id": 31,
    "question": "Theo Ph. Ăngghen, hình thức vận động nào là hình thức vận động cao nhất và phức tạp nhất?",
    "options": [
      "Vận động cơ học.",
      "Vận động vật lý.",
      "Vận động sinh học.",
      "Vận động xã hội."
    ],
    "correctAnswer": 3
  },
  {
    "id": 32,
    "question": "Bản chất của ý thức theo quan điểm của chủ nghĩa duy vật biện chứng là gì?",
    "options": [
      "Là sự sao chép nguyên xi thế giới khách quan vào đầu óc con người.",
      "Là hình ảnh chủ quan của thế giới khách quan, là sự phản ánh năng động, sáng tạo hiện thực khách quan.",
      "Là một thực thể tồn tại độc lập với vật chất.",
      "Là sản phẩm do thần linh ban tặng cho con người."
    ],
    "correctAnswer": 1
  },
  {
    "id": 33,
    "question": "Quy luật nào được V.I. Lênin gọi là \"hạt nhân\" của phép biện chứng duy vật?",
    "options": [
      "Quy luật chuyển hóa từ những sự thay đổi về lượng thành những thay đổi về chất và ngược lại.",
      "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
      "Quy luật phủ định của phủ định.",
      "Quy luật giá trị."
    ],
    "correctAnswer": 1
  },
  {
    "id": 34,
    "question": "Điền cụm từ thích hợp vào định nghĩa vật chất của V.I. Lênin: \"Vật chất là một (…), dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác...\"",
    "options": [
      "vật thể hữu hình.",
      "phạm trù khoa học tự nhiên.",
      "phạm trù triết học.",
      "dạng tồn tại cụ thể."
    ],
    "correctAnswer": 2
  },
  {
    "id": 35,
    "question": "Theo quan điểm triết học Mác - Lênin, nội dung của mối quan hệ biện chứng giữa vật chất và ý thức là gì?",
    "options": [
      "Vật chất có trước, ý thức có sau, vật chất quyết định ý thức.",
      "Ý thức có trước, vật chất có sau, ý thức quyết định vật chất.",
      "Vật chất và ý thức cùng song song tồn tại, không cái nào quyết định cái nào.",
      "Vật chất quyết định ý thức, ý thức có tính độc lập tương đối và có thể tác động trở lại vật chất thông qua hoạt động thực tiễn của con người."
    ],
    "correctAnswer": 3
  },
  {
    "id": 36,
    "question": "Nguyên nhân cơ bản nào giải thích vì sao \"ý thức xã hội thường lạc hậu hơn tồn tại xã hội\"?",
    "options": [
      "Do ý thức xã hội là cái phản ánh nên nó luôn đi sau cái được phản ánh (tồn tại xã hội); do sức ỳ của tâm lý xã hội; và do sự níu kéo của các giai cấp bóc lột, thống trị lỗi thời.",
      "Do sự phát triển của khoa học kỹ thuật làm con người không chú trọng đến tinh thần.",
      "Do con người thiếu năng lực tư duy để nhận thức sự thay đổi của xã hội.",
      "Do ý thức xã hội luôn được bảo vệ bởi nhà nước và pháp luật nên không bao giờ thay đổi."
    ],
    "correctAnswer": 0
  },
  {
    "id": 37,
    "question": "Nguồn gốc trực tiếp dẫn đến sự ra đời của nhà nước theo chủ nghĩa duy vật lịch sử là gì?",
    "options": [
      "Sự phát triển quá nhanh của dân số cần bộ máy quản lý.",
      "Mâu thuẫn giai cấp trong xã hội trở nên gay gắt không thể điều hòa được.",
      "Do khế ước xã hội, sự thỏa thuận tự nguyện giữa các công dân.",
      "Do Thượng đế hoặc ý niệm tuyệt đối sinh ra để quản lý xã hội."
    ],
    "correctAnswer": 1
  },
  {
    "id": 38,
    "question": "Phép biện chứng duy vật được xây dựng dựa trên mấy nguyên lý cơ bản?",
    "options": [
      "Một nguyên lý cơ bản.",
      "Hai nguyên lý cơ bản.",
      "Ba nguyên lý cơ bản.",
      "Bốn nguyên lý cơ bản."
    ],
    "correctAnswer": 1
  },
  {
    "id": 39,
    "question": "Theo Ph. Ăngghen, vấn đề cơ bản lớn của mọi triết học, đặc biệt là của triết học hiện đại, là vấn đề quan hệ giữa yếu tố nào?",
    "options": [
      "Giữa con người với tự nhiên.",
      "Giữa lý luận với thực tiễn.",
      "Giữa tư duy với tồn tại.",
      "Giữa cá nhân với xã hội."
    ],
    "correctAnswer": 2
  },
  {
    "id": 40,
    "question": "Trong phương thức sản xuất, yếu tố nào thường xuyên biến đổi và giữ vai trò quyết định đối với sự phát triển của xã hội?",
    "options": [
      "Kiến trúc thượng tầng.",
      "Quan hệ sản xuất.",
      "Lực lượng sản xuất.",
      "Cơ sở hạ tầng."
    ],
    "correctAnswer": 2
  },
  {
    "id": 41,
    "question": "Thực tiễn đóng vai trò như thế nào đối với nhận thức?",
    "options": [
      "Là hệ quả thụ động của quá trình nhận thức.",
      "Là cơ sở, động lực, mục đích của nhận thức và là tiêu chuẩn kiểm tra chân lý.",
      "Chỉ có vai trò áp dụng những tri thức đã có sẵn vào đời sống.",
      "Thực tiễn và nhận thức phát triển song song, không quyết định lẫn nhau."
    ],
    "correctAnswer": 1
  },
  {
    "id": 42,
    "question": "Theo quan điểm của triết học Mác - Lênin, con người là sự thống nhất giữa hai mặt (hai phương diện) nào?",
    "options": [
      "Phương diện lý trí và phương diện tình cảm.",
      "Phương diện sinh học (mặt tự nhiên) và phương diện xã hội.",
      "Phương diện vật chất và phương diện tinh thần.",
      "Phương diện cá nhân và phương diện cộng đồng."
    ],
    "correctAnswer": 1
  },
  {
    "id": 43,
    "question": "Theo phép biện chứng duy vật, mối quan hệ giữa bản chất và hiện tượng là gì?",
    "options": [
      "Bản chất và hiện tượng tồn tại hoàn toàn tách rời nhau.",
      "Hiện tượng là do con người tưởng tượng ra, chỉ có bản chất mới tồn tại.",
      "Bản chất và hiện tượng đều tồn tại khách quan, là hai mặt vừa thống nhất vừa đối lập; bản chất luôn bộc lộ qua hiện tượng.",
      "Bản chất thay đổi nhưng hiện tượng không bao giờ thay đổi."
    ],
    "correctAnswer": 2
  },
  {
    "id": 44,
    "question": "Trong các hình thức cơ bản của thực tiễn, hình thức nào đóng vai trò cơ sở, quan trọng nhất và quyết định các hình thức khác?",
    "options": [
      "Hoạt động chính trị - xã hội.",
      "Hoạt động thực nghiệm khoa học.",
      "Hoạt động sản xuất vật chất.",
      "Hoạt động nghệ thuật và giáo dục."
    ],
    "correctAnswer": 2
  },
  {
    "id": 45,
    "question": "Nguồn gốc lý luận trực tiếp cho sự ra đời của chủ nghĩa Mác là gì?",
    "options": [
      "Triết học tự nhiên Hy Lạp, kinh tế học Pháp, triết học cổ điển Đức.",
      "Triết học cổ điển Đức, kinh tế chính trị cổ điển Anh, chủ nghĩa xã hội không tưởng Pháp.",
      "Triết học Khai sáng Pháp, khoa học tự nhiên thế kỷ XVII - XVIII.",
      "Thuyết tiến hóa, thuyết tế bào, định luật bảo toàn năng lượng."
    ],
    "correctAnswer": 1
  },
  {
    "id": 46,
    "question": "Vì sao triết học Mác - Lênin khẳng định thực tiễn là tiêu chuẩn duy nhất của chân lý?",
    "options": [
      "Vì thực tiễn có tính chủ quan, có thể đáp ứng mọi mong muốn của con người.",
      "Vì chỉ thông qua hoạt động thực tiễn vật chất, con người mới vật chất hóa được tri thức, qua đó kiểm chứng được sự phù hợp của tri thức với hiện thực khách quan.",
      "Vì thực tiễn là lĩnh vực duy nhất mang lại lợi ích kinh tế.",
      "Vì đa số mọi người đều tán thành vai trò của thực tiễn."
    ],
    "correctAnswer": 1
  },
  {
    "id": 47,
    "question": "Nguồn gốc tự nhiên của ý thức bao gồm những yếu tố nào?",
    "options": [
      "Bộ óc người và thế giới khách quan tác động lên bộ óc người.",
      "Lao động và ngôn ngữ của con người.",
      "Sự sáng tạo của ý niệm tuyệt đối.",
      "Khả năng tư duy trừu tượng thuần túy."
    ],
    "correctAnswer": 0
  },
  {
    "id": 48,
    "question": "Lực lượng sản xuất được cấu thành từ những yếu tố cơ bản nào?",
    "options": [
      "Tư liệu sản xuất và đối tượng lao động.",
      "Người lao động với kỹ năng lao động của họ và tư liệu sản xuất.",
      "Công cụ lao động và người lao động.",
      "Phương thức sản xuất và quan hệ sản xuất."
    ],
    "correctAnswer": 1
  },
  {
    "id": 49,
    "question": "Triết học Mác - Lênin do ai sáng lập và bảo vệ, phát triển?",
    "options": [
      "C. Mác sáng lập, Ph. Ăngghen bảo vệ và phát triển.",
      "C. Mác và Ph. Ăngghen sáng lập, V.I. Lênin bảo vệ và phát triển.",
      "C. Mác sáng lập, V.I. Lênin bảo vệ và phát triển.",
      "V.I. Lênin sáng lập và phát triển."
    ],
    "correctAnswer": 1
  },
  {
    "id": 50,
    "question": "Theo quan điểm của triết học Mác - Lênin, sự phát triển được hiểu như thế nào?",
    "options": [
      "Là mọi sự vận động, thay đổi nói chung của sự vật.",
      "Là sự vận động theo đường tròn khép kín, lặp đi lặp lại.",
      "Là quá trình vận động tiến lên từ thấp đến cao, từ đơn giản đến phức tạp, từ kém hoàn thiện đến hoàn thiện hơn.",
      "Là sự tăng lên thuần túy về số lượng mà không thay đổi về chất."
    ],
    "correctAnswer": 2
  },
  {
    "id": 51,
    "question": "Hình thức nào KHÔNG thuộc giai đoạn nhận thức lý tính (tư duy trừu tượng)?",
    "options": [
      "Khái niệm.",
      "Phán đoán.",
      "Biểu tượng.",
      "Suy luận."
    ],
    "correctAnswer": 2
  }
];
