import s from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import { nanoid } from 'nanoid';
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "At least 3 characters.")
        .max(50, "Up to 50 characters.")
        .required("Name is required."),
    number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number must be in the format 111-22-33")
        .required("Phone number is required"),
});

const initialValues = {
    id: '',
    name: '',
    number: '',
};

const ContactForm = ({onAdd}) => {
    const nameId = useId();
    const numberId = useId();

    const handleSubmit = (values, actions) => {
        values.id = nanoid();
        onAdd(values)
        actions.resetForm()
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form className={s.formContainer}>
                <label htmlFor={nameId}>Name</label>
                <Field type="text" name="name" id={nameId} />
                <ErrorMessage name="name" component="span" className={s.error}></ErrorMessage>
                <label htmlFor={numberId}>Number</label>
                <Field type="text" name="number" id={numberId} />
                <ErrorMessage name="number" component="span" className={s.error}></ErrorMessage>
                <button type="submit" className={s.btn}>Add contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm