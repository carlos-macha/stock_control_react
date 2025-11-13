import React from "react";
import { AppProviders } from "./contexts/Providers";
import RoutesApp from "./routes";

export default function App() {
    return (
        <AppProviders>
            <RoutesApp />
        </AppProviders>
    );
}