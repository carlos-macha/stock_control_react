import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaClipboardList, FaSearch } from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar({ open }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <nav className="menu">
        <Link to="/item-registration"><FaPlus /> Cadastro</Link>
        <Link to="/item-editing"><FaEdit /> Edição</Link>
        <Link to="/stock-control"><FaClipboardList /> Controle</Link>
        <Link to="/consultation"><FaSearch /> Consulta</Link>
      </nav>
    </aside>
  );
}