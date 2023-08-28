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
            // <div className="bg-about-us h-screen bg-no-repeat bg-cover flex flex-col items-center justify-center">
            <div className="flex flex-col h-[90vh] items-center justify-center mobile:max-laptop:justify-start">
                {/* <Profile /> */}
                {/* <div className="flex flex-col items-center"> */}
                <section className="flex items-center justify-evenly w-full mobile:max-laptop:flex-col">
                    <img
                        src={
                            "https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg"
                        }
                        alt=""
                        className="h-auto w-auto mix-blend-darken transform -scale-x-100"
                    />
                    <section className="flex items-center flex-col">
                        <section className="my-10 flex items-center flex-col">
                            <p className="font-bold text-8xl mobile:max-laptop:text-3xl text-red-500 select-none">
                                Whomely
                            </p>
                            <p className="select-none text-4xl mobile:max-laptop:text-lg">
                                Food Ordering App
                            </p>
                        </section>

                        <section className="flex items-center flex-col my-1">
                            <section className="flex">
                                <Link
                                    to="https://www.linkedin.com/in/shubham-yadav-3667a51ba/"
                                    target="_blank"
                                >
                                    <img
                                        src={linkedin}
                                        alt="linkedIn"
                                        className="h-14 w-14 m-6 hover:transition mobile:max-laptop:h-6 mobile:max-laptop:m-1 duration-300 ease-in-out hover:scale-110"
                                    />
                                </Link>
                                <Link
                                    to="https://github.com/ShubhamYadav7063"
                                    target="_blank"
                                >
                                    <img
                                        src={github}
                                        alt="GitHub"
                                        className="h-14 w-14 m-6 hover:transition mobile:max-laptop:h-6 mobile:max-laptop:m-1 duration-300 ease-in-out hover:scale-110"
                                    />
                                </Link>
                                <Link
                                    to="https://instagram.com/shubham.___.yadav"
                                    target="_blank"
                                >
                                    <img
                                        src={instagram}
                                        alt="Instagram"
                                        className="h-14 w-14 m-6 hover:transition mobile:max-laptop:h-6 mobile:max-laptop:m-1 duration-300 ease-in-out hover:scale-110"
                                    />
                                </Link>
                                <Link
                                    to="https://twitter.com/Shubham7064"
                                    target="_blank"
                                >
                                    <img
                                        src={x}
                                        alt="X"
                                        className="h-14 w-14 m-6 hover:transition mobile:max-laptop:h-6 mobile:max-laptop:m-1 duration-300 ease-in-out hover:scale-110"
                                    />
                                </Link>
                            </section>
                        </section>
                    </section>
                </section>
            </div>
            // </div>
        );
    }
}
export default About;
