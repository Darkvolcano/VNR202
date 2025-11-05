import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ai-chat"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              AI Chat
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ideology"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tư Tưởng
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/information"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Thông tin
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
