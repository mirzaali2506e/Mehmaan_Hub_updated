import PropertyCard from "../PropertyCard";

function PropertiesGrid({ properties }) {
  if (properties.length === 0) {
    return (
      <div className="w-full bg-white border border-neutral-200/60 rounded-3xl p-16 text-center shadow-sm">
        <div className="w-16 h-16 bg-neutral-50 text-neutral-400 rounded-full flex items-center justify-center mx-auto mb-4">
          🗺️
        </div>

        <h3 className="text-lg font-bold text-neutral-800">
          No spaces match your filter criteria
        </h3>

        <p className="text-sm text-neutral-400 mt-1 max-w-sm mx-auto">
          Try adjusting your spelling or changing your query keywords.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
      {properties.map((property) => (
        <div
          key={property.id}
          className="group relative transition-all duration-300 hover:-translate-y-1"
        >
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
}

export default PropertiesGrid;