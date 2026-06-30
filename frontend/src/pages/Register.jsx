// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";

// function Register() {
//   const navigate = useNavigate();

//   const [full_name, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await api.post("/auth/register", {
//         full_name,
//         email,
//         password,
//       });

//       alert(response.data.message);

//       navigate("/login");
//     } catch (error) {
//       alert(
//         error.response?.data?.message ||
//           "Registration Failed"
//       );
//     }
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "400px",
//         margin: "50px auto",
//       }}
//     >
//       <h2>Register</h2>

//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={full_name}
//           onChange={(e) =>
//             setFullName(e.target.value)
//           }
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "10px",
//           }}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) =>
//             setEmail(e.target.value)
//           }
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "10px",
//           }}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) =>
//             setPassword(e.target.value)
//           }
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "10px",
//           }}
//         />

//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "10px",
//           }}
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Register;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("tenant");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/register", {
        full_name,
        email,
        password,
        role,
      });

      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex antialiased font-sans">
      
      {/* LEFT PANEL: Modern Minimalist Registration Input Field Console */}
      <div className="w-full lg:w-[45%] xl:w-[40%] bg-white p-8 sm:p-12 md:p-16 flex flex-col justify-between relative z-10 shadow-[4px_0_24px_rgba(0,0,0,0.01)]">
        
        {/* Top Branding Header Area */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center shadow-md shadow-rose-500/20">
            <span className="text-white text-base font-black tracking-tighter">◇</span>
          </div>
          <span className="text-sm font-black tracking-tight text-neutral-900 uppercase">Hearth & Stay</span>
        </div>

        {/* Core Submission Interface Wrapper */}
        <div className="w-full max-w-sm mx-auto my-auto py-8 space-y-7">
          
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              Create an account
            </h2>
            <p className="text-sm text-neutral-400 font-medium tracking-tight">
              Join our network of verified luxury properties and hosts today.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            
            {/* Input Floating Structure Group 1: Full Name */}
            <div className="relative group">
              <input
                type="text"
                id="name_field"
                placeholder=" "
                value={full_name}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full h-13 px-4 pt-4 pb-1.5 text-sm bg-neutral-50/50 focus:bg-white text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 outline-none transition-all duration-200 peer font-medium placeholder-transparent"
              />
              <label
                htmlFor="name_field"
                className="absolute left-4 top-3.5 text-xs font-bold text-neutral-400 uppercase tracking-wider transition-all duration-200 pointer-events-none origin-[0] transform peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:translate-y-0 peer-focus:translate-y-[-10px] peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-neutral-500 [-webkit-transform:translateY(0)] peer-focus:[-webkit-transform:translateY(-10px)]"
                style={full_name ? { transform: 'translateY(-10px)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' } : {}}
              >
                Full Name
              </label>
            </div>

            {/* Input Floating Structure Group 2: Email Address */}
            <div className="relative group">
              <input
                type="email"
                id="email_field"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-13 px-4 pt-4 pb-1.5 text-sm bg-neutral-50/50 focus:bg-white text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 outline-none transition-all duration-200 peer font-medium placeholder-transparent"
              />
              <label
                htmlFor="email_field"
                className="absolute left-4 top-3.5 text-xs font-bold text-neutral-400 uppercase tracking-wider transition-all duration-200 pointer-events-none origin-[0] transform peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:translate-y-0 peer-focus:translate-y-[-10px] peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-neutral-500 [-webkit-transform:translateY(0)] peer-focus:[-webkit-transform:translateY(-10px)]"
                style={email ? { transform: 'translateY(-10px)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' } : {}}
              >
                Email Address
              </label>
            </div>

            {/* Input Floating Structure Group 2.5: Role Selection */}
            <div>
  <label className="block text-sm font-semibold text-neutral-700 mb-3">
    Choose your role
  </label>

  <div className="grid grid-cols-2 gap-4">

    <button
      type="button"
      onClick={() => setRole("tenant")}
      className={`rounded-2xl border-2 p-4 text-left transition-all ${
        role === "tenant"
          ? "border-rose-500 bg-rose-50"
          : "border-neutral-200 hover:border-neutral-400"
      }`}
    >
      <div className="text-3xl mb-2">🔑</div>

      <h3 className="font-bold">
        Tenant
      </h3>

      <p className="text-xs text-neutral-500 mt-1">
        Find rooms, apartments and hostels.
      </p>
    </button>

    <button
      type="button"
      onClick={() => setRole("owner")}
      className={`rounded-2xl border-2 p-4 text-left transition-all ${
        role === "owner"
          ? "border-rose-500 bg-rose-50"
          : "border-neutral-200 hover:border-neutral-400"
      }`}
    >
      <div className="text-3xl mb-2">🏠</div>

      <h3 className="font-bold">
        Property Owner
      </h3>

      <p className="text-xs text-neutral-500 mt-1">
        List your property and earn money.
      </p>
    </button>

  </div>
</div>


            {/* Input Floating Structure Group 3: Password Spec */}
            <div className="relative group">
              <input
                type="password"
                id="password_field"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-13 px-4 pt-4 pb-1.5 text-sm bg-neutral-50/50 focus:bg-white text-neutral-900 rounded-xl border border-neutral-200 focus:border-neutral-900 outline-none transition-all duration-200 peer font-medium placeholder-transparent"
              />
              <label
                htmlFor="password_field"
                className="absolute left-4 top-3.5 text-xs font-bold text-neutral-400 uppercase tracking-wider transition-all duration-200 pointer-events-none origin-[0] transform peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:translate-y-0 peer-focus:translate-y-[-10px] peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-neutral-500 [-webkit-transform:translateY(0)] peer-focus:[-webkit-transform:translateY(-10px)]"
                style={password ? { transform: 'translateY(-10px)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' } : {}}
              >
                Choose Password
              </label>
            </div>

            {/* Premium CTA Register Button Element */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center bg-neutral-900 hover:bg-rose-500 text-white text-xs font-bold tracking-wider uppercase h-12 rounded-xl shadow-sm hover:shadow transition-all duration-200 active:scale-[0.99] pt-0.5 mt-2"
            >
              Register Account
            </button>
            
          </form>

          {/* Redirection Router Inline Access Link */}
          <p className="text-center text-xs text-neutral-500 font-medium">
            Already have an active workspace?{" "}
            <span 
              onClick={() => navigate("/login")}
              className="text-neutral-900 font-bold underline underline-offset-2 cursor-pointer hover:text-rose-500 transition-colors"
            >
              Sign in
            </span>
          </p>

        </div>

        {/* Protection Framework Policy Label */}
        <div className="text-center lg:text-left text-xs text-neutral-400 font-medium">
          Protected framework infrastructure. © 2026 Hearth & Stay Inc.
        </div>

      </div>

      {/* RIGHT PANEL: High-Definition Split-Screen Cinema Architectural Visualization */}
      <div className="hidden lg:block lg:w-[55%] xl:w-[60%] relative bg-neutral-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
          alt="Luxury Waterfront Property Concept"
          className="w-full h-full object-cover opacity-85 transform scale-100 hover:scale-[1.02] transition-transform duration-[8000ms] ease-out"
        />

        {/* Multi-layered Contrast Layer Protectors */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/20 to-neutral-950/40 mix-blend-multiply" />

        {/* Dynamic Static Quote Context */}
        <div className="absolute bottom-16 left-16 right-16 max-w-xl text-white space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border border-white/10">
            ★ Verified Retreat Listing
          </div>
          <h3 className="text-3xl font-black tracking-tight leading-none text-white [text-shadow:0_4px_12px_rgba(0,0,0,0.1)]">
            The Coral Gables Oasis Villa
          </h3>
          <p className="text-sm font-light text-neutral-200/90 leading-relaxed max-w-md">
            Unlock programmatic access to modern real estate portfolios managed directly alongside peer-vetted hospitality hosts worldwide.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Register;