import { useFormik } from "formik";
import * as Yup from "yup";


const validate = (values) => {
    const errors = {};

    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 8) {
        errors.password = "Must be more than 8 characters";
    }

    if (!values.username) {
        errors.username = "Required";
    } else if (
        // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        !/^[a-zA-Z0-9_]+$/i.test(values.username)
    ) {
        errors.username = "Invalid Username";
    }

    return errors;
};

const Login = ({ visiblity, onClose, onUpdate, showToast }) => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validate,
        onSubmit: (values) => {
            const userDetails = JSON.parse(JSON.stringify(values, null, 2));
            onUpdate(userDetails.username);
            showToast();
            onClose();
        },
    });

    return (
        visiblity && (
            <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-300 bg-opacity-90 z-50">
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col items-center w-1/3 bg-white rounded-xl shadow-lg p-10"
                >
                    <button
                        className="relative -top-4 left-60 h-7 w-7 font-bold hover:shadow-lg"
                        type="button"
                        onClick={() => {
                            onClose();
                        }}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ef4444"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                                    stroke="#ef4444"
                                    strokeWidth="3"
                                ></path>{" "}
                                <path
                                    d="M9 9L15 15M15 9L9 15"
                                    stroke="#ef4444"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                ></path>{" "}
                            </g>
                        </svg>
                    </button>

                    <p className="text-4xl font-bold text-red-500 my-3 tracking-tight">
                        Whomely
                    </p>

                    <section className="w-full m-3 relative left-[5.5rem]">
                        <input
                            type="text"
                            name="username"
                            onChange={formik.handleChange}
                            placeholder="Username"
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            className="border-2 border-gray-500 p-3 m mb-0 rounded-lg w-2/3"
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <p className="text-red-500 font-serif text-xs">
                                {formik.errors.username}*
                            </p>
                        ) : null}
                    </section>

                    <section className="w-full m-3 relative left-[5.5rem] ">
                        <input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            placeholder="Password"
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className="border-2 border-gray-500 p-3 mb-0 rounded-lg w-2/3"
                        />

                        {formik.touched.password && formik.errors.password ? (
                            <p className="text-red-500 font-serif text-xs">
                                {formik.errors.password}*
                            </p>
                        ) : null}
                    </section>

                    <button
                        type="submit"
                        className="font-bold bg-red-500 hover:bg-red-600 p-3 w-40 m-4 text-white rounded-lg"
                    >
                        Login
                    </button>

                    <span class="h-0.5 w-full bg-gray-300 lg:w-2/3 my-3"></span>

                    <section className="flex flex-col">
                        <button
                            type="submit"
                            className="font-normal bg-red-500 hover:bg-red-600 p-3 m-4 text-white rounded-lg flex items-center"
                        >
                            <img
                                src="https://logowik.com/content/uploads/images/twitter-x5265.logowik.com.webp"
                                alt=""
                                className="w-5 h-5 mr-1 rounded-full"
                            />
                            | Continue with 𝕏
                        </button>
                        <button
                            type="submit"
                            className="font-normal bg-red-500 hover:bg-red-600 p-3 m-4 my-0 text-white rounded-lg flex items-center"
                        >
                            <img
                                src="https://static.cdnlogo.com/logos/g/82/google-g-2015.svg"
                                alt=""
                                className="w-5 h-5 mr-1"
                            />
                            | Continue with Google
                        </button>
                    </section>
                </form>
            </div>
        )
    );
};

export default Login;
