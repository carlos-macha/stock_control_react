import "./ItemRegistration.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import {
  FaBoxOpen,
  FaDollarSign,
  FaSortNumericUp,
  FaTags,
} from "react-icons/fa";
import { FaBarcode } from "react-icons/fa6";
import { useState } from "react";

export default function ItemRegistration() {
  const [name, setName] = useState("");
  const [uniqueCode, setUniqueCode] = useState("");
  const [category, setCategory] = useState("");
  const [minimumQuantity, setMinimumQuantity] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="item-registration">
      <h1>Registrar Item</h1>
      <form>
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
        <Button>Cancelar</Button>
      </form>
    </div>
  );
}
