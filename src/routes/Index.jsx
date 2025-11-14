import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/publicLayout/PublicLayout";
import PrivateLayout from "../layouts/privateLayout/PrivateLayout";

const Login = lazy(() => import("../pages/login/Login"));
const ItemRegistration = lazy(() => import("../pages/item-registration/ItemRegistration"));
const ItemEditing = lazy(() => import("../pages/item-editing/ItemEditing"));
const StockControl = lazy(() => import("../pages/stock-control/StockControl"));
const Consultation = lazy(() => import("../pages/consultation/Consultation"));

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Carregando...</p>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<PrivateLayout />}>
            <Route path="/item-registration" element={<ItemRegistration />}/>
            <Route path="/item-editing" element={<ItemEditing />} />
            <Route path="/stock-control" element={<StockControl />} />
            <Route path="/consultation" element={<Consultation />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
