import { Link } from 'react-router-dom';
import errorPage from '../assets/errorPage.png';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen lg:px-32 md:px-12 px-5">
            <img src={errorPage} className='w-full h-auto max-h-[600px]' alt="" />
            <Link to='/' className='mt-4'>
                <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Go to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;
