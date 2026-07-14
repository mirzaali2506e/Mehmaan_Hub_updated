// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// function Dashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div
//       style={{
//         padding: "40px",
//       }}
//     >
//       <h1>Dashboard</h1>

//       <p>Welcome to Mehmaan Hub Dashboard</p>

//       <Link to="/add-property">
//   <button>Add Property</button>
// </Link>

// <Link to="/my-properties">
//   <button>My Properties</button>
// </Link>

//       <button onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Dashboard;


import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalProperties: 0,
    totalBookings: 0,
    pendingBookings: 0,
    acceptedBookings: 0,
    rejectedBookings: 0,
  });
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetchDashboardStats();
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
      console.log(error);
    }
  };

  const fetchDashboardStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get(
        "/properties/dashboard-stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-neutral-50/50 flex text-neutral-900 antialiased font-sans">

      {/* 1. SIDEBAR NAVIGATION PANELS (Stripe & Linear Inspired) */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-neutral-200/80 p-6 justify-between shrink-0 sticky top-0 h-screen">
        <div className="space-y-8">
          {/* Platform Identity */}
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-orange-500 flex items-center justify-center shadow-md shadow-rose-500/20">
              <span className="text-white text-base font-black tracking-tighter">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-neutral-900 leading-none">Mehmaan Hub</span>
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">Host Portal</span>
            </div>
          </div>

          {/* Navigation Links Mapping */}
          <nav className="space-y-1">
            <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest px-3 mb-2">Workspace</div>
            <Link
              to="/my-properties"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold text-neutral-700 bg-neutral-50 border border-neutral-200/40 shadow-sm"
            >
              📊 <span> Dashboard</span>
            </Link>
            <Link
              to="/add-property"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-all group"
            >
              ➕ <span className="group-hover:translate-x-0.5 transition-transform">Add Property</span>
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer User Info & Control */}
        <div className="pt-4 border-t border-neutral-100 space-y-3">
          <div className="flex items-center gap-2 px-1">
            <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              {user?.full_name?.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-neutral-800 truncate">
                {user?.full_name}
              </span>
              <span className="text-[11px] font-medium text-neutral-400 truncate">
                {user?.email}
              </span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full h-9 inline-flex items-center justify-center rounded-xl bg-neutral-50 hover:bg-rose-50 border border-neutral-200/60 text-xs font-bold tracking-wide uppercase text-neutral-600 hover:text-rose-600 transition-colors"
          >
            Log Out Account
          </button>
        </div>
      </aside>

      {/* 2. MAIN HUB DASHBOARD VIEWSPACE PLATFORM */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top Floating Utility Navbar Header */}
        <header className="h-16 bg-white border-b border-neutral-200/80 px-6 sm:px-8 md:px-10 flex items-center justify-between shrink-0">
          <h2 className="text-sm font-black tracking-tight text-neutral-900 uppercase md:hidden flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span> Mehmaan Hub
          </h2>
          <div className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
            <span>Portals</span> <span className="text-neutral-300">/</span> <span className="text-neutral-900 font-bold">Host Hub</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/add-property">
              <button className="h-9 px-4 inline-flex items-center justify-center bg-neutral-900 hover:bg-rose-500 text-white text-xs font-bold tracking-wide rounded-xl transition-all shadow-sm active:scale-[0.98]">
                ＋ Create Listing
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="md:hidden h-9 px-3 inline-flex items-center justify-center bg-neutral-100 text-neutral-600 rounded-xl text-xs font-bold transition-all"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Scrollable Metric Content Frame Container */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10 space-y-10">

          {/* Welcome Announcement Block */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight leading-none">
              Host Hub
            </h1>
            <p className="text-sm text-neutral-400 font-medium tracking-tight">
              Manage your properties, review bookings and monitor your activity.
            </p>
          </div>

          {/* 3. CORE ANALYTICS MATRIX PANELS (SaaS Layout Paradigm) */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Metric Box 1: Verified Total Listings */}
            <div className="bg-white border border-neutral-200/70 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between h-32 relative overflow-hidden group hover:border-neutral-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Total Properties</span>
                <span className="text-base bg-neutral-50 p-1 rounded-lg border border-neutral-200/40">🏢</span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-2">
                <span className="text-3xl font-black text-neutral-950 tracking-tight">{stats.totalProperties}</span>
                <span className="text-[11px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">Active</span>
              </div>
            </div>

            {/* Metric Box 2: Platforms Views Counter */}
            <div className="bg-white border border-neutral-200/70 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between h-32 relative overflow-hidden group hover:border-neutral-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Accepted Bookings</span>
                <span className="text-base bg-neutral-50 p-1 rounded-lg border border-neutral-200/40">👁️</span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-2">
                <span className="text-3xl font-black text-neutral-950 tracking-tight">{stats.acceptedBookings}</span>
                <span className="text-[10px] font-medium text-neutral-400">Confirmed</span>
              </div>
            </div>

            {/* Metric Box 3: Real Bookings Placeholder Matrix */}
            <div className="bg-white border border-neutral-200/70 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between h-32 relative overflow-hidden group hover:border-neutral-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Total Bookings</span>
                <span className="text-base bg-neutral-50 p-1 rounded-lg border border-neutral-200/40">📅</span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-2">
                <span className="text-3xl font-black text-neutral-950 tracking-tight">
                  {stats.totalBookings}
                </span>
                {/* <span className="text-[11px] font-bold text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded">Placeholder</span> */}
              </div>
            </div>

            {/* Metric Box 4: Earnings Metric Layer Grid */}
            <div className="bg-white border border-neutral-200/70 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between h-32 relative overflow-hidden group hover:border-neutral-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Pending Requests</span>
                <span className="text-base bg-neutral-50 p-1 rounded-lg border border-neutral-200/40">💰</span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-2">
                <span className="text-2xl font-black text-neutral-950 tracking-tight">{stats.pendingBookings}</span>
                <span className="text-[11px] font-bold text-neutral-400 bg-neutral-50 px-1.5 py-0.5 rounded">Pending</span>
              </div>
            </div>
          </section>

          {/* 4. MODULAR REDIRECT NAVIGATION SECTION AREA */}
          <section className="bg-white border border-neutral-200/60 rounded-2xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div>
                <h3 className="text-base font-bold text-neutral-900 tracking-tight">Quick Actions Drawer</h3>
                <p className="text-xs text-neutral-400">Direct operational indices to update or create listed portfolio entities.</p>
              </div>
              {/* <span className="text-xs font-semibold text-neutral-400">Step 1 of 2</span> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <Link
                to="/my-properties"
                className="group border border-neutral-200/70 hover:border-neutral-900 rounded-xl p-5 flex items-start gap-4 transition-all duration-200 hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors text-base">
                  🏢
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-neutral-800 group-hover:text-neutral-900">Manage My Properties →</h4>
                  <p className="text-xs text-neutral-400 font-light mt-0.5 leading-normal">View details, adjust pricing variables, execute modifications, or delete obsolete spaces.</p>
                </div>
              </Link>

              <Link
                to="/add-property"
                className="group border border-neutral-200/70 hover:border-rose-500 rounded-xl p-5 flex items-start gap-4 transition-all duration-200 hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors text-base">
                  ✨
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-neutral-800 group-hover:text-rose-600">Register New Property →</h4>
                  <p className="text-xs text-neutral-400 font-light mt-0.5 leading-normal">Publish new structural specifications, detail descriptions, upload layout covers, and update regional metrics.</p>
                </div>
              </Link>

              <Link
                to="/owner-bookings"
                className="group border border-neutral-200/70 hover:border-neutral-900 rounded-xl p-5 flex items-start gap-4 transition-all duration-200 hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors text-base">
                  📅
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-neutral-800 group-hover:text-neutral-900">Booking Requests →</h4>
                  <p className="text-xs text-neutral-400 font-light mt-0.5 leading-normal">View and manage booking requests from potential guests.</p>
                </div>
              </Link>

            </div>
          </section>

          {/* Recent Properties */}
          <section className="bg-white border border-neutral-200/60 rounded-2xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">

            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-neutral-900">
                  Recent Properties
                </h3>

                <p className="text-xs text-neutral-400">
                  Your latest listed properties
                </p>
              </div>

              <Link
                to="/my-properties"
                className="text-sm font-semibold text-rose-500 hover:text-rose-600"
              >
                View All →
              </Link>
            </div>

            {properties.length === 0 ? (

              <div className="text-center py-12">

                <p className="text-neutral-500">
                  You haven't added any property yet.
                </p>

                <Link
                  to="/add-property"
                  className="inline-block mt-4 bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-xl font-semibold"
                >
                  Add Property
                </Link>

              </div>

            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {properties.slice(0, 6).map((property) => (

                  <div
                    key={property.id}
                    className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >

                    {/* Property Image */}
                    <img
                      src={`http://localhost:5000/uploads/${property.image}`}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />

                    {/* Card Body */}
                    <div className="p-5 space-y-4">

                      <div>
                        <h3 className="text-lg font-bold text-neutral-900 line-clamp-1">
                          {property.title}
                        </h3>

                        <p className="text-sm text-neutral-500 mt-1">
                          📍 {property.city}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">

                        <span className="text-rose-500 font-bold text-lg">
                          Rs. {property.rent}
                        </span>

                        <span className="px-3 py-1 bg-neutral-100 rounded-full text-xs font-semibold text-neutral-700">
                          {property.property_type}
                        </span>

                      </div>

                      <Link
                        to={`/property/${property.id}`}
                        className="block text-center bg-neutral-900 hover:bg-rose-500 text-white py-3 rounded-xl text-sm font-semibold transition"
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </section>

        </main>
      </div>

    </div>
  );
}

export default Dashboard;