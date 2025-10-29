import { useState, useEffect, useRef } from "react";

const part2Data = [
  {
    id: 1,
    title: "1. Hải trình của nhận thức (1911 - 1917)",
    content:
      "Ngày 5 tháng 6 năm 1911, người thanh niên Nguyễn Tất Thành, với cái tên mới là Văn Ba, lên con tàu Amiral Latouche-Tréville bắt đầu hành trình vạn dặm. Khác với các bậc tiền bối, Người không ra đi để cầu viện hay tìm một mô hình dân chủ tư sản có sẵn. Mục đích của Người thực tế hơn: 'Xem nước Pháp và các nước khác. Sau khi xem xét họ làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta'. Hành trang của Người chỉ có lòng yêu nước và khát vọng tự do. Những năm tháng lênh đênh trên biển, đặt chân đến các cảng ở Châu Phi (Algérie, Congo, Dahomey...) và Châu Mỹ (New York, Boston) đã mở ra một 'trường đại học thực tiễn' tàn khốc. Khi làm việc ở khu Harlem (New York) hay cào tuyết ở London, Người tận mắt chứng kiến hai điều cốt lõi: sự tương phản giàu nghèo và bản chất của chủ nghĩa đế quốc. Nhận thức này đã vượt lên trên lòng yêu nước dân tộc thông thường. Người hiểu rằng, kẻ thù không phải là 'người Pháp' hay 'người da trắng', mà là một hệ thống áp bức toàn cầu. Từ đó, tình yêu nước của Người đã hòa quyện với tình cảm quốc tế vô sản.",
    image:
      "https://cly.1cdn.vn/2016/09/01/congly-vn_amiral-latouche-trc3a9ville.jpg",
    caption:
      "Tàu Amiral Latouche-Tréville, con tàu đưa Người rời Tổ quốc năm 1911.",
  },
  {
    id: 2,
    title: "2. Cú sốc Versailles và sự vỡ mộng (1917 - 1919)",
    content:
      "Năm 1917, Nguyễn Tất Thành trở lại Paris, trung tâm chính trị nóng bỏng của châu Âu sau Thế chiến I. Người tích cực tham gia các diễn đàn chính trị, gia nhập Đảng Xã hội Pháp. Đây là lúc 'Hội nghị Hòa bình Versailles' (1919) diễn ra, và Tổng thống Mỹ Woodrow Wilson đang rao giảng học thuyết '14 điểm' về quyền tự quyết của các dân tộc. Mang trong mình niềm hy vọng vào 'công lý' của các cường quốc, Người lấy tên mới là Nguyễn Ái Quốc (Nguyễn - Người yêu nước) và thay mặt những người Việt Nam tại Pháp, gửi đến hội nghị 'Bản yêu sách của nhân dân An Nam'. Bản yêu sách 8 điểm này không đòi độc lập ngay, mà chỉ đòi hỏi những quyền tự do dân chủ cơ bản. Kết quả: Không một ai trả lời. Các cường quốc mải mê chia chác lợi ích thuộc địa. Bản yêu sách bị phớt lờ hoàn toàn. Versailles là một cú sốc lớn, một bài học đắt giá. Nguyễn Ái Quốc vỡ mộng hoàn toàn. Người hiểu ra một chân lý phũ phàng: Không thể trông chờ vào lòng tốt hay những lời hứa 'tự do, bình đẳng' của chủ nghĩa đế quốc. Muốn giải phóng, các dân tộc thuộc địa phải tự dựa vào sức mình.",
    image:
      "https://file3.qdnd.vn/data/images/0/2021/06/02/vanphong/cmt cua ct hcm tai phap.jpg?dpi=150&quality=100&w=1920",
    caption: "Thẻ căn cước của Nguyễn Ái Quốc tại Pháp, khoảng năm 1919.",
  },
  {
    id: 3,
    title: "3. Ánh sáng từ Phương Đông: Luận cương Lênin (Tháng 7/1920)",
    content:
      "Chính trong lúc bế tắc và thất vọng nhất về con đường dân chủ tư sản, Nguyễn Ái Quốc đã nghe thấy tiếng vang của Cách mạng Tháng Mười Nga (1917). Trong nội bộ Đảng Xã hội Pháp lúc này đang diễn ra cuộc tranh luận nảy lửa: Nên đi theo Quốc tế II (cải lương, thỏa hiệp) hay gia nhập Quốc tế III (Quốc tế Cộng sản) do Lênin sáng lập? Ban đầu, Nguyễn Ái Quốc tham gia tranh luận chỉ với một câu hỏi duy nhất: 'Quốc tế nào bênh vực các dân tộc thuộc địa?' Và câu trả lời đã đến vào tháng 7 năm 1920. Khi đọc được 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa' của Lênin trên báo L'Humanité, một ánh sáng đã bừng lên. Lần đầu tiên, có một nhà lãnh đạo cách mạng vĩ đại chỉ ra mối liên hệ trực tiếp: cuộc đấu tranh giải phóng dân tộc ở thuộc địa chính là một bộ phận của cuộc cách mạng vô sản thế giới. Khoảnh khắc đó, Người đã tìm thấy chân lý. Nhiều năm sau, Người kể lại: 'Luận cương của Lênin làm cho tôi rất cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao! Tôi vui mừng đến phát khóc lên. Ngồi một mình trong buồng mà tôi nói to lên như đang nói trước quần chúng đông đảo: ‘Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!’'",
    image:
      "https://images.hcmcpv.org.vn/res/news/2021/07/06-07-2021-nguyen-ai-quoc-den-voi-luan-cuong-cua-lenin-buoc-ngoat-cua-cac-mang-viet-nam-C0F693EF-details.jpg?vs=06072021012844",
    caption:
      "Trang báo L'Humanité số ra ngày 16 tháng 7 năm 1920, đăng Luận cương của Lênin.",
  },
  {
    id: 4,
    title: "4. Lựa chọn dứt khoát (Tháng 12/1920)",
    content:
      "Nếu Luận cương Lênin là kim chỉ nam về tư tưởng, thì Đại hội Tours của Đảng Xã hội Pháp (tháng 12 năm 1920) là hành động chính trị dứt khoát. Tại Đại hội, với tư cách là đại biểu chính thức, Nguyễn Ái Quốc đã đứng về phía đa số, bỏ phiếu tán thành gia nhập Quốc tế Cộng sản (Quốc tế III). Người trở thành một trong những người sáng lập Đảng Cộng sản Pháp. Sự kiện này đánh dấu một bước ngoặt lịch sử. Bằng cách bỏ lá phiếu đó, Nguyễn Ái Quốc đã: Chọn con đường Cách mạng Vô sản, chọn lực lượng Giai cấp công nhân và nhân dân lao động, chọn hệ tư tưởng Chủ nghĩa Mác-Lênin. Người thanh niên yêu nước Nguyễn Tất Thành rời Bến Nhà Rồng năm 1911, sau một thập kỷ khảo nghiệm và đấu tranh, đã trở thành chiến sĩ cộng sản Nguyễn Ái Quốc. Con đường cứu nước đã được tìm thấy. Nhiệm vụ tiếp theo của Người là đưa 'con đường' ấy trở về với Tổ quốc.",
    image:
      "https://file3.qdnd.vn/data/images/0/2021/05/29/phucthang/06-hcm01.jpg?w=400",
    caption:
      "Đại biểu tham dự Đại hội Tours của Đảng Xã hội Pháp năm 1920. Nguyễn Ái Quốc đứng hàng đầu, thứ ba từ phải sang.",
  },
];

const Part2 = () => {
  const [activeId, setActiveId] = useState(part2Data[0].id);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let closestSectionId = part2Data[0].id;
      let minDistance = Infinity;
      const triggerLine = window.innerHeight * 0.4;

      sectionRefs.current.forEach((ref) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          if (top < window.innerHeight && bottom > 0) {
            const distance = Math.abs(top - triggerLine);
            if (distance < minDistance) {
              minDistance = distance;
              closestSectionId = parseInt(ref.getAttribute("data-id"));
            }
          }
        }
      });
      setActiveId(closestSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="phan2" className="content-section">
      <h2 className="section-title">Phần 2: Tìm Thấy Con Đường (1911-1920)</h2>
      <p className="section-sapo">
        Từ Văn Ba đến Nguyễn Ái Quốc: Mười năm (1911-1920) tìm thấy con đường
        cứu nước. Bắt đầu từ Bến Nhà Rồng năm 1911 với một hoài bão mơ hồ là
        "tìm đường cứu nước", người thanh niên Nguyễn Tất Thành đã bôn ba qua ba
        châu lục... và kết thúc vào năm 1920 tại Pháp, khi Người tìm thấy và lựa
        chọn dứt khoát con đường duy nhất có khả năng giải phóng dân tộc: Chủ
        nghĩa Mác-Lênin.
      </p>

      {part2Data.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`part2-section ${activeId === item.id ? "active" : ""}`}
          data-id={item.id}
        >
          <div className="part2-text-content">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
          <div className="part2-image-content">
            <img src={item.image} alt={item.title} />
            <p className="image-caption">{item.caption}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Part2;
