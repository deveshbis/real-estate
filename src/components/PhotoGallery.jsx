import gallery1 from '../assets/photoGallery/luxury1.jpg';
import gallery2 from '../assets/photoGallery/luxury2.jpg';
import gallery3 from '../assets/photoGallery/luxury3.webp';
import gallery4 from '../assets/photoGallery/luxury4.jpg';
import gallery5 from '../assets/photoGallery/luxury5.jpg';
import gallery6 from '../assets/photoGallery/luxury6.jpg';
import gallery7 from '../assets/photoGallery/luxury7.jpg';
import gallery8 from '../assets/photoGallery/luxury8.webp';
import gallery9 from '../assets/photoGallery/luxury9.jpg';

const PhotoGallery = () => {
    return (
        <div className="md:px-10 lg:px-3  rounded-2xl mt-5">

            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
            <div className="space-y-5">
                        <h1 className="text-4xl text-center font-extrabold" data-aos="zoom-in" data-aos-duration="3000">Our Photo Gallery</h1>
                        <h3 className="text-xl text-center" data-aos="fade-right" data-aos-duration="3000">Best of our <br /> Event portfolio Photos</h3>
                        <p className="text-center" data-aos="fade-left" data-aos-duration="3000">Indulge in opulent luxury at our resorts, where every detail exudes elegance, <br />
                         offering unparalleled comfort and relaxation amidst breathtaking surroundings.</p>
                    </div>
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">

                    <img src={gallery1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" data-aos="fade-up" data-aos-duration="3000"/>

                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" data-aos="fade-right" data-aos-duration="3000" src={gallery2} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" data-aos="fade-left" data-aos-duration="3000" src={gallery3} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" data-aos="flip-left" data-aos-duration="3000" src={gallery4} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" data-aos="flip-right" data-aos-duration="3000" src={gallery5} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" data-aos="flip-down" data-aos-duration="3000" src={gallery5}/>
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" data-aos="flip-up" data-aos-duration="3000" src={gallery6}/>
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" data-aos="zoom-in-up" data-aos-duration="3000" src={gallery7}/>
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" data-aos="zoom-in-left" data-aos-duration="3000" src={gallery8}/>
                    <img src={gallery9} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" data-aos="zoom-out" data-aos-duration="3000" />
                </div>
            </section>
        </div>
    );
};

export default PhotoGallery;