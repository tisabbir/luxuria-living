import "animate.css"

const BannerText = () => {
    return (
        <div className="text-white">
             <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Luxurious Escapes</h1>

<h1 className="text-xl md:text-2xl lg:text-4xl font-bold"> Your Journey Begins Here</h1>

<p className="text-sm font-sans mt-6 max-w-96">Your premier destination for exquisite properties, offering unparalleled elegance, opulence, and personalized service. Begin your journey today.</p>

<a href="#featured" className="btn bg-[#5E503F] border-none text-white mt-6 animate__animated animate__pulse animate__infinite	">Show Estates</a>
        </div>
    );
};

export default BannerText;