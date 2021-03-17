import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required("First Name should be required please"),
  email: yup.string().email().required("First Name should be required please"),
  phone: yup
    .number()
    .positive()
    .integer()
    .min(9)
    .max(12)
    .required("First Name should be required please"),
  password: yup
    .string()
    .min(4)
    .max(15)
    .required("First Name should be required please"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
