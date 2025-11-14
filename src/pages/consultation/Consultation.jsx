import "./Consultation.css";
import { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { FaBarcode } from "react-icons/fa6";
import { LuCalendarPlus, LuCalendarX } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";

export default function Consultation() {
    const [searchUniqueCode, setSearchUniqueCode] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [items, setItems] = useState([]);

    function handleSearch() {
        const apiData = [
            {
                id: 1,
                uniqueCode: "A123",
                name: "Acém",
                category: "Bovino",
                minQty: 10,
                price: 49.90,
            },
            {
                id: 2,
                uniqueCode: "B456",
                name: "Bananinha",
                category: "Bovino",
                minQty: 5,
                price: 29.90,
            },
        ];

        setItems(apiData);
    }

    return (
        <div className="consultation">
            <h1>Consultar estoque</h1>

            <div className="unique-search-code">
                <form onSubmit={(e) => e.preventDefault()}>
                    <Input
                        label="Código único"
                        type="text"
                        value={searchUniqueCode}
                        icon={FaBarcode}
                        onChange={(e) => setSearchUniqueCode(e.target.value)}
                    />

                    <Button onClick={handleSearch}>
                        <IoMdSearch />
                    </Button>
                </form>
            </div>

            <hr />

            <div className="search-date">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="date-box">
                        <Input
                            label="Data inicial"
                            type="date"
                            value={startDate}
                            icon={LuCalendarPlus}
                            onChange={(e) => setStartDate(e.target.value)}
                        />

                        <Input
                            label="Data final"
                            type="date"
                            value={endDate}
                            icon={LuCalendarX}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>

                    <Button onClick={handleSearch}>
                        <IoMdSearch />
                    </Button>
                </form>
            </div>

            <table className="stock-table">
                <thead>
                    <tr>
                        <th>Código único</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Quantidade mínima</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {items.length > 0 ? (
                        items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.uniqueCode}</td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.minQty}</td>
                                <td>R$ {item.price.toFixed(2)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="no-data">
                                Nenhum item encontrado
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
