import { useState, useContext, useEffect } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import Login from "./LoginPage";
import Signup from "./SignupPage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Title = () => (
    <a href="/" className="flex items-center">
        <img src={Logo} alt="logo" className="w-20" />
        <h1 className="text-lg font-bold text-red-500 tracking-tight">
            Whomely
        </h1>
    </a>
);

const Header = () => {
    {
        /* -------------- state management -------------- */
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false); // to check user is logged in or not

    const [showLoginForm, setShowLoginForm] = useState(false); // to show login form to user
    const [showSignupForm, setShowSignupForm] = useState(false); // to show login form to user
    const closeForm = () => {
        setShowLoginForm(false);
        setShowSignupForm(false);
    };

    const SignInAction = () => {
        toast.success("Thanks for Signing Up", {
            position: toast.POSITION.TOP_CENTER,
        });
    };
    const LogInAction = () => {
        toast.success("Thanks for Logging In", {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    const isOnline = useOnline(); //online status of user

    const [userName, setUserName] = useState(null); //update username

    const updateUserInfo = (username) => {
        setIsLoggedIn(true);
        setUserName(" " + username);
    };

    const cartItems = useSelector((store) => store.cart.items); //to updatecart value

    return (
        <div className="flex justify-around items-center shadow select-none sticky top-0 bg-white p-2 z-50">
            {/* -------------- Navbar -------------- */}

            <Title />

            {/* <h1>{title}</h1> */}

            {/* <button onClick={() => { setTitle("New Food App") }}>change title</button> */}
            <div>
                <ul className="flex">
                    <Link to="/">
                        <li className="p-5 font-medium text-grey-800 hover:text-red-600 hover:underline hover:cursor-pointer">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="p-5 font-medium text-grey-800 hover:text-red-600 hover:underline hover:cursor-pointer">
                            About
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className="p-5 font-medium text-grey-800 hover:text-red-600 hover:underline hover:cursor-pointer">
                            Contact
                        </li>
                    </Link>
                    <Link to="/instamart">
                        <li className="p-5 font-medium text-grey-800 hover:text-red-600 hover:underline hover:cursor-pointer">
                            Instamart
                        </li>
                    </Link>
                    <Link to="/cart" className="flex">
                        <li className="p-5 font-medium text-grey-800 hover:text-red-600 hover:underline hover:cursor-pointer">
                            Cart
                        </li>
                        <p className="bg-red-200 rounded-full flex justify-center relative top-3 right-6 w-5 h-5 items-center text-xs text-gray-800 font-bold">
                            {cartItems.length}
                        </p>
                    </Link>
                </ul>
            </div>
            {/* ------------------------------------------- */}

            <div className="flex items-center">
                <h1 className="font-normal text-md cursor-default m-3">
                    {isOnline ? "🟢" : "🔴"}
                </h1>

                {/* -------------- user details -------------- */}

                {!userName ? (
                    <p className="p-5 tracking-wide">Hi👋, User</p>
                ) : (
                    <p className="p-5 tracking-wide">
                        Hi👋, <b>{userName}</b>
                    </p>
                )}

                {/* ------------------------------------------- */}

                {/* -------------- User Details -------------- */}

                {isLoggedIn ? (
                    <button
                        className="font-bold bg-red-500 hover:bg-red-600 p-3 text-white rounded-lg"
                        onClick={() => {
                            setIsLoggedIn(false);
                            setUserName("");
                        }}
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <button
                            className="font-bold bg-red-500 hover:bg-red-600 p-3 text-white rounded-lg mx-3"
                            onClick={() => setShowSignupForm(true)}
                        >
                            Sign Up
                        </button>
                        <button
                            className="font-bold bg-red-500 hover:bg-red-600 p-3 text-white rounded-lg"
                            onClick={() => {
                                setShowLoginForm(true);
                            }}
                        >
                            Login
                        </button>
                    </>
                )}
                {/* ------------------------------------------- */}
            </div>

            {/* -------------- Login Form -------------- */}

            <Login
                visiblity={showLoginForm}
                onClose={closeForm}
                onUpdate={updateUserInfo}
                showToast={LogInAction}
            />

            <Signup
                visiblity={showSignupForm}
                onClose={closeForm}
                onUpdate={updateUserInfo}
                showToast={SignInAction}
            />
            
            {/* ------------------------------------------- */}
        </div>
    );
};

export default Header;
