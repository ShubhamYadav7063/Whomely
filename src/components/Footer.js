import github from "../assets/github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-red-500 flex items-center justify-center p-5 flex-col">
            <section className="flex">
                <span className="font-bold text-2xl text-white">Whomely</span>
                <Link
                    to="https://github.com/ShubhamYadav7063/Whomely"
                    target="_blank"
                    className="mx-4 hover:cursor-pointer"
                >
                    <img
                        src={github}
                        alt="github'"
                        className="h-8 w-8 bg-white rounded-full"
                    />
                </Link>
            </section>

            <span className="text-white m-2">
                Made with ❤️ by Shubham Yadav
            </span>
        </div>
    );
};

export default Footer;
