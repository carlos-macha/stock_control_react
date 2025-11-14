import "./StockControl.css";
import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import IconButton from "../../components/icon-button/IconButton";
import Modal from "../../components/modal/Modal";
import { FaBarcode, FaMinus } from "react-icons/fa6";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

export default function StockControl() {
    const [uniqueCode, setUniqueCode] = useState("");
    const [increaseQuantity, setincreaseQuantity] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);

    return (
        <div className="stock-control">
            <Modal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
            >
                <h2>Adicionar Item</h2>
                <Input
                    label="Quantidade"
                    type="number"
                    value={increaseQuantity}
                    onChange={(e) => setincreaseQuantity(e.target.value)}
                />
                <div className="button-box">
                    <Button>Adicionar</Button>
                    <Button
                        onClick={() => {
                            setShowAddModal(false);
                            setincreaseQuantity("");
                        }}
                    >
                        Cancelar
                    </Button>
                </div>
            </Modal>

            <h1>Controle de estoque</h1>

            <div className="box-search">
                <form>
                    <Input
                        label="Código único"
                        type="text"
                        value={uniqueCode}
                        icon={FaBarcode}
                        onChange={(e) => setUniqueCode(e.target.value)}
                    />
                    <Button type="submit">
                        <IoMdSearch />
                    </Button>
                </form>
            </div>

            <hr />

            <div className="item-box">
                <p>Item</p>
                <div className="button-edit">
                    <IconButton
                        icon={IoMdAdd}
                        onClick={() => setShowAddModal(true)}
                    />
                </div>
            </div>

            <hr />
        </div>
    );
}
