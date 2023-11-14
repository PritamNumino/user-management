import Login from "./components/login";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import AuthUser from "./components/authUser";
import SidebarMenu from "./components/common/sidebarMenu";
import AddUser from "./components/addUser";
import "./App.css";
import ForgetPassword from "./components/forgetPassword";

function App() {
  const { getToken } = AuthUser();

  if (!getToken()) {
    return <Login />;
  }

  return (
    <div className="d-flex">
      <div className="col-auto leftSection">
        <SidebarMenu />
      </div>
      <div className="rightSection">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
