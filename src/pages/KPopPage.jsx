"use client"

import { useState } from "react"
import { Heart, Calendar, Music, Star, ChevronDown, ChevronUp } from "lucide-react"
import Button from "../components/Button"
import Badge from "../components/Badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs"

// Sample data
const groups = [
  {
    id: 1,
    name: "BTS",
    image: "https://placehold.co/300x300/pink/white?text=BTS",
    fandom: "ARMY",
    debutYear: 2013,
    company: "HYBE",
    isBias: true,
    members: [
      {
        id: 1,
        name: "RM",
        position: "Leader, Rapper",
        image: "https://placehold.co/200x200/pink/white?text=RM",
        birthdate: "1994-09-12",
        mbti: "ENFJ",
        isBias: true,
      },
      {
        id: 2,
        name: "Jin",
        position: "Vocalist, Visual",
        image: "https://placehold.co/200x200/pink/white?text=Jin",
        birthdate: "1992-12-04",
        mbti: "INTP",
        isBias: false,
      },
      {
        id: 3,
        name: "Suga",
        position: "Rapper, Producer",
        image: "https://placehold.co/200x200/pink/white?text=Suga",
        birthdate: "1993-03-09",
        mbti: "ISTP",
        isBias: false,
      },
      {
        id: 4,
        name: "J-Hope",
        position: "Rapper, Main Dancer",
        image: "https://placehold.co/200x200/pink/white?text=J-Hope",
        birthdate: "1994-02-18",
        mbti: "ESFJ",
        isBias: false,
      },
      {
        id: 5,
        name: "Jimin",
        position: "Vocalist, Lead Dancer",
        image: "https://placehold.co/200x200/pink/white?text=Jimin",
        birthdate: "1995-10-13",
        mbti: "ENFJ",
        isBias: true,
      },
      {
        id: 6,
        name: "V",
        position: "Vocalist, Visual",
        image: "https://placehold.co/200x200/pink/white?text=V",
        birthdate: "1995-12-30",
        mbti: "INFP",
        isBias: false,
      },
      {
        id: 7,
        name: "Jungkook",
        position: "Main Vocalist, Center",
        image: "https://placehold.co/200x200/pink/white?text=Jungkook",
        birthdate: "1997-09-01",
        mbti: "ISFP",
        isBias: false,
      },
    ],
    songs: [
      { id: 1, title: "Dynamite", album: "Dynamite (Single)", year: 2020, favorite: true },
      { id: 2, title: "Butter", album: "Butter (Single)", year: 2021, favorite: true },
      { id: 3, title: "Spring Day", album: "You Never Walk Alone", year: 2017, favorite: true },
      { id: 4, title: "Blood Sweat & Tears", album: "Wings", year: 2016, favorite: false },
      { id: 5, title: "Boy With Luv", album: "Map of the Soul: Persona", year: 2019, favorite: true },
    ],
    events: [
      { id: 1, title: "Jungkook's Birthday", date: "2023-09-01", type: "Birthday" },
      { id: 2, title: "BTS FESTA", date: "2023-06-13", type: "Anniversary" },
    ],
  },
  {
    id: 2,
    name: "BLACKPINK",
    image: "https://placehold.co/300x300/pink/white?text=BLACKPINK",
    fandom: "BLINK",
    debutYear: 2016,
    company: "YG Entertainment",
    isBias: false,
    members: [
      {
        id: 1,
        name: "Jisoo",
        position: "Vocalist, Visual",
        image: "https://placehold.co/200x200/pink/white?text=Jisoo",
        birthdate: "1995-01-03",
        mbti: "ESTJ",
        isBias: false,
      },
      {
        id: 2,
        name: "Jennie",
        position: "Rapper, Vocalist",
        image: "https://placehold.co/200x200/pink/white?text=Jennie",
        birthdate: "1996-01-16",
        mbti: "INTJ",
        isBias: true,
      },
      {
        id: 3,
        name: "Rosé",
        position: "Main Vocalist",
        image: "https://placehold.co/200x200/pink/white?text=Rose",
        birthdate: "1997-02-11",
        mbti: "ENFP",
        isBias: false,
      },
      {
        id: 4,
        name: "Lisa",
        position: "Main Dancer, Rapper",
        image: "https://placehold.co/200x200/pink/white?text=Lisa",
        birthdate: "1997-03-27",
        mbti: "ESFP",
        isBias: false,
      },
    ],
    songs: [
      { id: 1, title: "DDU-DU DDU-DU", album: "Square Up", year: 2018, favorite: true },
      { id: 2, title: "How You Like That", album: "The Album", year: 2020, favorite: false },
      { id: 3, title: "Pink Venom", album: "Born Pink", year: 2022, favorite: true },
    ],
    events: [
      { id: 1, title: "Lisa's Birthday", date: "2023-03-27", type: "Birthday" },
      { id: 2, title: "BLACKPINK 7th Anniversary", date: "2023-08-08", type: "Anniversary" },
    ],
  },
  {
    id: 3,
    name: "TWICE",
    image: "https://placehold.co/300x300/pink/white?text=TWICE",
    fandom: "ONCE",
    debutYear: 2015,
    company: "JYP Entertainment",
    isBias: true,
    members: [
      {
        id: 1,
        name: "Nayeon",
        position: "Lead Vocalist, Center",
        image: "https://placehold.co/200x200/pink/white?text=Nayeon",
        birthdate: "1995-09-22",
        mbti: "ENFP",
        isBias: false,
      },
      {
        id: 2,
        name: "Jeongyeon",
        position: "Lead Vocalist",
        image: "https://placehold.co/200x200/pink/white?text=Jeongyeon",
        birthdate: "1996-11-01",
        mbti: "ISTP",
        isBias: false,
      },
      {
        id: 3,
        name: "Momo",
        position: "Main Dancer, Vocalist",
        image: "https://placehold.co/200x200/pink/white?text=Momo",
        birthdate: "1996-11-09",
        mbti: "ISFP",
        isBias: false,
      },
      {
        id: 4,
        name: "Sana",
        position: "Vocalist",
        image: "https://placehold.co/200x200/pink/white?text=Sana",
        birthdate: "1996-12-29",
        mbti: "ENFP",
        isBias: true,
      },
      {
        id: 5,
        name: "Jihyo",
        position: "Leader, Main Vocalist",
        image: "https://placehold.co/200x200/pink/white?text=Jihyo",
        birthdate: "1997-02-01",
        mbti: "ESTJ",
        isBias: false,
      },
    ],
    songs: [
      { id: 1, title: "Fancy", album: "Fancy You", year: 2019, favorite: true },
      { id: 2, title: "Feel Special", album: "Feel Special", year: 2019, favorite: true },
      { id: 3, title: "What is Love?", album: "What is Love?", year: 2018, favorite: false },
    ],
    events: [
      { id: 1, title: "Sana's Birthday", date: "2023-12-29", type: "Birthday" },
      { id: 2, title: "TWICE 8th Anniversary", date: "2023-10-20", type: "Anniversary" },
    ],
  },
]

const KPopPage = () => {
  const [expandedGroup, setExpandedGroup] = useState(null)
  const [activeTab, setActiveTab] = useState("members")

  const toggleGroup = (groupId) => {
    if (expandedGroup === groupId) {
      setExpandedGroup(null)
    } else {
      setExpandedGroup(groupId)
      setActiveTab("members")
    }
  }

  const toggleBiasMember = (groupId, memberId) => {
    // In a real app, this would update the state
    alert(`Toggled bias status for member!`)
  }

  const toggleBiasGroup = (groupId) => {
    // In a real app, this would update the state
    alert(`Toggled bias status for group!`)
  }

  const toggleFavoriteSong = (groupId, songId) => {
    // In a real app, this would update the state
    alert(`Toggled favorite status for song!`)
  }

  return (
    <div className="container mx-auto px-2 py-6 sm:px-24 sm:py-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">My K-Pop Collection</h1>
        <p className="text-sm text-gray-500">Track your favorite groups, biases, and upcoming events</p>
      </div>

      {/* Top Biases Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">My Top Biases</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {groups
            .flatMap((group) =>
              group.members
                .filter((member) => member.isBias)
                .map((member) => ({
                  ...member,
                  groupName: group.name,
                })),
            )
            .slice(0, 5)
            .map((member) => (
              <div key={`${member.id}-top`} className="flex flex-col items-center">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-pink-400">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium mt-2 text-center">{member.name}</h3>
                <p className="text-xs text-gray-500 text-center">{member.groupName}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Groups List */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold mb-4">My Groups</h2>

        {groups.map((group) => (
          <div key={group.id} className="border border-pink-100 rounded-2xl overflow-hidden bg-white">
            {/* Group Header */}
            <div className="flex items-center p-4 cursor-pointer" onClick={() => toggleGroup(group.id)}>
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={group.image || "/placeholder.svg"} alt={group.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1">
                <div className="flex items-center">
                  <h3 className="font-bold">{group.name}</h3>
                  {group.isBias && <Badge className="ml-2 bg-pink-100 text-pink-600 border-0">Bias Group</Badge>}
                </div>
                <p className="text-xs text-gray-500">
                  {group.fandom} • Since {group.debutYear} • {group.company}
                </p>
              </div>

              <Button
                variant="ghost"
                className="rounded-full text-pink-500"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleBiasGroup(group.id)
                }}
              >
                <Heart className={`h-5 w-5 ${group.isBias ? "fill-pink-500" : ""}`} />
              </Button>

              <Button variant="ghost" className="ml-2">
                {expandedGroup === group.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </Button>
            </div>

            {/* Expanded Group Content */}
            {expandedGroup === group.id && (
              <div className="border-t border-pink-100">
                <Tabs defaultValue="members" onChange={setActiveTab}>
                  <TabsList className="w-full justify-start border-b border-pink-100">
                    <TabsTrigger
                      value="members"
                      className={`px-4 py-2 ${activeTab === "members" ? "border-b-2 border-pink-500" : ""}`}
                    >
                      Members
                    </TabsTrigger>
                    <TabsTrigger
                      value="songs"
                      className={`px-4 py-2 ${activeTab === "songs" ? "border-b-2 border-pink-500" : ""}`}
                    >
                      Songs
                    </TabsTrigger>
                    <TabsTrigger
                      value="events"
                      className={`px-4 py-2 ${activeTab === "events" ? "border-b-2 border-pink-500" : ""}`}
                    >
                      Events
                    </TabsTrigger>
                  </TabsList>

                  {/* Members Tab */}
                  <TabsContent value="members" className="p-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {group.members.map((member) => (
                        <div key={member.id} className="bg-white rounded-xl border border-pink-100 overflow-hidden">
                          <div className="relative h-40 w-full">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                            <Button
                              variant="ghost"
                              className="absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white"
                              onClick={() => toggleBiasMember(group.id, member.id)}
                            >
                              <Heart
                                className={`h-4 w-4 ${member.isBias ? "fill-pink-500 text-pink-500" : "text-gray-500"}`}
                              />
                            </Button>
                          </div>
                          <div className="p-3">
                            <h4 className="font-medium">{member.name}</h4>
                            <p className="text-xs text-gray-500">{member.position}</p>
                            <div className="flex items-center mt-2">
                              <Badge
                                variant="outline"
                                className="text-[10px] h-5 bg-purple-50 border-purple-100 text-purple-600"
                              >
                                {member.mbti}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Songs Tab */}
                  <TabsContent value="songs" className="p-4">
                    <div className="space-y-3">
                      {group.songs.map((song) => (
                        <div
                          key={song.id}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border border-pink-100"
                        >
                          <div className="flex items-center">
                            <Music className="h-4 w-4 text-pink-500 mr-3" />
                            <div>
                              <h4 className="font-medium text-sm">{song.title}</h4>
                              <p className="text-xs text-gray-500">
                                {song.album} • {song.year}
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            className="rounded-full"
                            onClick={() => toggleFavoriteSong(group.id, song.id)}
                          >
                            <Star
                              className={`h-4 w-4 ${song.favorite ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}
                            />
                          </Button>
                        </div>
                      ))}

                      <Button variant="outline" className="w-full mt-2 border-dashed border-pink-200">
                        Add Song
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Events Tab */}
                  <TabsContent value="events" className="p-4">
                    <div className="space-y-3">
                      {group.events.map((event) => (
                        <div
                          key={event.id}
                          className="flex items-center p-3 bg-white rounded-lg border border-pink-100"
                        >
                          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3 flex-shrink-0">
                            <Calendar className="h-5 w-5 text-pink-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{event.title}</h4>
                            <p className="text-xs text-gray-500">
                              {new Date(event.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                          <Badge className="ml-auto bg-blue-100 text-blue-600 border-0">{event.type}</Badge>
                        </div>
                      ))}

                      <Button variant="outline" className="w-full mt-2 border-dashed border-pink-200">
                        Add Event
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        ))}

        <Button variant="outline" className="w-full mt-4 border-dashed border-pink-200">
          Add New Group
        </Button>
      </div>
    </div>
  )
}

export default KPopPage
