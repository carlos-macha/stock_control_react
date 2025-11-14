import React from "react";
import "./PublicLayout.css"
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="public-layout">
      <header>
        <h1>Sistema de Estoque</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2025 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
