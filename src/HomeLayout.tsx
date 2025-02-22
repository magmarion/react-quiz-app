import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const HomeLayout = () => (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                <Outlet />
            </div>
        </main>
        <Footer />
    </div>
)

export default HomeLayout;