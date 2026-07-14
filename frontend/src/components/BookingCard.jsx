function BookingCard({ booking }) {
    const getStatusStyle = () => {
  switch (booking.status) {
    case "accepted":
      return "bg-green-100 text-green-700";

    case "rejected":
      return "bg-red-100 text-red-700";

    default:
      return "bg-yellow-100 text-yellow-700";
  }
};
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
  return (
   <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 md:flex">
      {/* Image */}
     <div className="md:w-1/3">

  <img
    src={`http://localhost:5000/uploads/${booking.image}`}
    alt={booking.title}
   className="w-full h-64 md:h-full object-cover"
  />

</div>

      {/* Content */}
    <div className="md:w-2/3 p-6 flex flex-col justify-between">

       <div className="flex justify-between items-start">

  <div>

    <h2 className="text-xl font-bold text-neutral-900">
      {booking.title}
    </h2>

    <p className="text-neutral-500 mt-1">
      📍 {booking.city}
    </p>

  </div>

  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle()}`}
  >
  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
  </span>

</div>

  <div className="grid grid-cols-2 gap-4 mt-6">

  <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
    <p className="text-xs text-neutral-500 font-medium">
     📅 Check In
    </p>

    <p className="mt-1 font-semibold text-neutral-900">
      {formatDate(booking.check_in)}
    </p>
  </div>

  <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
    <p className="text-xs text-neutral-500 font-medium">
      📅 Check Out
    </p>

    <p className="mt-1 font-semibold text-neutral-900">
      {formatDate(booking.check_out)}
    </p>
  </div>

  <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
    <p className="text-xs text-neutral-500 font-medium">
      👥 Guests
    </p>

    <p className="mt-1 font-semibold text-neutral-900">
      {booking.guests} Guest{booking.guests > 1 ? "s" : ""}
    </p>
  </div>

  <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
    <p className="text-xs text-neutral-500 font-medium">
     💰Monthly Rent
    </p>

    <p className="mt-1 font-semibold text-rose-500">
      Rs. {Number(booking.rent).toLocaleString()}
    </p>
  </div>

</div>

      </div>

    </div>
  );
}

export default BookingCard;