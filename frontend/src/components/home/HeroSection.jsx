import heroImage from "../../assets/hero-property.png";
import { Link } from "react-router-dom";

function HeroSection({
  city,
  setCity,
  searchProperties,
}) {
  return (
    <>
      {/* Paste Hero Code Here */}
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

    </>
  );
}

export default HeroSection;