// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../services/api";

// function PropertyDetails() {
//   const { id } = useParams();

//   const [property, setProperty] = useState(null);

//   useEffect(() => {
//     fetchProperty();
//   }, []);

//   const fetchProperty = async () => {
//     try {
//       const response = await api.get(`/properties/${id}`);

//       setProperty(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!property) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div
//       style={{
//         maxWidth: "800px",
//         margin: "40px auto",
//         padding: "20px",
//       }}
//     >

//       {property.image && (
//   <img
//     src={`http://localhost:5000/uploads/${property.image}`}
//     alt={property.title}
//     style={{
//       width: "100%",
//       maxHeight: "450px",
//       objectFit: "cover",
//       borderRadius: "10px",
//       marginBottom: "20px",
//     }}
//   />
// )}
 


//       <h1>{property.title}</h1>

//       <hr />

//       <p>
//         <strong>Description:</strong>{" "}
//         {property.description}
//       </p>

//       <p>
//         <strong>City:</strong> {property.city}
//       </p>

//       <p>
//         <strong>Address:</strong> {property.address}
//       </p>

//       <p>
//         <strong>Rent:</strong> Rs. {property.rent}
//       </p>

//       <p>
//         <strong>Property Type:</strong>{" "}
//         {property.property_type}
//       </p>

//       <hr />

//       <h3>Owner Information</h3>

//       <p>
//         <strong>Name:</strong>{" "}
//         {property.owner_name}
//       </p>

//       <p>
//         <strong>Email:</strong>{" "}
//         {property.owner_email}
//       </p>
//     </div>
//   );
// }

// export default PropertyDetails;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [bookingData, setBookingData] = useState({
    check_in: "",
    check_out: "",
    guests: 1,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const response = await api.get(`/properties/${id}`);
      setProperty(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBooking = async () => {
  try {
    setLoading(true);

    const token = localStorage.getItem("token");

    await api.post(
      "/bookings",
      {
        property_id: property.id,
        check_in: bookingData.check_in,
        check_out: bookingData.check_out,
        guests: bookingData.guests,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Booking Request Sent Successfully 🎉");

    setBookingData({
      check_in: "",
      check_out: "",
      guests: 1,
    });

  } catch (error) {
    alert(error.response?.data?.message || "Booking Failed");
  } finally {
    setLoading(false);
  }
};

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-semibold text-neutral-500 tracking-wide">Loading premium stay details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased font-sans pb-24">
      {/* Premium Content Center Constraint */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 md:px-10 pt-6">
        
        {/* Editorial Top Headline Header Block */}
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 mb-2">
            {property.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-neutral-600">
            <div className="flex items-center gap-1">
              <span className="text-rose-500">★</span>
              <span className="text-neutral-900">4.92</span>
              <span className="text-neutral-400 font-normal">(Verified)</span>
            </div>
            <span className="text-neutral-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1 text-neutral-800 underline underline-offset-2 cursor-pointer hover:text-rose-600 transition-colors">
              📍 {property.address}, {property.city}
            </div>
          </div>
        </header>

        {/* Dynamic Image Portfolio Canvas Frame */}
        {property.image && (
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-100 shadow-inner group mb-10">
            <img
              src={`http://localhost:5000/uploads/${property.image}`}
              alt={property.title}
              className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Asymmetric 2-Column Desktop Modular Layout Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-start">
          
          {/* Left Main Body Panel Column (Property Profile Blueprint) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Core Architectural Type Pill Grid */}
            <div className="flex flex-wrap items-center gap-3 pb-8 border-b border-neutral-100">
              <div className="bg-neutral-50 border border-neutral-200/60 px-4 py-2.5 rounded-xl flex items-center gap-2">
                <span className="text-lg">🏢</span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Category</span>
                  <span className="text-xs font-bold text-neutral-800">{property.property_type || "Premium Stay"}</span>
                </div>
              </div>
              <div className="bg-neutral-50 border border-neutral-200/60 px-4 py-2.5 rounded-xl flex items-center gap-2">
                <span className="text-lg">📍</span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Region</span>
                  <span className="text-xs font-bold text-neutral-800">{property.city}</span>
                </div>
              </div>
              <div className="bg-neutral-50 border border-neutral-200/60 px-4 py-2.5 rounded-xl flex items-center gap-2">
                <span className="text-lg">✨</span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Status</span>
                  <span className="text-xs font-bold text-emerald-600">Available Now</span>
                </div>
              </div>
            </div>

            {/* Platform Feature Narrative Story */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                About this exceptional space
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed font-light whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Static Premium Luxury Amenities Mockup Layer */}
            <div className="pt-8 border-t border-neutral-100 space-y-6">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">What this place offers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-neutral-600 font-light">
                  <span className="text-base">📶</span> High-Speed Wireless Internet Connection
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600 font-light">
                  <span className="text-base">🚗</span> Reserved Secure Gated Car Parking Area
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600 font-light">
                  <span className="text-base">⚡</span> 24/7 Power Backup Systems Integrated
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-600 font-light">
                  <span className="text-base">🛡️</span> Round-the-Clock Dedicated Perimeter Security
                </div>
              </div>
            </div>

          </div>

          {/* Right Floating Sidebar Panel Column (Sticky Checkout Pricing & Host Wrapper) */}
          <div className="lg:col-span-1 lg:sticky lg:top-28">
            <div className="bg-white border border-neutral-200/70 rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] space-y-6">
              
              {/* Checkout Pricing Header */}
              <div className="flex items-baseline justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-neutral-900 tracking-tight">
                    Rs. {Number(property.rent).toLocaleString()}
                  </span>
                  <span className="text-xs font-semibold text-neutral-400">/ month</span>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Best Price</span>
              </div>

              {/* Host Contact Information Module */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  Property Management Details
                </h4>
                
                <div className="flex items-center gap-3 bg-neutral-50 border border-neutral-100 p-3.5 rounded-xl">
                  <div className="w-10 h-10 bg-neutral-900 text-white rounded-full font-bold text-sm flex items-center justify-center shadow-sm shrink-0">
                    {property.owner_name ? property.owner_name.charAt(0).toUpperCase() : "👤"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-neutral-900 truncate">{property.owner_name}</div>
                    <div className="text-xs font-medium text-neutral-400 truncate">{property.owner_email}</div>
                  </div>
                </div>
              </div>

              {/* Instant Call To Actions (SaaS Layout Paradigm) */}
              
              <div className="space-y-2.5 pt-2">
                <div className="space-y-4">

  <div>
    <label className="text-xs font-semibold text-neutral-500">
      Check In
    </label>

    <input
      type="date"
      value={bookingData.check_in}
      onChange={(e) =>
        setBookingData({
          ...bookingData,
          check_in: e.target.value,
        })
      }
      className="w-full mt-1 border rounded-xl p-3"
    />
  </div>

  <div>
    <label className="text-xs font-semibold text-neutral-500">
      Check Out
    </label>

    <input
      type="date"
      value={bookingData.check_out}
      onChange={(e) =>
        setBookingData({
          ...bookingData,
          check_out: e.target.value,
        })
      }
      className="w-full mt-1 border rounded-xl p-3"
    />
  </div>

  <div>
    <label className="text-xs font-semibold text-neutral-500">
      Guests
    </label>

    <input
      type="number"
      min="1"
      value={bookingData.guests}
      onChange={(e) =>
        setBookingData({
          ...bookingData,
          guests: e.target.value,
        })
      }
      className="w-full mt-1 border rounded-xl p-3"
    />
  </div>

</div>
               <button
  onClick={handleBooking}
  disabled={loading}
  className="w-full bg-rose-500 hover:bg-rose-600 text-white h-12 rounded-xl font-bold transition"
>
  {loading ? "Sending..." : "Book Now"}
</button>
                
                <p className="text-[11px] text-center text-neutral-400 font-medium leading-normal px-2">
                  No immediate commitment or charges required. You will connect directly with the host to complete verification.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default PropertyDetails;