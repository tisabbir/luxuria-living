
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import useAuth from "../hooks/useAuth";
import BannerText from "../components/BannerText";
import Estates from "../components/Estates";
import { Helmet } from "react-helmet";



const Home = () => {

    const {name} = useAuth();
    const data = useLoaderData();
    const banners = data.banner_images;
    console.log(banners);
    return (
        

        <div className="mt-12 scroll-smooth">
            <Helmet >
                <title>Home || Luxuria Living</title>
            </Helmet>
            
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
                <h1 id="featured" className="text-5xl font-bold text-[#5E503F] text-center">Discover Our Featured Estates</h1>
                <p className="text-center text-gray-900 mt-6 max-w-2xl mx-auto">Explore our curated selection of opulent properties, meticulously chosen for discerning clientele. From exclusive penthouses to breathtaking beachfront villas, your dream home awaits.</p>

            </div>
            <div className="relative">
                 <img className="w-full mt-6 mx-auto h-96" src="https://i.ibb.co/c2Mdm2W/banner4.jpg" />

                
                <div className="-mt-80">
                <Estates />
                </div>
                
            </div>

        </div>
            {/* Estate container */}
           
        </div>
    );
};

export default Home;