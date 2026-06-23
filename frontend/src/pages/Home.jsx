// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import PropertyCard from "../components/PropertyCard";
// import api from "../services/api";
// import heroImage from "../assets/hero-property.png";


// function Home() {
//   const [properties, setProperties] = useState([]);
//   const [city, setCity] = useState("");

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const fetchProperties = async () => {
//     try {
//       const response = await api.get("/properties");

//       setProperties(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

  
// const searchProperties = async () => {
//   try {
//     if (!city.trim()) {
//       fetchProperties();
//       return;
//     }

//     const response = await api.get(
//       `/properties/search?city=${city}`
//     );

//     setProperties(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const filteredProperties = properties.filter((property) =>
//   property.city
//     .toLowerCase()
//     .includes(city.toLowerCase())
// );



//   return (
//   <>
//     <Navbar />

//     <section
//       style={{
//         padding: "60px 40px",
//       }}
//     >

//     <div
//   className="relative h-[650px] bg-cover bg-center flex items-center"
//   style={{
//     backgroundImage: `url(${heroImage})`,
//   }}
// >
//   {/* Overlay */}
//   <div className="absolute inset-0 bg-white/60"></div>

//   {/* Content */}
//   <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
//     <div className="max-w-2xl">

//       <h1 className="text-6xl font-bold text-slate-900 leading-tight mb-4">
//         Find Your <br />
//         Perfect Stay
//       </h1>

//       <h2 className="text-3xl text-gray-600 font-semibold mb-6">
//         Rooms • Hostels • Apartments
//       </h2>

//       <p className="text-xl text-gray-700 mb-8">
//         Browse affordable properties across Pakistan.
//       </p>

//       {/* Search Box */}
//       <div className="bg-white rounded-2xl shadow-xl p-3 flex items-center max-w-3xl">

//         <input
//           type="text"
//           placeholder="Search by city..."
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="flex-1 px-5 py-4 text-lg outline-none"
//         />

//         <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">
//           Search
//         </button>

//       </div>

//       {/* Categories */}
//       <div className="flex gap-8 mt-8 text-lg font-medium">

//         <div className="flex items-center gap-2">
//           🏢 Apartments
//         </div>

//         <div className="flex items-center gap-2">
//           🛏 Rooms
//         </div>

//         <div className="flex items-center gap-2">
//           🏨 Hostels
//         </div>

//       </div>

//     </div>
//   </div>
// </div>
// <div className="max-w-7xl mx-auto px-8 py-12">

//   <h2 className="text-4xl font-bold mb-2">
//     Available Properties
//   </h2>

//   <p className="text-gray-500 mb-8">
//     Find the best places to stay
//   </p>

//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     {filteredProperties.map((property) => (
//       <PropertyCard
//         key={property.id}
//         property={property}
//       />
//     ))}
//   </div>

// </div>
//       <h1>Available Properties</h1>

//       <div
//   style={{
//     marginBottom: "20px",
//     display: "flex",
//     gap: "10px",
//   }}
// >
// <input
//   type="text"
//   placeholder="Search by city..."
//   value={city}
//   onChange={(e) => setCity(e.target.value)}
// />


//   {/* <button onClick={searchProperties}>
//     Search
//   </button>

//   <button onClick={fetchProperties}>
//     Reset
//   </button> */}
// </div>

//       {/* <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//           gap: "20px",
//           marginTop: "30px",
//         }}
//       >
//         {filteredProperties.map((property) => (
//   <PropertyCard
//     key={property.id}
//     property={property}
//   />
// ))}
//       </div> */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//   {filteredProperties.map((property) => (
//     <PropertyCard
//       key={property.id}
//       property={property}
//     />
//   ))}
// </div>
//     </section>
//   </>
// );
// }

// export default Home;





import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import api from "../services/api";
import heroImage from "../assets/hero-property.png";

function Home() {
  const [properties, setProperties] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await api.get("/properties");
      setProperties(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchProperties = async () => {
    try {
      if (!city.trim()) {
        fetchProperties();
        return;
      }

      const response = await api.get(`/properties/search?city=${city}`);
      setProperties(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredProperties = properties.filter((property) =>
    property.city.toLowerCase().includes(city.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-50/50 text-neutral-900 antialiased font-sans">
      <Navbar />

      {/* Luxury Immersive Hero Section */}
      <div
        className="relative h-[640px] w-full bg-cover bg-center flex items-center transition-all duration-500 ease-out"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Deep Premium Linear Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-900/40 to-transparent"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Minimalist Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-white uppercase">
                Premium Stays Across Pakistan
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
              Experience Luxury <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
                Without the Premium Price.
              </span>
            </h1>

            <p className="text-lg text-neutral-200 mb-10 max-w-lg font-light leading-relaxed">
              Discover verified rooms, apartments, and shared student spaces designed around your comfort and lifestyle.
            </p>

            {/* Integrated Airbnb-Style Search Console */}
            <div className="bg-white rounded-2xl md:rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2 w-full max-w-2xl border border-neutral-100 transition-all duration-300 focus-within:ring-4 focus-within:ring-rose-500/20">
              <div className="flex items-center flex-1 w-full px-4 py-3 md:py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-rose-500 mr-3 shrink-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.601Z" />
                </svg>
                <div className="flex flex-col w-full">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider hidden md:block">Location</span>
                  <input
                    type="text"
                    placeholder="Where are you going? (e.g. Islamabad)"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-neutral-800 placeholder-neutral-400 font-medium text-sm outline-none bg-transparent pt-0.5"
                  />
                </div>
              </div>

              <button
                onClick={searchProperties}
                className="w-full md:w-auto bg-rose-500 hover:bg-rose-600 active:scale-[0.98] text-white px-8 h-12 md:h-14 rounded-xl md:rounded-full font-bold text-sm tracking-wide shadow-lg shadow-rose-500/20 transition-all duration-200 shrink-0"
              >
                Search Stays
              </button>
            </div>

            {/* Horizontal Static Aesthetic Categories */}
            <div className="hidden sm:flex items-center gap-4 mt-8 text-xs font-semibold text-white/90">
              <span className="text-white/50">Popular options:</span>
              <button className="bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all">
                🏢 Corporate Apartments
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all">
                🛏 Luxury Rooms
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all">
                🏨 Hostels
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Property Inventory Metric Strip (Real Startup Metric View) */}
      <div className="bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-neutral-900 tracking-tight">
                {filteredProperties.length}
              </span>
              <span className="text-sm font-medium text-neutral-500 tracking-wide border-l border-neutral-200 pl-3">
                Spaces currently available matches your filter parameters
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-widest">
              <span>Verified Daily</span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span>Instant Confirmation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Listings Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">Featured Collection</div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900">
              Available Properties & Stays
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base mt-1 font-light">
              Explore premium handpicked accommodations vetted for quality and safety.
            </p>
          </div>
          
          {/* Subtle Right Side Aesthetic Accent Divider */}
          <div className="h-[2px] bg-neutral-100 flex-1 max-w-xs mx-8 hidden lg:block" />
        </div>

        {/* Properties Dynamic Matrix Grid Wrapper */}
        {filteredProperties.length === 0 ? (
          <div className="w-full bg-white border border-neutral-200/60 rounded-3xl p-16 text-center shadow-sm">
            <div className="w-16 h-16 bg-neutral-50 text-neutral-400 rounded-full flex items-center justify-center mx-auto mb-4">
              🗺️
            </div>
            <h3 className="text-lg font-bold text-neutral-800">No spaces match your filter criteria</h3>
            <p className="text-sm text-neutral-400 mt-1 max-w-sm mx-auto">
              Try adjusting your spelling or changing your query keywords to load alternative options.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProperties.map((property) => (
              <div 
                key={property.id} 
                className="group relative transition-all duration-300 hover:-translate-y-1"
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Decorative Brand Trust Footer Strip */}
      <footer className="bg-white border-t border-neutral-100 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>© Mehmaan Hub Platform. All rights reserved.</div>
          <div className="flex items-center gap-6 font-medium">
            <span className="hover:text-neutral-600 cursor-pointer">Privacy Terms</span>
            <span className="hover:text-neutral-600 cursor-pointer">Local Regulations</span>
            <span className="hover:text-neutral-600 cursor-pointer">Support Hub</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;