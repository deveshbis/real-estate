import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'animate.css';


const PropertyCard = ({ property }) => {
    const { id, estate_title, description, image, area, location } = property;
    return (
        <div className="card md:w-80 lg:w-96 glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title animate__fadeInLeft">{estate_title}</h2>
                <p>{description.slice(0, 100)}</p>
                <hr />
                <p> <span className='font-bold'>Location: </span> {location}</p>
                <hr />
                <hr />
                <p><span className='font-bold'>Area: </span> {area}</p>
                <hr />
                <div className="card-actions justify-end">
                    <Link to= {`/property/${id}`}><button className="btn bg-green-700 text-white hover:bg-black">View Property</button></Link>
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
