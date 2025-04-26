import { useContext } from "react";
import ThemeContext from "./context";

const Home = () => {
    const theme = useContext(ThemeContext);
    return (
        <div>
        <h1>Home</h1>
        <p>Welcome to the home page! Theme is: {theme}</p>
        </div>
    );
}

export default Home;