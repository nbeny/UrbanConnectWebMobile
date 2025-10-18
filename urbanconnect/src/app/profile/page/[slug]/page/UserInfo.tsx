"use client";

import React from "react";
// pages/profile.tsx
import Image from "next/image";
import { NextPage } from "next";
import { FaUserFriends, FaComment, FaShare, FaThumbsUp } from "react-icons/fa";

const Profile: NextPage = () => {
  const user = {
    name: "John Doe",
    bio: "Loving life and coding!",
    coverPhoto: "https://www.pexels.com/photo/landscape-photography-of-mountain-forest-114979/",
    profilePhoto: "https://www.pexels.com/photo/photo-of-woman-wearing-black-jacket-while-holding-camera-1108094/",
    city: "Paris",
    work: "Software Engineer",
    education: "Université de Paris",
    friends: [
      { id: 1, name: "Alice", avatar: "https://www.pexels.com/photo/photo-of-woman-wearing-black-jacket-while-holding-camera-1108094/" },
      { id: 2, name: "Bob", avatar: "https://www.pexels.com/photo/photo-of-woman-wearing-black-jacket-while-holding-camera-1108094/" },
      { id: 3, name: "Charlie", avatar: "https://www.pexels.com/photo/photo-of-woman-wearing-black-jacket-while-holding-camera-1108094/" },
    ],
    stories: [
      { id: 1, name: "Alice", avatar: "https://www.pexels.com/photo/photo-of-woman-wearing-black-jacket-while-holding-camera-1108094/" },
      { id: 2, name: "Bob", avatar: "https://www.pexels.com/photo/photo-of-woman-wearing-black-jacket-while-holding-camera-1108094/" },
      { id: 3, name: "Charlie", avatar: "https://www.pexels.com/photo/photo-of-woman-wearing-black-jacket-while-holding-camera-1108094/" },
    ],
    posts: [
      { id: 1, content: "Hello world!", date: "18 Oct 2025", image: "https://www.pexels.com/photo/landscape-photography-of-mountain-forest-114979/", likes: 12, comments: 4, shares: 2 },
      { id: 2, content: "Learning Next.js and Tailwind.", date: "17 Oct 2025", likes: 8, comments: 2, shares: 1 },
      { id: 3, content: "Check out this view!", date: "16 Oct 2025", image: "https://www.pexels.com/photo/landscape-photography-of-mountain-forest-114979/", likes: 20, comments: 5, shares: 3 },
    ],
    suggestions: [
      { id: 1, name: "Trudy", avatar: "https://www.pexels.com/photo/photo-of-woman-wearing-black-jacket-while-holding-camera-1108094/" },
      { id: 2, name: "Victor", avatar: "https://www.pexels.com/photo/photo-of-woman-wearing-black-jacket-while-holding-camera-1108094/" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover photo */}
      <div className="relative h-64 bg-gray-300">
        <Image src={user.coverPhoto} alt="Cover" layout="fill" className="object-cover" />
        <button className="absolute top-4 right-4 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600">
          Modifier la couverture
        </button>
      </div>

      {/* Profile header */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative -mt-20 flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-40 h-40 border-4 border-white rounded-full overflow-hidden">
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
            <div className="mt-2 flex justify-center md:justify-start space-x-2 flex-wrap">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Ajouter ami
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                Message
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                Modifier le profil
              </button>
            </div>
          </div>
        </div>

        {/* Stories */}
        <div className="mt-6 bg-white p-4 rounded shadow overflow-x-auto flex space-x-4">
          {user.stories.map(story => (
            <div key={story.id} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500">
                <Image src={story.avatar} alt={story.name} width={80} height={80} />
              </div>
              <p className="text-sm mt-1">{story.name}</p>
            </div>
          ))}
        </div>

        {/* Main content with two columns */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column: info + friends */}
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
                {user.friends.map(friend => (
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

          {/* Center column: posts */}
          <div className="md:col-span-1 space-y-4">
            {user.posts.map(post => (
              <div key={post.id} className="bg-white p-4 rounded shadow">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={user.profilePhoto} alt={user.name} width={40} height={40} />
                  </div>
                  <div>
                    <p className="font-bold text-black">{user.name}</p>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </div>
                </div>
                <p className="text-gray-800 mb-2">{post.content}</p>
                {post.image && (
                  <div className="mb-2">
                    <Image src={post.image} alt="Post image" width={600} height={400} className="rounded" />
                  </div>
                )}
                <div className="flex justify-between text-gray-600 mt-2 border-t pt-2">
                  <button className="flex items-center space-x-1 hover:text-blue-600">
                    <FaThumbsUp /> <span>{post.likes} Like</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-green-600">
                    <FaComment /> <span>{post.comments} Comment</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-purple-600">
                    <FaShare /> <span>{post.shares} Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right column: suggestions */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-bold text-lg mb-2">Suggestions d'amis</h2>
              {user.suggestions.map(s => (
                <div key={s.id} className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image src={s.avatar} alt={s.name} width={40} height={40} />
                    </div>
                    <p className="text-black">{s.name}</p>
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

export default Profile;
