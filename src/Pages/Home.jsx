import Banner from "../components/Banner";
import { useLoaderData } from 'react-router-dom';
import PropertyCard from "../components/PropertyCard";
import HelmetTitle from "../components/HelmetTitle/HelmetTitle";
import Review from "../components/Review";
import PhotoGallery from "../components/PhotoGallery";


const Home = () => {

    const property = useLoaderData()

    return (
        <div>
            <HelmetTitle title="Home"></HelmetTitle>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-7 space-y-3">
                <h1 className="text-4xl text-center animate__bounceOut font-extrabold" data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" data-aos-duration="3000">Display Latest Properties</h1>
                <p className="text-center pb-10" data-aos="fade-left" data-aos-duration="3000">Get started by choosing from one of our built page house to showcase your properties.</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:px-5 px-3 ">
                    {
                        property.map(aProperty => <PropertyCard key={aProperty.id} property={aProperty}></PropertyCard>)
                    }
                </div>
            </div>
            <PhotoGallery></PhotoGallery>
            <div className="">
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;