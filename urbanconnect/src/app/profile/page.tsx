"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaUserFriends, FaComment, FaShare, FaThumbsUp } from "react-icons/fa";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("journal");

  const user = {
    name: "John Doe",
    bio: "Loving life and coding!",
    coverPhoto: "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg",
    profilePhoto: "https://images.pexels.com/photos/1108094/pexels-photo-1108094.jpeg",
    city: "Paris",
    work: "Software Engineer",
    education: "Université de Paris",
    friends: [
      { id: 1, name: "Alice", avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
      { id: 2, name: "Bob", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
      { id: 3, name: "Charlie", avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" },
    ],
    stories: [
      { id: 1, name: "Alice", avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
      { id: 2, name: "Bob", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
      { id: 3, name: "Charlie", avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" },
    ],
    posts: [
      { id: 1, content: "Hello world!", date: "18 Oct 2025", image: "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg", likes: 12, comments: 4, shares: 2 },
      { id: 2, content: "Learning Next.js and Tailwind.", date: "17 Oct 2025", likes: 8, comments: 2, shares: 1 },
      { id: 3, content: "Check out this view!", date: "16 Oct 2025", image: "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg", likes: 20, comments: 5, shares: 3 },
    ],
    products: [
      { id: 1, name: "MacBook Pro", price: "2000€", image: "https://images.pexels.com/photos/18105/pexels-photo.jpg" },
      { id: 2, name: "iPhone 15", price: "999€", image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg" },
    ],
    services: [
      { id: 1, title: "Web Development", description: "Full-stack development services", price: "50€/h" },
      { id: 2, title: "UI/UX Design", description: "Modern and responsive designs", price: "40€/h" },
    ],
    activities: [
      { id: 1, activity: "A rejoint le groupe Développeurs Paris", date: "15 Oct 2025" },
      { id: 2, activity: "A participé à l'événement Tech Meetup", date: "10 Oct 2025" },
    ],
    suggestions: [
      { id: 1, name: "Trudy", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
      { id: 2, name: "Victor", avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
    ],
  };

  const menuItems = [
    { id: "journal", label: "Journal" },
    { id: "produits", label: "Produits" },
    { id: "services", label: "Services" },
    { id: "activites", label: "Activités" },
    { id: "contacts", label: "Contacts" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl w-screen h-screen overflow-y-auto p-4 md:p-6">
      {/* Cover photo */}
      <div className="relative h-64 bg-gray-300 rounded-xl overflow-hidden">
        <Image src={user.coverPhoto} alt="Cover" fill className="object-cover" />
      </div>

      {/* Profile header */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative -mt-20 flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-40 h-40 border-4 border-white rounded-full overflow-hidden shadow">
            <Image
              src={user.profilePhoto}
              alt="Avatar"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-black">{user.name}</h1>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        </div>

        {/* Stories */}
        <div className="mt-6 bg-white p-4 rounded shadow overflow-x-auto flex space-x-4">
          {user.stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500">
                <Image src={story.avatar} alt={story.name} width={80} height={80} />
              </div>
              <p className="text-sm mt-1">{story.name}</p>
            </div>
          ))}
        </div>

        {/* Menu navigation */}
        <div className="mt-6 bg-white p-4 rounded shadow overflow-x-auto">
          <div className="flex space-x-2 border-b">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-6 py-3 font-semibold whitespace-nowrap ${
                  activeTab === item.id
                    ? "text-blue-600 border-b-4 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-bold text-lg mb-2">À propos</h2>
              <p><strong>Ville:</strong> {user.city}</p>
              <p><strong>Travail:</strong> {user.work}</p>
              <p><strong>Éducation:</strong> {user.education}</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-bold text-lg mb-2 flex items-center">
                <FaUserFriends className="mr-2" /> Amis
              </h2>
              <div className="flex flex-wrap gap-4">
                {user.friends.map((friend) => (
                  <div key={friend.id} className="text-center w-20">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                      <Image src={friend.avatar} alt={friend.name} width={80} height={80} />
                    </div>
                    <p className="mt-2">{friend.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center column */}
          <div className="md:col-span-1 space-y-4">
            {activeTab === "journal" && user.posts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded shadow">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={user.profilePhoto} alt={user.name} width={40} height={40} />
                  </div>
                  <div>
                    <p className="font-bold">{user.name}</p>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </div>
                </div>
                <p>{post.content}</p>
                {post.image && (
                  <div className="mt-2">
                    <Image src={post.image} alt="Post image" width={600} height={400} className="rounded object-cover" />
                  </div>
                )}
                <div className="flex justify-between text-gray-600 mt-2 border-t pt-2">
                  <button className="flex items-center space-x-1 hover:text-blue-600"><FaThumbsUp /> <span>{post.likes}</span></button>
                  <button className="flex items-center space-x-1 hover:text-green-600"><FaComment /> <span>{post.comments}</span></button>
                  <button className="flex items-center space-x-1 hover:text-purple-600"><FaShare /> <span>{post.shares}</span></button>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-bold text-lg mb-2">Suggestions d'amis</h2>
              {user.suggestions.map((s) => (
                <div key={s.id} className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image src={s.avatar} alt={s.name} width={40} height={40} />
                    </div>
                    <p>{s.name}</p>
                  </div>
                  <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Ajouter
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// === Carousel ===
const ProfileCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <div className="overflow-hidden w-screen h-screen bg-gray-100">
      <div ref={emblaRef} className="h-full">
        <div className="flex">
          <div className="flex-[0_0_100%]">
            <Profile />
          </div>
          <div className="flex-[0_0_100%]">
            <Profile />
          </div>
          <div className="flex-[0_0_100%]">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCarousel;
