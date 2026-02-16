export const validateSignup = ({ name, email, password }) => {
  const errors = {};

  if (!name) errors.name = "Name required";

  if (!email) errors.email = "Email required";
  else if (!/\S+@\S+\.\S+/.test(email))
    errors.email = "Invalid email";

  if (!password) errors.password = "Password required";
  else if (password.length < 6)
    errors.password = "Min 6 chars";

  return errors;
};

export const validateLogin = ({ email, password }) => {
  const errors = {};

  if (!email) errors.email = "Email required";
  if (!password) errors.password = "Password required";

  return errors;
};
