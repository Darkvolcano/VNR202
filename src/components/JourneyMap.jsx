import React from "react";

const JourneyMap = () => {
  return (
    <section id="bando" className="content-section">
      <h2 className="section-title">
        Hành Trình 30 Năm Tìm Đường Cứu Nước Của Bác Hồ
      </h2>
      <p className="section-sapo">
        Hành trình 30 năm tìm đường cứu nước vĩ đại của Nguyễn Ái Quốc, từ Bến
        cảng Nhà Rồng năm 1911 đến khi Người trở về Pác Bó, Cao Bằng năm 1941,
        được tái hiện qua các cột mốc lịch sử quan trọng.
      </p>

      <div className="map-container">
        <img src="https://tuyenquang.dcs.vn/images/1(263).jpg" />
        <img src="https://tuyenquang.dcs.vn/images/2(270).jpg" />

        <p className="image-caption" style={{ marginTop: 15, fontSize: 18 }}>
          Bản đồ mô phỏng hành trình cứu nước của Nguyễn Ái Quốc.
        </p>
      </div>

      <div className="map-key-locations">
        <h3>Các chặng đường chính:</h3>
        <ul>
          <li>
            <strong>05/6/1911:</strong> Rời Bến cảng Nhà Rồng trên tàu Amiral
            Latouche Tréville, bắt đầu hành trình vĩ đại tìm đường cứu nước.
          </li>
          <li>
            <strong>1911 - 1917:</strong> Bôn ba qua nhiều nước tại Á, Âu, Phi,
            Mỹ (Pháp, Anh, Mỹ). Nhận thấy bản chất chung của chủ nghĩa đế quốc
            là áp bức, bóc lột.
          </li>
          <li>
            <strong>Cuối năm 1917 - 1919:</strong> Trở lại Pháp, tham gia Đảng
            Xã hội. Năm 1919, gửi "Bản yêu sách của nhân dân An Nam" tới Hội
            nghị Vécxây.
          </li>
          <li>
            <strong>Năm 1920:</strong> Đọc "Luận cương về vấn đề dân tộc và
            thuộc địa" của Lênin. Tham gia sáng lập Đảng Cộng sản Pháp, trở
            thành người cộng sản Việt Nam đầu tiên.
          </li>
          <li>
            <strong>1921 - 1923:</strong> Hoạt động cách mạng tại Pháp. Đến Liên
            Xô (1923), tham gia phong trào cộng sản quốc tế.
          </li>
          <li>
            <strong>1924 - 1925:</strong> Hoạt động tại Quảng Châu (Trung Quốc).
            Thành lập Hội Việt Nam Cách mạng Thanh niên, ra báo "Thanh niên" và
            mở lớp huấn luyện cán bộ.
          </li>
          <li>
            <strong>1927 - 1929:</strong> Hoạt động tại quốc tế cộng sản (Liên
            Xô, Pháp, Bỉ, Đức...). Năm 1929 trở lại Trung Quốc để chuẩn bị thành
            lập Đảng.
          </li>
          <li>
            <strong>Ngày 06/01 - 07/02/1930:</strong> Tại Cửu Long (Hương Cảng,
            Trung Quốc), chủ trì Hội nghị hợp nhất các tổ chức cộng sản, thành
            lập Đảng Cộng sản Việt Nam.
          </li>
          <li>
            <strong>Tháng 6/1931 - 1932:</strong> Bị thực dân Anh bắt giam tại
            Hồng Kông. Cuối năm 1932, được trả tự do, sau đó đến Liên Xô học tại
            trường Quốc tế Lênin.
          </li>
          <li>
            <strong>Tháng 10/1938:</strong> Rời Liên Xô đến Diên An (Trung
            Quốc), làm việc tại Bộ chỉ huy Bát lộ quân, bắt liên lạc với Đảng để
            chuẩn bị về nước.
          </li>
          <li>
            <strong>Tháng 01/1941:</strong> Trở về Việt Nam trực tiếp lãnh đạo
            cách mạng sau 30 năm bôn ba nước ngoài.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default JourneyMap;
