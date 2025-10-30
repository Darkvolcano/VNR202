const documentsData = [
  {
    id: 1,
    title: "Bản yêu sách của nhân dân An Nam (1919)",
    description:
      "Gửi đến Hội nghị Versailles, lần đầu tiên tên tuổi Nguyễn Ái Quốc xuất hiện, đòi các quyền tự do dân chủ cơ bản cho nhân dân Việt Nam.",
    image: "https://live.staticflickr.com/2911/14470215453_21df093d76.jpg",
  },
  {
    id: 2,
    title: "Bản án chế độ thực dân Pháp (1925)",
    description:
      "Tác phẩm lý luận kinh điển, vạch trần tội ác của chủ nghĩa thực dân, thức tỉnh các dân tộc thuộc địa đứng lên đấu tranh.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Le_Proc%C3%A8s_de_la_Colonisation_Fran%C3%A7aise.jpg/250px-Le_Proc%C3%A8s_de_la_Colonisation_Fran%C3%A7aise.jpg",
  },
  {
    id: 3,
    title: "Đường Kách mệnh (1927)",
    description:
      "Tập hợp các bài giảng tại Quảng Châu, vạch ra con đường, lực lượng và phương pháp cách mạng giải phóng dân tộc theo chủ nghĩa Mác-Lênin.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Duongkachmenh.jpg",
  },
  {
    id: 4,
    title: "Chánh cương vắn tắt (1930)",
    description:
      "Do Nguyễn Ái Quốc soạn thảo, là cương lĩnh chính trị đầu tiên của Đảng, xác định đường lối cách mạng tư sản dân quyền và thổ địa cách mạng.",
    image:
      "https://xetaihanoi.edu.vn/wp-content/uploads/2024/11/chinh-cuong-van-tat-sach-luoc-van-tat-ban-goc-67246f.webp",
  },
  {
    id: 5,
    title: "Tuyên ngôn Độc lập (1945)",
    description:
      "Trích dẫn Tuyên ngôn độc lập của Mỹ và Pháp, khẳng định quyền độc lập, tự do của dân tộc Việt Nam, khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    image:
      "https://imgnvsk.vnanet.vn/MediaUpload/Org/2023/08/24/02-09-2021tuyenngondl-224-8-29-53.jpg",
  },
];

const LegacyDocuments = () => {
  return (
    <section id="disan" className="content-section">
      <h2 className="section-title">Di sản & Tư liệu</h2>
      <p className="section-sapo">
        Những văn kiện, tác phẩm nền tảng do Nguyễn Ái Quốc - Hồ Chí Minh soạn
        thảo trong giai đoạn 1919-1945, đặt cơ sở lý luận và pháp lý cho cách
        mạng Việt Nam.
      </p>

      <div className="part3-grid">
        {documentsData.map((doc) => (
          <div key={doc.id} className="part3-card">
            <img src={doc.image} alt={doc.title} />
            <p className="image-caption">{doc.title}</p>
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegacyDocuments;
