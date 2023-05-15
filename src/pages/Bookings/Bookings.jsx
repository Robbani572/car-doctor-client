import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import BookingsTable from "./BookingsTable";


const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5444/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [])

    return (
        <div>
            <h1>You have bookings: {bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               
                            </th>
                            <th>Service</th>
                            <th>Service Name</th>
                            <th>User Email</th>
                            <th>Price</th>
                            <th>Date(YY/MM/DD)</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingsTable
                                key={booking._id}
                                booking={booking}
                            ></BookingsTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;