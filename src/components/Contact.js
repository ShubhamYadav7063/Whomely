import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
        errors.firstName = "Must be less than 15 characters";
    }

    if (!values.lastName) {
        errors.lastName = "Required";
    } else if (values.lastName.length > 15) {
        errors.lastName = "Must be less than 15 characters";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Invalid email address";
    }

    return errors;
};

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        // <div className="flex items-center justify-center h-[89vh] w-full bg-about-us">
        <div className="bg-about-us h-[92vh] bg-no-repeat bg-cover flex flex-col items-center justify-center">
            <form
                className="flex flex-col items-center drop-shadow justify-center bg-white border-2 border-gray-200 w-2/5 p-9 h-3/5 rounded-2xl"
                onSubmit={formik.handleSubmit}
            >
                <h1 className="font-bold text-2xl m-7 mt-0 select-none">
                    Contact Us
                </h1>

                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={formik.handleChange}
                    placeholder="First Name"
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className="border-2 border-gray-500 p-3 m-4 mb-0 rounded-lg w-2/3"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <p className="text-red-500 font-serif text-xs relative -left-40 ">
                        {formik.errors.firstName}*
                    </p>
                ) : null}

                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={formik.handleChange}
                    placeholder="Last Name"
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className="border-2 border-gray-500 p-3 m-4 mb-0 rounded-lg w-2/3"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <p className="text-red-500 font-serif text-xs relative -left-40">
                        {formik.errors.lastName}*
                    </p>
                ) : null}

                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    placeholder="Email"
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="border-2 border-gray-500 p-3 m-4 mb-0 rounded-lg w-2/3"
                />
                {formik.touched.email && formik.errors.email ? (
                    <p className="text-red-500 font-serif text-xs relative -left-40">
                        {formik.errors.email}*
                    </p>
                ) : null}

                <button
                    className="font-bold bg-red-500 hover:bg-red-600 p-3 w-40 m-4 text-white rounded-lg"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
