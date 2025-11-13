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
  const Navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    Navigate("/");
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
        <h1>Meu Site</h1>
      </div>
      <div className="useful-buttons">
        <IconButton icon={IoMdSettings} />
        <IconButton
          icon={IoLogOutOutline}
          onClick={() => setShowLogoutModal(true)}
        />
      </div>
    </header>
  );
}
