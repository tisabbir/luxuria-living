import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Estate = ({estate}) => {

    const {

        id,
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image,
        view_property_button
    } =estate;

    return (
        <div className="w-80 p-4 bg-[#EAE0D5] rounded-lg text-center space-y-2">
           <div className="relative">
           <img className="w-full rounded-lg" src={image} alt="" />

            <p className="bg-white absolute top-4 right-0 px-2 rounded-l-lg ">For {status}</p>

            <p className="bg-white absolute bottom-4 right-0 px-2 rounded-l-lg ">{area}</p>

           </div>
           <h1 className="text-xl">{estate_title}</h1>
           <div className=" text-[#5E503F] flex items-center justify-center gap-2">{segment_name} <div className="flex items-center gap-1 justify-center"><CiLocationOn /> {location}</div> </div>
           
           <h4 className="text-3xl" >{price}</h4>

           <Link className="btn bg-[#5E503F] w-full text-white">{view_property_button}</Link>

           
           
           
        </div>
    );
};

export default Estate;