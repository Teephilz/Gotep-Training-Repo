import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import CreateUser from "../pages/CreateUser";
import EditUser from "../pages/EditUser";
import UserDetails from "../pages/UserDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="create" element={<CreateUser />} />
        <Route path="edit/:id" element={<EditUser />} />
        <Route path="user/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}
