// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";

// function AddProperty() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     city: "",
//     address: "",
//     rent: "",
//     property_type: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFileChange = (e) => {
//   setFormData({
//     ...formData,
//     image: e.target.files[0],
//   });
// };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");

//      const propertyData = new FormData();

// propertyData.append("title", formData.title);
// propertyData.append("description", formData.description);
// propertyData.append("city", formData.city);
// propertyData.append("address", formData.address);
// propertyData.append("rent", formData.rent);
// propertyData.append("property_type", formData.property_type);

// if (formData.image) {
//   propertyData.append("image", formData.image);
// }

// await api.post(
//   "/properties",
//   propertyData,
//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "multipart/form-data",
//     },
//   }
// );

//       alert("Property Added Successfully");

//       navigate("/");
//     } catch (error) {
//       alert(
//         error.response?.data?.message ||
//         "Failed to add property"
//       );
//     }
//   };

//   return (
//     <div style={{ maxWidth: "600px", margin: "40px auto" }}>
//       <h2>Add Property</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           onChange={handleChange}
//           required
//         />

//         <br /><br />

//         <textarea
//           name="description"
//           placeholder="Description"
//           onChange={handleChange}
//           required
//         />

//         <br /><br />

//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           onChange={handleChange}
//           required
//         />

//         <br /><br />

//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           onChange={handleChange}
//           required
//         />

//         <br /><br />

//         <input
//           type="number"
//           name="rent"
//           placeholder="Rent"
//           onChange={handleChange}
//           required
//         />

//         <br /><br />

//         <select
//           name="property_type"
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Type</option>
//           <option value="room">Room</option>
//           <option value="hostel">Hostel</option>
//           <option value="apartment">Apartment</option>
//         </select>
//         <br /><br />

// <input
//   type="file"
//   accept="image/*"
//   onChange={handleFileChange}
// />

// <br /><br />

//         <br /><br />

//         <button type="submit">
//           Add Property
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddProperty;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddProperty() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    city: "",
    address: "",
    rent: "",
    property_type: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const propertyData = new FormData();

      propertyData.append("title", formData.title);
      propertyData.append("description", formData.description);
      propertyData.append("city", formData.city);
      propertyData.append("address", formData.address);
      propertyData.append("rent", formData.rent);
      propertyData.append("property_type", formData.property_type);

      if (formData.image) {
        propertyData.append("image", formData.image);
      }

      await api.post(
        "/properties",
        propertyData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Property Added Successfully");
      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to add property"
      );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50/60 text-neutral-900 antialiased font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Dashboard Header / Navigation Trail */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-rose-500 uppercase">Management Console</span>
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-1">
              List a New Space
            </h1>
          </div>
          <button 
            type="button" 
            onClick={() => navigate("/")} 
            className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← Back to Feed
          </button>
        </div>

        {/* Core Submittable Form Element */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Card Module 1: General Details Block */}
          <div className="bg-white rounded-2xl border border-neutral-200/60 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-5">
            <div className="border-b border-neutral-100 pb-3">
              <h3 className="text-base font-bold text-neutral-800">Primary Details</h3>
              <p className="text-xs text-neutral-400 mt-0.5">Define your accommodation's outward titles and details.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Property Listing Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g., Luxury Two Bedroom Apartment near Centaurus"
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 text-sm bg-neutral-50/50 text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:bg-white outline-none transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Detailed Narrative Description</label>
                <textarea
                  name="description"
                  placeholder="Describe your space, amenities, local transit options, and hosting protocols..."
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-4 text-sm bg-neutral-50/50 text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:bg-white outline-none transition-all font-medium resize-y"
                />
              </div>
            </div>
          </div>

          {/* Card Module 2: Spatial Metadata Matrix Layout */}
          <div className="bg-white rounded-2xl border border-neutral-200/60 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-5">
            <div className="border-b border-neutral-100 pb-3">
              <h3 className="text-base font-bold text-neutral-800">Logistics & Classification</h3>
              <p className="text-xs text-neutral-400 mt-0.5">Specify layout types, monthly base metrics, and structural address parameters.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Property Typology</label>
                <div className="relative">
                  <select
                    name="property_type"
                    onChange={handleChange}
                    required
                    className="w-full h-11 px-4 text-sm bg-neutral-50/50 text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:bg-white outline-none transition-all font-semibold appearance-none cursor-pointer"
                  >
                    <option value="">Select Type</option>
                    <option value="room">Shared/Private Room</option>
                    <option value="hostel">Hostel Accommodation</option>
                    <option value="apartment">Full Premium Apartment</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-400 text-xs">▼</div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Monthly Rent (PKR)</label>
                <input
                  type="number"
                  name="rent"
                  placeholder="Amount per month"
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 text-sm bg-neutral-50/50 text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:bg-white outline-none transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">City Location</label>
                <input
                  type="text"
                  name="city"
                  placeholder="e.g., Islamabad"
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 text-sm bg-neutral-50/50 text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:bg-white outline-none transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Physical Address Street Location</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Sector, Block, House/Building Number"
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 text-sm bg-neutral-50/50 text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:bg-white outline-none transition-all font-medium"
                />
              </div>
            </div>
          </div>

          {/* Card Module 3: Digital Media Portfolio Assets Dropzone Area */}
          <div className="bg-white rounded-2xl border border-neutral-200/60 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-5">
            <div className="border-b border-neutral-100 pb-3">
              <h3 className="text-base font-bold text-neutral-800">Media Assets</h3>
              <p className="text-xs text-neutral-400 mt-0.5">Upload crystal clear high-fidelity resolution images of your listed space.</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Cover Photography Showcase</label>
              <div className="relative group border-2 border-dashed border-neutral-200 hover:border-rose-400 bg-neutral-50/30 rounded-2xl p-6 text-center transition-all cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                />
                
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-white border border-neutral-200 rounded-xl flex items-center justify-center text-lg mx-auto shadow-sm group-hover:scale-105 transition-transform">
                    📸
                  </div>
                  <div className="text-sm font-semibold text-neutral-700">
                    {formData.image ? (
                      <span className="text-rose-500 font-bold truncate block max-w-xs mx-auto">
                        ✓ Selected: {formData.image.name}
                      </span>
                    ) : (
                      "Click to search or attach image file"
                    )}
                  </div>
                  <p className="text-xs text-neutral-400">Accepts high-res PNG, JPEG, or WEBP portfolio sheets</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Trigger Block Drawer */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-5 h-12 rounded-xl text-sm font-bold text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-neutral-900 hover:bg-rose-500 text-white text-sm font-bold tracking-wide px-8 h-12 rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98]"
            >
              Publish Listing
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddProperty;