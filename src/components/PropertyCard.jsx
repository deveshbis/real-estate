import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    const { id, estate_title, description, image, price, area, facilities, location } = property;
    return (
        <div className="card w-96 glass">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <p><span className='font-bold'>Price: </span> {price}</p>
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <hr />
                <p> <span className='font-bold'>Location: </span> {location}</p>
                <hr />
                <p>
                    <span className='font-bold'>Facilities: </span>
                    {facilities.map((facility, index) => (
                        <span key={index} className="mr-2">{facility}</span>
                    ))}
                </p>
                <hr />
                <p><span className='font-bold'>Area: </span> {area}</p>
                <hr />
                <div className="card-actions justify-end">
                    <Link to= {`/property/${id}`}><button className="btn btn-primary">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

PropertyCard.propTypes = {
    property: PropTypes.shape({
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
