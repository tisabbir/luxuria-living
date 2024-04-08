
import Banner from "../components/Banner";
import useAuth from "../hooks/useAuth";



const Home = () => {

    const {name} = useAuth();
    return (
        <div>
            
            <h1>This is home {name}</h1>
            <Banner />
           
        </div>
    );
};

export default Home;