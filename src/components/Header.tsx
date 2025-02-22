import { Link } from "react-router-dom";

const Header = () => (
    <header className="p-4 bg-gray-800 text-white text-center">
        <Link
            to="/"
            className="inline-block cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:font-bold"
        >
            <h1 className="text-2xl">Quiz Island</h1>
        </Link>
        {/* Här kan du lägga till en navigationsmeny om det behövs */}
    </header>
);

export default Header;