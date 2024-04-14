import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'animate.css';


const PropertyCard = ({ property }) => {
    const { id, estate_title, description, image, area, location } = property;
    return (
        <div className="card md:w-80 lg:w-[460px] lg:ml-8 glass border border-black border-solid" data-aos="zoom-out-up" data-aos-duration="3000">
            <figure><img src={image} alt="car!" data-aos="zoom-in" data-aos-duration="3000"/></figure>
            <div className="card-body " >
                <h2 className="card-title animate__fadeInLeft" data-aos="fade-up-left"
                data-aos-duration="3000">{estate_title}</h2>
                <p data-aos="fade-up-right"
                data-aos-duration="3000">{description.slice(0, 100)}</p>
                <hr />
                <p data-aos="flip-up" data-aos-duration="3000"> <span className='font-bold' >Location: </span> {location}</p>
                <hr />
                <hr />
                <p data-aos="fade-left" data-aos-duration="3000"><span className='font-bold'>Area: </span> {area}</p>
                <hr />
                <div className="card-actions justify-end">
                    <Link to={`/property/${id}`}><button className="btn bg-teal-600 text-white hover:bg-black" data-aos="fade-right" data-aos-duration="2000">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

PropertyCard.propTypes = {
    property: PropTypes.shape({
        id: PropTypes.string.isRequired,
        estate_title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
        location: PropTypes.string.isRequired
    }).isRequired
};

export default PropertyCard;
