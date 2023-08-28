const Hamburger = ({ visiblity }) => {
    return (
        <>
            <div className="w-8 h-8 justify-around flex-col flex-nowrap z-10 hidden mobile:max-tablet:flex">
                <div
                    className={`w-8 h-1 rounded-lg flex bg-red-500 transform ${
                        visiblity ? "rotate-45" : "rotate-0"
                    } `}
                ></div>
                <div
                    className={`w-8 h-1 rounded-lg flex bg-red-500 transform ${
                        visiblity
                            ? "translate-x-full opacity-0"
                            : "translate-x-0 opacity-100"
                    }`}
                ></div>
                <div
                    className={`w-8 h-1 rounded-lg flex bg-red-500 transform ${
                        visiblity ? "-rotate-45 -translate-y-1" : "rotate-0"
                    }`}
                ></div>
            </div>
        </>
    );
};

export default Hamburger;
