import React, { useState } from "react";
import "./Login.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        Navigate("/consultation");
    }

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleLogin}>
                <h1>Login</h1>
                <Input
                    label="E-mail"
                    type="email"
                    value={email}
                    icon={MdOutlineMail}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    label="Senha"
                    type="password"
                    value={password}
                    icon={CiLock}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Entrar</Button>
            </form>
        </div>
    );
}
