import React from "react";
import "./IconButton.css";

export default function IconButton({ icon, onClick }) {
    const Icon = icon;
    return (
        <div className="icon-button">
            <button onClick={onClick}>
                <Icon size={18} />
            </button>
        </div>
    );
}
