import { Link } from "react-router-dom";

/**
 * The Header component renders the top section of the page, providing a link
 * to the home page that contains the title "Quiz Island". The link has a hover
 * effect that scales and boldens the text. Additional navigation elements can
 * be added as needed.
 */

const Header = () => (
    <header className="happy-monkey p-4 bg-[#181C14] text-white text-center shadow-xl">
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