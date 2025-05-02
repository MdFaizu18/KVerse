"use client"

import { useState } from "react"
import { Search, Filter, Heart, Star, X, Check, ChevronDown } from "lucide-react"
import Button from "../components/Button"
import Input from "../components/Input"
import Badge from "../components/Badge"
import Modal from "../components/Modal"
import penthouse from "../assets/image/penthouse.webp";
import goblin from "../assets/image/goblin.webp";
import happiness from "../assets/image/happiness.webp";
import itsokay from "../assets/image/itsokay.webp";
import crash from "../assets/image/crash.webp";

// Sample data
const dramas = [
    {
      id: 1,
      title: "Crash Landing on You",
      year: 2019,
      poster: crash,
      genres: ["Romance", "Comedy", "Drama"],
      watched: true,
      favorite: true,
      rating: 5,
      synopsis: "A South Korean heiress crash-lands in North Korea and falls in love with a North Korean officer.",
      review: "This drama made me cry and laugh so much! The chemistry between the leads is amazing.",
      country: "South Korea",
    },
    {
      id: 2,
      title: "Goblin",
      year: 2016,
      poster: goblin,
      genres: ["Fantasy", "Romance", "Drama"],
      watched: true,
      favorite: true,
      rating: 4.5,
      synopsis:
        "A goblin needs a human bride to end his immortal life, but things get complicated when he falls in love with her.",
      review: "The cinematography and soundtrack are incredible. Gong Yoo is perfect in this role!",
      country: "South Korea",
    },
    {
      id: 3,
      title: "It's Okay to Not Be Okay",
      year: 2020,
      poster: itsokay,
      genres: ["Romance", "Drama", "Psychological"],
      watched: true,
      favorite: false,
      rating: 4,
      synopsis:
        "An antisocial children's book writer and a psychiatric ward caretaker start to heal each other's emotional wounds.",
      review: "A beautiful portrayal of mental health issues with stunning visuals.",
      country: "South Korea",
    },
    {
      id: 4,
      title: "Descendants of the Sun",
      year: 2016,
      poster: "https://placehold.co/200x300/pink/white?text=Descendants+of+sun",
      genres: ["Romance", "Action", "Melodrama"],
      watched: true,
      favorite: false,
      rating: 4,
      synopsis: "A soldier and a surgeon fall in love while providing humanitarian aid in a fictional war-torn country.",
      review: "Song Joong-ki and Song Hye-kyo have amazing chemistry!",
      country: "South Korea",
    },
  
    {
      id: 6,
      title: "Boys Over Flowers",
      year: 2009,
      poster: "https://placehold.co/200x300/pink/white?text=Boys+Over+Flowers",
      genres: ["Romance", "Comedy", "Drama"],
      watched: true,
      favorite: true,
      rating: 4.2,
      synopsis: "A poor girl attends an elite school and attracts the attention of F4, the school's most popular boys.",
      review: "A classic K-drama that got me hooked on the genre!",
      country: "South Korea",
    },
    {
      id: 7,
      title: "Extraordinary You",
      year: 2019,
      poster: "https://placehold.co/200x300/pink/white?text=Extraordinary+You",
      genres: ["Romance", "Fantasy", "Comedy"],
      watched: false,
      favorite: false,
      rating: 0,
      synopsis: "A high school girl discovers she's a character in a comic book and decides to change her destiny.",
      review: "",
      country: "South Korea",
    },
    {
      id: 8,
      title: "Hospital Playlist",
      year: 2020,
      poster: "https://placehold.co/200x300/pink/white?text=Hospital+Playlist",
      genres: ["Medical", "Friendship", "Romance"],
      watched: false,
      favorite: false,
      rating: 0,
      synopsis: "Five doctors who have been friends since medical school navigate their professional and personal lives.",
      review: "",
      country: "South Korea",
    },
    {
      id: 9,
      title: "The Penthouse",
      year: 2020,
      poster: penthouse,
      genres: ["Drama", "Thriller", "Mystery"],
      watched: false,
      favorite: false,
      rating: 0,
      synopsis: "A wealthy woman fights her way to the top of a luxury apartment, where secrets and betrayals unfold.",
      review: "",
      country: "South Korea",
    },
    {
      id: 10,
      title: "Happiness",
      year: 2021,
      poster: happiness,
      genres: ["Thriller", "Horror", "Drama"],
      watched: false,
      favorite: false,
      rating: 0,
      synopsis: "In a dystopian world, residents of an apartment building face a new virus that turns people into infected zombies.",
      review: "",
      country: "South Korea",
    },
  ];
  

// All available genres from the data
const allGenres = [...new Set(dramas.flatMap((drama) => drama.genres))]
const allCountries = [...new Set(dramas.map((drama) => drama.country))]

const KDramaPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenres, setSelectedGenres] = useState([])
  const [watchFilter, setWatchFilter] = useState("all") // "all", "watched", "unwatched"
  const [countryFilter, setCountryFilter] = useState([])
  const [selectedDrama, setSelectedDrama] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Dropdown states
  const [isGenreDropdownOpen, setIsGenreDropdownOpen] = useState(false)
  const [isWatchDropdownOpen, setIsWatchDropdownOpen] = useState(false)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)

  // Filter dramas based on search term, genres, and watch status
  const filteredDramas = dramas.filter((drama) => {
    // Search filter
    const matchesSearch = drama.title.toLowerCase().includes(searchTerm.toLowerCase())

    // Genre filter
    const matchesGenre = selectedGenres.length === 0 || drama.genres.some((genre) => selectedGenres.includes(genre))

    // Watch status filter
    const matchesWatchStatus =
      watchFilter === "all" ||
      (watchFilter === "watched" && drama.watched) ||
      (watchFilter === "unwatched" && !drama.watched)

    // Country filter
    const matchesCountry = countryFilter.length === 0 || countryFilter.includes(drama.country)

    return matchesSearch && matchesGenre && matchesWatchStatus && matchesCountry
  })

  const handleDramaClick = (drama) => {
    setSelectedDrama(drama)
    setIsModalOpen(true)
  }

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre))
    } else {
      setSelectedGenres([...selectedGenres, genre])
    }
  }

  const toggleCountry = (country) => {
    if (countryFilter.includes(country)) {
      setCountryFilter(countryFilter.filter((c) => c !== country))
    } else {
      setCountryFilter([...countryFilter, country])
    }
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:px-24 sm:py-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">My K-Drama Collection</h1>
        <p className="text-sm text-gray-500">Track, rate, and review your favorite Korean dramas</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search dramas..."
            className="pl-9 rounded-full border-pink-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2 ">
          {/* Genre Filter */}
          <div className="relative">
            <Button
              variant="outline"
              className="rounded-full border-purple-200 bg-white"
              onClick={() => setIsGenreDropdownOpen(!isGenreDropdownOpen)}
            >
              <Filter className="h-4 w-4 mr-2 text-purple-500" />
              Genre
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>

            {isGenreDropdownOpen && (
              <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu">
                  {allGenres.map((genre) => (
                    <div
                      key={genre}
                      className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => toggleGenre(genre)}
                    >
                      <input
                        type="checkbox"
                        checked={selectedGenres.includes(genre)}
                        onChange={() => {}}
                        className="mr-2"
                      />
                      {genre}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Watch Status Filter */}
          <div className="relative">
            <Button
              variant="outline"
              className="rounded-full border-blue-200 bg-white"
              onClick={() => setIsWatchDropdownOpen(!isWatchDropdownOpen)}
            >
              <Check className="h-4 w-4 mr-2 text-blue-500" />
              Status
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>

            {isWatchDropdownOpen && (
              <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu">
                  <div
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => setWatchFilter("all")}
                  >
                    <input type="radio" checked={watchFilter === "all"} onChange={() => {}} className="mr-2" />
                    All
                  </div>
                  <div
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => setWatchFilter("watched")}
                  >
                    <input type="radio" checked={watchFilter === "watched"} onChange={() => {}} className="mr-2" />
                    Watched
                  </div>
                  <div
                    className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => setWatchFilter("unwatched")}
                  >
                    <input type="radio" checked={watchFilter === "unwatched"} onChange={() => {}} className="mr-2" />
                    Unwatched
                  </div>
                </div>
              </div>
            )}
          </div>


        </div>
      </div>

      {/* Applied Filters */}
      {(selectedGenres.length > 0 || watchFilter !== "all" || countryFilter.length > 0) && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedGenres.map((genre) => (
            <Badge key={genre} variant="outline" className="bg-purple-50 text-purple-600 border-purple-200">
              {genre}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => setSelectedGenres(selectedGenres.filter((g) => g !== genre))}
              />
            </Badge>
          ))}

          {watchFilter !== "all" && (
            <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
              {watchFilter === "watched" ? "Watched" : "Unwatched"}
              <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setWatchFilter("all")} />
            </Badge>
          )}

          {countryFilter.map((country) => (
            <Badge key={country} variant="outline" className="bg-pink-50 text-pink-600 border-pink-200">
              {country}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => setCountryFilter(countryFilter.filter((c) => c !== country))}
              />
            </Badge>
          ))}

          <Button
            variant="ghost"
            className="text-xs h-6 px-2 text-gray-500"
            onClick={() => {
              setSelectedGenres([])
              setWatchFilter("all")
              setCountryFilter([])
            }}
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Drama Grid */}
      {filteredDramas.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredDramas.map((drama) => (
            <div
              key={drama.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-pink-100 cursor-pointer"
              onClick={() => handleDramaClick(drama)}
            >
              <div className="relative h-64">
                <img
                  src={drama.poster || "/placeholder.svg"}
                  alt={drama.title}
                  className="w-full h-full object-cover"
                />
                {drama.favorite && (
                  <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                    <Heart className="h-4 w-4 text-pink-500 fill-pink-500" />
                  </div>
                )}
                {drama.watched && (
                  <div className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                    Watched
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm truncate">{drama.title}</h3>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">{drama.year}</span>
                  {drama.rating > 0 && (
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs ml-1">{drama.rating}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {drama.genres.slice(0, 2).map((genre) => (
                    <span key={genre} className="text-[10px] px-1.5 py-0.5 bg-purple-50 text-purple-600 rounded-full">
                      {genre}
                    </span>
                  ))}
                  {drama.genres.length > 2 && (
                    <span className="text-[10px] px-1.5 py-0.5 bg-gray-50 text-gray-600 rounded-full">
                      +{drama.genres.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-medium mb-2">No dramas found</h3>
          <p className="text-sm text-gray-500 mb-4">Try adjusting your filters or search term</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setSelectedGenres([])
              setWatchFilter("all")
              setCountryFilter([])
            }}
          >
            Clear all filters
          </Button>
        </div>
      )}

      {/* Drama Detail Modal */}
      {selectedDrama && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col h-full">
            <div className="relative h-48 w-full">
              <img
                src={selectedDrama.poster || "/placeholder.svg"}
                alt={selectedDrama.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-white text-xl font-bold">{selectedDrama.title}</h2>
                <div className="flex items-center text-white/80 text-sm mt-1">
                  <span>{selectedDrama.year}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedDrama.country}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                className="absolute top-2 right-2 rounded-full bg-black/30 hover:bg-black/50 text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  // Toggle favorite status (in a real app, this would update the state)
                  alert(`${selectedDrama.favorite ? "Removed from" : "Added to"} favorites!`)
                }}
              >
                <Heart className={`h-4 w-4 ${selectedDrama.favorite ? "fill-pink-500" : ""}`} />
              </Button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto">
              <div className="flex flex-wrap gap-1 mb-4">
                {selectedDrama.genres.map((genre) => (
                  <span key={genre} className="text-xs px-2 py-0.5 bg-purple-50 text-purple-600 rounded-full">
                    {genre}
                  </span>
                ))}
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-1">Synopsis</h3>
                <p className="text-sm text-gray-600">{selectedDrama.synopsis}</p>
              </div>

              {selectedDrama.watched && (
                <>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold mb-1">My Rating</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(selectedDrama.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="ml-2 text-sm">{selectedDrama.rating}/5</span>
                    </div>
                  </div>

                  {selectedDrama.review && (
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold mb-1">My Review</h3>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{selectedDrama.review}</p>
                    </div>
                  )}
                </>
              )}

              <div className="flex gap-2 mt-4">
                <Button
                  variant={selectedDrama.watched ? "outline" : "default"}
                  className={selectedDrama.watched ? "border-blue-200" : ""}
                >
                  {selectedDrama.watched ? "Rewatch" : "Start Watching"}
                </Button>

                {selectedDrama.watched ? (
                  <Button variant="outline" className="border-purple-200">
                    Edit Review
                  </Button>
                ) : (
                  <Button variant="outline" className="border-pink-200">
                    Add to Watchlist
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default KDramaPage
