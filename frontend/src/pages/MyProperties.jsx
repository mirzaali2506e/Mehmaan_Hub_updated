// import { useEffect, useState } from "react";
// import api from "../services/api";
// import { Link } from "react-router-dom";

// const deleteProperty = async (id) => {
//   const confirmDelete = window.confirm(
//     "Are you sure you want to delete this property?"
//   );

//   if (!confirmDelete) return;

//   try {
//     const token = localStorage.getItem("token");

//     await api.delete(`/properties/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     setProperties(
//       properties.filter(
//         (property) => property.id !== id
//       )
//     );

//     alert("Property Deleted Successfully");
//   } catch (error) {
//     console.error(error);
//   }
// };

// function MyProperties() {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     fetchMyProperties();
//   }, []);

//   const fetchMyProperties = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await api.get(
//         "/properties/my-properties",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setProperties(response.data);
//     } catch (error) {
//       console.error("Error fetching properties:", error);
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>My Properties</h1>

//       {properties.length === 0 ? (
//         <p>No Properties Found</p>
//       ) : (
//         properties.map((property) => (
//           <div
//             key={property.id}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               padding: "20px",
//               marginBottom: "20px",
//             }}
//           >
//             <h3>{property.title}</h3>

//             <p>
//               <strong>City:</strong> {property.city}
//             </p>

//             <p>
//               <strong>Address:</strong> {property.address}
//             </p>

//             <p>
//               <strong>Rent:</strong> Rs. {property.rent}
//             </p>

//             <Link to={`/edit-property/${property.id}`}>
//   <button>Edit</button>
// </Link>


//             <button
//   onClick={() => deleteProperty(property.id)}
// >
//   Delete
// </button>

//             <p>
//               <strong>Type:</strong> {property.property_type}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default MyProperties;


import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function MyProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchMyProperties();
  }, []);

  const fetchMyProperties = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get(
        "/properties/my-properties",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const deleteProperty = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await api.delete(`/properties/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProperties(
        properties.filter(
          (property) => property.id !== id
        )
      );

      alert("Property Deleted Successfully");
    } catch (error) {
      console.error(error);
    }
  };

  // Dynamic Calculated Metrics for Premium Dashboard Analytics
  const totalProperties = properties.length;
  const uniqueCities = [...new Set(properties.map(p => p.city?.toLowerCase()))].filter(Boolean).length;
  const totalRentPool = properties.reduce((acc, curr) => acc + Number(curr.rent || 0), 0);

  return (
    <div className="min-h-screen bg-neutral-50/50 text-neutral-900 antialiased font-sans pb-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
        
        {/* SECTION 1: High-End Dashboard Header Panel */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              My Properties
            </h1>
            <p className="text-sm text-neutral-400 font-medium tracking-tight">
              Manage your listed estate parameters, verify booking metrics, and track monetization indexes.
            </p>
          </div>
          <Link to="/add-property" className="shrink-0">
            <button className="w-full sm:w-auto inline-flex items-center justify-center bg-neutral-900 hover:bg-rose-500 text-white text-xs font-bold tracking-wider uppercase px-5 h-11 rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98]">
              ＋ List Another Space
            </button>
          </Link>
        </header>

        {/* SECTION 2: Dynamic Analytical Metrics Matrix Cards */}
        {properties.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-neutral-200/60 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between h-28">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Total Properties</span>
              <div className="text-2xl font-black text-neutral-950 tracking-tight mt-1">
                {String(totalProperties).padStart(2, '0')} <span className="text-xs font-medium text-neutral-400">Units</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200/60 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between h-28">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Active Listings</span>
              <div className="text-2xl font-black text-emerald-600 tracking-tight mt-1 flex items-center gap-2">
                {String(totalProperties).padStart(2, '0')}{" "}
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
            <div className="bg-white border border-neutral-200/60 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between h-28">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Cities Covered</span>
              <div className="text-2xl font-black text-neutral-950 tracking-tight mt-1">
                {String(uniqueCities).padStart(2, '0')} <span className="text-xs font-medium text-neutral-400">Regions</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200/60 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between h-28">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Monthly Yield Valuation</span>
              <div className="text-xl font-black text-rose-500 tracking-tight mt-1 truncate">
                Rs. {totalRentPool.toLocaleString()}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: Main Asset Grid Layout & Conditionally Rendered States */}
        {properties.length === 0 ? (
          /* Premium Empty Slate Mockup Graphic Block */
          <div className="bg-white rounded-2xl border border-neutral-200/60 p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] max-w-md mx-auto space-y-5 my-12">
            <div className="w-16 h-16 bg-neutral-50 border border-neutral-200/60 rounded-2xl flex items-center justify-center text-2xl mx-auto shadow-inner">
              📭
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-neutral-900">No properties linked yet</h3>
              <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-normal">
                You haven't initialized any property spaces on Mehmaan Hub yet. Publish your first accommodation listing to start accepting reservations.
              </p>
            </div>
            <Link to="/add-property" className="inline-block pt-1">
              <button className="bg-neutral-900 hover:bg-rose-500 text-white text-xs font-bold tracking-wider uppercase h-10 px-5 rounded-xl transition-colors shadow-sm">
                Create First Listing
              </button>
            </Link>
          </div>
        ) : (
          /* Premium SaaS Style Grid Container */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl border border-neutral-200/60 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col h-full transform hover:-translate-y-0.5"
              >
                {/* Micro Image Visual Framework with Dynamic Backup Frame */}
                <div className="relative aspect-[16/10] bg-neutral-100 border-b border-neutral-100 overflow-hidden shrink-0">
                  {property.image ? (
                    <img
                      src={`http://localhost:5000/uploads/${property.image}`}
                      alt={property.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-neutral-300 text-xs font-medium bg-neutral-50 gap-1.5">
                      <span className="text-xl">🏙️</span> No Media Attached
                    </div>
                  )}
                  
                  {/* Category Pill Badges on image overlay canvas */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span className="bg-neutral-900/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm">
                      {property.property_type || "Stay"}
                    </span>
                    <span className="bg-white/95 backdrop-blur-sm text-neutral-800 border border-neutral-200/40 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm">
                      📍 {property.city}
                    </span>
                  </div>
                </div>

                {/* Core Descriptive Text & Specification Parameters */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-5 bg-white">
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-black text-neutral-900 tracking-tight">
                        Rs. {Number(property.rent).toLocaleString()}
                      </span>
                      <span className="text-[11px] font-semibold text-neutral-400">/mo</span>
                    </div>

                    <h3 className="text-sm font-bold text-neutral-800 line-clamp-2 tracking-tight leading-snug group-hover:text-rose-500 transition-colors duration-150">
                      {property.title}
                    </h3>
                    
                    <p className="text-xs text-neutral-400 font-medium truncate pt-1">
                      {property.address}
                    </p>
                  </div>

                  {/* Operational Controls Deck Drawer (Edit, View, Delete Interface) */}
                  <div className="pt-4 border-t border-neutral-100 grid grid-cols-3 gap-2 shrink-0">
                    <Link to={`/property/${property.id}`} className="w-full">
                      <button className="w-full h-9 inline-flex items-center justify-center bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/60 text-neutral-700 text-xs font-bold rounded-lg transition-colors">
                        View
                      </button>
                    </Link>

                    <Link to={`/edit-property/${property.id}`} className="w-full">
                      <button className="w-full h-9 inline-flex items-center justify-center bg-neutral-50 hover:bg-amber-50 border border-neutral-200/60 text-neutral-700 hover:text-amber-700 hover:border-amber-200 text-xs font-bold rounded-lg transition-colors">
                        Edit
                      </button>
                    </Link>

                    <button
                      onClick={() => deleteProperty(property.id)}
                      className="w-full h-9 inline-flex items-center justify-center bg-neutral-50 hover:bg-rose-50 border border-neutral-200/60 text-neutral-600 hover:text-rose-600 hover:border-rose-200 text-xs font-bold rounded-lg transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default MyProperties;