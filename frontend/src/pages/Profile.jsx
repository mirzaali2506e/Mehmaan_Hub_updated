import React from 'react';
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Award, 
  Star, 
  Heart, 
  Clock, 
  Camera, 
  Sliders 
} from 'lucide-react';

export default function Profile() {
  // Mock static data for pure UI rendering as requested
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

const [formData, setFormData] = useState({
  full_name: "",
  phone: "",
  city: "",
  bio: "",
});
  useEffect(() => {
  fetchProfile();
}, []);

const fetchProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await api.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUser(response.data);
    setFormData({
  full_name: response.data.full_name || "",
  phone: response.data.phone || "",
  city: response.data.city || "",
  bio: response.data.bio || "",
});
  } catch (error) {
    console.log(error);
  }
};
const handleUpdateProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    const data = new FormData();

    data.append("full_name", formData.full_name);
    data.append("phone", formData.phone);
    data.append("city", formData.city);
    data.append("bio", formData.bio);

    await api.put("/auth/profile", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Profile Updated Successfully");

    setEditMode(false);

    fetchProfile();

  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Profile Update Failed"
    );
  }
};

if (!user) {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    </>
  );
}
 
  return (
    <div className="min-h-screen bg-neutral-50/50 text-neutral-800 antialiased font-sans pb-12">
      
      {/* Cover Banner */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden bg-gradient-to-r from-rose-100 via-neutral-100 to-rose-50">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute bottom-4 right-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/60 shadow-sm text-xs font-medium text-neutral-700 hover:bg-white transition-all duration-300">
            <Camera className="w-3.5 h-3.5 text-rose-500" />
            Change Cover
          </button>
        </div>
      </div>

      {/* Main Profile Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Avatar & Quick Info Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Glassmorphism User Card */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl shadow-neutral-100/50 text-center relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Profile Avatar Wrapper */}
              <div className="relative w-32 h-32 mx-auto mb-5 group/avatar">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 to-amber-300 animate-pulse opacity-25 blur-[2px]"></div>
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256" 
                  alt={user.full_name}
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-md relative z-10 transform transition-transform duration-500 group-hover/avatar:scale-[1.02]"
                />
                <button className="absolute bottom-0 right-1 z-20 bg-rose-500 text-white p-2 rounded-full shadow-lg border-2 border-white hover:bg-rose-600 hover:scale-110 transition-all duration-300">
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Identity */}
              <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 flex items-center justify-center gap-1.5">
             {/* {user.full_name} */}
             {editMode ? (
  <input
    type="text"
    value={formData.full_name}
    onChange={(e) =>
      setFormData({
        ...formData,
        full_name: e.target.value,
      })
    }
    className="text-center border rounded-lg px-3 py-2"
  />
) : (
  user.full_name
)}


                <ShieldCheck className="w-5 h-5 text-rose-500 fill-rose-50" title="Verified Account" />
              </h1>
              
              
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-500 mt-1">{user.role}</p>
              
              <div className="flex items-center justify-center gap-1.5 text-neutral-500 text-sm mt-2 font-medium">
                <MapPin className="w-4 h-4 text-neutral-400" />
              {/* {user.city || "City not added"} */}
              {editMode ? (
  <input
    type="text"
    value={formData.city}
    onChange={(e) =>
      setFormData({
        ...formData,
        city: e.target.value,
      })
    }
    className="border rounded-lg px-3 py-1"
  />
) : (
  user.city || "City not added"
)}
              </div>

              {/* Edit Profile Button */}
              {/* <button className="w-full mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-neutral-950 text-white text-sm font-medium hover:bg-neutral-800 active:scale-[0.98] transition-all duration-300 shadow-md shadow-neutral-950/10">
                <Sliders className="w-4 h-4" />
                Edit Profile
              </button> */}

              <button
  onClick={() => setEditMode(!editMode)}
  className="w-full mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-neutral-950 text-white text-sm font-medium hover:bg-neutral-800 transition-all"
>
  <Sliders className="w-4 h-4" />

  {editMode ? "Cancel" : "Edit Profile"}
</button>

{editMode && (
  <button
    onClick={handleUpdateProfile}
    className="w-full mt-3 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-2xl font-semibold transition"
  >
    Save Changes
  </button>
)}

              <hr className="my-6 border-neutral-200/60" />

              {/* Direct Details Contact Block */}
              <div className="space-y-3 text-left text-sm font-medium text-neutral-600">
                <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50/80 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50/80 transition-colors duration-200">
                  <Phone className="w-4 h-4 text-neutral-400" />
                  {/* <span>{user.phone || "Not added"}</span> */}
                  {editMode ? (
  <input
    type="text"
    value={formData.phone}
    onChange={(e) =>
      setFormData({
        ...formData,
        phone: e.target.value,
      })
    }
    className="border rounded-lg px-3 py-1 w-full"
  />
) : (
  <span>{user.phone || "Not added"}</span>
)}
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50/80 transition-colors duration-200">
                  <Calendar className="w-4 h-4 text-neutral-400" />
                  <span>{new Date(user.created_at).toLocaleDateString()}</span>
                </div>
              </div>

            </div>

            {/* Verification Badge Component */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-5 shadow-lg shadow-neutral-100/50 flex items-start gap-4">
              <div className="p-3 bg-rose-50 rounded-2xl border border-rose-100">
                <Award className="w-6 h-6 text-rose-500" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-900">Mehmaan Verified</h4>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">Identity, phone, and payment details have been fully authenticated for premium safety standards.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Analytics, Bio & Activities */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Statistics Section Grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* {user.stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-5 shadow-lg shadow-neutral-100/50 flex flex-col sm:flex-row items-center justify-between gap-3 group hover:border-rose-200/80 transition-all duration-300">
                    <div className="text-center sm:text-left">
                      <p className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">{stat.value}</p>
                      <p className="text-xs font-medium text-neutral-400 mt-0.5">{stat.label}</p>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-2xl group-hover:bg-rose-50 group-hover:text-rose-500 transition-colors duration-300 text-neutral-400">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                );
              })} */}
            </div>

            {/* Profile About / Bio Card */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-6 sm:p-8 shadow-xl shadow-neutral-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-rose-50/50 to-transparent rounded-full pointer-events-none"></div>
              <h2 className="text-lg font-semibold text-neutral-900 tracking-tight">About Me</h2>
              {/* <p className="text-neutral-600 text-sm leading-relaxed mt-4 font-normal">
                {user.bio || "No bio added yet."}
              </p> */}
              {editMode ? (
  <textarea
    value={formData.bio}
    onChange={(e) =>
      setFormData({
        ...formData,
        bio: e.target.value,
      })
    }
    rows={5}
    className="w-full mt-4 border border-neutral-300 rounded-xl p-4 outline-none focus:border-rose-500 resize-none"
  />
) : (
  <p className="text-neutral-600 text-sm leading-relaxed mt-4 font-normal">
    {user.bio || "No bio added yet."}
  </p>
)}
              
              <div className="mt-6 flex flex-wrap gap-2">
                {['Verified Host', 'Super Guest', 'Culture Explorer', 'Architectural Stays'].map((tag, idx) => (
                  <span key={idx} className="inline-flex items-center px-3 py-1.5 rounded-xl bg-neutral-100/80 text-neutral-600 text-xs font-medium border border-neutral-200/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Activity Placeholder Section */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-6 sm:p-8 shadow-xl shadow-neutral-100/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 tracking-tight">Recent Activity</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">Your latest interactions on Mehmaan Hub</p>
                </div>
                <button className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors">
                  View All
                </button>
              </div>

              {/* Activity Timeline List */}
              <div className="space-y-4">
               
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
