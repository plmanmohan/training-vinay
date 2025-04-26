import useWindowWidth from "./useWindowWidth";

const Home = () => {
    const width = useWindowWidth()
    return (
        <div>
        <h1>Home</h1>
        <p>Welcome to the home page! width is: {width}</p>
        </div>
    );
}

export default Home;