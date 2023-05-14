import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";


const Bookings = () => {

    const {user, loading} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5444/bookings?email=${user?.email}`

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setBookings(data)
        })
    }, [])

    return (
        <div>
            <h1>You have bookings: {bookings.length}</h1>            
        </div>
    );
};

export default Bookings;