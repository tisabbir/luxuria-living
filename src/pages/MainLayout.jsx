import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {


    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        </div>
    );
};

export default MainLayout;