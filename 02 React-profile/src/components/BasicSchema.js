import * as yup from 'yup';

const BasicSchema=yup.object().shape({
    name:yup.string().max(10).required("Name is required"),
    email:yup.string().email().required("Email is required"),
    typeofEnquiry:yup.string()
    .oneOf(["openSource","freelance","other"])
    .label("select")
    .required("Type of enquiry is required"),
    message:yup.string().min(25).required("Message is required"),


})

export default BasicSchema;