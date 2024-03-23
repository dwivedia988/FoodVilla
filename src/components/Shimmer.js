const Shimmer = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-wrap" data-testid="shimmer">
            {Array(20).fill("").map((e, index) => (
                <div className="w-56 h-72 p-2 m-4 bg-gray-200" key={index}></div>
            ))}
        </div>
    );
};

export default Shimmer;