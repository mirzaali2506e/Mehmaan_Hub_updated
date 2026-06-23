// import { Link } from "react-router-dom";

// function PropertyCard({ property }) {
//   return (
//     <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">

//       {property.image && (
//         <img
//           src={`http://localhost:5000/uploads/${property.image}`}
//           alt={property.title}
//           className="w-full h-56 object-cover"
//         />
//       )}

//       <div className="p-5">

//         <div className="flex justify-between items-center mb-3">
//           <h3 className="text-xl font-semibold text-gray-800">
//             {property.title}
//           </h3>

//           <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
//             {property.city}
//           </span>
//         </div>

//         <p className="text-2xl font-bold text-green-600 mb-3">
//           Rs. {property.rent}
//         </p>

//         <p className="text-gray-600 mb-4">
//           Owner: {property.owner_name}
//         </p>

//         <Link to={`/property/${property.id}`}>
//           <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
//             View Details
//           </button>
//         </Link>

//       </div>
//     </div>
//   );
// }

// export default PropertyCard;

import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="group bg-white rounded-2xl border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full overflow-hidden transform hover:-translate-y-1">
      
      {/* Image Gallery Wrapper with Inner Frame Protection */}
      <div className="relative aspect-[4/3] w-full bg-neutral-50 overflow-hidden shrink-0 border-b border-neutral-100">
        {property.image && (
          <img
            src={`http://localhost:5000/uploads/${property.image}`}
            alt={property.title}
            className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        )}

        {/* City Location Tag Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-[11px] font-bold tracking-wider uppercase shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 text-rose-400"
            >
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742c1.002-.722 2.607-1.977 3.86-4.117 1.28-2.19 1.948-4.606 1.948-6.992 0-4.935-3.921-9-8.999-9-5.078 0-9 4.065-9 9 0 2.386.669 4.802 1.948 6.992 1.253 2.14 2.858 3.395 3.86 4.117a16.975 16.975 0 0 0 1.144.742ZM12 13.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clipRule="evenodd" />
            </svg>
            {property.city}
          </span>
        </div>
      </div>

      {/* Styled Core Specs & Meta Text Content Block */}
      <div className="p-6 flex flex-col flex-1 justify-between bg-white">
        
        <div className="space-y-2.5">
          {/* Section 1: Pricing Tier Metric */}
          <div className="flex items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-neutral-900 tracking-tight">
                Rs. {Number(property.rent).toLocaleString()}
              </span>
              <span className="text-xs font-semibold text-neutral-400">/mo</span>
            </div>
            
            {/* Trust factor micro indicator */}
            <div className="flex items-center gap-1 text-xs font-bold text-neutral-800 bg-neutral-50 px-2 py-1 rounded-md border border-neutral-200/50">
              <span className="text-rose-500">★</span>
              <span>4.9</span>
            </div>
          </div>

          {/* Section 2: Property Editorial Title Headline */}
          <h3 className="text-[16px] font-bold text-neutral-800 tracking-tight leading-snug line-clamp-2 group-hover:text-rose-500 transition-colors duration-200">
            {property.title}
          </h3>
        </div>

        {/* Section 3: Professional Separator & Control Deck */}
        <div className="pt-4 mt-2 border-t border-neutral-100 flex items-center justify-between gap-4">
          
          {/* Micro Managed Profile Meta */}
          <div className="flex flex-col truncate min-w-0">
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Verified Host</span>
            <span className="text-xs font-semibold text-neutral-600 truncate">{property.owner_name}</span>
          </div>

          {/* Clean Rounded Premium Action Routing Button */}
          <Link to={`/property/${property.id}`} className="shrink-0">
            <button className="inline-flex items-center justify-center bg-neutral-900 hover:bg-rose-500 text-white text-xs font-bold tracking-wide px-4 h-10 rounded-xl transition-all duration-200 shadow-sm shadow-neutral-950/5 active:scale-[0.98]">
              Details
            </button>
          </Link>
          
        </div>

      </div>

    </div>
  );
}

export default PropertyCard;