import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import React from "react";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import x from "../assets/x.svg";
import github from "../assets/github.svg";
import photo from "../assets/photo.png";
import { Link } from "react-router-dom";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent-constructor");
    }

    render() {
        return (
            // <div className="w-screen bg-about-us h-screen object-cover">
            // <div className="bg-about-us h-screen w-fit">
            <div className="bg-about-us h-[92vh] bg-no-repeat bg-cover flex flex-col items-center justify-center">
                {/* <Profile /> */}
                {/* <div className="flex flex-col items-center"> */}
                <section className="flex items-center flex-col">
                    <img
                        src={photo}
                        alt=""
                        className="h-60 w-60 rounded-full"
                    />
                    <p className="font-bold text-3xl text-red-500 select-none">
                        Shubham Yadav
                    </p>
                    <p className="tracking-tight select-none">
                        Aspiring Frontend Web-Developer
                    </p>
                </section>

                <section className="flex items-center flex-col m-14">
                    <p className="font-bold text-2xl underline">Socials</p>
                    <section className="flex">
                        <Link
                            to="https://www.linkedin.com/in/shubham-yadav-3667a51ba/"
                            target="_blank"
                        >
                            <img
                                src={linkedin}
                                alt="linkedIn"
                                className="h-16 w-16 m-6 hover:transition  duration-300 ease-in-out hover:scale-110"
                            />
                        </Link>
                        <Link
                            to="https://github.com/ShubhamYadav7063"
                            target="_blank"
                        >
                            <img
                                src={github}
                                alt="GitHub"
                                className="h-16 w-16 m-6 hover:transition  duration-300 ease-in-out hover:scale-110"
                            />
                        </Link>
                        <Link
                            to="https://instagram.com/shubham.___.yadav"
                            target="_blank"
                        >
                            <img
                                src={instagram}
                                alt="Instagram"
                                className="h-16 w-16 m-6 hover:transition  duration-300 ease-in-out hover:scale-110"
                            />
                        </Link>
                        <Link
                            to="https://twitter.com/Shubham7064"
                            target="_blank"
                        >
                            <img
                                src={x}
                                alt="X"
                                className="h-16 w-16 m-6 hover:transition  duration-300 ease-in-out hover:scale-110"
                            />
                        </Link>
                    </section>
                </section>
            </div>
            // </div>
        );
    }
}
export default About;
