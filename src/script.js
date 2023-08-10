import React, { lazy, Suspense, useState } from "react";
import ReactDom from "react-dom/client";

// Default import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
// import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Login from "./components/LoginPage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Instamart = lazy(() => import("./components/Instamart.js"));

const AppLayout = () => {
    return (
        <Provider store={store}>
                <Header />
            <UserContext.Provider>
                <ToastContainer/>
                {/* All the Children will go into the outlet */}
                <Outlet /> {/*//This is provided by react-router-dom*/}
            </UserContext.Provider>
                <Footer />
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    //This is the place where we will be telling which page to open after giving / path
    // THis is Nesting Routing
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile", //parentPath/{path}    => localhost:1234/about/profile
                        element: <Profile />,
                    },
                ],
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                ),
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
