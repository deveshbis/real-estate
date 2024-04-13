
import { MdSell } from "react-icons/md";
import { useLoaderData, useParams } from 'react-router-dom';
import HelmetTitle from "../components/HelmetTitle/HelmetTitle";

const ViewProperty = () => {
    const { id } = useParams();
    const details = useLoaderData();

    const propertyId = parseInt(id, 10);

    const property = details.find(property => property.id === propertyId);

    if (!property) {
        return <div>Property not found</div>;
    }

    return (

        <section className='mt-20 px-5'>
            <HelmetTitle title={`View Property: 0${id}`}></HelmetTitle>

            <div className="mb-10">
                <div className='flex justify-between lg:flex-row md:flex-row flex-col items-center mb-8'>
                    <div className="container flex flex-col px-4 space-y-3 mb-5">
                        <h1 className=" mt-2 lg:mt-4 text-xl font-bold lg:text-3xl">{property.estate_title}</h1>
                        <p className="mt-2 lg:mt-4 text-lg sm:mb-12 ">{property.description.slice(0, 100)}</p>
                        <p className='flex gap-3 mt-2 lg:mt-4 text-lg sm:mb-12'>
                            {property.facilities.map((facility, index) => (
                                <ul key={index} className='bg-blue-800 lg:p-2 md:p-1 rounded-lg text-white'>{facility}</ul>
                            ))}
                        </p>
                    </div>
                    <div className='bg-blue-900 text-white p-5 flex justify-between items-center gap-10 rounded-xl'>
                        <MdSell className="text-4xl "></MdSell>
                        <div>
                            <h5>For {property.status}</h5>
                            <h5 className="text-3xl">{property.price}</h5>
                        </div>
                    </div>
                </div>
                <img src={property.image} alt="" className="w-full lg:h-[600px] mx-auto dark:bg-gray-500 rounded-lg shadow-md " />
                <div className="mt-5">
                    <button className="btn btn-outline">{property.segment_name}</button>
                </div>
                <div>
                    <h4 className="text-2xl font-bold mt-3 mb-2">Location</h4>
                    <p>{property.location}</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold mt-3 mb-2">Description</h4>
                    <p>{property.description}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-5 mt-3">
                    <h1 className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Status: {property.status}</span>
                    </h1>

                    <h1 className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Area: {property.area}</span>
                    </h1>
                </div>
            </div>

        </section>
    );
};

export default ViewProperty;

