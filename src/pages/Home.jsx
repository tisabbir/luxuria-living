
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import useAuth from "../hooks/useAuth";
import BannerText from "../components/BannerText";
import Estates from "../components/Estates";



const Home = () => {

    const {name} = useAuth();
    const data = useLoaderData();
    const banners = data.banner_images;
    console.log(banners);
    return (
        <div className="mt-12 ">
            
            {/* banner containr */}
            <div className="relative max-w-6xl mx-auto">
            <Banner banners={banners} />
                <div className="absolute top-1/3 left-20 z-10  ">
                        <BannerText />
                </div>
            </div>
            {/* banner containr */}

            {/* Estate container */}
        <div className="mt-12">

            <div>
                <h1 className="text-5xl font-bold text-[#C8AC8E] text-center">Discover Our Featured Listings</h1>
                <p className="text-center text-gray-900 mt-6 max-w-2xl mx-auto">Explore our curated selection of opulent properties, meticulously chosen for discerning clientele. From exclusive penthouses to breathtaking beachfront villas, your dream home awaits.</p>

            </div>
            <div>
        <img className="w-full mt-6 mx-auto h-96" src="https://i.ibb.co/c2Mdm2W/banner4.jpg" />

                <Estates />
            </div>

        </div>
            {/* Estate container */}
           
        </div>
    );
};

export default Home;