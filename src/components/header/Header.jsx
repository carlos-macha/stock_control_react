import "./Header.css";
import { useState } from "react";
import IconButton from "../icon-button/IconButton";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import Poplist from "../poplist/Poplist";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

export default function Header({ toggleSidebar }) {
  const [showLogOutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const options = [
    { label: "Conta", value: "account" },
    { label: "Configuração", value: "config" },
  ];

  function handleSelect(value) {
    console.log("Opção selecionada:", value);

    if (value === "account") alert("Editar clicado!");
    else if (value === "config") alert("Excluir clicado!");
  }

  function handleLogin(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <header className="header">
      <Modal
        isOpen={showLogOutModal}
        onClose={() => setShowLogoutModal(false)}
      >
        <h2>Deseja deslogar?</h2>
        <div className="logout-btn">
          <Button
            onClick={(e) => {
              handleLogin(e);
              setShowLogoutModal(false);
            }}
          >
            Sair
          </Button>
          <Button onClick={() => setShowLogoutModal(false)}>Cancelar</Button>
        </div>
      </Modal>

      <div className="menu-btn">
        <IconButton onClick={toggleSidebar} icon={GiHamburgerMenu} />
        <h1>Estoque</h1>
      </div>

      <div className="useful-buttons">
        <Poplist
          trigger={<IconButton icon={IoMdSettings} />}
          options={options}
          onSelect={handleSelect}
        />

        <IconButton
          icon={IoLogOutOutline}
          onClick={() => setShowLogoutModal(true)}
        />
      </div>
    </header>
  );
}
