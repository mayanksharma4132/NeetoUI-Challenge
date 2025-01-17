import * as yup from "yup";

export default {
  loginForm: yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup.string().required("Required"),
  }),
  resetPasswordForm: yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
  }),
  signupForm: yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    password: yup.string().required("Required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Required"),
  }),
  profileForm: yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    password: yup.string().required("Required"),
  }),
  notesForm: yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    assignedContact: yup
      .object({
        label: yup.string(),
        value: yup.string(),
      })
      .nullable()
      .required("Assigned Contact is required"),
    tags: yup
      .object({
        label: yup.string(),
        value: yup.string(),
      })
      .nullable()
      .required("Tag is required"),
  }),
  contactsForm: yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required"),
    role: yup
      .object({
        label: yup.string(),
        value: yup.string(),
      })
      .nullable()
      .required("Role is required"),
  }),
};
