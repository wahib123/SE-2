import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Username or email is required."),
  password: Yup.string().required("Password is required."),
});

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required.")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter valid email"),
  password: Yup.string()
    .required("Password is required.")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/,
      "Must Contain at least 8 Characters and at most 32 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  contact: Yup.string()
    .length(10, "Contact number must be exactly 10 characters")
    .required("Contact number is required.")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Mobile number is not valid"
    ),
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must have greater than or equal to 3 characters")
    .max(20, "Username must have less than or equal to 20 characters")
    .matches(
      /^[^\s].+[^\s]$/,
      "Username must not start or end with white spaces"
    ),
});

export { LoginSchema, SignupSchema };
