import React from "react";
import "./PublicLayout.css"
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      <header>
        <h1>Meu Site Público</h1>
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
