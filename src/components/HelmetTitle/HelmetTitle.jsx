
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';

const HelmetTitle = ({title}) => {
    return (
        <Helmet>
            <title>
                {title}
            </title>
        </Helmet>
    );
};
HelmetTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default HelmetTitle;