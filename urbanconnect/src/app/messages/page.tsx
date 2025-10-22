"use client";

import React, { useState } from "react";
import { Send, MoreVertical, Phone, Video, ArrowLeft } from "lucide-react";
import { mockConversations, mockMessages, type Conversation } from "@/data/messagesData";
import Image from "next/image";
import urbanBackground from "@/assets/urbanconnectBackground.png";
import TopBarTranspartSearchUrbanConnect from "@/app/components/Topbar/TranspartSearchUrbanConnect";
import BottomBarMobileUrbanConnect from "@/app/components/BottomBar/MobileUrbanConnect";

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState("");

  const currentUserId = 1;

  const currentMessages = selectedConversation ? mockMessages[selectedConversation.id] || [] : [];

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "maintenant";
    if (minutes < 60) return `${minutes}min`;
    if (hours < 24) return `${hours}h`;
    if (days === 1) return "hier";
    return `${days}j`;
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;
    console.log("Message envoyé:", newMessage);
    setNewMessage("");
  };

  return (
    <div className="bg-white min-h-screen relative w-full overflow-auto">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src={urbanBackground}
          alt="Urban Connect Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Top Bar */}
      <TopBarTranspartSearchUrbanConnect />

      {/* Main Content */}
      <div className="relative z-[1] mt-20 mb-20 md:mt-24 md:mb-4">
        <div className="max-w-7xl mx-auto px-4 min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-8rem)]">
          <div className="h-full flex flex-col md:flex-row gap-0 md:gap-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
            
            {/* Conversations List - Hidden on mobile when chat is open */}
            <div className={`${
              selectedConversation ? "hidden md:flex" : "flex"
            } w-full md:w-96 flex-col border-r border-[#e0e0e0]`}>
              <div className="p-4 border-b border-[#e0e0e0]">
                <h2 className="text-xl font-['Manrope:Bold',_sans-serif] text-[#333333]">
                  Conversations
                </h2>
              </div>

              <div className="flex-1 overflow-y-auto">
                {mockConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors border-b border-[#e0e0e0] ${
                      selectedConversation?.id === conversation.id ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="relative flex-shrink-0">
                      <img
                        src={conversation.userAvatar}
                        alt={conversation.userName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-['Manrope:Bold',_sans-serif] text-[#333333] truncate">
                          {conversation.userName}
                        </h3>
                        <span className="text-xs text-[#999999] flex-shrink-0 ml-2">
                          {formatTime(conversation.lastMessageTime)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-[#666666] truncate font-['Manrope:Regular',_sans-serif]">
                          {conversation.lastMessage}
                        </p>
                        {conversation.unreadCount > 0 && (
                          <span className="flex-shrink-0 ml-2 bg-[#4a90e2] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {conversation.unreadCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            {selectedConversation ? (
              <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="px-4 md:px-6 py-4 border-b border-[#e0e0e0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setSelectedConversation(null)}
                      className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                    >
                      <ArrowLeft size={20} className="text-[#333333]" />
                    </button>
                    <div className="relative">
                      <img
                        src={selectedConversation.userAvatar}
                        alt={selectedConversation.userName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {selectedConversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div>
                      <h2 className="font-['Manrope:Bold',_sans-serif] text-[#333333]">
                        {selectedConversation.userName}
                      </h2>
                      <p className="text-xs text-[#999999] font-['Manrope:Regular',_sans-serif]">
                        {selectedConversation.online ? "En ligne" : "Hors ligne"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Phone size={20} className="text-[#666666]" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <Video size={20} className="text-[#666666]" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <MoreVertical size={20} className="text-[#666666]" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
                  {currentMessages.map((message) => {
                    const isCurrentUser = message.senderId === currentUserId;
                    return (
                      <div
                        key={message.id}
                        className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`flex items-end gap-2 max-w-[85%] md:max-w-[70%] ${isCurrentUser ? "flex-row-reverse" : ""}`}>
                          {!isCurrentUser && (
                            <img
                              src={selectedConversation.userAvatar}
                              alt={selectedConversation.userName}
                              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                            />
                          )}
                          <div>
                            <div
                              className={`px-4 py-2 rounded-2xl ${
                                isCurrentUser
                                  ? "bg-[#4a90e2] text-white"
                                  : "bg-gray-100 text-[#333333]"
                              }`}
                            >
                              <p className="text-sm font-['Manrope:Regular',_sans-serif]">{message.content}</p>
                            </div>
                            <p
                              className={`text-xs text-[#999999] mt-1 font-['Manrope:Regular',_sans-serif] ${
                                isCurrentUser ? "text-right" : "text-left"
                              }`}
                            >
                              {formatTime(message.timestamp)}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Message Input */}
                <div className="px-4 md:px-6 py-4 border-t border-[#e0e0e0]">
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Écrivez votre message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1 px-4 py-3 bg-white border border-[#e0e0e0] rounded-full text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#4a90e2] transition-colors font-['Manrope:Regular',_sans-serif]"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className="p-3 bg-[#4a90e2] text-white rounded-full hover:bg-[#3a7bc8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex flex-1 items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-['Manrope:Bold',_sans-serif] text-[#333333] mb-2">
                    Sélectionnez une conversation
                  </h2>
                  <p className="text-[#666666] font-['Manrope:Regular',_sans-serif]">
                    Choisissez une conversation dans la liste pour commencer à échanger
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Mobile only) */}
      <BottomBarMobileUrbanConnect />
    </div>
  );
}
