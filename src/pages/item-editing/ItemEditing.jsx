import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Poplist from "../../components/poplist/Poplist";
import Modal from "../../components/modal/Modal";
import ItemEditBox from "../../components/item-edit-box/itemEditBox";
import {
    FaBoxOpen,
    FaDollarSign,
    FaSortNumericUp,
    FaTags,
} from "react-icons/fa";
import { FaBarcode } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import "./ItemEditing.css";

export default function ItemEditing() {
    const [name, setName] = useState("");
    const [uniqueCode, setUniqueCode] = useState("");
    const [category, setCategory] = useState("");
    const [minimumQuantity, setMinimumQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showFormModal, setShowFormModal] = useState(false);

    return (
        <div className="item-editing">
            <Modal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
            >
                <h2>Deletar Item</h2>
                <p>Item</p>
                <div className="delete-button-box  ">
                    <Button>Deletar</Button>
                    <Button>Cancelar</Button>
                </div>
            </Modal>
            <Modal
                isOpen={showFormModal}
                onClose={() => setShowFormModal(false)}
            >
                <h2>Editar item</h2>
                <form action="">
                    <Input
                        label="Nome"
                        type="text"
                        value={name}
                        icon={FaBoxOpen}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Código único"
                        type="text"
                        value={uniqueCode}
                        icon={FaBarcode}
                        onChange={(e) => setUniqueCode(e.target.value)}
                    />
                    <Input
                        label="Categoria"
                        type="text"
                        value={category}
                        icon={FaTags}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <Input
                        label="Quantidade mínima"
                        type="text"
                        value={minimumQuantity}
                        icon={FaSortNumericUp}
                        onChange={(e) => setMinimumQuantity(e.target.value)}
                    />
                    <Input
                        label="preço"
                        type="text"
                        value={price}
                        icon={FaDollarSign}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Button>Salvar</Button>
                </form>
            </Modal>
            <h1>Pesquisar item</h1>
            <div className="box-search">
                <form action="">
                    <Input
                        label="Código único"
                        type="text"
                        value={uniqueCode}
                        icon={FaBarcode}
                        onChange={(e) => setUniqueCode(e.target.value)}
                    />

                    <Button>
                        <IoMdSearch />
                    </Button>
                </form>
            </div>
            <hr />
            <h2>Editar item</h2>
            <ItemEditBox onEdit={() => setShowFormModal(true)} onDelete={() => setShowDeleteModal(true)} />
        </div>
    );
}
