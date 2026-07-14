import { useEffect, useState } from "react";
import api from "../services/api";

function OwnerBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get(
        "/bookings/owner-bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(response.data);

    } catch (error) {
      console.log(error);
    }
  };
  const updateStatus = async (id, status) => {
  try {
    const token = localStorage.getItem("token");

    await api.put(
      `/bookings/${id}`,
      {
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchBookings();

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Booking Requests
      </h1>

      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="border rounded-xl p-5 mb-4"
        >
          <h2 className="font-bold text-lg">
            {booking.title}
          </h2>

          <p>Guest : {booking.tenant_name}</p>

          <p>
            {booking.check_in} → {booking.check_out}
          </p>

          <p>Guests : {booking.guests}</p>

          <p>Status : {booking.status}</p>
          {
  booking.status === "pending" && (
    <div className="flex gap-3 mt-4">

      <button
        onClick={() => updateStatus(booking.id, "accepted")}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
      >
        Accept
      </button>

      <button
        onClick={() => updateStatus(booking.id, "rejected")}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
      >
        Reject
      </button>

    </div>
  )
}
        </div>
      ))}
    </div>
  );
  
}

export default OwnerBookings;