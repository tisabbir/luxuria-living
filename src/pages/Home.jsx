import useAuth from "../hooks/useAuth";



const Home = () => {

    const {name} = useAuth();
    return (
        <div>
            
            <h1>This is home {name}</h1>
        </div>
    );
};

export default Home;