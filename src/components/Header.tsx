import { Link } from "react-router-dom";
import logo from '../assets/logo.webp';

const Header = () => (
    <div className="flex flex-col">
        <header className="happy-monkey text-white p-4 bg-[#181C14] shadow-xl">
            <Link
                to="/"
                className="inline-block cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:font-bold"
            >
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl">MIND MINT</h1>
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-12 w-8 rounded-sm bg-transparent object-contain filter contrast-125 brightness-115  transition-all"
                    />
                </div>
            </Link>
            {/* Här kan du lägga till en navigationsmeny om det behövs */}
        </header>
    </div>
);

export default Header;