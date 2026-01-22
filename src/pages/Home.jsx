import ImageSlider from "../components/ImageSlider";
import About from "./About";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row ">

        {/* Left Content */}
        <div
          className="
            w-full md:w-1/2
            flex flex-col justify-center items-center md:items-start
            px-5 sm:px-8 md:px-12
            py-12 md:py-0
            text-center md:text-left
          "
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-green-800 mt-8">
            Welcome to Bela Plants
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md">
            Discover beautiful indoor and outdoor plants that bring life,
            freshness, and calm to your space.
          </p>
        </div>

        {/* Right Image Slider */}
        <div
          className="
            w-full md:w-1/2
            h-[50vh] sm:h-[60vh] md:h-screen
          "
        >
          <ImageSlider />
        </div>

      </div>

      {/* About Section */}
      <div className="w-full px-5 sm:px-8 md:px-12 py-12 ">
        <About />
      </div>

    </div>
  );
}
