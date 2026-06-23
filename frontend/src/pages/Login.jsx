// import { useState } from "react";
// import api from "../services/api";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await api.post("/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("token", response.data.token);

//       alert("Login Successful");
//       console.log(response.data);

//     } catch (error) {
//       alert(
//         error.response?.data?.message || "Login Failed"
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
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Enter Email"
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
//           placeholder="Enter Password"
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
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      alert("Login Successful");
      console.log(response.data);

    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex antialiased font-sans">
      
      {/* LEFT PANEL: Modern Minimalist Authentication Form Frame */}
      <div className="w-full lg:w-[45%] xl:w-[40%] bg-white p-8 sm:p-12 md:p-16 flex flex-col justify-between relative z-10 shadow-[4px_0_24px_rgba(0,0,0,0.01)]">
        
        {/* Top Minimal Brand Identity Anchor */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center shadow-md shadow-rose-500/20">
            <span className="text-white text-base font-black tracking-tighter">◇</span>
          </div>
          <span className="text-sm font-black tracking-tight text-neutral-900 uppercase">Hearth & Stay</span>
        </div>

        {/* Central Core Input Submission Interface */}
        <div className="w-full max-w-sm mx-auto my-auto py-10 space-y-7">
          
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              Welcome back
            </h2>
            <p className="text-sm text-neutral-400 font-medium tracking-tight">
              Enter your credentials to access your luxury estate panel.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Input Floating Structure Group 1: Email Row */}
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
                className="absolute left-4 top-3.5 text-xs font-bold text-neutral-400 uppercase tracking-wider transition-all duration-200 pointer-events-none origin-[0] transform peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:translate-y-0 peer-focus:translate-y-[-10px] peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-neutral-500 [-webkit-transform:translateY(0)] peer-focus:[-webkit-transform:translateY(-10px)] 
                ${email ? 'translate-y-[-10px] text-[10px] font-bold uppercase tracking-widest text-neutral-500' : ''}"
                style={email ? { transform: 'translateY(-10px)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' } : {}}
              >
                Email Address
              </label>
            </div>

            {/* Input Floating Structure Group 2: Password Row */}
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
                className="absolute left-4 top-3.5 text-xs font-bold text-neutral-400 uppercase tracking-wider transition-all duration-200 pointer-events-none origin-[0] transform peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:translate-y-0 peer-focus:translate-y-[-10px] peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-neutral-500 [-webkit-transform:translateY(0)] peer-focus:[-webkit-transform:translateY(-10px)]
                ${password ? 'translate-y-[-10px] text-[10px] font-bold uppercase tracking-widest text-neutral-500' : ''}"
                style={password ? { transform: 'translateY(-10px)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' } : {}}
              >
                Password
              </label>
            </div>

            {/* Modern Action Layout Layer Trigger */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center bg-neutral-900 hover:bg-rose-500 text-white text-xs font-bold tracking-wider uppercase h-12 rounded-xl shadow-sm hover:shadow transition-all duration-200 active:scale-[0.99] pt-0.5"
            >
              Sign In to Account
            </button>
            
          </form>

        </div>

        {/* Global Footer Meta Context Link */}
        <div className="text-center lg:text-left text-xs text-neutral-400 font-medium">
          Protected framework infrastructure. © 2026 Hearth & Stay Inc.
        </div>

      </div>

      {/* RIGHT PANEL: High-Definition Split-Screen Cinema Luxury Property Art Canvas */}
      <div className="hidden lg:block lg:w-[55%] xl:w-[60%] relative bg-neutral-900 overflow-hidden">
        
        {/* Full Screen High-Fidelity Architectural Visual Anchor */}
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
          alt="Luxury Architecture Concept Showcase"
          className="w-full h-full object-cover opacity-85 transform scale-100 hover:scale-[1.02] transition-transform duration-[8000ms] ease-out"
        />

        {/* Multi-layered Vignette Darkening Shaders for Contrast protection */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/20 to-neutral-950/40 mix-blend-multiply" />

        {/* Dynamic Micro Quote Layer Backdrop */}
        <div className="absolute bottom-16 left-16 right-16 max-w-xl text-white space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border border-white/10">
            ★ Editor's Portfolio Pick
          </div>
          <h3 className="text-3xl font-black tracking-tight leading-none text-white [text-shadow:0_4px_12px_rgba(0,0,0,0.1)]">
            The Amagansett Pavilion Residence
          </h3>
          <p className="text-sm font-light text-neutral-200/90 leading-relaxed max-w-md">
            Explore un-bounded architectural living solutions managed directly via centralized verified host profiles worldwide.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Login;