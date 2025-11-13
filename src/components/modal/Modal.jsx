import "./Modal.css";
import { IoMdClose } from "react-icons/io";
import IconButton from "../icon-button/IconButton";

export default function Modal({ children, isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="close-button">
                    <IconButton onClick={onClose} icon={IoMdClose} />
                </div>
                {children}
            </div>
        </div>
    );
}
