import Banner from "../components/Banner";
import { useLoaderData } from 'react-router-dom';
import PropertyCard from "../components/PropertyCard";


const Home = () => {

    const property = useLoaderData()
    // console.log(property);
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-7 space-y-3">
                <h1 className="text-4xl text-center ">Display Latest Properties</h1>
                <p className="text-center">Get started by choosing from one of our built page house to showcase your properties.</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                    {
                        property.map(aProperty=> <PropertyCard key={aProperty.id} property={aProperty}></PropertyCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;