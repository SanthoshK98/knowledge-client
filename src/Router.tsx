import { Routes, Route } from "react-router-dom";
import { AdminLogin } from "./components/AdminLogin";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { MyOrders } from "./components/MyOrders";
import { PrivateComponent } from "./components/PrivateComponent";
import { SignUp } from "./components/SignUp";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
      </Routes>
    </>
  );
};
