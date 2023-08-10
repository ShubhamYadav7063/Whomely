const Shimmer = () => {
    return (
        <>
            <div className="flex justify-center flex-wrap my-0">
                {/* <div className="shimmer-card"></div> */}
                {Array(15)
                    .fill("")
                    .map((e, index) => (
                        <div
                            key={index}
                            className="w-80 rounded-lg p-3 m-3 mt-0 h-80 flex justify-evenly bg-gradient-to-r from-gray-300 to-gray-500 animate-pulse ease-in-out"
                        ></div>
                    ))}
            </div>
        </>
    );
};

export default Shimmer;
