import { Link, Outlet } from "react-router-dom";

const HomeLayout = () => (
    <div>
        <header className="p-4 bg-gray-800 text-white text-center">
            <Link to="/" className="inline-block cursor-pointer transform transition-transform duration-300 hover:scale-115 hover:font-bold">
                <h1 className="text-2xl">Quiz Island</h1>
            </Link>
        </header>
        <main className="p-6">
            <Outlet />
        </main>
    </div>
)

export default HomeLayout;