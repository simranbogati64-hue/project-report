export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4 ">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 mt-20 mb-2">
        
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-2">
          Contact Us
        </h2>
        <p className="text-gray-500 text-center mb-6">
          We’d love to hear from you. Please fill out the form below.
        </p>

        {/* Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />

          <input
            type="text"
            placeholder="Address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
