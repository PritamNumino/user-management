export const validateLogin = (form) => {
  const { username, password } = form;
  const newErrors = {};
  if (!username || username === "") {
    newErrors.username = "Please enter username";
  }
  if (!password || password === "") {
    newErrors.password = "Please enter password";
  }
  return newErrors;
};

export const validateAddUser = (form) => {
  const {
    username,
    firstName,
    lastName,
    employeeId,
    email,
    userType,
    roles,
    groups,
    reportingManager,
    departments,
  } = form;
  const newErrors = {};

  if (!username || username === "") {
    newErrors.username = "Please enter username";
  }
  if (!firstName || firstName === "") {
    newErrors.firstName = "Please enter firstname";
  }
  if (!lastName || lastName === "") {
    newErrors.lastName = "Please enter lastName";
  }
  if (!employeeId || isNaN(employeeId)) {
    newErrors.employeeId = "Please enter a valid employee id";
  }
  if (
    !email ||
    email === "" ||
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    newErrors.email = "Please enter a valid email";
  }
  if (!userType || userType === "select user type") {
    newErrors.userType = "Please select user type";
  }
  if (!roles || roles.length < 1) {
    newErrors.roles = "Please select role";
  }
  if (!groups || groups.length < 1) {
    newErrors.groups = "Please select groups";
  }
  if (!reportingManager || reportingManager === "") {
    newErrors.reportingManager = "Please enter a valid reporting manager id";
  }
  if (!departments || departments.length < 1) {
    newErrors.departments = "Please enter a valid department id";
  }

  return newErrors;
};
