import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/publicLayout/PublicLayout";
import PrivateLayout from "../layouts/privateLayout/PrivateLayout";
import ItemRegistration from "../pages/item-registration/ItemRegistration";
import ItemEditing from "../pages/item-editing/ItemEditing";
import StockControl from "../pages/stock-control/StockControl";
import Consultation from "../pages/consultation/Consultation";

const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("../pages/login/Login"));

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Carregando...</p>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<PrivateLayout />}>
            <Route path="/home" element={<Home />} />
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
