import { useEffect, useState } from "react";
import api from "../services/api";
import BookingCard from "../components/BookingCard";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get(
        "/bookings/my-bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(response.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

//   console.log(bookings);
  console.log(bookings[0]);

  return (
    <div className="max-w-6xl mx-auto p-8">
     <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">

  <div>
    <h1 className="text-4xl font-extrabold text-neutral-900">
      My Bookings
    </h1>

    <p className="text-neutral-500 mt-2">
      Track all your booking requests in one place.
    </p>
  </div>

  <div className="mt-4 md:mt-0">
    <span className="bg-rose-100 text-rose-600 px-4 py-2 rounded-full font-semibold">
      {bookings.length} Booking{bookings.length !== 1 ? "s" : ""}
    </span>
  </div>

</div>

<div className="flex flex-wrap gap-3 mb-8">

  <button className="px-5 py-2 rounded-full bg-rose-500 text-white font-medium shadow-sm">
    All
  </button>

  <button className="px-5 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition">
    Pending
  </button>

  <button className="px-5 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition">
    Accepted
  </button>

  <button className="px-5 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition">
    Rejected
  </button>

</div>

      {bookings.map((booking) => (
  // <div
  //   key={booking.id}
  //   className="border rounded-xl p-4 mt-4"
  // >
  //   <h2 className="text-xl font-bold">
  //     {booking.title}
  //   </h2>

  //   <p>📍 {booking.city}</p>

  //   <p>Check In: {booking.check_in}</p>

  //   <p>Check Out: {booking.check_out}</p>

  //   <p>Guests: {booking.guests}</p>

  //   <p>Status: {booking.status}</p>
  // </div>
   <BookingCard
    key={booking.id}
    booking={booking}
  />
))}
    </div>
  );
}

export default MyBookings;