
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import useAuth from "../hooks/useAuth";



const Home = () => {

    const {name} = useAuth();
    const data = useLoaderData();
    const banners = data.banner_images;
    console.log(banners);
    return (
        <div className="mt-12 max-w-6xl mx-auto">
            
            <Banner banners={banners} />
           
        </div>
    );
};

export default Home;