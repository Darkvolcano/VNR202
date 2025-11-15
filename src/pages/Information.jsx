import "./Information.css";

const teamMembers = [
  {
    id: 1,
    studentId: "SE183178",
    name: "Tô Triều Vỹ",
    role: "Làm WEB",
  },
  {
    id: 2,
    studentId: "SE183221",
    name: "Đào Bảo Kha",
    role: "Thuyết trình",
  },
  {
    id: 3,
    studentId: "SE183245",
    name: "Phạm Chu Chí Khang",
    role: "Làm web",
  },
  {
    id: 4,
    studentId: "SE183322",
    name: "Võ Minh Trí",
    role: "Làm web",
  },
  {
    id: 5,
    studentId: "SE183867",
    name: "Phạm Cẩm Hoàng",
    role: "Làm AI",
  },
  {
    id: 6,
    studentId: "SS180587",
    name: "Trần Thuận Nguyên",
    role: "Soạn nội dung",
  },
];

const aiTools = [
  {
    id: 1,
    name: "Google Gemini",
    description: "Sử dụng để hỗ trợ tư duy thiết kế (như chọn phông màu), gợi ý design.",
    promptExample: `
      "Bạn là một trợ lý học tập chuyên về môn VNR202 - Lịch sử Đảng Cộng sản Việt Nam.
            
            TÀI LIỆU THAM KHẢO:
            Khi Nguyễn Sinh Cung cất tiếng khóc chào đời vào năm 1890 tại làng Chùa, Nghệ An, đất nước đang chìm trong đêm dài nô lệ. Triều đình nhà Nguyễn đã đầu hàng, thực dân Pháp áp đặt gông cùm cai trị. Các cuộc khởi nghĩa, tiêu biểu là phong trào Cần Vương, dù sôi sục và đầy khí phách, nhưng lần lượt thất bại trước hỏa lực và chính sách cai trị tàn bạo của kẻ thù.
Sự thất bại của các bậc cha anh đã đặt ra một câu hỏi nhức nhối cho cả dân tộc: Cứu nước bằng con đường nào?
Chính trong bối cảnh bi thương mà hào hùng đó, 21 năm đầu đời của Người (từ 1890 đến 1911) là một quá trình không ngừng quan sát, học hỏi và nung đúc, để rồi hình thành một ý chí phi thường, dẫn đến một quyết định làm thay đổi cả vận mệnh dân tộc.
1. Bối cảnh Đất nước & "Đêm trường Nô lệ"
Năm 1884, Hiệp ước Patenôtre được ký kết, đánh dấu sự đầu hàng hoàn toàn của triều Nguyễn. Đất nước phải chịu cảnh "một cổ hai tròng": sự áp bức của thực dân Pháp và sự bóc lột của giai cấp phong kiến tay sai.
Các phong trào yêu nước cuối thế kỷ 19, dù dũng cảm, nhưng đều đi vào ngõ cụt. Cuộc khởi nghĩa Hương Khê (1885-1896) do Phan Đình Phùng lãnh đạo thất bại, đã khép lại phong trào Cần Vương theo hệ tư tưởng phong kiến. Đất nước rơi vào tình trạng bế tắc về đường lối cứu nước. Sự bần cùng hóa của nông dân, sự kìm kẹp về văn hóa, chính sách "chia để trị" thâm độc của Pháp đã phủ một bóng đen tuyệt vọng lên toàn xã hội.
2. Quê hương & Gia đình: Cái nôi Hun đúc Nhân cách
Ý chí của Nguyễn Tất Thành không tự nhiên mà có. Nó được ươm mầm từ chính mảnh đất Nghệ An "địa linh nhân kiệt", một vùng đất giàu truyền thống hiếu học, kiên cường và không bao giờ chịu khuất phục.
Ảnh hưởng lớn nhất và trực tiếp nhất đến Người là từ gia đình:
Thân mẫu, bà Hoàng Thị Loan (1868-1901): Là hình ảnh của người phụ nữ Việt Nam cần cù, nhân hậu và đức hy sinh. Cái chết vì lao lực của bà khi Người mới 10 tuổi đã gieo vào lòng cậu bé Cung sự thấu cảm sâu sắc với nỗi thống khổ của những người dân lao động.
Thân phụ, cụ Phó bảng Nguyễn Sinh Sắc (1862-1929): Cụ Sắc là người thầy đầu tiên, một nhà Nho yêu nước cấp tiến. Dù đỗ đạt cao, ông không màng danh lợi, giữ mình thanh liêm và luôn bất hợp tác với bọn quan lại tham ô cũng như chính quyền thực dân. Tư tưởng "ái quốc" (yêu nước) và "thương dân" của ông đã vượt lên trên tư tưởng "trung quân" (trung thành với vua) mù quáng. Chính cụ Sắc đã gieo vào lòng con trai mình tinh thần ham học và một tư duy phản biện.
Chính gia đình và quê hương đã hun đúc nên ở Người lòng yêu nước, thương dân vô hạn – đây chính là động lực lớn nhất thôi thúc Người đi tìm đường cứu nước.
3. Quốc học Huế & "Tân thư": Nhận diện Mâu thuẫn
Những năm tháng theo cha vào Huế, Nguyễn Tất Thành được theo học tại trường Tiểu học Pháp - Việt Đông Ba và sau đó là trường Quốc học Huế (1907).
Đây là một bước ngoặt quan trọng. Người lần đầu tiên tiếp xúc một cách có hệ thống với văn minh phương Tây thông qua "Tân thư" và các khẩu hiệu của Cách mạng Pháp: "Tự do - Bình đẳng - Bác ái".
Tuy nhiên, thực tế phũ phàng đã giúp Người nhận ra sự thật. Năm 1908, Người tham gia và chứng kiến cuộc biểu tình chống thuế của nông dân Trung Kỳ. Người tận mắt thấy thực dân Pháp thẳng tay đàn áp dã man những người nông dân chân lấm tay bùn.
Mâu thuẫn lớn đã được nhận diện: Những khẩu hiệu đẹp đẽ mà Pháp rao giảng hoàn toàn đối lập với thực tế cai trị tàn bạo của chúng tại thuộc địa. Người hiểu ra rằng không thể tin vào "lòng tốt" hay "sứ mệnh khai hóa" của thực dân. Vì tham gia phong trào này, Nguyễn Tất Thành bị đuổi học.
4. Bế tắc của Tiền bối & Lựa chọn tại Dục Thanh
Rời Huế, Người vào Nam. Năm 1910, Người dừng chân tại Phan Thiết, dạy học ở trường Dục Thanh do các sĩ phu yêu nước sáng lập.
Tại đây, thầy giáo Nguyễn Tất Thành có thời gian nghiên cứu sâu hơn về các con đường cứu nước của các bậc tiền bối đương thời, nhưng Người sớm nhận ra sự bế tắc của họ:
Con đường của Phan Bội Châu (Đông Du): Dựa vào Nhật (một đế quốc châu Á) để đánh Pháp. Người nhận định đây là "đuổi hổ cửa trước, rước beo cửa sau", chỉ là thay đổi kẻ thống trị.
Con đường của Phan Châu Trinh (Duy Tân): Cải cách, dựa vào Pháp để "khai dân trí". Người nhận định đây là "xin giặc rủ lòng thương", một ảo tưởng không thể thực hiện.
Cả hai con đường đều thất bại. Nỗi trăn trở về một con đường mới, một hướng đi hoàn toàn khác, trở nên thôi thúc hơn bao giờ hết. Người quyết định phải tự mình tìm lấy con đường.
5. Bến Nhà Rồng (05/06/1911): Quyết định Vĩ đại
Đầu năm 1911, Nguyễn Tất Thành đến Sài Gòn. Ngày 5 tháng 6 năm 1911, tại Bến Nhà Rồng, với tên mới là Văn Ba, Người xin làm phụ bếp trên tàu Amiral Latouche-Tréville, bắt đầu hành trình ra nước ngoài.
Đây là một quyết định vĩ đại, thể hiện một tư duy hoàn toàn khác biệt:
Hướng đi: Người không đi về phương Đông (Nhật, Trung Quốc) như các sĩ phu khác, mà đi về phương Tây – nơi khai sinh ra chủ nghĩa tư bản, chủ nghĩa đế quốc, và cũng là quê hương của những lý tưởng "Tự do, Bình đẳng, Bác ái".
Mục đích: Người đi không phải để cầu viện, không phải để học tập về làm quan, mà là để "Xem họ làm như thế nào rồi trở về giúp đồng bào ta". Người muốn đến tận "hang ổ" của kẻ thù để tìm hiểu bản chất của vấn đề.
Hành trang: Chỉ có hai bàn tay trắng, lòng yêu nước vô hạn và một ý chí sắt đá.
21 năm đầu đời, từ Làng Sen đến Bến Cảng, là một hành trình liên tục của sự nung đúc ý chí. Chuyến tàu rời Bến Nhà Rồng năm đó không phải là một sự ra đi để trốn tránh, mà là một sự dấn thân đầy chủ động, mang theo vận mệnh của cả một dân tộc.
Hành trình tìm chân lý cứu nước đã chính thức bắt đầu.

Từ Văn Ba đến Nguyễn Ái Quốc: Mười năm (1911-1920) tìm thấy con đường cứu nước
SAPO (Tóm tắt mở đầu): Mười năm, một chặng đường vĩ đại. Bắt đầu từ Bến Nhà Rồng năm 1911 với một hoài bão mơ hồ là "tìm đường cứu nước", người thanh niên Nguyễn Tất Thành đã bôn ba qua ba châu lục, làm hàng chục nghề, trải nghiệm tận cùng sự tàn bạo của chủ nghĩa đế quốc. Hành trình ấy kết thúc vào năm 1920 tại Pháp, khi Người tìm thấy và lựa chọn dứt khoát con đường duy nhất có khả năng giải phóng dân tộc: Chủ nghĩa Mác-Lênin. Đó là sự chuyển biến 
1. Hải trình của nhận thức (1911 - 1917)
Ngày 5 tháng 6 năm 1911, người thanh niên Nguyễn Tất Thành, với cái tên mới là Văn Ba, lên con tàu Amiral Latouche-Tréville bắt đầu hành trình vạn dặm. Khác với các bậc tiền bối, Người không ra đi để cầu viện hay tìm một mô hình dân chủ tư sản có sẵn. Mục đích của Người thực tế hơn: "Xem nước Pháp và các nước khác. Sau khi xem xét họ làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta".
Hành trang của Người chỉ có lòng yêu nước và khát vọng tự do. Những năm tháng lênh đênh trên biển, đặt chân đến các cảng ở Châu Phi (Algérie, Congo, Dahomey...) và Châu Mỹ (New York, Boston) đã mở ra một "trường đại học thực tiễn" tàn khốc.
Khi làm việc ở khu Harlem (New York) hay cào tuyết ở London, Người tận mắt chứng kiến hai điều cốt lõi:
Sự tương phản giàu nghèo: Sự xa hoa tột đỉnh của giới tư bản và cảnh cùng khổ của người lao động da trắng ngay tại "chính quốc".
Bản chất của chủ nghĩa đế quốc: Dù là người dân An Nam thuộc địa, người da đen ở Harlem hay người lao động ở Congo, tất cả đều là nạn nhân của cùng một kẻ thù: chủ nghĩa thực dân và chủ nghĩa đế quốc.
Nhận thức này đã vượt lên trên lòng yêu nước dân tộc thông thường. Người hiểu rằng, kẻ thù không phải là "người Pháp" hay "người da trắng", mà là một hệ thống áp bức toàn cầu. Từ đó, tình yêu nước của Người đã hòa quyện với tình cảm quốc tế vô sản.
2. Cú sốc Versailles và sự vỡ mộng (1917 - 1919)
Năm 1917, Nguyễn Tất Thành trở lại Paris, trung tâm chính trị nóng bỏng của châu Âu sau Thế chiến I. Người tích cực tham gia các diễn đàn chính trị, gia nhập Đảng Xã hội Pháp.
Đây là lúc "Hội nghị Hòa bình Versailles" (1919) diễn ra, và Tổng thống Mỹ Woodrow Wilson đang rao giảng học thuyết "14 điểm" về quyền tự quyết của các dân tộc. Mang trong mình niềm hy vọng vào "công lý" của các cường quốc, Người lấy tên mới là Nguyễn Ái Quốc (Nguyễn - Người yêu nước) và thay mặt những người Việt Nam tại Pháp, gửi đến hội nghị "Bản yêu sách của nhân dân An Nam".
Bản yêu sách 8 điểm này không đòi độc lập ngay, mà chỉ đòi hỏi những quyền tự do dân chủ cơ bản: quyền tự do ngôn luận, tự do lập hội, quyền tự quyết...
Kết quả: Không một ai trả lời. Các cường quốc mải mê chia chác lợi ích thuộc địa. Bản yêu sách bị phớt lờ hoàn toàn.
Versailles là một cú sốc lớn, một bài học đắt giá. Nguyễn Ái Quốc vỡ mộng hoàn toàn. Người hiểu ra một chân lý phũ phàng: Không thể trông chờ vào lòng tốt hay những lời hứa "tự do, bình đẳng" của chủ nghĩa đế quốc. Muốn giải phóng, các dân tộc thuộc địa phải tự dựa vào sức mình.
3. Ánh sáng từ Phương Đông: Luận cương Lênin (Tháng 7/1920)
Chính trong lúc bế tắc và thất vọng nhất về con đường dân chủ tư sản, Nguyễn Ái Quốc đã nghe thấy tiếng vang của Cách mạng Tháng Mười Nga (1917). Trong nội bộ Đảng Xã hội Pháp lúc này đang diễn ra cuộc tranh luận nảy lửa: Nên đi theo Quốc tế II (cải lương, thỏa hiệp) hay gia nhập Quốc tế III (Quốc tế Cộng sản) do Lênin sáng lập?
Ban đầu, Nguyễn Ái Quốc tham gia tranh luận chỉ với một câu hỏi duy nhất: "Quốc tế nào bênh vực các dân tộc thuộc địa?"
Và câu trả lời đã đến vào tháng 7 năm 1920.
Khi đọc được "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa" của Lênin trên báo L'Humanité, một ánh sáng đã bừng lên. Lần đầu tiên, có một nhà lãnh đạo cách mạng vĩ đại chỉ ra mối liên hệ trực tiếp: cuộc đấu tranh giải phóng dân tộc ở thuộc địa chính là một bộ phận của cuộc cách mạng vô sản thế giới.
Lênin không chỉ đồng cảm, mà còn chỉ ra con đường: cách mạng vô sản.
Khoảnh khắc đó, Người đã tìm thấy chân lý. Nhiều năm sau, Người kể lại:
"Luận cương của Lênin làm cho tôi rất cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao! Tôi vui mừng đến phát khóc lên. Ngồi một mình trong buồng mà tôi nói to lên như đang nói trước quần chúng đông đảo: ‘Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!’"
4. Lựa chọn dứt khoát (Tháng 12/1920)
Nếu Luận cương Lênin là kim chỉ nam về tư tưởng, thì Đại hội Tours của Đảng Xã hội Pháp (tháng 12 năm 1920) là hành động chính trị dứt khoát.
Tại Đại hội, với tư cách là đại biểu chính thức, Nguyễn Ái Quốc đã đứng về phía đa số, bỏ phiếu tán thành gia nhập Quốc tế Cộng sản (Quốc tế III). Người trở thành một trong những người sáng lập Đảng Cộng sản Pháp.
Sự kiện này đánh dấu một bước ngoặt lịch sử. Bằng cách bỏ lá phiếu đó, Nguyễn Ái Quốc đã:
Chọn con đường: Con đường Cách mạng Vô sản.
Chọn lực lượng: Giai cấp công nhân và nhân dân lao động.
Chọn hệ tư tưởng: Chủ nghĩa Mác-Lênin.
Người thanh niên yêu nước Nguyễn Tất Thành rời Bến Nhà Rồng năm 1911, sau một thập kỷ khảo nghiệm và đấu tranh, đã trở thành chiến sĩ cộng sản Nguyễn Ái Quốc. Con đường cứu nước đã được tìm thấy. Nhiệm vụ tiếp theo của Người là đưa "con đường" ấy trở về với Tổ quốc.

Nếu Đại hội Tours năm 1920 là khoảnh khắc Nguyễn Ái Quốc "Tìm Thấy Con Đường", thì thập kỷ tiếp theo (1921-1930) là một hành trình vĩ đại và bền bỉ để "Chuẩn bị Con Đường" đó cho toàn dân tộc. Đây là giai đoạn Người hoạt động không mệt mỏi với tư cách là một chiến sĩ cộng sản, tập trung vào ba nhiệm vụ trọng yếu: Truyền bá tư tưởng, hoàn thiện lý luận và gieo mầm tổ chức.
Đây là thập kỷ xây dựng nền móng, chuẩn bị những "hạt giống" tư tưởng và cán bộ, để từ đó khai sinh ra một Đảng Cộng sản đủ sức lãnh đạo cách mạng Việt Nam.
1. "Ngọn bút là vũ khí": Đấu tranh Tư tưởng tại Pháp (1921-1923)
Ngay sau khi trở thành người cộng sản, Nguyễn Ái Quốc lập tức biến tư tưởng thành hành động. Người hiểu rằng, trước khi muốn tổ chức quần chúng, phải thức tỉnh họ.
Tập hợp lực lượng: Người tham gia sáng lập Hội Liên hiệp Thuộc địa (1921) nhằm đoàn kết các dân tộc bị áp bức.
Vũ khí Báo chí: Người trở thành linh hồn của tờ báo Le Paria (Người Cùng Khổ). Ngọn bút của Người trở thành vũ khí sắc bén, vạch trần tội ác của chủ nghĩa thực dân, không chỉ ở Đông Dương mà trên toàn thế giới. Tờ báo đã bí mật được truyền về Việt Nam, trở thành luồng ánh sáng mới, thức tỉnh tinh thần yêu nước của tầng lớp trí thức, thanh niên.
Bản cáo trạng đanh thép: Trong giai đoạn này, Người hoàn thành tác phẩm kinh điển "Bản án chế độ thực dân Pháp" (xuất bản 1925). Tác phẩm như một bản cáo trạng toàn diện, có hệ thống, vạch rõ bản chất "ăn cướp" và "giết người" của chủ nghĩa thực dân, khơi dậy lòng căm thù và ý chí đấu tranh.
2. "Quê hương Cách mạng": Nâng cao và vận dụng Lý luận (1923-1924)
Để chuẩn bị cho một cuộc cách mạng, Nguyễn Ái Quốc hiểu mình cần phải nắm vững lý luận một cách có hệ thống. Năm 1923, Người bí mật rời Paris đến Liên Xô – "quê hương của Cách mạng Tháng Mười".
Tại đây, Người tham gia hoạt động tại Quốc tế Cộng sản và theo học tại Trường Đại học Phương Đông của những người lao động Cộng sản.
Đây không chỉ là quá trình học tập, mà còn là quá trình tư duy và vận dụng sáng tạo. Người đã nghiên cứu sâu sắc và bắt đầu phát triển lý luận về cách mạng ở thuộc địa. Đặc biệt, Người nhấn mạnh vai trò và tiềm năng cách mạng to lớn của giai cấp nông dân – lực lượng đông đảo nhất ở các nước thuộc địa – một sự bổ sung quan trọng cho lý luận Marx-Lenin vốn tập trung chủ yếu vào giai cấp công nhân ở các nước tư bản.
3. "Vườn ươm Cán bộ": Xây dựng Tổ chức tại Quảng Châu (1924-1927)
Sau khi trang bị vũ khí lý luận, Người tiến gần hơn về Tổ quốc. Cuối năm 1924, Nguyễn Ái Quốc đến Quảng Châu (Trung Quốc). Đây là thời điểm bắt đầu cho công cuộc gieo mầm tổ chức vĩ đại.
Tháng 6 năm 1925, Người sáng lập Hội Việt Nam Cách mạng Thanh niên – đây chính là tổ chức tiền thân, là "vườn ươm" để đào tạo nên những chiến sĩ cộng sản đầu tiên cho Việt Nam.
Người trực tiếp mở các lớp huấn luyện chính trị, đào tạo hàng trăm cán bộ cốt cán (như Trần Phú, Lê Hồng Phong, Phạm Văn Đồng...). Các bài giảng của Người tại đây vô cùng đơn giản, thực tế, dễ hiểu, giúp các học viên nhanh chóng nắm bắt được con đường cách mạng. Những thanh niên yêu nước này, sau khi được đào tạo, đã bí mật trở về nước, thâm nhập vào các nhà máy, hầm mỏ, đồn điền để "truyền lửa" và xây dựng cơ sở.
4. "Đường Kách mệnh" (1927): Hoàn thiện Đường lối
Từ các bài giảng tại Quảng Châu, Nguyễn Ái Quốc đã hệ thống hóa và cho ra đời tác phẩm bất hủ "Đường Kách mệnh" (1927).
Đây được xem là cuốn cẩm nang lý luận, là văn kiện chính trị đặt nền móng cho Cương lĩnh của Đảng sau này. Tác phẩm đã chỉ rõ những vấn đề cốt lõi một cách giản dị mà sâu sắc:
Tại sao phải làm cách mạng? Để giải phóng dân tộc, giải phóng giai cấp.
Lực lượng cách mạng là ai? "Công nông là gốc cách mệnh". Đồng thời phải đoàn kết các giai cấp, tầng lớp khác.
Ai lãnh đạo cách mạng? "Cách mệnh trước hết phải có đảng cách mệnh... Đảng có vững cách mệnh mới thành công".
Cách mạng Việt Nam phải là một bộ phận của cách mạng thế giới.
"Đường Kách mệnh" như ngọn hải đăng soi đường, giúp hàng ngàn người yêu nước tìm thấy chân lý và đi theo con đường cách mạng.
5. "Mầm đã Nảy": Yêu cầu tất yếu của Lịch sử (1928-1929)
Những hạt giống Nguyễn Ái Quốc gieo đã nảy mầm mạnh mẽ. Phong trào "Vô sản hóa" (1928) do Hội VNCM Thanh niên phát động – đưa cán bộ vào nhà máy, hầm mỏ để cùng sống, cùng làm, cùng đấu tranh – đã thúc đẩy sự kết hợp giữa chủ nghĩa Marx-Lenin và phong trào công nhân.
Sự phát triển vượt bậc của phong trào đã làm cho Hội VNCM Thanh niên không còn đáp ứng đủ yêu cầu. Thực tiễn đòi hỏi phải có một chính đảng tiên phong, một bộ tham mưu thực sự. Điều này dẫn đến sự ra đời của ba tổ chức cộng sản trong năm 1929 (Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng, Đông Dương Cộng sản Liên đoàn).
Sự ra đời của 3 tổ chức vừa là một bước tiến nhảy vọt của cách mạng, vừa là một thách thức, nguy cơ chia rẽ lớn.

Kết luận (1930): Thập kỷ 1921-1930 đã khép lại với một thành quả vĩ đại: Nguyễn Ái Quốc đã gieo mầm thành công cả về tư tưởng, lý luận và tổ chức. Những hạt giống nay đã nảy mầm, phát triển mạnh mẽ.
Nhưng cũng chính lúc này, lịch sử lại đặt ra một yêu cầu cấp bách nhất: Phải thống nhất các tổ chức cộng sản đó lại thành một Đảng duy nhất. Vai trò của người "Gieo mầm" giờ đây phải trở thành người "Hợp nhất".

 Từ Sáng lập Đảng đến Giành Chính quyền – Bản hùng ca của 55 năm hành trình cứu nước
Giai đoạn 1930–1945 là một thiên anh hùng ca rực rỡ nhất trong cuộc đời cách mạng của Chủ tịch Hồ Chí Minh. Sau khi đã tìm ra con đường cứu nước đúng đắn (Phần 2) và gieo mầm cách mạng trong lòng dân tộc (Phần 3), đây là thời kỳ Người trực tiếp lãnh đạo và rèn luyện Đảng, vượt qua muôn vàn thử thách sinh tử, chèo lái con thuyền cách mạng Việt Nam đến bến bờ độc lập.
1. Sứ mệnh Hợp nhất (1930): Khai sinh Đảng Cộng sản Việt Nam
Đầu năm 1930, phong trào cách mạng Việt Nam đứng trước nguy cơ chia rẽ khi ba tổ chức cộng sản cùng tồn tại riêng rẽ. Lịch sử đòi hỏi phải có một người đủ uy tín và tầm vóc để thống nhất lực lượng cách mạng.
Với tư cách phái viên của Quốc tế Cộng sản, Nguyễn Ái Quốc đã triệu tập Hội nghị hợp nhất tại Cửu Long (Hồng Kông) từ ngày 6/1 đến 7/2/1930.
 Tại đây, các tổ chức được thống nhất thành Đảng Cộng sản Việt Nam – một bước ngoặt lịch sử, chấm dứt thời kỳ khủng hoảng về đường lối và tổ chức của cách mạng Việt Nam.
Người đã soạn thảo Chánh cương vắn tắt và Sách lược vắn tắt – Cương lĩnh chính trị đầu tiên của Đảng, xác định con đường cách mạng Việt Nam là:
“Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản.”
Quan trọng hơn, Cương lĩnh đặt lên hàng đầu nhiệm vụ giải phóng dân tộc, khẳng định mục tiêu thiêng liêng:
“Làm cho nước Nam được hoàn toàn độc lập.”
2. “Lửa thử vàng”: Thử thách sinh tử (1930–1940)
Ngay sau khi ra đời, Đảng phải đối diện những năm tháng máu lửa đầu tiên.
 Phong trào 1930–1931 bùng nổ mạnh mẽ, đỉnh cao là Xô viết Nghệ – Tĩnh, – “cuộc tổng diễn tập đầu tiên” của cách mạng, khẳng định vai trò lãnh đạo của Đảng và liên minh công – nông.
Nhưng thực dân Pháp lập tức thẳng tay đàn áp, gieo rắc “khủng bố trắng” trên toàn cõi Đông Dương. Hàng ngàn chiến sĩ cách mạng bị bắt bớ, xử tử; hệ thống tổ chức của Đảng bị tổn thất nặng nề.
 Năm 1931, giữa lúc phong trào gặp khó khăn, Nguyễn Ái Quốc bị chính quyền Anh bắt tại Hồng Kông.
 Tưởng chừng cách mạng sẽ tắt lửa, nhưng Người vẫn kiên trung, bền gan, được quốc tế giúp đỡ thoát khỏi vòng lao lý, tiếp tục hoạt động cách mạng ở nước ngoài.
Dù xa Tổ quốc, Người vẫn dõi theo, chỉ đạo và giữ vững ngọn lửa cách mạng, chuẩn bị cho ngày trở về.
3. Pác Bó (1941): Quyết sách Lịch sử
Sau 30 năm bôn ba, đầu năm 1941, Nguyễn Ái Quốc trở về nước, chọn Pác Bó (Cao Bằng) làm căn cứ hoạt động.
 Giữa lúc Chiến tranh Thế giới thứ hai đang đến hồi khốc liệt, Người đưa ra một quyết sách mang tầm chiến lược tại Hội nghị Trung ương 8 (5/1941):
Tạm gác khẩu hiệu “cách mạng ruộng đất”, tập trung toàn lực vào nhiệm vụ giải phóng dân tộc.
Từ đó, Người sáng lập Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh) – tổ chức đại đoàn kết toàn dân, quy tụ mọi tầng lớp yêu nước, không phân biệt giai cấp, tôn giáo, đảng phái.
 Quyết sách ấy thể hiện thiên tài chính trị và tầm nhìn vượt thời đại của Hồ Chí Minh, mở ra giai đoạn chuẩn bị trực tiếp cho tổng khởi nghĩa.
4. Xây dựng Lực lượng – Chuẩn bị Tổng khởi nghĩa (1941–1945)
Dưới sự lãnh đạo của Người, Việt Minh phát triển mạnh mẽ trên cả nước.
Lực lượng chính trị: Các đoàn thể “Cứu quốc” lan tỏa khắp nơi – công nhân, nông dân, phụ nữ, thanh niên, trí thức… đều đứng lên đấu tranh.


Lực lượng vũ trang: Ngày 22/12/1944, Hồ Chí Minh ra chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân – tiền thân của Quân đội Nhân dân Việt Nam. Hai trận thắng đầu tiên ở Phai Khắt và Nà Ngần vang dội, khích lệ lòng tin vào thắng lợi.


Từng bước, cách mạng đã hội đủ lực – thời – thế.
5. Thời cơ “Ngàn năm có một” (1945)
Đầu năm 1945, phát xít Nhật đảo chính Pháp (9/3), xóa bỏ chính quyền thực dân.
 Ban Thường vụ Trung ương Đảng ra Chỉ thị “Nhật – Pháp bắn nhau và hành động của chúng ta”, xác định kẻ thù chính là phát xít Nhật, đồng thời chủ trương khẩn trương chuẩn bị khởi nghĩa vũ trang.
Tháng 8/1945, khi Nhật Bản đầu hàng Đồng minh vô điều kiện, thời cơ “ngàn năm có một” đã tới.
 Tại Tân Trào, Hội nghị toàn quốc của Đảng quyết định phát động Tổng khởi nghĩa trong cả nước.
Hồ Chí Minh ra Lời kêu gọi thiêng liêng:
“Giờ quyết định cho vận mệnh dân tộc ta đã đến!
 Toàn quốc đồng bào hãy đứng dậy…
 Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập!”
Chỉ trong 15 ngày (14–28/8/1945), Cách mạng Tháng Tám bùng nổ và thắng lợi vang dội, giành chính quyền trên cả nước
6. Tuyên ngôn Độc lập (2/9/1945): Khai sinh Nước Việt Nam Mới
Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh long trọng đọc Tuyên ngôn Độc lập, tuyên bố trước toàn thế giới:
“Nước Việt Nam có quyền hưởng tự do và độc lập,
 và sự thật đã thành một nước tự do độc lập.”
Đó là đỉnh cao của hành trình 55 năm – từ cậu bé Nguyễn Sinh Cung ở Làng Sen,
 đến người thanh niên Nguyễn Tất Thành tại Bến Nhà Rồng,
 rồi nhà cách mạng Nguyễn Ái Quốc – Hồ Chí Minh tại Ba Đình lịch sử.
Người đã tìm ra con đường, gieo mầm cách mạng, sáng lập và rèn luyện Đảng,
 và cuối cùng, lãnh đạo toàn dân tộc giành lại độc lập, mở ra kỷ nguyên mới – Kỷ nguyên Độc lập, Tự do và Chủ nghĩa xã hội.
Tư tưởng về độc lập dân tộc – hạt nhân của lý tưởng cứu nước
Tư tưởng về độc lập dân tộc – Hạt nhân của lý tưởng cứu nước
Trong suốt chiều dài lịch sử dân tộc Việt Nam, khát vọng độc lập tự do luôn là ngọn lửa bất diệt, soi đường cho mọi phong trào yêu nước. Dù ở bất kỳ giai đoạn nào, từ thời phong kiến đến thời cận – hiện đại, tư tưởng độc lập dân tộc vẫn là hạt nhân cốt lõi của lý tưởng cứu nước, là sợi chỉ đỏ xuyên suốt mọi cuộc đấu tranh vì sự tồn vong của dân tộc.
1. Cội nguồn tư tưởng độc lập dân tộc trong lịch sử Việt Nam
Từ thuở dựng nước, tinh thần độc lập đã sớm hình thành trong ý thức của người Việt. Ngay từ thế kỷ X, khi Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng năm 938, chấm dứt hơn một nghìn năm Bắc thuộc, nền độc lập dân tộc chính thức được khôi phục. Tư tưởng “Nam quốc sơn hà Nam đế cư” – được coi là bản tuyên ngôn độc lập đầu tiên của nước ta – đã khẳng định rõ chủ quyền dân tộc, ý chí tự cường và lòng tự tôn của người Việt.
Các triều đại sau như Lý, Trần, Lê đều kế thừa và phát triển tư tưởng đó. Hào khí Đông A thời Trần với ba lần chiến thắng quân Nguyên – Mông, cùng lời thề “Sát Thát” trên sông Hóa, thể hiện khát vọng giữ nước thiêng liêng. Sang thế kỷ XV, Nguyễn Trãi thay mặt Lê Lợi viết Bình Ngô đại cáo, tuyên bố nền độc lập sau 20 năm kháng chiến chống quân Minh, khẳng định mạnh mẽ: “Nước Đại Việt ta từ trước vốn xưng nền văn hiến đã lâu, sơn hà cương vực đã chia…” – một minh chứng hùng hồn cho tư tưởng độc lập dân tộc đã ăn sâu vào máu thịt con người Việt Nam.
2. Sự chuyển biến của tư tưởng độc lập dân tộc thời cận đại
Bước sang thế kỷ XIX, khi thực dân Pháp xâm lược (1858), Việt Nam bước vào giai đoạn đen tối. Trước tình hình đó, tư tưởng độc lập dân tộc được thể hiện qua nhiều con đường cứu nước khác nhau.
Ban đầu, tầng lớp sĩ phu yêu nước vẫn đi theo khuynh hướng phong kiến, tiêu biểu như Phong trào Cần Vương (1885 – 1896), do Vua Hàm Nghi và các sĩ phu như Phan Đình Phùng, Tống Duy Tân lãnh đạo, với khẩu hiệu “Bình Tây, sát tả”. Mục tiêu vẫn là khôi phục vương quyền, giành lại độc lập cho triều đình phong kiến.
Tuy nhiên, khi con đường đó thất bại, nhiều sĩ phu tiến bộ đã nhận ra cần phải thay đổi tư duy cứu nước. Đầu thế kỷ XX, xuất hiện các phong trào Duy Tân (1906 – 1908), Đông Du (1905 – 1909) do Phan Bội Châu và Phan Châu Trinh khởi xướng. Cả hai tuy khác nhau về phương pháp (Phan Bội Châu chủ trương dùng bạo lực cách mạng, Phan Châu Trinh thiên về cải cách dân chủ, khai dân trí), nhưng điểm chung vẫn là khát vọng giành lại độc lập dân tộc, giải phóng nhân dân khỏi ách nô lệ ngoại bang.
Có thể nói, từ cuối thế kỷ XIX đến đầu thế kỷ XX, tư tưởng độc lập dân tộc ở Việt Nam đã chuyển từ phạm vi “trung quân ái quốc” sang “ái quốc vị dân”, tức là yêu nước vì nhân dân, vì dân tộc chứ không chỉ vì nhà vua. Đây chính là bước tiến lớn trong nhận thức chính trị của các nhà yêu nước Việt Nam thời kỳ cận đại.
3. Hồ Chí Minh – người hoàn thiện tư tưởng độc lập dân tộc trong thời đại mới
Tư tưởng độc lập dân tộc đạt đến đỉnh cao khi Nguyễn Ái Quốc – Hồ Chí Minh tìm ra con đường cứu nước đúng đắn. Năm 1911, Người ra đi tìm đường cứu nước và sau nhiều năm bôn ba, Người nhận thấy chỉ có chủ nghĩa xã hội và con đường cách mạng vô sản mới giải phóng được dân tộc bị áp bức.
Trong Cương lĩnh chính trị đầu tiên (1930) do Hồ Chí Minh khởi thảo, Người khẳng định: “Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản.” Mục tiêu hàng đầu vẫn là giành độc lập dân tộc, sau đó mới tiến lên xây dựng xã hội mới. Tư tưởng này được Người cụ thể hóa bằng khẩu hiệu nổi tiếng:
 👉 “Không có gì quý hơn độc lập, tự do.”
Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa, chấm dứt hơn 80 năm đô hộ của thực dân Pháp. Tuyên ngôn ấy không chỉ là văn kiện khai sinh một quốc gia mới, mà còn là kết tinh rực rỡ của tư tưởng độc lập dân tộc – hạt nhân của lý tưởng cứu nước suốt hàng ngàn năm.
4. Giá trị lịch sử và ý nghĩa thời đại
Tư tưởng độc lập dân tộc không chỉ giúp Việt Nam thoát khỏi ách nô lệ, mà còn trở thành động lực tinh thần to lớn cho sự nghiệp bảo vệ Tổ quốc và xây dựng đất nước ngày nay. Trong bối cảnh toàn cầu hóa, tinh thần độc lập ấy được thể hiện qua khát vọng tự chủ kinh tế, giữ gìn bản sắc văn hóa, và khẳng định vị thế Việt Nam trên trường quốc tế.
Độc lập dân tộc không chỉ là quyền sống, mà còn là biểu tượng của lòng tự tôn, là kết quả của bao thế hệ đã hy sinh để đổi lấy hai chữ “Tự do”. Chính vì thế, tư tưởng ấy mãi mãi là linh hồn của dân tộc Việt Nam, là nền tảng cho mọi đường lối, chính sách của Đảng và Nhà nước ta trong suốt hành trình phát triển đất nước.

2. Tư tưởng về con đường cứu nước – từ thất bại của các khuynh hướng cũ đến cách mạng vô sản
Tư tưởng về con đường cứu nước – Từ thất bại của các khuynh hướng cũ đến cách mạng vô sản
Trong hành trình hơn nửa thế kỷ chống lại ách thống trị của thực dân Pháp, dân tộc Việt Nam đã trải qua nhiều con đường cứu nước khác nhau. Mỗi khuynh hướng đều mang trong mình lòng yêu nước sâu sắc, song chỉ đến khi Nguyễn Ái Quốc – Hồ Chí Minh tìm ra con đường cách mạng vô sản, phong trào giải phóng dân tộc mới có được hướng đi đúng đắn và giành thắng lợi vẻ vang.
1. Bối cảnh lịch sử và sự khủng hoảng về đường lối cứu nước
Giữa thế kỷ XIX, thực dân Pháp nổ súng xâm lược Việt Nam (1858), mở đầu thời kỳ mất nước kéo dài gần 100 năm. Trước thảm cảnh dân tộc rơi vào vòng nô lệ, các tầng lớp nhân dân Việt Nam đã không ngừng đứng lên chống giặc ngoại xâm. Tuy nhiên, do hoàn cảnh lịch sử, trình độ xã hội và tư tưởng thời đại còn hạn chế, nên các phong trào yêu nước trong giai đoạn này phần lớn thất bại.
Nguyên nhân sâu xa của những thất bại ấy chính là sự khủng hoảng về đường lối cứu nước – tức là dân tộc ta chưa tìm ra được con đường đúng đắn, phù hợp với xu thế phát triển của thời đại mới.
2. Thất bại của các khuynh hướng cứu nước cũ
Khuynh hướng phong kiến – “Cần Vương giúp nước”
Sau Hiệp ước Patenôtre (1884), triều đình nhà Nguyễn chính thức đầu hàng Pháp, nhưng lòng yêu nước của nhân dân vẫn bùng lên mạnh mẽ. Phong trào Cần Vương (1885 – 1896) được phát động dưới danh nghĩa “vì vua, vì nước”, quy tụ đông đảo các sĩ phu và nông dân yêu nước như Phan Đình Phùng, Tống Duy Tân, Nguyễn Thiện Thuật…
Tuy nhiên, do mang nặng tư tưởng phong kiến “trung quân ái quốc”, mục tiêu cứu nước vẫn gắn với việc khôi phục vương quyền, chứ chưa hướng đến quyền lợi của toàn dân. Bên cạnh đó, tổ chức rời rạc, vũ khí thô sơ, thiếu tầm nhìn chiến lược khiến phong trào dần bị đàn áp và thất bại.
Khuynh hướng dân chủ tư sản – “Duy Tân và Đông Du”
Đầu thế kỷ XX, trong bối cảnh thế giới có nhiều biến động, đặc biệt là ảnh hưởng của Minh Trị Duy Tân (Nhật Bản) và Cách mạng Tân Hợi (Trung Quốc, 1911), tầng lớp trí thức Việt Nam bắt đầu tiếp cận những tư tưởng dân chủ, tự do, khai sáng phương Tây. Từ đó xuất hiện hai phong trào tiêu biểu:
Phong trào Đông Du do Phan Bội Châu khởi xướng (1905 – 1909), chủ trương “cầu viện Nhật Bản” để học tập và chuẩn bị lực lượng vũ trang nhằm giành độc lập.


Phong trào Duy Tân do Phan Châu Trinh lãnh đạo, chủ trương “khai dân trí, chấn dân khí, hậu dân sinh”, đặt niềm tin vào cải cách xã hội và nâng cao dân quyền.


Tuy nhiên, cả hai khuynh hướng này đều sớm thất bại. Phan Bội Châu thất vọng khi Nhật Bản thỏa hiệp với Pháp, trong khi tư tưởng “ỷ ngoại viện” bộc lộ tính lệ thuộc. Phan Châu Trinh lại đặt quá nhiều niềm tin vào giới cầm quyền Pháp, trong khi thực dân chỉ muốn duy trì chế độ cai trị. Cả hai con đường đều không phù hợp với yêu cầu cách mạng dân tộc thuộc địa lúc bấy giờ.
Phong trào nông dân và khởi nghĩa vũ trang tự phát
Bên cạnh các phong trào do sĩ phu lãnh đạo, ở nông thôn còn diễn ra nhiều cuộc khởi nghĩa mang tính tự phát như Khởi nghĩa Yên Thế (1884 – 1913) do Hoàng Hoa Thám đứng đầu. Tuy thể hiện lòng yêu nước nồng nàn, nhưng các cuộc nổi dậy thiếu tổ chức, không có đường lối chính trị rõ ràng, nên cuối cùng cũng bị dập tắt.
Như vậy, từ cuối thế kỷ XIX đến đầu thế kỷ XX, các khuynh hướng cứu nước ở Việt Nam đều lần lượt thất bại. Dân tộc ta vẫn chưa tìm ra con đường đúng đắn để giành độc lập.
3. Nguyễn Ái Quốc và bước ngoặt lịch sử – Con đường cách mạng vô sản
Trước tình hình đó, Nguyễn Ái Quốc – người thanh niên yêu nước đầy nhiệt huyết – đã ra đi tìm đường cứu nước (5/6/1911). Sau nhiều năm bôn ba qua các châu lục, Người nhận thấy rằng:
“Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác con đường cách mạng vô sản.”
Khi tiếp xúc với Luận cương của Lênin về vấn đề dân tộc và thuộc địa (1920), Nguyễn Ái Quốc tìm thấy ánh sáng chân lý. Người gia nhập Quốc tế Cộng sản, tham gia thành lập Đảng Cộng sản Pháp, và truyền bá chủ nghĩa Mác – Lênin vào Việt Nam.
Năm 1930, dưới sự chủ trì của Nguyễn Ái Quốc, ba tổ chức cộng sản trong nước hợp nhất thành Đảng Cộng sản Việt Nam. Cương lĩnh đầu tiên do Người soạn thảo đã xác định rõ mục tiêu:
Làm tư sản dân quyền cách mạng và thổ địa cách mạng,


Để đi tới xã hội cộng sản,


Trọng tâm trước mắt là giành độc lập dân tộc, ruộng đất cho dân cày.


Đây chính là sự kết hợp sáng tạo giữa chủ nghĩa yêu nước truyền thống và chủ nghĩa Mác – Lênin, mở ra con đường cứu nước mới: Cách mạng vô sản – con đường duy nhất đúng đắn, phù hợp với xu thế phát triển của thời đại.
4. Ý nghĩa lịch sử và giá trị thời đại
Thắng lợi của Cách mạng Tháng Tám năm 1945 là minh chứng rõ ràng nhất cho sự đúng đắn của con đường này. Dưới sự lãnh đạo của Đảng Cộng sản và Chủ tịch Hồ Chí Minh, dân tộc Việt Nam đã giành lại độc lập sau gần một thế kỷ nô lệ, khai sinh nước Việt Nam Dân chủ Cộng hòa – nhà nước công nông đầu tiên ở Đông Nam Á.
Từ đó đến nay, tư tưởng về con đường cách mạng vô sản vẫn là ngọn đèn soi đường cho sự nghiệp bảo vệ và xây dựng đất nước. Nó khẳng định rằng: chỉ khi nhân dân thật sự làm chủ, khi độc lập dân tộc gắn liền với tự do, hạnh phúc của nhân dân, thì đất nước mới có thể phát triển bền vững.

3. Tư tưởng về Đảng Cộng sản – nhân tố quyết định thắng lợi của cách mạng

Tư Tưởng Về Đảng Cộng Sản – Nhân Tố Quyết Định Thắng Lợi Của Cách Mạng Việt Nam
1. Bối cảnh lịch sử hình thành tư tưởng về Đảng Cộng sản
Đầu thế kỷ XX, dân tộc Việt Nam rơi vào tình cảnh mất nước, chịu ách thống trị tàn bạo của thực dân Pháp. Các phong trào yêu nước nổ ra mạnh mẽ nhưng đều thất bại: từ khởi nghĩa Cần Vương, phong trào Đông Du đến cuộc vận động Duy Tân... Nguyên nhân chủ yếu là thiếu một đường lối đúng đắn và một tổ chức lãnh đạo thống nhất có đủ năng lực tập hợp quần chúng.
Trong bối cảnh đó, Nguyễn Ái Quốc – người thanh niên yêu nước Việt Nam – đã ra đi tìm đường cứu nước (1911) và đến với chủ nghĩa Mác – Lênin. Qua quá trình nghiên cứu lý luận và thực tiễn phong trào cách mạng quốc tế, Người nhận ra rằng: “Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác con đường cách mạng vô sản.”
Chính từ đây, tư tưởng về sự ra đời của Đảng Cộng sản Việt Nam – đội tiên phong của giai cấp công nhân và dân tộc – được hình thành.

2. Sự ra đời của Đảng Cộng sản – Bước ngoặt vĩ đại của cách mạng Việt Nam
Ngày 3 tháng 2 năm 1930, dưới sự chủ trì của Nguyễn Ái Quốc, ba tổ chức cộng sản ở Việt Nam (Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng và Đông Dương Cộng sản Liên đoàn) được hợp nhất thành Đảng Cộng sản Việt Nam.
Sự kiện này đánh dấu bước ngoặt lịch sử trọng đại trong tiến trình cách mạng Việt Nam – chấm dứt thời kỳ khủng hoảng về đường lối và tổ chức lãnh đạo, mở ra kỷ nguyên mới: kỷ nguyên độc lập dân tộc gắn liền với chủ nghĩa xã hội.
Từ đây, phong trào cách mạng Việt Nam có một đội ngũ lãnh đạo thống nhất, kiên định, mang bản chất cách mạng khoa học của giai cấp công nhân. Đảng không chỉ đấu tranh giành độc lập dân tộc mà còn hướng tới giải phóng xã hội, giải phóng con người.

3. Vai trò quyết định của Đảng trong các giai đoạn cách mạng
a. Lãnh đạo Cách mạng Tháng Tám 1945 – Giành độc lập dân tộc
Dưới sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh, nhân dân ta đã làm nên Cách mạng Tháng Tám năm 1945, đập tan ách thống trị của thực dân, phong kiến, lập nên nước Việt Nam Dân chủ Cộng hòa – Nhà nước công nông đầu tiên ở Đông Nam Á.
 Đây là minh chứng hùng hồn cho năng lực lãnh đạo và đường lối đúng đắn của Đảng Cộng sản Việt Nam.
b. Kháng chiến chống thực dân, đế quốc – Giữ vững nền độc lập
Trong hai cuộc kháng chiến trường kỳ chống Pháp và chống Mỹ, Đảng đã đề ra chiến lược “toàn dân, toàn diện, lâu dài và tự lực cánh sinh”, lãnh đạo nhân dân giành hết thắng lợi này đến thắng lợi khác:
Chiến thắng Điện Biên Phủ (1954) “lừng lẫy năm châu, chấn động địa cầu”.


Đại thắng mùa Xuân năm 1975, giải phóng hoàn toàn miền Nam, thống nhất đất nước.


c. Lãnh đạo công cuộc đổi mới và hội nhập quốc tế
Từ Đại hội VI (1986), Đảng khởi xướng đường lối đổi mới toàn diện, đưa đất nước thoát khỏi khủng hoảng kinh tế – xã hội, tiến vào thời kỳ công nghiệp hóa, hiện đại hóa và hội nhập sâu rộng với thế giới.
 Những thành tựu to lớn trong phát triển kinh tế, văn hóa, xã hội, quốc phòng và đối ngoại trong gần 40 năm đổi mới tiếp tục khẳng định vai trò lãnh đạo sáng suốt của Đảng Cộng sản Việt Nam.

4. Bản chất và sức mạnh của Đảng – Nhân tố quyết định mọi thắng lợi
Sức mạnh và uy tín của Đảng bắt nguồn từ:
Bản chất cách mạng, khoa học của chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh.


Sự gắn bó mật thiết với nhân dân, luôn lấy lợi ích của nhân dân làm mục tiêu cao nhất.


Khả năng tự đổi mới, tự chỉnh đốn, giữ vững nguyên tắc tập trung dân chủ, kỷ luật nghiêm minh.


Đội ngũ cán bộ, đảng viên trung kiên, tận tụy, giàu lý tưởng, luôn đặt lợi ích dân tộc lên trên hết.


Chính vì vậy, trong suốt hơn 95 năm lãnh đạo cách mạng, Đảng Cộng sản Việt Nam luôn là nhân tố quyết định thắng lợi của mọi giai đoạn lịch sử, dẫn dắt dân tộc ta đi từ thắng lợi này đến thắng lợi khác.

5. Kết luận
Tư tưởng về vai trò lãnh đạo của Đảng Cộng sản là kết tinh của trí tuệ dân tộc và thời đại. Thực tiễn lịch sử đã chứng minh: chỉ có Đảng Cộng sản Việt Nam – với đường lối đúng đắn, bản lĩnh kiên cường và lòng trung thành tuyệt đối với Tổ quốc, nhân dân – mới đủ sức lãnh đạo dân tộc ta giành độc lập, thống nhất và phát triển bền vững.
Trong bối cảnh mới của thế kỷ XXI, việc kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội, đồng thời xây dựng Đảng trong sạch, vững mạnh là điều kiện tiên quyết để tiếp tục đưa đất nước Việt Nam phát triển phồn vinh, hạnh phúc.

4. Tư tưởng kết hợp độc lập dân tộc với chủ nghĩa xã hội 
Tư Tưởng Kết Hợp Độc Lập Dân Tộc Với Chủ Nghĩa Xã Hội – Ngọn Cờ Dẫn Đường Cách Mạng Việt Nam
1. Bối cảnh lịch sử và cơ sở hình thành tư tưởng
Cuối thế kỷ XIX, đầu thế kỷ XX, Việt Nam bị thực dân Pháp xâm lược, đất nước rơi vào cảnh nô lệ. Hàng loạt phong trào yêu nước nổ ra nhưng đều thất bại, bởi chưa có một đường lối đúng đắn, chưa xác định rõ con đường phát triển cho dân tộc sau khi giành độc lập.
 Các sĩ phu yêu nước như Phan Bội Châu, Phan Châu Trinh tuy có lòng nồng nàn với nước, song tư tưởng cứu nước của họ vẫn nằm trong giới hạn của ý thức hệ phong kiến hoặc tư sản, không thể đưa dân tộc thoát khỏi kiếp thuộc địa.
Trong hoàn cảnh đó, Nguyễn Ái Quốc – sau khi ra đi tìm đường cứu nước (1911) – đã tìm thấy ở chủ nghĩa Mác – Lênin câu trả lời đúng đắn cho vận mệnh dân tộc: Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác con đường cách mạng vô sản.
Từ đây, Người hình thành tư tưởng kết hợp độc lập dân tộc với chủ nghĩa xã hội – một sự thống nhất biện chứng giữa mục tiêu giải phóng dân tộc và mục tiêu giải phóng giai cấp, con người.

2. Nội dung cơ bản của tư tưởng kết hợp độc lập dân tộc với chủ nghĩa xã hội
a. Độc lập dân tộc là điều kiện tiên quyết
Theo Hồ Chí Minh, độc lập dân tộc là quyền thiêng liêng, bất khả xâm phạm của mọi dân tộc. Không có độc lập, thì mọi giá trị xã hội khác đều vô nghĩa. Người khẳng định:
“Không có gì quý hơn độc lập, tự do.”
Tuy nhiên, Hồ Chí Minh không xem độc lập dân tộc là đích cuối cùng, mà là bước đi đầu tiên để nhân dân làm chủ vận mệnh của mình, tiến tới xây dựng một xã hội công bằng, hạnh phúc.
b. Chủ nghĩa xã hội là mục tiêu cuối cùng của cách mạng
Hồ Chí Minh nhận định: Sau khi giành được độc lập, nếu không xây dựng xã hội mới – xã hội không còn người bóc lột người – thì nhân dân vẫn chưa thật sự tự do, hạnh phúc.
 Do đó, giải phóng dân tộc phải gắn liền với giải phóng giai cấp, và giải phóng con người. Con đường phát triển của dân tộc Việt Nam chỉ có thể là độc lập dân tộc gắn liền với chủ nghĩa xã hội.
c. Mối quan hệ biện chứng giữa hai mục tiêu
Tư tưởng Hồ Chí Minh không tách rời hai nhiệm vụ này, mà coi chúng là hai mặt của một quá trình thống nhất:
Độc lập dân tộc là tiền đề để xây dựng chủ nghĩa xã hội.


Chủ nghĩa xã hội là con đường bảo đảm vững chắc cho nền độc lập dân tộc.


Như vậy, độc lập dân tộc là mục tiêu trước mắt, còn chủ nghĩa xã hội là mục tiêu lâu dài, nhưng hai mục tiêu ấy gắn bó hữu cơ và thúc đẩy lẫn nhau.

3. Ý nghĩa thực tiễn trong các giai đoạn cách mạng Việt Nam
a. Trong Cách mạng Tháng Tám năm 1945
Dưới sự lãnh đạo của Đảng Cộng sản Việt Nam do Hồ Chí Minh sáng lập, mục tiêu độc lập dân tộc được đặt lên hàng đầu, kết hợp với mục tiêu giải phóng giai cấp công nông.
 Cách mạng Tháng Tám thành công là minh chứng rõ ràng cho đường lối kết hợp độc lập dân tộc với chủ nghĩa xã hội – khi giai cấp công nhân lãnh đạo toàn dân đứng lên giành chính quyền.
b. Trong hai cuộc kháng chiến chống Pháp và chống Mỹ
Đảng ta đã kiên trì thực hiện tư tưởng Hồ Chí Minh: “Vừa kháng chiến, vừa kiến quốc.”
 Trong khi chiến đấu bảo vệ độc lập dân tộc, đất nước vẫn tiến hành xây dựng những yếu tố xã hội chủ nghĩa, củng cố khối đại đoàn kết toàn dân, phát triển văn hóa, giáo dục, y tế, nông thôn mới…
 Thắng lợi mùa Xuân năm 1975 không chỉ là thắng lợi của khát vọng độc lập, mà còn là bước tiến lớn trên con đường đi lên chủ nghĩa xã hội.
c. Trong thời kỳ đổi mới và hội nhập quốc tế
Từ Đại hội VI (1986) đến nay, Đảng Cộng sản Việt Nam tiếp tục kiên định con đường độc lập dân tộc gắn liền với chủ nghĩa xã hội, đồng thời linh hoạt vận dụng trong điều kiện mới:
Giữ vững chủ quyền quốc gia, toàn vẹn lãnh thổ.


Đổi mới kinh tế theo định hướng xã hội chủ nghĩa.


Chủ động hội nhập quốc tế, nhưng vẫn bảo đảm bản sắc và lợi ích dân tộc.



4. Giá trị lý luận và ý nghĩa thời đại
Tư tưởng kết hợp độc lập dân tộc với chủ nghĩa xã hội của Hồ Chí Minh là một đóng góp vĩ đại vào kho tàng lý luận cách mạng thế giới. Nó khẳng định:
Con đường phát triển đúng đắn của dân tộc thuộc địa là giải phóng dân tộc gắn với con đường xã hội chủ nghĩa.


Sự nghiệp cách mạng chỉ thành công khi kết hợp được lợi ích dân tộc và lợi ích giai cấp, lợi ích quốc gia và lợi ích nhân dân.


Trong bối cảnh toàn cầu hóa hiện nay, tư tưởng ấy vẫn giữ nguyên giá trị định hướng:
 Xây dựng đất nước “dân giàu, nước mạnh, dân chủ, công bằng, văn minh” chính là hiện thực hóa mục tiêu kết hợp độc lập dân tộc với chủ nghĩa xã hội trong thời đại mới.

5. Kết luận
Tư tưởng kết hợp độc lập dân tộc với chủ nghĩa xã hội là ngọn cờ dẫn đường cho mọi thắng lợi của cách mạng Việt Nam.
 Đó là sự thống nhất giữa truyền thống yêu nước của dân tộc với lý tưởng cách mạng của giai cấp công nhân, là ánh sáng soi đường cho dân tộc Việt Nam đi tới tương lai tươi sáng.
Trong bất kỳ giai đoạn nào, kiên định con đường ấy vẫn là lựa chọn duy nhất đúng đắn để đất nước phát triển bền vững, nhân dân được ấm no, hạnh phúc.


            
            CÂU HỎI CỦA NGƯỜI DÙNG: 
            
            HƯỚNG DẪN TRẢ LỜI:
            - Nếu câu hỏi ngoài phạm vi %s: "Xin lỗi, tôi chỉ hỗ trợ câu hỏi về %s."
            - Nếu không biết: "Xin lỗi, tôi không có kiến thức về nội dung này."
            - Trả lời ngắn gọn, dễ hiểu, có ví dụ thực tiễn.
            - Khuyến khích tinh thần học tập và đạo đức.
            - Trả lời duy nhất trên 1 dòng, không được chứa ký tự xuống dòng (newline)." 
    `,
  },
];

const Information = () => {
  return (
    <div className="information-page">
      <div className="info-content-container fade-in-section">
        <section className="team-section">
          <h3 className="info-sub-title">VNR202 Nhóm 7</h3>

          <table className="team-table">
            <thead>
              <tr>
                <th>MSSV</th>
                <th>Họ Tên</th>
                <th>Vai trò</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id}>
                  <td>{member.studentId}</td>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="ai-tools-section">
          <h3 className="info-sub-title">Tool AI</h3>
          <div className="info-ai-list">
            {aiTools.map((tool) => (
              <div key={tool.id} className="info-ai-card">
                <h4 className="info-tool-name">{tool.name}</h4>
                <p className="info-tool-description">{tool.description}</p>
                <div className="info-prompt-example">
                  <h5>Prompt:</h5>
                  <pre>
                    <code>{tool.promptExample.trim()}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Information;
