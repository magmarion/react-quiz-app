import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const HomeLayout = () => (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                <div
                    aria-hidden="true"
                    className="absolute pointer-events-none inset-x-0 top-[calc(100%-13rem)] -z-10
        overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
                >
                    <div
                        className="relative aspect-[1155/678] w-[36.125rem] mx-auto
            bg-gradient-to-tr from-[#2aaf64] to-[#181C14] opacity-30 sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, \
                72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, \
                27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <Outlet />
            </div>
        </main>
        <Footer />
    </div>
)

export default HomeLayout;