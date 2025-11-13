import "./itemEditBox.css";
import { GoPencil } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import IconButton from "../icon-button/IconButton";

export default function ItemEditBox({ onEdit, onDelete }) {
    return (
        <div>
        <div className="item-edit-box">
            <p>Item</p>
            <div className="button-edit">
                <IconButton onClick={onEdit} icon={GoPencil} />
                <IconButton onClick={onDelete} icon={FaRegTrashAlt} />
            </div>
        </div>
        <hr />
        </div>
    );
}
