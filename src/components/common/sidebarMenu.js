import React from "react";
import AuthUser from "../authUser";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";

const SidebarMenu = () => {
  const { token, logout } = AuthUser();

  const logoutUser = () => {
    if (token !== "undefined") logout();
  };

  return (
    <div className="d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100">
      <div>
        <div className="d-flex align-items-center">
          <span className="fs-4">User Management</span>
        </div>
        <hr className="secondary mt-2" />
        <Navbar>
          <Nav className="nav-pills flex-column p-0 m-0">
            <Nav.Link as={Link} to="/home" className="p-2 text-white">
              <AiOutlineHome className="me-2 my-0 fs-5"/>
              <span>Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/addUser" className="p-2 text-white">
              <AiOutlineUserAdd className="me-2 my-0 fs-5"/>
              <span>Add User</span>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div>
        <hr className="secondary" />
        <span
          className="d-flex justify-content-evenly"
          role="button"
          onClick={logoutUser}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default SidebarMenu;
