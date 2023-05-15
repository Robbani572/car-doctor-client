

const BookingsTable = ({ booking }) => {

    const { img, service_title, email, price, date } = booking;
    return (
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="avatar">
                        <div className="w-14 h-14 rounded">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </td>
                <td>
                    {service_title}
                </td>
                <td>
                    {email}
                </td>
                <td>
                    {price}
                </td>
                <td>
                    {date}
                </td>

                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
    );
};

export default BookingsTable;