import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

function HomeLayout() {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className="bg-[#0b0318] flex-1">
                <Outlet />
                <Footer />
            </div>
        </main>
    )
}

export default HomeLayout;