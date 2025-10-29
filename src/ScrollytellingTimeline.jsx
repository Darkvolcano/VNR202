import { useState, useEffect, useRef } from "react";

const timelineData = [
  // --- CHƯƠNG 1: BỐI CẢNH VÀ MẦM MỐNG (1890 - 1911) ---
  {
    id: 1,
    chapter: "Chương 1: Bối cảnh và Mầm mống",
    year: "1890",
    title: "Nguyễn Sinh Cung ra đời",
    description:
      "Ngày 19/05/1890, tại Làng Sen, Kim Liên, Nam Đàn, Nghệ An, Nguyễn Sinh Cung cất tiếng khóc chào đời. Đất nước lúc này đang chìm trong đêm dài nô lệ của thực dân Pháp sau Hiệp ước Patenôtre (1884). Các phong trào Cần Vương, khởi nghĩa Yên Thế dù kiên cường nhưng đều thất bại. Bối cảnh này đã tác động sâu sắc đến tư tưởng của Người.",
    image: "https://via.placeholder.com/800x600/333/fff?text=Làng+Sen+(1890)", //
  },
  {
    id: 2,
    chapter: "Chương 1: Bối cảnh và Mầm mống",
    year: "1905 - 1910",
    title: "Tiếp xúc Tân thư và Quyết định",
    description:
      "Trong những năm tháng học tại Huế và Phan Thiết, Nguyễn Tất Thành đã tiếp xúc với các tư tưởng 'Tân thư' từ Trung Quốc và Nhật Bản. Người nhận ra con đường của các bậc tiền bối như Phan Bội Châu (dựa vào Nhật) hay Phan Chu Trinh (cải cách) đều không triệt để. Người quyết định phải đi sang Phương Tây, đến tận 'nước mẹ' để xem 'Tự do, Bình đẳng, Bác ái' thực sự là gì.",
    image:
      "https://via.placeholder.com/800x600/444/fff?text=Trường+Dục+Thanh+(1910)", //
  },
  {
    id: 3,
    chapter: "Chương 1: Bối cảnh và Mầm mống",
    year: "1911",
    title: "Bến Nhà Rồng: Chân trời mới",
    description:
      "Ngày 05/06/1911, với cái tên Văn Ba, Người làm phụ bếp trên con tàu Amiral Latouche-Tréville, rời Bến cảng Nhà Rồng. Đây là bước ngoặt vĩ đại, bắt đầu hành trình 30 năm bôn ba tìm đường cứu nước, giải phóng dân tộc. Người đi với hai bàn tay trắng, nhưng với một ý chí phi thường và một trái tim rực lửa yêu nước.",
    image:
      "https://via.placeholder.com/800x600/555/fff?text=Bến+Nhà+Rồng+(1911)", //
  },

  // --- CHƯƠNG 2: HÀNH TRÌNH TÌM ĐƯỜNG (1911 - 1920) ---
  {
    id: 4,
    chapter: "Chương 2: Hành trình Tìm đường",
    year: "1912 - 1917",
    title: "Khảo sát thực tiễn tại Mỹ, Anh",
    description:
      "Người không dừng lại ở Pháp. Người đến Hoa Kỳ (1912), làm việc tại Boston, New York. Người đến Anh (1913-1917), làm cào tuyết, phụ bếp. Những năm tháng này giúp Người hiểu rõ bản chất của chủ nghĩa tư bản, thấy được sự tương phản giàu nghèo và tình cảnh của giai cấp công nhân, đặt nền móng cho tư tưởng quốc tế vô sản.",
    image:
      "https://via.placeholder.com/800x600/666/fff?text=Boston,+USA+(1912)", //
  },
  {
    id: 5,
    chapter: "Chương 2: Hành trình Tìm đường",
    year: "1919",
    title: "Yêu sách của nhân dân An Nam",
    description:
      "Chiến tranh Thế giới I kết thúc. Lấy tên Nguyễn Ái Quốc, Người cùng các nhà yêu nước Việt Nam tại Pháp gửi 'Yêu sách của nhân dân An Nam' đến Hội nghị Vécxây. Bản yêu sách bị phớt lờ, nhưng đã gióng lên hồi chuông cảnh tỉnh, và giúp Người nhận ra: 'Muốn được giải phóng, các dân tộc chỉ có thể trông cậy vào chính mình'.",
    image:
      "https://via.placeholder.com/800x600/777/fff?text=Hội+nghị+Versailles+(1919)", //
  },
  {
    id: 6,
    chapter: "Chương 2: Hành trình Tìm đường",
    year: "1920",
    title: "Bước ngoặt: Tìm thấy Luận cương Lênin",
    description:
      "Tháng 07/1920, Người đọc 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa' của Lênin. Luận cương đã giải đáp câu hỏi Người hằng tìm kiếm. Người vui mừng, xúc động: 'Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!'",
    image:
      "https://via.placeholder.com/800x600/888/fff?text=Báo+L'Humanité+(1920)", //
  },
  {
    id: 7,
    chapter: "Chương 2: Hành trình Tìm đường",
    year: "1920 (Tháng 12)",
    title: "Đại hội Tours - Sáng lập Đảng Cộng sản Pháp",
    description:
      "Tại Đại hội Đảng Xã hội Pháp ở Tours, Nguyễn Ái Quốc đã bỏ phiếu tán thành gia nhập Quốc tế Cộng sản (Quốc tế III) và trở thành một trong những người sáng lập Đảng Cộng sản Pháp. Đây là sự kiện lịch sử, đánh dấu bước chuyển từ chủ nghĩa yêu nước sang chủ nghĩa cộng sản.",
    image:
      "https://via.placeholder.com/800x600/999/fff?text=Đại+hội+Tours+(1920)", //
  },

  // --- CHƯƠNG 3: CHUẨN BỊ TƯ TƯỞNG VÀ TỔ CHỨC (1921 - 1929) ---
  {
    id: 8,
    chapter: "Chương 3: Chuẩn bị Tư tưởng và Tổ chức",
    year: "1921 - 1923",
    title: "Hoạt động tại Pháp - Báo Le Paria",
    description:
      "Người sáng lập 'Hội Liên hiệp Thuộc địa' và ra tờ báo 'Le Paria' (Người cùng khổ) để vạch trần tội ác của chủ nghĩa thực dân. Người viết tác phẩm 'Bản án chế độ thực dân Pháp'. Đây là giai đoạn Người tích cực truyền bá chủ nghĩa Mác-Lênin vào các thuộc địa.",
    image:
      "https://via.placeholder.com/800x600/AAA/fff?text=Báo+Le+Paria+(1922)", //
  },
  {
    id: 9,
    chapter: "Chương 3: Chuẩn bị Tư tưởng và Tổ chức",
    year: "1923 - 1924",
    title: "Hoạt động tại Liên Xô",
    description:
      "Người đến Liên Xô, quê hương của Cách mạng Tháng Mười. Người học tập tại Trường Đại học Lao động Cộng sản Phương Đông và tham dự Đại hội V Quốc tế Cộng sản. Người trình bày rõ quan điểm về vai trò của cách mạng thuộc địa đối với cách mạng vô sản thế giới.",
    image: "https://via.placeholder.com/800x600/BBB/fff?text=Moscow+(1923)", //
  },
  {
    id: 10,
    chapter: "Chương 3: Chuẩn bị Tư tưởng và Tổ chức",
    year: "1925",
    title: "Sáng lập Hội Việt Nam Cách mạng Thanh niên",
    description:
      "Tại Quảng Châu (Trung Quốc), Người thành lập 'Hội Việt Nam Cách mạng Thanh niên' (hay Thanh niên). Đây là tổ chức tiền thân thực sự của Đảng, với nòng cốt là 'Cộng sản Đoàn'. Người trực tiếp mở các lớp huấn luyện chính trị, đào tạo cán bộ cốt cán.",
    image: "https://via.placeholder.com/800x600/CCC/fff?text=Quảng+Châu+(1925)", //
  },
  {
    id: 11,
    chapter: "Chương 3: Chuẩn bị Tư tưởng và Tổ chức",
    year: "1927",
    title: "Tác phẩm 'Đường Kách mệnh'",
    description:
      "Cuốn sách 'Đường Kách mệnh', tập hợp các bài giảng của Người, được xuất bản. Tác phẩm vạch rõ con đường cách mạng giải phóng dân tộc phải gắn liền với chủ nghĩa xã hội, và cách mạng là sự nghiệp của quần chúng, nòng cốt là liên minh công-nông.",
    image:
      "https://via.placeholder.com/800x600/DDD/fff?text=Đường+Kách+Mệnh+(1927)", //
  },
  {
    id: 12,
    chapter: "Chương 3: Chuẩn bị Tư tưởng và Tổ chức",
    year: "1929",
    title: "Sự ra đời của 3 Tổ chức Cộng sản",
    description:
      "Phong trào 'vô sản hóa' phát triển mạnh. Hội VNCM Thanh niên phân hóa, dẫn đến sự ra đời của 3 tổ chức cộng sản: Đông Dương Cộng sản Đảng (Bắc Kỳ), An Nam Cộng sản Đảng (Nam Kỳ), và Đông Dương Cộng sản Liên đoàn (Trung Kỳ). Thực tiễn này đặt ra yêu cầu cấp bách phải thống nhất các lực lượng.",
    image:
      "https://via.placeholder.com/800x600/EEE/fff?text=Ba+tổ+chức+CS+(1929)", //
  },

  // --- CHƯƠNG 4: THÀNH LẬP ĐẢNG VÀ THỬ LỬA (1930 - 1935) ---
  {
    id: 13,
    chapter: "Chương 4: Thành lập Đảng và Thử lửa",
    year: "03/02/1930",
    title: "HỘI NGHỊ THÀNH LẬP ĐẢNG",
    description:
      "Từ 06/01 đến 03/02/1930, tại Cửu Long (Hồng Kông), Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất. Hội nghị thành lập Đảng Cộng sản Việt Nam, thông qua 'Chánh cương vắn tắt', 'Sách lược vắn tắt' - Cương lĩnh chính trị đầu tiên. Đây là sự kiện trọng đại, chấm dứt khủng hoảng đường lối, là bước ngoặt vĩ đại của cách mạng Việt Nam.",
    image:
      "https://via.placeholder.com/800x600/E53935/fff?text=Thành+lập+Đảng+(1930)", //
  },
  {
    id: 14,
    chapter: "Chương 4: Thành lập Đảng và Thử lửa",
    year: "1930 - 1931",
    title: "Cao trào Xô viết Nghệ - Tĩnh",
    description:
      "Dưới sự lãnh đạo của Đảng, phong trào đấu tranh bùng nổ, đỉnh cao là Xô viết Nghệ - Tĩnh. Lần đầu tiên, chính quyền công nông được thành lập ở cấp xã, thôn. Dù bị đàn áp đẫm máu, đây là cuộc tổng diễn tập đầu tiên, khẳng định vai trò lãnh đạo của Đảng và liên minh công-nông.",
    image:
      "https://via.placeholder.com/800x600/D32F2F/fff?text=Xô+viết+Nghệ+Tĩnh+(1930)", //
  },
  {
    id: 15,
    chapter: "Chương 4: Thành lập Đảng và Thử lửa",
    year: "1931 - 1933",
    title: "Nguyễn Ái Quốc bị bắt tại Hồng Kông",
    description:
      "Sau cao trào 1930-1931, thực dân Pháp khủng bố trắng. Ngày 06/06/1931, Nguyễn Ái Quốc bị bắt tại Hồng Kông. Nhờ sự giúp đỡ của luật sư Lôdơbi, Người được thả tự do. Đây là một cuộc đấu trí pháp lý gay cấn, thể hiện bản lĩnh của Người ngay cả trong tù.",
    image:
      "https://via.placeholder.com/800x600/B71C1C/fff?text=Tù+Hồng+Kông+(1931)", //
  },
  {
    id: 16,
    chapter: "Chương 4: Thành lập Đảng và Thử lửa",
    year: "1935",
    title: "Đại hội I của Đảng tại Ma Cao",
    description:
      "Tổ chức Đảng dần hồi phục. Đại hội I được tổ chức tại Ma Cao (Trung Quốc), bầu ra Ban Chấp hành Trung ương chính thức, do Lê Hồng Phong làm Tổng Bí thư. Đại hội củng cố hệ thống tổ chức của Đảng từ Trung ương đến địa phương, chuẩn bị cho một thời kỳ đấu tranh mới.",
    image:
      "https://via.placeholder.com/800x600/A01A1A/fff?text=Đại+hội+I+-+Ma+Cao+(1935)", //
  },

  // --- CHƯƠNG 5: ĐẤU TRANH DÂN CHỦ VÀ VẬN ĐỘNG (1936 - 1941) ---
  {
    id: 17,
    chapter: "Chương 5: Đấu tranh Dân chủ và Vận động",
    year: "1936 - 1939",
    title: "Mặt trận Dân chủ Đông Dương",
    description:
      "Bối cảnh: Mặt trận Bình dân Pháp lên cầm quyền. Đảng chớp thời cơ, chuyển hướng đấu tranh, thành lập 'Mặt trận Dân chủ Đông Dương'. Mục tiêu là đòi tự do, dân chủ, cơm áo, hòa bình. Đây là giai đoạn Đảng kết hợp tài tình đấu tranh công khai, hợp pháp trên nghị trường, báo chí.",
    image:
      "https://via.placeholder.com/800x600/C62828/fff?text=Đấu+tranh+báo+chí+(1936)", //
  },
  {
    id: 18,
    chapter: "Chương 5: Đấu tranh Dân chủ và Vận động",
    year: "1939",
    title: "Thế chiến II bùng nổ - Chuyển hướng chiến lược",
    description:
      "Tháng 09/1939, Thế chiến II bùng nổ. Pháp đầu hàng Đức. Tại Đông Dương, Pháp tăng cường đàn áp. Đảng rút vào hoạt động bí mật. Hội nghị Trung ương 6 (11/1939) quyết định chuyển hướng chiến lược, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.",
    image:
      "https://via.placeholder.com/800x600/B71C1C/fff?text=Thế+chiến+II+(1939)", //
  },
  {
    id: 19,
    chapter: "Chương 5: Đấu tranh Dân chủ và Vận động",
    year: "1940",
    title: "Khởi nghĩa Bắc Sơn và Nam Kỳ",
    description:
      "Nhật vào Đông Dương. Các cuộc khởi nghĩa nổ ra: Bắc Sơn (09/1940) và Nam Kỳ (11/1940). Dù thất bại, các cuộc khởi nghĩa đã để lại bài học xương máu, là 'những tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc', và lá cờ đỏ sao vàng lần đầu xuất hiện trong khởi nghĩa Nam Kỳ.",
    image:
      "https://via.placeholder.com/800x600/D32F2F/fff?text=Khởi+nghĩa+Nam+Kỳ+(1940)", //
  },

  // --- CHƯƠNG 6: TIẾN TỚI TỔNG KHỞI NGHĨA (1941 - 1945) ---
  {
    id: 20,
    chapter: "Chương 6: Tiến tới Tổng khởi nghĩa",
    year: "28/01/1941",
    title: "NGUYỄN ÁI QUỐC VỀ NƯỚC",
    description:
      "Sau 30 năm bôn ba, ngày 28/01/1941, Người trở về Tổ quốc tại Pác Bó, Cao Bằng. Người nói: 'Non xa xa, nước xa xa...'. Người trực tiếp lãnh đạo cách mạng. Sự kiện này là một cột mốc trọng đại, trực tiếp chuẩn bị cho thắng lợi vĩ đại của Cách mạng tháng Tám.",
    image: "https://via.placeholder.com/800x600/E53935/fff?text=Pác+Bó+(1941)", //
  },
  {
    id: 21,
    chapter: "Chương 6: Tiến tới Tổng khởi nghĩa",
    year: "05/1941",
    title: "Hội nghị Trung ương 8 - Thành lập Việt Minh",
    description:
      "Người chủ trì Hội nghị Trung ương 8 tại Pác Bó. Hội nghị hoàn chỉnh chuyển hướng chiến lược, giương cao ngọn cờ giải phóng dân tộc. Hội nghị quyết định thành lập 'Mặt trận Việt Nam Độc lập Đồng minh' (Việt Minh), xây dựng căn cứ địa, chuẩn bị khởi nghĩa vũ trang.",
    image:
      "https://via.placeholder.com/800x600/F44336/fff?text=Mặt+trận+Việt+Minh+(1941)", //
  },
  {
    id: 22,
    chapter: "Chương 6: Tiến tới Tổng khởi nghĩa",
    year: "22/12/1944",
    title: "Thành lập Đội VNTT Giải phóng quân",
    description:
      "Theo chỉ thị của Hồ Chí Minh, Đội Việt Nam Tuyên truyền Giải phóng quân (tiền thân của QĐND Việt Nam) được thành lập, do đồng chí Võ Nguyên Giáp chỉ huy. Đội quân lập tức chiến thắng Phay Khắt, Nà Ngần, mở ra truyền thống 'trăm trận trăm thắng'.",
    image:
      "https://via.placeholder.com/800x600/E53935/fff?text=Võ+Nguyên+Giáp+(1944)", //
  },
  {
    id: 23,
    chapter: "Chương 6: Tiến tới Tổng khởi nghĩa",
    year: "09/03/1945",
    title: "Nhật đảo chính Pháp - Thời cơ đến!",
    description:
      "Nhật bất ngờ đảo chính Pháp, độc chiếm Đông Dương. Ngay lập tức, Ban Thường vụ Trung ương Đảng ra Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta', phát động cao trào kháng Nhật cứu nước mạnh mẽ, làm tiền đề cho Tổng khởi nghĩa.",
    image:
      "https://via.placeholder.com/800x600/D32F2F/fff?text=Nhật+đảo+chính+(1945)", //
  },
  {
    id: 24,
    chapter: "Chương 6: Tiến tới Tổng khởi nghĩa",
    year: "Tháng 8/1945",
    title: "CÁCH MẠNG THÁNG TÁM - 'NGÀN NĂM CÓ MỘT'",
    description:
      "Nhật đầu hàng Đồng minh. Chớp thời cơ 'ngàn năm có một', Đảng phát động Toàn quốc Tổng khởi nghĩa. Từ ngày 14 đến 28/8, chỉ trong 15 ngày, nhân dân cả nước đã vùng lên giành chính quyền. Ngày 19/8, khởi nghĩa thắng lợi tại Hà Nội.",
    image:
      "https://via.placeholder.com/800x600/B71C1C/fff?text=Tổng+khởi+nghĩa+(19/08/1945)", //
  },
  {
    id: 25,
    chapter: "Chương 6: Tiến tới Tổng khởi nghĩa",
    year: "02/09/1945",
    title: "KHAI SINH NƯỚC VIỆT NAM DÂN CHỦ CỘNG HÒA",
    description:
      "Tại Quảng trường Ba Đình, Hà Nội, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc Tuyên ngôn Độc lập, long trọng tuyên bố với thế giới: Nước Việt Nam Dân chủ Cộng hòa ra đời. Đây là thắng lợi vĩ đại, kết thúc vẻ vang 15 năm lãnh đạo của Đảng (1930-1945) và 80 năm nô lệ của dân tộc.",
    image:
      "https://via.placeholder.com/800x600/C62828/fff?text=Tuyên+ngôn+Độc+lập+(02/09/1945)", //
  },
];

// Component con cho mỗi Section
const TimelineSection = ({ data, isActive, refProp }) => {
  return (
    <div
      ref={refProp}
      className={`timeline-section ${isActive ? "active" : ""}`}
      data-id={data.id}
    >
      <div className="chapter-title">{data.chapter}</div>
      <div className="year">{data.year}</div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

// Component chính
const ScrollytellingTimeline = () => {
  const [activeImage, setActiveImage] = useState(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveId = null;
      let minTop = Infinity;

      sectionRefs.current.forEach((ref) => {
        if (ref) {
          const { top } = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Tìm section nào đang ở gần top viewport nhất
          // (Trong khoảng từ 0 đến 50% chiều cao màn hình)
          if (top >= -100 && top <= windowHeight * 0.5) {
            if (top < minTop) {
              minTop = top;
              currentActiveId = parseInt(ref.getAttribute("data-id"));
            }
          }
        }
      });

      if (currentActiveId) {
        const activeData = timelineData.find((d) => d.id === currentActiveId);
        setActiveImage(activeData);
      } else {
        // Nếu không có section nào active (ví dụ đầu trang)
        // Bạn có thể set một ảnh mặc định hoặc null
        // Ở đây tôi set cái đầu tiên nếu scroll ở trên cùng
        const scrollTop = window.scrollY;
        if (scrollTop < 200) {
          setActiveImage(timelineData[0]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Chạy 1 lần lúc load để set ảnh đầu tiên

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline-content-scroll">
        {timelineData.map((item, index) => (
          <TimelineSection
            key={item.id}
            data={item}
            isActive={activeImage && activeImage.id === item.id}
            refProp={(el) => (sectionRefs.current[index] = el)}
          />
        ))}
      </div>

      <div className="timeline-sticky-image">
        <div
          className="placeholder-text"
          style={{ opacity: activeImage ? 0 : 1 }}
        >
          Cuộn để bắt đầu hành trình...
        </div>
        {timelineData.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            className={
              activeImage && activeImage.id === item.id ? "active" : ""
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollytellingTimeline;
