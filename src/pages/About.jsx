export default function About() {
  return (
    <div className="bg-green-50 py-17 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          About Bela Plants
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Bela Plants is dedicated to bringing nature closer to your everyday life.
          We provide high-quality plants and greenery solutions that help create
          healthier, fresher, and more beautiful environments.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you are looking to decorate your home, improve your workspace,
          or start your own gardening journey, Bela Plants offers carefully selected
          plants that are easy to maintain and long-lasting.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To promote a greener lifestyle by providing sustainable,
              affordable, and healthy plants for everyone.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Why Choose Us
            </h3>
            <p className="text-gray-600">
              We focus on quality, care, and customer satisfaction, ensuring
              every plant is nurtured before reaching your home.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-green-600 mb-2">
            Our Values
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Sustainability and eco-friendly practices</li>
            <li>Customer-first approach</li>
            <li>Quality and plant health</li>
            <li>Love for nature and greenery</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
