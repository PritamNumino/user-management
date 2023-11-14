import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { addUser } from "../store/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./common/loader";
import MultiSelectDropdown from "./common/multiSelectDropdown";
import { validateAddUser } from "../utilities/validations";

const AddUser = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateAddUser(form);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      let reqBody = {
        username: form.username,
        "first-name": form.firstName,
        "last-name": form.lastName,
        "employee-id": parseInt(form.employeeId),
        email: form.email,
        "user-type": form.userType,
        roles: form.roles,
        groups: form.groups,
        "reporting-manager": form.reportingManager,
        "primary-role": "Admin",
        departments: form.departments,
      };
      dispatch(addUser(reqBody));
      setForm({})
    }
  };

  return (
    <div className="p-4">
      {!loading ? (
        <Card className="p-2" style={{ width: "840px" }}>
          <Card.Header>Add User</Card.Header>
          <Card.Body>
            <Form className="mb-3">
              <Form.Group as={Row} className="mb-1" controlId="ControlInput1">
                <Form.Label column sm="2">
                  Username
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Add username"
                    value={form.username}
                    onChange={(e) => setField("username", e.target.value)}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-1" controlId="ControlInput2">
                <Form.Label column sm="2">
                  First Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Add first name"
                    value={form.firstName}
                    onChange={(e) => setField("firstName", e.target.value)}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-1" controlId="ControlInput3">
                <Form.Label column sm="2">
                  Last Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Add last name"
                    value={form.lastName}
                    onChange={(e) => setField("lastName", e.target.value)}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-1" controlId="ControlInput4">
                <Form.Label column sm="2">
                  Employee Id
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Add employee id"
                    value={form.employeeId}
                    onChange={(e) => setField("employeeId", e.target.value)}
                    isInvalid={!!errors.employeeId}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.employeeId}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-1" controlId="ControlInput5">
                <Form.Label column sm="2">
                  Email address
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-1" controlId="ControlInput6">
                <Form.Label column sm="2">
                  User Type
                </Form.Label>
                <Col sm="10">
                  <Form.Select
                    aria-label="Default select"
                    value={form.userType}
                    onChange={(e) => setField("userType", e.target.value)}
                    isInvalid={!!errors.userType}
                  >
                    <option>Select</option>
                    <option value="1">Customer User</option>
                    <option value="2">Internal User</option>
                    <option value="3">Service User</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.userType}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-1" controlId="ControlInput7">
                <Form.Label column sm="2">
                  Roles
                </Form.Label>
                <Col sm="10">
                  <MultiSelectDropdown
                    error={errors.roles}
                    options={["Admin", "CEO", "Owner"]}
                    setOptions={setField}
                    title="roles"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-1" controlId="ControlInput8">
                <Form.Label column sm="2">
                  Groups
                </Form.Label>
                <Col sm="10">
                  <MultiSelectDropdown
                    error={errors.groups}
                    options={["Development", "Testing", "Recruitment"]}
                    setOptions={setField}
                    title="groups"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-1" controlId="ControlInput10">
                <Form.Label column sm="2">
                  Departments
                </Form.Label>
                <Col sm="10">
                  <MultiSelectDropdown
                    error={errors.departments}
                    options={["HR", "Marketing", "Sales"]}
                    setOptions={setField}
                    title="departments"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-1" controlId="ControlInput9">
                <Form.Label column sm="2">
                  Manager
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Add reporting manager"
                    value={form.reportingManager}
                    onChange={(e) =>
                      setField("reportingManager", e.target.value)
                    }
                    isInvalid={!!errors.reportingManager}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.reportingManager}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </Form>

            <div className="d-flex flex-row-reverse">
              <Button
                type="submit"
                onClick={handleSubmit}
                variant="primary"
                className="w-25"
              >
                Submit
              </Button>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AddUser;
