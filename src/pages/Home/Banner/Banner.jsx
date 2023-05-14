import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {

    const heroContent = <>
        <div className="absolute gap-4 w-full h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 md:ml-24 w-2/5'>
                <h2 className='text-7xl font-bold'>Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='flex gap-4'>
                    <button className="btn btn-primary">Button</button>
                    <button className="btn btn-outline btn-secondary">Button</button>
                </div>
            </div>
        </div>
    </>


    return (
        <div className="carousel w-full mt-24">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img src={img1} className="w-full" />
                {heroContent}
                <div className="absolute flex justify-end gap-4 bottom-0 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src={img2} className="w-full" />
                {heroContent}
                <div className="absolute flex justify-end gap-4 bottom-0 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src={img3} className="w-full" />
                {heroContent}
                <div className="absolute flex justify-end gap-4 bottom-0 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src={img4} className="w-full" />
                {heroContent}
                <div className="absolute flex justify-end gap-4 bottom-0 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full h-[600px]">
                <img src={img5} className="w-full" />
                {heroContent}
                <div className="absolute flex justify-end gap-4 bottom-0 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full h-[600px]">
                <img src={img6} className="w-full" />
                {heroContent}
                <div className="absolute flex justify-end gap-4 bottom-0 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;