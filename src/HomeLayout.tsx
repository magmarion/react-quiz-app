import { Outlet } from "react-router-dom"

const HomeLayout = () => (
    <div>
        <header className="p-4 bg-gray-800 text-white text-center">
            <h1 className="text-2xl">Quiz Island</h1>
        </header>
        <main className="p-6">
            <Outlet />
        </main>
    </div>
)

export default HomeLayout;