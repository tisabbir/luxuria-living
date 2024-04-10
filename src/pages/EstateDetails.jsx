import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CiLocationOn } from "react-icons/ci";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";

const EstateDetails = () => {

    const {id} = useParams();

   
    // const {estates} =  useAuth();

    const data = useLoaderData();
    const estates = data.luxury_estates;
    const estate = estates.find(estate => parseInt(estate.id)  === parseInt(id));

    

   
    
    // const [card, setCard] = useState();

    // setCard(estate);
   

    const {

        
        rating,
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        detailed_location,
        facilities,
        image,
    } =estate;
    

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-2xl rounded-lg shadow-2xl" />
    <div className="space-y-3">
      <h1 className="text-5xl font-bold">{estate_title}</h1>
      
        <div className="flex items-center gap-2">
            <hr className="flex-1 border-2 border-black" />
            <p className="text-center text-xl ">For {status}</p>
            <hr className="flex-1 border-2 border-black" />
        </div>

      <p className=" max-w-2xl mx-auto"> <span className="text-xl font-bold">Description :</span> {description}</p>


      <p className="max-w-2xl mx-auto"> <span className="text-xl font-bold">Category : </span> {segment_name}</p>


      <h4 className="text-xl font-bold " > Exclusive Price : <span className="  text-3xl text-green-600"> {price}</span> (after 20% discount)  </h4>

      <div className="flex gap-1 text-xl font-bold items-center">Ratings : <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfStroke /> {rating} </div>

      <div className="flex items-center justify-left gap-2"> <span className="text-xl font-bold">Area :  </span>  {area}  </div>

      <div className="flex items-center gap-1"> 
      <span className="text-xl font-bold flex items-center">Location : </span>
      
      
       {detailed_location}</div>

       <p className="max-w-2xl mx-auto"> <span className="text-xl font-bold">Facilities : </span>
       
       <ul className=" list-disc">
       {
        facilities.map((facility, idx) => <li className="list-item ml-12" key={idx}>{facility}</li>)
       }
       </ul>
       
        </p>
      
    </div>
  </div>
</div>
            
            
           
        </div>
    );
};

export default EstateDetails;