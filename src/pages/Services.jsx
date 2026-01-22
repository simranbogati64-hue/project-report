import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-60 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
