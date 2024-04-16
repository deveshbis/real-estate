import clientImg1 from '../assets/client1.webp'
import clientImg2 from '../assets/client2.jpg'
import clientImg3 from '../assets/client3.jpg'
import clientImg4 from '../assets/client4.jpg'

const Review = () => {
    return (
        <div className="md:px-10 px-3 rounded-2xl mt-5">
            <h2 className="text-center text-xl font-semibold mt-2" data-aos="fade-up" data-aos-duration="3000">Our Testomonial</h2>
            <h1 className="text-center text-4xl font-bold mt-2" data-aos="flip-up" data-aos-duration="3000">What Client Say</h1>
            <p className="text-center mt-2 mb-3" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500" data-aos-duration="3000">Luxurious resort offering stunning ocean views, private villas, <br />infinity pools, exclusive spa services, and gourmet dining experiences.</p>
            <div className="carousel w-full  bg-teal-600 text-white rounded-2xl" >
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4" data-aos="fade-right" data-aos-duration="3000">
                                <div>
                                    <img src={clientImg1} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Michael Johnson</h4>
                                    <span className="text-xs dark:text-gray-600">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700" data-aos="fade-left" data-aos-duration="3000">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600" data-aos="flip-up" data-aos-duration="3000">
                            <p>Exquisite properties, unparalleled elegance, luxury redefined in prime locations</p>
                            <p>Discover opulent mansions and lavish penthouses, each embodying sophistication and luxury, offering an unparalleled lifestyle experience in prestigious neighborhoods worldwide.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src={clientImg2} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Sarah Williams</h4>
                                    <span className="text-xs dark:text-gray-600">4 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">4.3</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <p>Exclusive estates, lavish living, redefine luxury with iconic properties.</p>
                            <p>Indulge in the epitome of sophistication and elegance, where every residence exudes opulence and offers unparalleled luxury living experiences.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src={clientImg3} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Christopher Martinezs</h4>
                                    <span className="text-xs dark:text-gray-600">1 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">4.7</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <p>Elegant homes, exquisite designs, redefine luxury living with bespoke properties.</p>
                            <p>Explore prestigious addresses and unparalleled craftsmanship, where luxury transcends expectation, creating an unparalleled lifestyle of sophistication and opulence.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src={clientImg4} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Jennifer Lee</h4>
                                    <span className="text-xs dark:text-gray-600">5 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">4.1</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <p>Sophisticated residences, impeccable design, redefine luxury living with exclusivity.</p>
                            <p>Discover opulent estates and prestigious properties, where every detail exudes elegance, offering an unparalleled lifestyle of luxury and refinement.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;

