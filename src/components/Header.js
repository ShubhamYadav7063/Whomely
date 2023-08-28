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
import Hamburger from "./Hamburger";

const Title = () => (
    <a href="/" className="flex items-center">
        <img src={Logo} alt="logo" className="w-20 mobile:max-laptop:w-14" />
        <h1 className="text-lg mobile:max-laptop:hidden font-bold text-red-500 tracking-tight">
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
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const LogInAction = () => {
        toast.success("You are now logged in", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const isOnline = useOnline(); //online status of user

    const [userName, setUserName] = useState(null); //update username

    const updateUserInfo = (username) => {
        setIsLoggedIn(true);
        setUserName(" " + username);
    };

    const cartItems = useSelector((store) => store.cart.items); //to updatecart value

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };
    console.log(hamburgerOpen);

    return (
        <div className="flex justify-around mobile:max-laptop:justify-between items-center shadow select-none sticky top-0 bg-white p-2 z-50">
            {/* -------------- Navbar -------------- */}

            {/* <section className=" flex "> */}
            <section className="flex flex-row">
                <Title />

                <div onClick={toggleHamburger} className="p-4">
                    <Hamburger visiblity={hamburgerOpen} />
                </div>
            </section>

            <div>
                <ul
                    className={`${
                        hamburgerOpen
                            ? "mobile:max-laptop:flex mobile:max-tablet:flex-col"
                            : "mobile:max-laptop:hidden"
                    } flex`}
                >
                    <Link to="/">
                        <li className="p-5 font-medium text-grey-800 hover:text-red-600 hover:underline hover:cursor-pointer mobile:max-tablet:p-1 mobile:max-laptop:text-xs">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="p-5 font-medium text-grey-800 hover:text-red-600 hover:underline hover:cursor-pointer mobile:max-laptop:p-1 mobile:max-laptop:text-xs">
                            About
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className="p-5 font-medium text-grey-800 hover:text-red-600 hover:underline hover:cursor-pointer mobile:max-laptop:p-1 mobile:max-laptop:text-xs">
                            Contact
                        </li>
                    </Link>
                    <Link to="/instamart">
                        <li className="p-5 font-medium text-grey-800 hover:text-red-600 hover:underline hover:cursor-pointer mobile:max-laptop:p-1 mobile:max-laptop:text-xs">
                            Instamart
                        </li>
                    </Link>
                    <Link to="/cart" className="flex">
                        <li className="p-5 font-medium text-grey-800 hover:text-red-600 hover:underline hover:cursor-pointer mobile:max-laptop:p-1 mobile:max-laptop:text-xs">
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
                {/* -------------- user details -------------- */}

                {!userName ? (
                    <p className="p-5 tracking-wide mobile:max-laptop:hidden">
                        Hi👋, User
                    </p>
                ) : (
                    <p className="p-5 tracking-wide">
                        Hi👋, <b>{userName}</b>
                    </p>
                )}

                {/* ------------------------------------------- */}

                {/* -------------- User Details -------------- */}

                {isLoggedIn ? (
                    <button
                        className="font-bold bg-red-500 hover:bg-red-600 p-3 text-white mobile:max-laptop:text-xs rounded-lg"
                        onClick={() => {
                            setIsLoggedIn(false);
                            setUserName("");
                        }}
                    >
                        Logout
                    </button>
                ) : (
                    <section
                        className={`flex items-center justify-center ${
                            hamburgerOpen ? "mobile:flex-col" : ""
                        }`}
                    >
                        <button
                            className="font-bold bg-red-500 hover:bg-red-600 p-3 text-white mobile:max-laptop:text-xs rounded-lg mx-3 mobile:max-laptop:m-3"
                            onClick={() => setShowSignupForm(true)}
                        >
                            Sign Up
                        </button>
                        <button
                            className="font-bold bg-red-500 hover:bg-red-600 p-3 px-5 text-white mobile:max-laptop:text-xs rounded-lg mobile:max-laptop:mx-3"
                            onClick={() => {
                                setShowLoginForm(true);
                            }}
                        >
                            Login
                        </button>
                    </section>
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
