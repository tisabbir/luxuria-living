
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import useAuth from "../hooks/useAuth";



const Home = () => {

    const {name} = useAuth();
    const data = useLoaderData();
    const banners = data.banner_images;
    console.log(banners);
    return (
        <div>
            
            <h1>This is home {name}</h1>
            <Banner banners={banners} />
           
        </div>
    );
};

export default Home;