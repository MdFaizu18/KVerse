import { Link } from "react-router-dom";
import { PlayCircle, BookOpen, Heart, ArrowRight } from "lucide-react";
import image1 from "../assets/image/shine1.webp";
// import image2 from "../assets/image/shine2.webp";
import image3 from "../assets/image/shine3.webp";
import image4 from "../assets/image/shine4.webp";

const bannerImages = [ image1, image3, image4,  image1,image3,image4]; // or however many you need

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 md:px-24 py-6">
      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] sm:h-48 md:h-64 lg:h-60 rounded-3xl overflow-hidden mb-8 bg-gradient-to-r from-pink-200 to-purple-200">
  <div className="absolute inset-0 overflow-hidden h-full">
    <div className="flex banner-rotation h-full" style={{ width: "200%" }}>
      {[...bannerImages, ...bannerImages].map((imgSrc, i) => (
        <div key={i} className="w-1/6 h-full relative flex-shrink-0">
          <img
            src={imgSrc}
            alt={`banner-${i + 1}`}
            className="w-full h-full object-cover opacity-70"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-pink-500/30 to-purple-500/30 backdrop-blur-sm p-6 text-center">
    <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
      Welcome <span style={{ color: "orange" }}>Moni</span> to KVerse
    </h1>
    <p className="mt-2 text-white font-medium italic drop-shadow-md max-w-md">
      "I may be gone, but I live in every song you play." — Shinee
    </p>
  </div>
</div>


      {/* Navigation Buttons */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Link to="/k-drama" className="w-full">
          <button className="w-full h-20 flex flex-col items-center justify-center gap-1 rounded-2xl border-2 border-pink-200 bg-white hover:bg-pink-50 hover:border-pink-300 transition-all">
            <PlayCircle className="h-6 w-6 text-pink-500" />
            <span className="text-xs font-medium">Start Watching</span>
          </button>
        </Link>
        <Link to="/journal" className="w-full">
          <button className="w-full h-20 flex flex-col items-center justify-center gap-1 rounded-2xl border-2 border-purple-200 bg-white hover:bg-purple-50 hover:border-purple-300 transition-all">
            <BookOpen className="h-6 w-6 text-purple-500" />
            <span className="text-xs font-medium">My Journal</span>
          </button>
        </Link>
        <Link to="/k-pop" className="w-full">
          <button className="w-full h-20 flex flex-col items-center justify-center gap-1 rounded-2xl border-2 border-blue-200 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all">
            <Heart className="h-6 w-6 text-blue-500" />
            <span className="text-xs font-medium">Bias Tracker</span>
          </button>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Recent Activity</h2>
          <Link to="/watchlist" className="text-xs text-pink-500 flex items-center">
            View all <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-pink-100">
              <div className="relative h-40">
                <img
                  src={`https://placehold.co/160x120/pink/white?text=Drama ${i + 1}`}
                  alt={`Drama ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                  <div className="text-white text-xs">Ep {i + 3}/16</div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm truncate">My Drama Title {i + 1}</h3>
                <p className="text-xs text-gray-500 mt-1">Last watched: Today</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Releases */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Upcoming Releases</h2>
          <Link to="/k-pop" className="text-xs text-pink-500 flex items-center">
            View all <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-3 flex items-center gap-3 border border-pink-100">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={`https://placehold.co/48x48/pink/white?text=G${i + 1}`}
                  alt={`Group ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm">Group Name {i + 1}</h3>
                <p className="text-xs text-gray-500">New album: "Amazing Title"</p>
              </div>
              <div className="bg-pink-100 text-pink-600 text-xs font-medium px-2 py-1 rounded-full">
                {i === 0 ? "Tomorrow" : `${i + 3} days`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
