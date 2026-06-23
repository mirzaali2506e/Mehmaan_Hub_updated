// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import api from "../services/api";

// function EditProperty() {
//   const { id } = useParams();
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

//   useEffect(() => {
//     fetchProperty();
//   }, []);

//   const fetchProperty = async () => {
//     try {
//       const response = await api.get(`/properties/${id}`);

//       setFormData({
//         title: response.data.title,
//         description: response.data.description,
//         city: response.data.city,
//         address: response.data.address,
//         rent: response.data.rent,
//         property_type: response.data.property_type,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");

//       await api.put(
//         `/properties/${id}`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Property Updated Successfully");

//       navigate("/my-properties");
//     } catch (error) {
//       alert(
//         error.response?.data?.message ||
//         "Update Failed"
//       );
//     }
//   };

//   return (
//     <div style={{ maxWidth: "600px", margin: "40px auto" }}>
//       <h2>Edit Property</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Title"
//           required
//         />

//         <br /><br />

//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Description"
//           required
//         />

//         <br /><br />

//         <input
//           type="text"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//           placeholder="City"
//           required
//         />

//         <br /><br />

//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           placeholder="Address"
//           required
//         />

//         <br /><br />

//         <input
//           type="number"
//           name="rent"
//           value={formData.rent}
//           onChange={handleChange}
//           placeholder="Rent"
//           required
//         />

//         <br /><br />

//         <select
//           name="property_type"
//           value={formData.property_type}
//           onChange={handleChange}
//           required
//         >
//           <option value="room">Room</option>
//           <option value="hostel">Hostel</option>
//           <option value="apartment">Apartment</option>
//         </select>

//         <br /><br />

//         <button type="submit">
//           Update Property
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EditProperty;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditProperty() {
  const { id } = useParams();
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

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      const response = await api.get(`/properties/${id}`);

      setFormData({
        title: response.data.title,
        description: response.data.description,
        city: response.data.city,
        address: response.data.address,
        rent: response.data.rent,
        property_type: response.data.property_type,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/properties/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Property Updated Successfully");
      navigate("/my-properties");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Update Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50/60 text-neutral-900 antialiased font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Portal Dashboard Header Area */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-amber-600 uppercase">Listing Editor</span>
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-1">
              Modify Your Space
            </h1>
          </div>
          <button 
            type="button" 
            onClick={() => navigate("/my-properties")} 
            className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← Back to Inventory
          </button>
        </div>

        {/* Core Update Form Matrix */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Card Component Group 1: General Core Specs */}
          <div className="bg-white rounded-2xl border border-neutral-200/60 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-5">
            <div className="border-b border-neutral-100 pb-3">
              <h3 className="text-base font-bold text-neutral-800">Primary Identity Details</h3>
              <p className="text-xs text-neutral-400 mt-0.5">Edit visible title text and platform customer details for your stay.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Listing Title Headline</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  required
                  className="w-full h-11 px-4 text-sm bg-neutral-50/50 text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:bg-white outline-none transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Editorial Narrative Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  required
                  rows={5}
                  className="w-full p-4 text-sm bg-neutral-50/50 text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:bg-white outline-none transition-all font-medium resize-y"
                />
              </div>
            </div>
          </div>

          {/* Card Component Group 2: Geography & Financial Parameters */}
          <div className="bg-white rounded-2xl border border-neutral-200/60 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-5">
            <div className="border-b border-neutral-100 pb-3">
              <h3 className="text-base font-bold text-neutral-800">Logistics & Asset Parameters</h3>
              <p className="text-xs text-neutral-400 mt-0.5">Update monthly financial pricing points, city classifications, and spatial mapping indexes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Structural Category Classification</label>
                <div className="relative">
                  <select
                    name="property_type"
                    value={formData.property_type}
                    onChange={handleChange}
                    required
                    className="w-full h-11 px-4 text-sm bg-neutral-50/50 text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:bg-white outline-none transition-all font-semibold appearance-none cursor-pointer"
                  >
                    <option value="room">Shared/Private Room</option>
                    <option value="hostel">Hostel Accommodation</option>
                    <option value="apartment">Full Premium Apartment</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-400 text-xs">▼</div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Monthly Indexed Rental Fee (PKR)</label>
                <input
                  type="number"
                  name="rent"
                  value={formData.rent}
                  onChange={handleChange}
                  placeholder="Rent"
                  required
                  className="w-full h-11 px-4 text-sm bg-neutral-50/50 text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:bg-white outline-none transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">City Area Location</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="w-full h-11 px-4 text-sm bg-neutral-50/50 text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:bg-white outline-none transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Exact Street Address Directory</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  required
                  className="w-full h-11 px-4 text-sm bg-neutral-50/50 text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 focus:bg-white outline-none transition-all font-medium"
                />
              </div>
            </div>
          </div>

          {/* Action Trigger Block Footer Drawer */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/my-properties")}
              className="px-5 h-12 rounded-xl text-sm font-bold text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-neutral-900 hover:bg-rose-500 text-white text-sm font-bold tracking-wide px-8 h-12 rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98]"
            >
              Commit Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditProperty;