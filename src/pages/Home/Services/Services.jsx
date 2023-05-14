import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5444/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="min-h-screen">
            <div className="space-y-7 text-center md:px-52">
                <h3 className='text-3xl font-bold text-orange-600'>Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {
                    services.map(service => <Service

                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;