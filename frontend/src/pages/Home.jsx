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
import HeroSection from "../components/home/HeroSection";
import PropertyStats from "../components/home/PropertyStats";
import PropertiesGrid from "../components/home/PropertiesGrid";
import Footer from "../components/home/Footer";

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
<HeroSection
  city={city}
  setCity={setCity}
  searchProperties={searchProperties}
/>

      {/* Property Inventory Metric Strip (Real Startup Metric View) */}
      <PropertyStats
  totalProperties={filteredProperties.length}
/>
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
 <PropertiesGrid
  properties={filteredProperties}
/>
      </section>

      {/* Decorative Brand Trust Footer Strip */}
      {/* <footer className="bg-white border-t border-neutral-100 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>© Mehmaan Hub Platform. All rights reserved.</div>
          <div className="flex items-center gap-6 font-medium">
            <span className="hover:text-neutral-600 cursor-pointer">Privacy Terms</span>
            <span className="hover:text-neutral-600 cursor-pointer">Local Regulations</span>
            <span className="hover:text-neutral-600 cursor-pointer">Support Hub</span>
          </div>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
}

export default Home;