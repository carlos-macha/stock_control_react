import { NavLink } from "react-router-dom";
import { FaPlus, FaEdit, FaClipboardList, FaSearch } from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar({ open }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <nav className="menu">
        <NavLink
          to="/consultation"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          <FaSearch /> Consulta
        </NavLink>

        <NavLink
          to="/item-registration"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          <FaPlus /> Cadastro
        </NavLink>

        <NavLink
          to="/item-editing"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          <FaEdit /> Edição
        </NavLink>

        <NavLink
          to="/stock-control"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          <FaClipboardList /> Controle
        </NavLink>
      </nav>
    </aside>
  );
}
