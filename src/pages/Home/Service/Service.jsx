import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {

    const { title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h3 className="text-3xl font-bold">{title}</h3>
                <div className="flex justify-between items-center mt-8">
                    <p className="text-orange-600 font-bold text-xl">${price}</p>
                    <Link><FaArrowRight></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;