function PropertyStats({ totalProperties }) {
  return (
    <div className="bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-neutral-900 tracking-tight">
              {totalProperties}
            </span>

            <span className="text-sm font-medium text-neutral-500 tracking-wide border-l border-neutral-200 pl-3">
              Spaces currently available matches your filter parameters
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-widest">
            <span>Verified Daily</span>

            <span className="h-1 w-1 rounded-full bg-neutral-300"></span>

            <span>Instant Confirmation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyStats;