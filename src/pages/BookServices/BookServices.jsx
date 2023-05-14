import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const BookServices = () => {

    const service = useLoaderData()
    const {_id, title, price, img } = service;
    const {user} = useContext(AuthContext)
    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.number.value;
        const message = form.message.value;

        const order = {
            customerName: name,
            img: img,
            email,
            date,
            message,
            service_title: title,
            service_id: _id,
            price: price
        }

        console.log(order)

        fetch('http://localhost:5444/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Booking added successfuly')
            }
        })
    }

    return (
        <div className='mt-24 mb-24 bg-[#F3F3F3]'>
            <h1 className='text-center text-4xl font-bold pt-12'>Book service: {title}</h1>
            <form onSubmit={handleBookService}>
                <div className="p-8 md:p-20">
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-12'>
                        <div className="form-control col">
                            <input type="text" name='name' placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="date" name='date' placeholder="Date" className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="email" name='email' placeholder="Email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control col">
                            <input type="text" name='number' placeholder="Number" defaultValue={'$'+ price} className="input input-bordered" required readOnly />
                        </div>
                        <div className="form-control col md:col-span-2">
                            <textarea className='w-full py-2 px-2 rounded border ' name="message" id="" cols="30" rows="10" placeholder='Messege'></textarea>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <button className="btn btn-block bg-orange-600 border-0 bottom-0">Order Confirm</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookServices;