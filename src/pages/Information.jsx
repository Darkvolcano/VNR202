import "./Information.css";

const teamMembers = [
  {
    id: 1,
    studentId: "SE183178",
    name: "Tô Triều Vỹ",
  },
  {
    id: 2,
    studentId: "SE183221",
    name: "Đào Bảo Kha",
  },
  {
    id: 3,
    studentId: "SE183245",
    name: "Phạm Chu Chí Khang",
  },
  {
    id: 4,
    studentId: "SE183322",
    name: "Võ Minh Trí",
  },
  {
    id: 5,
    studentId: "SE183867",
    name: "Phạm Cẩm Hoàng",
  },
  {
    id: 6,
    studentId: "SS180587",
    name: "Trần Thuận Nguyên",
  },
];

const aiTools = [
  {
    id: 1,
    name: "Google Gemini",
    description:
      "Sử dụng để hỗ trợ tư duy thiết kế (như chọn phông màu), gợi ý design.",
    promptExample: `
      "Tôi đang xây dựng một trang web về lịch sử, bạn có thể gợi ý một số phông màu phù hợp không?" 
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
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id}>
                  <td>{member.studentId}</td>
                  <td>{member.name}</td>
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
