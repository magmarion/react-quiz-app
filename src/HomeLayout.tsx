import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const HomeLayout = () => (
    <div className="flex flex-col min-h-screen">
        <Header  />
        <main className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto h-full">
                <Outlet />
            </div>
        </main>
        <Footer />
    </div>
)

export default HomeLayout;