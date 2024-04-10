import { useEffect, useState } from "react";
import Estate from "./Estate";


const Estates = () => {

    const [estates, setEstates] = useState([]);

    useEffect(()=>{
        fetch('/estates.json')
        .then(res => res.json())
        .then(data => setEstates( data.luxury_estates))
        .catch(err => {
            console.log(err)
        })
    },[])

    console.log('Estates', estates);


    return (
        <div>
            {
                estates.map((estate, idx)=><Estate estate={estate} key={idx} />)
            }
        </div>
    );
};

export default Estates;